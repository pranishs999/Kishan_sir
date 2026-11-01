import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { ScrollToTop } from './components/ScrollToTop';
import { PageWhatShapedMe } from './pages/PageWhatShapedMe';
import { PageWhatDrivesMe } from './pages/PageWhatDrivesMe';
import { PageWhatProblems } from './pages/PageWhatProblems';
import { PageWhatAmICreating } from './pages/PageWhatAmICreating';
import { PageHowICreateValue } from './pages/PageHowICreateValue';
import { PageWhatFuture } from './pages/PageWhatFuture';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          {/* Exactly 6 Primary Destination Pages */}
          <Route path="/" element={<PageWhatShapedMe />} />
          <Route path="/what-shaped-me" element={<PageWhatShapedMe />} />
          <Route path="/what-drives-me" element={<PageWhatDrivesMe />} />
          <Route path="/what-problems-am-i-solving" element={<PageWhatProblems />} />
          <Route path="/what-am-i-creating" element={<PageWhatAmICreating />} />
          <Route path="/how-do-i-create-value" element={<PageHowICreateValue />} />
          <Route path="/what-future-am-i-building" element={<PageWhatFuture />} />

          {/* Graceful Legacy Route Redirects */}
          <Route path="/who-am-i" element={<Navigate to="/what-shaped-me" replace />} />
          <Route path="/about" element={<Navigate to="/what-shaped-me" replace />} />
          <Route path="/about/*" element={<Navigate to="/what-shaped-me" replace />} />
          <Route path="/cv" element={<Navigate to="/what-shaped-me" replace />} />

          <Route path="/drives" element={<Navigate to="/what-drives-me" replace />} />
          <Route path="/philosophy" element={<Navigate to="/what-drives-me" replace />} />

          <Route path="/problems" element={<Navigate to="/what-problems-am-i-solving" replace />} />
          <Route path="/gaps" element={<Navigate to="/what-problems-am-i-solving" replace />} />

          <Route path="/what-we-built" element={<Navigate to="/what-am-i-creating" replace />} />
          <Route path="/work" element={<Navigate to="/what-am-i-creating" replace />} />
          <Route path="/work/*" element={<Navigate to="/what-am-i-creating" replace />} />
          <Route path="/initiatives" element={<Navigate to="/what-am-i-creating" replace />} />
          <Route path="/initiatives/*" element={<Navigate to="/what-am-i-creating" replace />} />
          <Route path="/thought" element={<Navigate to="/what-am-i-creating" replace />} />
          <Route path="/thought/*" element={<Navigate to="/what-am-i-creating" replace />} />
          <Route path="/thoughts" element={<Navigate to="/what-am-i-creating" replace />} />
          <Route path="/research" element={<Navigate to="/what-am-i-creating" replace />} />
          <Route path="/media" element={<Navigate to="/what-am-i-creating" replace />} />
          <Route path="/media/*" element={<Navigate to="/what-am-i-creating" replace />} />
          <Route path="/gallery" element={<Navigate to="/what-am-i-creating" replace />} />
          <Route path="/delegations" element={<Navigate to="/what-am-i-creating" replace />} />
          <Route path="/institutions" element={<Navigate to="/what-am-i-creating" replace />} />

          <Route path="/how-it-works" element={<Navigate to="/how-do-i-create-value" replace />} />
          <Route path="/ecosystem" element={<Navigate to="/how-do-i-create-value" replace />} />
          <Route path="/ecosystem/*" element={<Navigate to="/how-do-i-create-value" replace />} />
          <Route path="/framework" element={<Navigate to="/how-do-i-create-value" replace />} />
          <Route path="/vision" element={<Navigate to="/how-do-i-create-value" replace />} />

          <Route path="/collaborate" element={<Navigate to="/what-future-am-i-building" replace />} />
          <Route path="/contact" element={<Navigate to="/what-future-am-i-building" replace />} />
          <Route path="/support" element={<Navigate to="/what-future-am-i-building" replace />} />

          {/* Catch-all Fallback */}
          <Route path="*" element={<Navigate to="/what-shaped-me" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};