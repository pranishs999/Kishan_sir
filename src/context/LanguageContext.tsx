import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language, LocalizedString, LocalizedStringArray } from '../types/schema';
import { tField, tArray, uiDict } from '../utils/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: keyof typeof uiDict['en']) => string;
  tF: (field: LocalizedString | undefined | null) => string;
  tA: (arr: LocalizedStringArray | undefined | null) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'preferred_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'ne') {
        return saved;
      }
    } catch {
      // localStorage fallback
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage fallback
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ne' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: keyof typeof uiDict['en']): string => {
    return uiDict[language][key] || uiDict['en'][key] || String(key);
  };

  const tF = (field: LocalizedString | undefined | null): string => {
    return tField(field, language);
  };

  const tA = (arr: LocalizedStringArray | undefined | null): string[] => {
    return tArray(arr, language);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, tF, tA }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
