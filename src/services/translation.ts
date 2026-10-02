/**
 * Translation Service
 * Centralized translation service with caching and API integration.
 * Priority: 1. Manual translations, 2. Cached API translations, 3. New API translations
 */

export interface TranslationCacheEntry {
  translatedText: string;
  timestamp: number;
  sourceLanguage: string;
  targetLanguage: string;
}

export interface TranslationRequest {
  text: string;
  sourceLanguage: string;
  targetLanguage: string;
}

export interface TranslationResponse {
  translatedText: string;
  cached: boolean;
  sourceLanguage: string;
  targetLanguage: string;
}

// In-memory cache with localStorage persistence
class TranslationCache {
  private cache: Map<string, TranslationCacheEntry> = new Map();
  private readonly CACHE_KEY = 'translation_cache';
  private readonly MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem(this.CACHE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        Object.entries(parsed).forEach(([key, value]) => {
          this.cache.set(key, value as TranslationCacheEntry);
        });
        this.cleanExpired();
      }
    } catch {
      // Ignore storage errors
    }
  }

  private saveToStorage(): void {
    try {
      const obj = Object.fromEntries(this.cache);
      localStorage.setItem(this.CACHE_KEY, JSON.stringify(obj));
    } catch {
      // Ignore storage errors
    }
  }

  private cleanExpired(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > this.MAX_AGE_MS) {
        this.cache.delete(key);
      }
    }
  }

  private generateKey(text: string, sourceLang: string, targetLang: string): string {
    const hash = this.simpleHash(text);
    return `${sourceLang}:${targetLang}:${hash}`;
  }

  private simpleHash(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(36);
  }

  get(text: string, sourceLang: string, targetLang: string): string | null {
    const key = this.generateKey(text, sourceLang, targetLang);
    const entry = this.cache.get(key);
    if (entry && Date.now() - entry.timestamp < this.MAX_AGE_MS) {
      return entry.translatedText;
    }
    if (entry) {
      this.cache.delete(key);
    }
    return null;
  }

  set(text: string, sourceLang: string, targetLang: string, translatedText: string): void {
    const key = this.generateKey(text, sourceLang, targetLang);
    this.cache.set(key, {
      translatedText,
      timestamp: Date.now(),
      sourceLanguage: sourceLang,
      targetLanguage: targetLang,
    });
    this.saveToStorage();
  }

  clear(): void {
    this.cache.clear();
    try {
      localStorage.removeItem(this.CACHE_KEY);
    } catch {
      // Ignore
    }
  }
}

const translationCache = new TranslationCache();

// Server-side API endpoint
const TRANSLATION_API_ENDPOINT = '/api/translate';

/**
 * Translate text using the API with caching.
 * Priority: 1. Cache, 2. API
 */
export async function translateText(
  text: string,
  sourceLanguage: string = 'en',
  targetLanguage: string = 'ne'
): Promise<TranslationResponse> {
  if (!text || text.trim() === '') {
    return {
      translatedText: '',
      cached: false,
      sourceLanguage,
      targetLanguage,
    };
  }

  // Check cache first
  const cached = translationCache.get(text, sourceLanguage, targetLanguage);
  if (cached !== null) {
    return {
      translatedText: cached,
      cached: true,
      sourceLanguage,
      targetLanguage,
    };
  }

  // Call API
  try {
    const response = await fetch(TRANSLATION_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        sourceLanguage,
        targetLanguage,
      } as TranslationRequest),
    });

    if (!response.ok) {
      throw new Error(`Translation API error: ${response.status}`);
    }

    const data = await response.json() as TranslationResponse;

    // Cache the result
    if (data.translatedText) {
      translationCache.set(text, sourceLanguage, targetLanguage, data.translatedText);
    }

    return data;
  } catch (error) {
    console.warn('Translation API failed, returning original text:', error);
    // Return original text on failure
    return {
      translatedText: text,
      cached: false,
      sourceLanguage,
      targetLanguage,
    };
  }
}

/**
 * Translate multiple texts in batch
 */
export async function translateBatch(
  texts: string[],
  sourceLanguage: string = 'en',
  targetLanguage: string = 'ne'
): Promise<TranslationResponse[]> {
  return Promise.all(
    texts.map(text => translateText(text, sourceLanguage, targetLanguage))
  );
}

/**
 * Check if a field has manual translation
 */
export function hasManualTranslation(
  field: string | { en: string; ne: string } | undefined | null
): boolean {
  if (!field) return false;
  if (typeof field === 'string') return false;
  return !!(field.ne && field.ne.trim());
}

/**
 * Get translated content with fallback priority:
 * 1. Manual Nepali translation (if provided)
 * 2. Cached API translation
 * 3. New API translation
 * 4. English fallback
 */
export async function getTranslatedContent(
  field: string | { en: string; ne: string } | undefined | null,
  targetLanguage: 'en' | 'ne' = 'ne'
): Promise<string> {
  if (!field) return '';
  
  // If it's already a string (non-localized), return as-is
  if (typeof field === 'string') return field;
  
  // If target is English, return English
  if (targetLanguage === 'en') return field.en || field.ne || '';
  
  // Check for manual Nepali translation
  if (field.ne && field.ne.trim()) {
    return field.ne;
  }
  
  // Fall back to English if no Nepali available
  return field.en || field.ne || '';
}

/**
 * Get translated array content with fallback
 */
export async function getTranslatedArray(
  arr: (string | { en: string; ne: string })[] | { en: string[]; ne: string[] } | undefined | null,
  targetLanguage: 'en' | 'ne' = 'ne'
): Promise<string[]> {
  if (!arr) return [];
  
  if (Array.isArray(arr)) {
    return Promise.all(
      arr.map(item => getTranslatedContent(item, targetLanguage))
    );
  }
  
  if (targetLanguage === 'ne' && arr.ne && arr.ne.length > 0) return arr.ne;
  return arr.en || arr.ne || [];
}

export { translationCache };