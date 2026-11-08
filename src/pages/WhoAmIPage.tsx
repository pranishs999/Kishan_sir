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

  const tabs = [
    { id: '01' as const, labelEn: 'What Shaped Me', labelNe: 'मलाई केले निर्माण गर्‍यो' },
    { id: '02' as const, labelEn: 'What Drives Me', labelNe: 'मलाई केले अघि बढाउँछ' },
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

      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
};
