import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Credentials } from './components/Credentials';
import { Delegations } from './components/Delegations';
import { CuriosityFramework } from './components/CuriosityFramework';
import { SelectedWork } from './components/SelectedWork';
import { InstitutionBuilding } from './components/InstitutionBuilding';
import { SupervisedTheses } from './components/SupervisedTheses';
import { AreasOfWork } from './components/AreasOfWork';
import { GallerySection } from './components/GallerySection';
import { MediaArchive } from './components/MediaArchive';
import { ThoughtLeadership } from './components/ThoughtLeadership';
import { Vision } from './components/Vision';
import { SupportVision } from './components/SupportVision';
import { ContactFormSection } from './components/ContactFormSection';

import { ProfileModal } from './components/ProfileModal';
import { CVModal } from './components/CVModal';
import { DetailModal } from './components/DetailModal';

import type { WorkEntry, MediaEntry, ThoughtEntry, ThesisEntry } from './types/portfolio';

export const App: React.FC = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const [activeWorkModal, setActiveWorkModal] = useState<WorkEntry | null>(null);
  const [activeMediaModal, setActiveMediaModal] = useState<MediaEntry | null>(null);
  const [activeThoughtModal, setActiveThoughtModal] = useState<ThoughtEntry | null>(null);
  const [activeThesisModal, setActiveThesisModal] = useState<ThesisEntry | null>(null);

  const isDetailModalOpen = Boolean(activeWorkModal || activeMediaModal || activeThoughtModal || activeThesisModal);

  const closeDetailModal = () => {
    setActiveWorkModal(null);
    setActiveMediaModal(null);
    setActiveThoughtModal(null);
    setActiveThesisModal(null);
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

      {/* 03 / GLOBAL SCIENTIFIC DELEGATIONS (TISF Taiwan & IOSTC Indonesia) */}
      <Delegations />

      {/* 04 / SIGNATURE FRAMEWORK: FROM CURIOSITY TO COMMERCE */}
      <CuriosityFramework />

      {/* 05 / SELECTED WORK & INITIATIVES */}
      <SelectedWork 
        onSelectWork={(work) => setActiveWorkModal(work)}
      />

      {/* 06 / INSTITUTION BUILDING & ECOSYSTEMS */}
      <InstitutionBuilding />

      {/* 07 / ARTICLES & SUPERVISED THESES */}
      <SupervisedTheses 
        onSelectThesis={(thesis) => setActiveThesisModal(thesis)}
      />

      {/* 08 / AREAS OF WORK & DOMAIN EXPERTISE */}
      <AreasOfWork />

      {/* 09 / MEDIA & EVENT GALLERY (Summer STEAM Expo) */}
      <GallerySection />

      {/* 10 / MEDIA & PRESS ARCHIVE */}
      <MediaArchive 
        onSelectMedia={(media) => setActiveMediaModal(media)}
      />

      {/* 11 / THOUGHT LEADERSHIP & ESSAYS */}
      <ThoughtLeadership 
        onSelectThought={(thought) => setActiveThoughtModal(thought)}
      />

      {/* 12 / VISION & DECLARATION */}
      <Vision />

      {/* 13 / SUPPORT OUR VISION (Rastriya Banijya Bank Details & QR) */}
      <SupportVision />

      {/* 14 / EXECUTIVE CONTACT, SOCIALS & DIRECT FORM */}
      <ContactFormSection />

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
        thesisData={activeThesisModal}
      />

    </div>
  );
};
