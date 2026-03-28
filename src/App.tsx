import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CoverPage from './pages/CoverPage';
import InvitationPage from './pages/InvitationPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/invitation" element={<InvitationPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
