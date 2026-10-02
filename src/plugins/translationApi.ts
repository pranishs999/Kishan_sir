import type { Plugin } from 'vite';
import type { TranslationRequest, TranslationResponse } from '../services/translation.js';

// This plugin creates the /api/translate endpoint
export function translationApiPlugin(): Plugin {
  return {
    name: 'translation-api',
    configureServer(server) {
      server.middlewares.use('/api/translate', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        let body = '';
        for await (const chunk of req) {
          body += chunk;
        }

        try {
          const { text, sourceLanguage = 'en', targetLanguage = 'ne' } = JSON.parse(body) as TranslationRequest;

          if (!text || typeof text !== 'string') {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Invalid request: text is required' }));
            return;
          }

          // In a real implementation, this would call Google Cloud Translation API
          // For now, we'll return a mock response to demonstrate the architecture
          // The actual implementation would use @google-cloud/translate
          
          const translatedText = await translateWithGoogleCloud(text, sourceLanguage, targetLanguage);

          const response: TranslationResponse = {
            translatedText,
            cached: false,
            sourceLanguage,
            targetLanguage,
          };

          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(response));
        } catch (error) {
          console.error('Translation API error:', error);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Translation failed' }));
        }
      });
    },
  };
}

/**
 * Translate text using Google Cloud Translation API
 * This runs server-side only - credentials are never exposed to the client
 */
async function translateWithGoogleCloud(
  text: string,
  sourceLanguage: string,
  targetLanguage: string
): Promise<string> {
  // Check if Google Cloud credentials are configured
  const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID;
  const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;

  if (!projectId || !credentialsPath) {
    // Return mock translation for development
    // In production, this would use @google-cloud/translate
    return getMockTranslation(text, targetLanguage);
  }

  try {
    // Dynamic import to avoid bundling server-only code
    const translateModule = await import('@google-cloud/translate').catch(() => ({}));
    // @google-cloud/translate v8+ exports TranslationServiceClient directly
    const TranslationServiceClient = (translateModule as any).TranslationServiceClient || (translateModule as any).default?.TranslationServiceClient;
    
    if (!TranslationServiceClient) {
      console.warn('@google-cloud/translate not installed or incompatible version, using mock translation');
      return getMockTranslation(text, targetLanguage);
    }

    const client = new TranslationServiceClient();
    
    const request = {
      parent: `projects/${projectId}/locations/global`,
      contents: [text],
      mimeType: 'text/plain',
      sourceLanguageCode: sourceLanguage,
      targetLanguageCode: targetLanguage,
    };

    const [response] = await client.translateText(request);
    
    if (response.translations && response.translations.length > 0) {
      return response.translations[0].translatedText || text;
    }
    
    return text;
  } catch (error) {
    console.error('Google Cloud Translation error:', error);
    return getMockTranslation(text, targetLanguage);
  }
}

/**
 * Mock translation for development/testing
 * In production, replace with actual Google Cloud Translation
 */
function getMockTranslation(text: string, targetLanguage: string): string {
  if (targetLanguage === 'ne') {
    // Simple mock translations for common terms
    const mockTranslations: Record<string, string> = {
      'Education': 'शिक्षा',
      'Mathematics': 'गणित',
      'Science': 'विज्ञान',
      'Research': 'अनुसन्धान',
      'Innovation': 'नवप्रवर्तन',
      'Entrepreneurship': 'उद्यमशीलता',
      'STEAM': 'STEAM',
      'Young Scientist Development': 'युवा वैज्ञानिक विकास',
      'Mentorship': 'मेन्टरशिप',
      'Technology': 'प्रविधि',
      'Ecosystem Development': 'इकोसिस्टम विकास',
      'From Curiosity to Commerce': 'जिज्ञासादेखि व्यापारसम्म',
      'Executive Portfolio & Archive': 'कार्यकारी पोर्टफोलियो र अभिलेख',
      'Bagmati Province · Nepal': 'बागमती प्रदेश · नेपाल',
      'About': 'परिचय',
      'Work': 'कार्य क्षेत्र',
      'Initiatives': 'पहलहरू',
      'Ecosystem': 'इकोसिस्टम',
      'Thought': 'विचार र लेख',
      'Media': 'मिडिया कवरेज',
      'CV': 'सीभी / बायोडाटा',
      'Contact': 'सम्पर्क',
      'Explore Profile': 'प्रोफाइल हेर्नुहोस्',
      'View CV': 'सीभी हेर्नुहोस्',
      'Contact & Collaborate': 'सम्पर्क तथा सहकार्य',
      'View Work Domains': 'कार्य क्षेत्रहरू हेर्नुहोस्',
      'Credentials at a Glance': 'योग्यता तथा अनुभव झलक',
      'Signature Architecture': 'मुख्य रूपरेखा',
      'Institutional Ecosystems': 'संस्थागत इकोसिस्टम',
      'Building Enduring Infrastructures': 'दीर्घकालीन पूर्वाधार निर्माण',
      'View All Institutions': 'सबै संस्थाहरू हेर्नुहोस्',
      'Executive Vision': 'कार्यकारी दृष्टि',
      '"Every child should have the opportunity to ask a question."': '"प्रत्येक बालबालिकाले प्रश्न सोध्ने अवसर पाउनुपर्छ।"',
      'Language: English': 'भाषा: नेपाली',
      'Back to Home': 'गृहपृष्ठमा फर्कनुहोस्',
      'All rights reserved.': 'सर्वाधिकार सुरक्षित।',
      'Verified Media Coverage': 'प्रमाणित मिडिया कभरेज',
      'View Source Record': 'मूल स्रोत हेर्नुहोस्',
      'Explore Domain': 'क्षेत्र हेर्नुहोस्',
      'Explore Institution': 'संस्था हेर्नुहोस्',
      'Stage': 'चरण',
      '+ 3 more commercialization stages': '+ ३ थप व्यावसायीकरण चरणहरू',
    };

    // Try exact match first
    if (mockTranslations[text]) {
      return mockTranslations[text];
    }

    // Try partial matches for longer text
    for (const [key, value] of Object.entries(mockTranslations)) {
      if (text.includes(key)) {
        return text.replace(key, value);
      }
    }

    // Return original text if no translation found
    return text;
  }

  // For Nepali, return mock; for English, return original
  return targetLanguage === 'ne' ? `[NE] ${text}` : text;
}