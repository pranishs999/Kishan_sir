import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageWhatProblems } from './PageWhatProblems';
import { ChapterHowItWorks } from '../components/ChapterHowItWorks';
import { useLanguage } from '../context/LanguageContext';

export const HowItWorksPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { language } = useLanguage();

  // Determine active tab from URL query params (default: '03')
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

  return (
    <div>
      {/* Sticky Mixed Tabs Switcher for Chapter 02 (How does it work?) */}
      <div 
        style={{
          position: 'sticky',
          top: '56px',
          zIndex: 800,
          backgroundColor: 'rgba(250, 250, 247, 0.96)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--border-light)',
          padding: '0.65rem 0',
          boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
        }}
      >
        <div 
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap'
          }}
        >
          <span 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--text-muted)',
              marginRight: '0.25rem'
            }}
          >
            {language === 'ne' ? 'अध्याय ०२ ट्याबहरू:' : 'CHAPTER 02 TABS:'}
          </span>

          {/* Tab 03 Button */}
          <button
            onClick={() => handleTabChange('03')}
            role="tab"
            aria-selected={activeTab === '03'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.45rem 1.15rem',
              borderRadius: '24px',
              border: activeTab === '03' ? '1px solid var(--accent-gold)' : '1px solid var(--border-light)',
              backgroundColor: activeTab === '03' ? '#FFFFFF' : 'transparent',
              color: activeTab === '03' ? 'var(--accent-blue)' : 'var(--text-secondary)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              fontWeight: activeTab === '03' ? 700 : 500,
              cursor: 'pointer',
              boxShadow: activeTab === '03' ? '0 2px 8px rgba(15, 44, 74, 0.08)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <span 
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.7rem',
                fontWeight: 700,
                backgroundColor: activeTab === '03' ? 'var(--accent-gold)' : 'var(--bg-alt)',
                color: activeTab === '03' ? '#FFFFFF' : 'var(--text-muted)',
                padding: '0.1rem 0.35rem',
                borderRadius: '3px'
              }}
            >
              03
            </span>
            <span>{language === 'ne' ? 'म कुन समस्या समाधान गर्दैछु?' : '03. What Problems Am I Solving?'}</span>
          </button>

          {/* Tab 05 Button */}
          <button
            onClick={() => handleTabChange('05')}
            role="tab"
            aria-selected={activeTab === '05'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.45rem 1.15rem',
              borderRadius: '24px',
              border: activeTab === '05' ? '1px solid var(--accent-gold)' : '1px solid var(--border-light)',
              backgroundColor: activeTab === '05' ? '#FFFFFF' : 'transparent',
              color: activeTab === '05' ? 'var(--accent-blue)' : 'var(--text-secondary)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              fontWeight: activeTab === '05' ? 700 : 500,
              cursor: 'pointer',
              boxShadow: activeTab === '05' ? '0 2px 8px rgba(15, 44, 74, 0.08)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <span 
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.7rem',
                fontWeight: 700,
                backgroundColor: activeTab === '05' ? 'var(--accent-gold)' : 'var(--bg-alt)',
                color: activeTab === '05' ? '#FFFFFF' : 'var(--text-muted)',
                padding: '0.1rem 0.35rem',
                borderRadius: '3px'
              }}
            >
              05
            </span>
            <span>{language === 'ne' ? 'म कसरी मूल्य सिर्जना गर्छु?' : '05. How I Create Value?'}</span>
          </button>
        </div>
      </div>

      {/* Tab Content Display */}
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
