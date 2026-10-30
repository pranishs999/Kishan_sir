import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { ScrollToTop } from './components/ScrollToTop';
import { WhoAmIPage } from './pages/WhoAmIPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { WhatWeBuiltPage } from './pages/WhatWeBuiltPage';
import { CollaboratePage } from './pages/CollaboratePage';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          {/* Exactly 4 Primary Pages */}
          <Route path="/" element={<WhoAmIPage />} />
          <Route path="/who-am-i" element={<WhoAmIPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/what-we-built" element={<WhatWeBuiltPage />} />
          <Route path="/collaborate" element={<CollaboratePage />} />

          {/* Graceful Legacy Redirects */}
          <Route path="/about" element={<Navigate to="/who-am-i" replace />} />
          <Route path="/about/*" element={<Navigate to="/who-am-i" replace />} />
          <Route path="/cv" element={<Navigate to="/who-am-i" replace />} />

          <Route path="/ecosystem" element={<Navigate to="/how-it-works" replace />} />
          <Route path="/ecosystem/*" element={<Navigate to="/how-it-works" replace />} />
          <Route path="/framework" element={<Navigate to="/how-it-works" replace />} />
          <Route path="/vision" element={<Navigate to="/how-it-works" replace />} />

          <Route path="/work" element={<Navigate to="/what-we-built" replace />} />
          <Route path="/work/*" element={<Navigate to="/what-we-built" replace />} />
          <Route path="/initiatives" element={<Navigate to="/what-we-built" replace />} />
          <Route path="/initiatives/*" element={<Navigate to="/what-we-built" replace />} />
          <Route path="/thought" element={<Navigate to="/what-we-built" replace />} />
          <Route path="/thought/*" element={<Navigate to="/what-we-built" replace />} />
          <Route path="/thoughts" element={<Navigate to="/what-we-built" replace />} />
          <Route path="/research" element={<Navigate to="/what-we-built" replace />} />
          <Route path="/media" element={<Navigate to="/what-we-built" replace />} />
          <Route path="/media/*" element={<Navigate to="/what-we-built" replace />} />
          <Route path="/gallery" element={<Navigate to="/what-we-built" replace />} />
          <Route path="/delegations" element={<Navigate to="/what-we-built" replace />} />
          <Route path="/institutions" element={<Navigate to="/what-we-built" replace />} />

          <Route path="/contact" element={<Navigate to="/collaborate" replace />} />
          <Route path="/support" element={<Navigate to="/collaborate" replace />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};