import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChapterWhoAmI } from '../components/ChapterWhoAmI';
import { PageWhatDrivesMe } from './PageWhatDrivesMe';
import { CVModal } from '../components/CVModal';
import { useLanguage } from '../context/LanguageContext';

export const WhoAmIPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const { language } = useLanguage();

  // Determine active tab from URL query params (default: '01')
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState<'01' | '02'>(
    tabParam === '02' || tabParam === 'what-drives-me' ? '02' : '01'
  );

  useEffect(() => {
    if (tabParam === '02' || tabParam === 'what-drives-me') {
      setActiveTab('02');
    } else {
      setActiveTab('01');
    }
  }, [tabParam]);

  const handleTabChange = (tab: '01' | '02') => {
    setActiveTab(tab);
    setSearchParams({ tab });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Sticky Mixed Tabs Switcher for Chapter 01 (Who am I?) */}
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
            {language === 'ne' ? 'अध्याय ०१ ट्याबहरू:' : 'CHAPTER 01 TABS:'}
          </span>

          {/* Tab 01 Button */}
          <button
            onClick={() => handleTabChange('01')}
            role="tab"
            aria-selected={activeTab === '01'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.45rem 1.15rem',
              borderRadius: '24px',
              border: activeTab === '01' ? '1px solid var(--accent-gold)' : '1px solid var(--border-light)',
              backgroundColor: activeTab === '01' ? '#FFFFFF' : 'transparent',
              color: activeTab === '01' ? 'var(--accent-blue)' : 'var(--text-secondary)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              fontWeight: activeTab === '01' ? 700 : 500,
              cursor: 'pointer',
              boxShadow: activeTab === '01' ? '0 2px 8px rgba(15, 44, 74, 0.08)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <span 
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.7rem',
                fontWeight: 700,
                backgroundColor: activeTab === '01' ? 'var(--accent-gold)' : 'var(--bg-alt)',
                color: activeTab === '01' ? '#FFFFFF' : 'var(--text-muted)',
                padding: '0.1rem 0.35rem',
                borderRadius: '3px'
              }}
            >
              01
            </span>
            <span>{language === 'ne' ? 'मलाई केले निर्माण गर्‍यो?' : '01. What Shaped Me?'}</span>
          </button>

          {/* Tab 02 Button */}
          <button
            onClick={() => handleTabChange('02')}
            role="tab"
            aria-selected={activeTab === '02'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.45rem 1.15rem',
              borderRadius: '24px',
              border: activeTab === '02' ? '1px solid var(--accent-gold)' : '1px solid var(--border-light)',
              backgroundColor: activeTab === '02' ? '#FFFFFF' : 'transparent',
              color: activeTab === '02' ? 'var(--accent-blue)' : 'var(--text-secondary)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              fontWeight: activeTab === '02' ? 700 : 500,
              cursor: 'pointer',
              boxShadow: activeTab === '02' ? '0 2px 8px rgba(15, 44, 74, 0.08)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <span 
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.7rem',
                fontWeight: 700,
                backgroundColor: activeTab === '02' ? 'var(--accent-gold)' : 'var(--bg-alt)',
                color: activeTab === '02' ? '#FFFFFF' : 'var(--text-muted)',
                padding: '0.1rem 0.35rem',
                borderRadius: '3px'
              }}
            >
              02
            </span>
            <span>{language === 'ne' ? 'मलाई केले अघि बढाउँछ?' : '02. What Drives Me?'}</span>
          </button>
        </div>
      </div>

      {/* Tab Content Display */}
      {activeTab === '01' ? (
        <ChapterWhoAmI 
          onOpenCV={() => setIsCVModalOpen(true)}
          onNavigateToDrives={() => handleTabChange('02')}
        />
      ) : (
        <PageWhatDrivesMe 
          onNavigateToShaped={() => handleTabChange('01')}
        />
      )}

      {/* Verified CV Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
};
