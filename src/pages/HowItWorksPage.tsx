import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageWhatProblems } from './PageWhatProblems';
import { ChapterHowItWorks } from '../components/ChapterHowItWorks';
import { useLanguage } from '../context/LanguageContext';

export const HowItWorksPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { language } = useLanguage();

  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState<'03' | '05'>(
    tabParam === '05' || tabParam === 'how-do-i-create-value' || tabParam === 'value' ? '05' : '03'
  );

  useEffect(() => {
    if (tabParam === '05' || tabParam === 'how-do-i-create-value' || tabParam === 'value') {
      setActiveTab('05');
    } else {
      setActiveTab('03');
    }
  }, [tabParam]);

  const handleTabChange = (tab: '03' | '05') => {
    setActiveTab(tab);
    setSearchParams({ tab });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabs = [
    { id: '03' as const, labelEn: 'What Problems Am I Solving', labelNe: 'म कुन समस्या समाधान गर्दैछु' },
    { id: '05' as const, labelEn: 'How I Create Value', labelNe: 'म कसरी मूल्य सिर्जना गर्छु' },
  ];

  return (
    <div>
      {/* Minimal sub-tab bar */}
      <div
        style={{
          position: 'sticky',
          top: '56px',
          zIndex: 800,
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--border-light)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem',
            padding: '0 1rem',
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                role="tab"
                aria-selected={isActive}
                style={{
                  padding: '0.75rem 0',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                  background: 'none',
                  border: 'none',
                  borderBottom: isActive ? '2px solid var(--text-primary)' : '2px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  letterSpacing: '0.01em',
                }}
              >
                {language === 'ne' ? tab.labelNe : tab.labelEn}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === '03' ? (
        <PageWhatProblems
          onNavigateToValue={() => handleTabChange('05')}
        />
      ) : (
        <ChapterHowItWorks
          onNavigateToProblems={() => handleTabChange('03')}
        />
      )}
    </div>
  );
};
