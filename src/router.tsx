import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AboutEducationPage } from './pages/AboutEducationPage';
import { AboutExperiencePage } from './pages/AboutExperiencePage';
import { AboutLeadershipPage } from './pages/AboutLeadershipPage';
import { WorkPage } from './pages/WorkPage';
import { WorkDomainPage } from './pages/WorkDomainPage';
import { InitiativesPage } from './pages/InitiativesPage';
import { InitiativeDetailPage } from './pages/InitiativeDetailPage';
import { EcosystemPage } from './pages/EcosystemPage';
import { EcosystemStagePage } from './pages/EcosystemStagePage';
import { ThoughtPage } from './pages/ThoughtPage';
import { ThoughtDetailPage } from './pages/ThoughtDetailPage';
import { MediaPage } from './pages/MediaPage';
import { NewspapersPage } from './pages/NewspapersPage';
import { InterviewsPage } from './pages/InterviewsPage';
import { EventsPage } from './pages/EventsPage';
import { GalleryPage } from './pages/GalleryPage';
import { CVPage } from './pages/CVPage';
import { ContactPage } from './pages/ContactPage';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          
          {/* About Section */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/education" element={<AboutEducationPage />} />
          <Route path="/about/experience" element={<AboutExperiencePage />} />
          <Route path="/about/leadership" element={<AboutLeadershipPage />} />
          
          {/* Work Section */}
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/education" element={<WorkDomainPage />} />
          <Route path="/work/mathematics" element={<WorkDomainPage />} />
          <Route path="/work/science" element={<WorkDomainPage />} />
          <Route path="/work/research" element={<WorkDomainPage />} />
          <Route path="/work/innovation" element={<WorkDomainPage />} />
          <Route path="/work/entrepreneurship" element={<WorkDomainPage />} />
          
          {/* Initiatives Section */}
          <Route path="/initiatives" element={<InitiativesPage />} />
          <Route path="/initiatives/hric" element={<InitiativeDetailPage />} />
          <Route path="/initiatives/astronova" element={<InitiativeDetailPage />} />
          <Route path="/initiatives/young-scientists" element={<InitiativeDetailPage />} />
          <Route path="/initiatives/steam" element={<InitiativeDetailPage />} />
          <Route path="/initiatives/science-engineering-fair" element={<InitiativeDetailPage />} />
          <Route path="/initiatives/workshops" element={<InitiativeDetailPage />} />
          
          {/* Ecosystem Section */}
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/ecosystem/vision" element={<EcosystemStagePage />} />
          <Route path="/ecosystem/education" element={<EcosystemStagePage />} />
          <Route path="/ecosystem/research" element={<EcosystemStagePage />} />
          <Route path="/ecosystem/innovation" element={<EcosystemStagePage />} />
          <Route path="/ecosystem/mentorship" element={<EcosystemStagePage />} />
          <Route path="/ecosystem/enterprise" element={<EcosystemStagePage />} />
          
          {/* Thought Section */}
          <Route path="/thought" element={<ThoughtPage />} />
          <Route path="/thought/:slug" element={<ThoughtDetailPage />} />
          
          {/* Media Section */}
          <Route path="/media" element={<MediaPage />} />
          <Route path="/media/newspapers" element={<NewspapersPage />} />
          <Route path="/media/interviews" element={<InterviewsPage />} />
          <Route path="/media/events" element={<EventsPage />} />
          <Route path="/media/gallery" element={<GalleryPage />} />
          
          {/* CV & Contact */}
          <Route path="/cv" element={<CVPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};