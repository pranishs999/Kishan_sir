import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChapterWhoAmI } from './components/ChapterWhoAmI';
import { ChapterHowItWorks } from './components/ChapterHowItWorks';
import { ChapterWhatWeBuilt } from './components/ChapterWhatWeBuilt';
import { ChapterCollaborate } from './components/ChapterCollaborate';
import { CVModal } from './components/CVModal';
import { useLanguage } from './context/LanguageContext';

export const App: React.FC = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      
      {/* 4-Question Minimalist Header */}
      <Navbar />

      {/* Hero Section with strictly 1 button (Download CV) */}
      <Hero onOpenCV={() => setIsCVModalOpen(true)} />

      {/* Chapter 1: Who am I ? */}
      <ChapterWhoAmI />

      {/* Chapter 2: How does it work ? */}
      <ChapterHowItWorks />

      {/* Chapter 3: What have we built ? */}
      <ChapterWhatWeBuilt />

      {/* Chapter 4: Shall we collaborate ? */}
      <ChapterCollaborate />

      {/* Minimal Footer */}
      <footer
        style={{
          backgroundColor: 'var(--bg-alt)',
          borderTop: '1px solid var(--border-light)',
          padding: '2rem 0',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              margin: 0
            }}
          >
            © {new Date().getFullYear()} {language === 'ne' ? 'किशन बास्तोला। सर्वाधिकार सुरक्षित।' : 'Kishan Bastola. All rights reserved.'}
          </p>
        </div>
      </footer>

      {/* CV Modal Drawer */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

    </div>
  );
};
