import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
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
          {/* Executive Overview Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* Primary Pages */}
          <Route path="/who-am-i" element={<WhoAmIPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/what-we-built" element={<WhatWeBuiltPage />} />
          <Route path="/collaborate" element={<CollaboratePage />} />

          {/* Question-to-Tab Direct Route Deep Links & Redirects */}
          <Route path="/what-shaped-me" element={<Navigate to="/who-am-i?tab=01" replace />} />
          <Route path="/what-drives-me" element={<Navigate to="/who-am-i?tab=02" replace />} />
          <Route path="/what-problems-am-i-solving" element={<Navigate to="/how-it-works?tab=03" replace />} />
          <Route path="/what-am-i-creating" element={<Navigate to="/what-we-built" replace />} />
          <Route path="/how-do-i-create-value" element={<Navigate to="/how-it-works?tab=05" replace />} />
          <Route path="/what-future-am-i-building" element={<Navigate to="/collaborate" replace />} />

          {/* Graceful Legacy Route Redirects */}
          <Route path="/about" element={<Navigate to="/who-am-i" replace />} />
          <Route path="/about/*" element={<Navigate to="/who-am-i" replace />} />
          <Route path="/cv" element={<Navigate to="/who-am-i" replace />} />

          <Route path="/drives" element={<Navigate to="/who-am-i?tab=02" replace />} />
          <Route path="/philosophy" element={<Navigate to="/who-am-i?tab=02" replace />} />

          <Route path="/problems" element={<Navigate to="/how-it-works?tab=03" replace />} />
          <Route path="/gaps" element={<Navigate to="/how-it-works?tab=03" replace />} />

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

          <Route path="/ecosystem" element={<Navigate to="/how-it-works?tab=05" replace />} />
          <Route path="/ecosystem/*" element={<Navigate to="/how-it-works?tab=05" replace />} />
          <Route path="/framework" element={<Navigate to="/how-it-works?tab=05" replace />} />
          <Route path="/vision" element={<Navigate to="/collaborate" replace />} />

          <Route path="/contact" element={<Navigate to="/collaborate" replace />} />
          <Route path="/support" element={<Navigate to="/collaborate" replace />} />

          {/* Catch-all Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};