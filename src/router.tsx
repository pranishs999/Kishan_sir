import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WorkPage } from './pages/WorkPage';
import { WorkDetailPage } from './pages/WorkDetailPage';
import { InstitutionsPage } from './pages/InstitutionsPage';
import { DelegationsPage } from './pages/DelegationsPage';
import { FrameworkPage } from './pages/FrameworkPage';
import { ResearchPage } from './pages/ResearchPage';
import { GalleryPage } from './pages/GalleryPage';
import { MediaPage } from './pages/MediaPage';
import { ThoughtsPage } from './pages/ThoughtsPage';
import { VisionPage } from './pages/VisionPage';
import { SupportPage } from './pages/SupportPage';
import { ContactPage } from './pages/ContactPage';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:workId" element={<WorkDetailPage />} />
          <Route path="/institutions" element={<InstitutionsPage />} />
          <Route path="/delegations" element={<DelegationsPage />} />
          <Route path="/framework" element={<FrameworkPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/thoughts" element={<ThoughtsPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};