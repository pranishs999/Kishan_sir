import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Credentials } from './components/Credentials';
import { CuriosityFramework } from './components/CuriosityFramework';
import { SelectedWork } from './components/SelectedWork';
import { InstitutionBuilding } from './components/InstitutionBuilding';
import { AreasOfWork } from './components/AreasOfWork';
import { MediaArchive } from './components/MediaArchive';
import { ThoughtLeadership } from './components/ThoughtLeadership';
import { Vision } from './components/Vision';
import { ContactFooter } from './components/ContactFooter';

import { ProfileModal } from './components/ProfileModal';
import { CVModal } from './components/CVModal';
import { DetailModal } from './components/DetailModal';

import type { WorkEntry, MediaEntry, ThoughtEntry } from './types/portfolio';

export const App: React.FC = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const [activeWorkModal, setActiveWorkModal] = useState<WorkEntry | null>(null);
  const [activeMediaModal, setActiveMediaModal] = useState<MediaEntry | null>(null);
  const [activeThoughtModal, setActiveThoughtModal] = useState<ThoughtEntry | null>(null);

  const isDetailModalOpen = Boolean(activeWorkModal || activeMediaModal || activeThoughtModal);

  const closeDetailModal = () => {
    setActiveWorkModal(null);
    setActiveMediaModal(null);
    setActiveThoughtModal(null);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      
      {/* 00 / Minimal Sticky Navigation Header */}
      <Navbar 
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero 
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {/* 01 / PROFILE */}
      <Profile 
        onOpenProfileModal={() => setIsProfileModalOpen(true)}
      />

      {/* 02 / CREDENTIALS AT A GLANCE */}
      <Credentials />

      {/* 03 / SIGNATURE FRAMEWORK: FROM CURIOSITY TO COMMERCE */}
      <CuriosityFramework />

      {/* 04 / SELECTED WORK */}
      <SelectedWork 
        onSelectWork={(work) => setActiveWorkModal(work)}
      />

      {/* 05 / INSTITUTION BUILDING & ECOSYSTEMS */}
      <InstitutionBuilding />

      {/* 06 / AREAS OF WORK */}
      <AreasOfWork />

      {/* 07 / MEDIA & PRESS ARCHIVE */}
      <MediaArchive 
        onSelectMedia={(media) => setActiveMediaModal(media)}
      />

      {/* 08 / THOUGHT LEADERSHIP & ESSAYS */}
      <ThoughtLeadership 
        onSelectThought={(thought) => setActiveThoughtModal(thought)}
      />

      {/* 09 / VISION & DECLARATION */}
      <Vision />

      {/* 10 / EXECUTIVE CONTACT & FOOTER */}
      <ContactFooter 
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {/* MODAL DRAWERS */}
      <ProfileModal 
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      <CVModal 
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      <DetailModal 
        isOpen={isDetailModalOpen}
        onClose={closeDetailModal}
        workData={activeWorkModal}
        mediaData={activeMediaModal}
        thoughtData={activeThoughtModal}
      />

    </div>
  );
};
