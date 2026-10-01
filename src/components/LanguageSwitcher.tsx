import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
      <button
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        aria-label="Switch to English"
        style={{
          padding: '0.35rem 0.75rem',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-sans)',
          backgroundColor: language === 'en' ? 'var(--accent-blue)' : 'transparent',
          color: language === 'en' ? '#FFFFFF' : 'var(--text-secondary)',
          border: `1px solid ${language === 'en' ? 'var(--accent-blue)' : 'var(--border-light)'}`,
          borderRadius: '4px 0 0 4px',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ne')}
        aria-pressed={language === 'ne'}
        aria-label="नेपालीमा परिवर्तन गर्नुहोस्"
        style={{
          padding: '0.35rem 0.75rem',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.04em',
          fontFamily: 'var(--font-sans)',
          backgroundColor: language === 'ne' ? 'var(--accent-blue)' : 'transparent',
          color: language === 'ne' ? '#FFFFFF' : 'var(--text-secondary)',
          border: `1px solid ${language === 'ne' ? 'var(--accent-blue)' : 'var(--border-light)'}`,
          borderRadius: '0 4px 4px 0',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
      >
        नेपाली
      </button>
    </div>
  );
};