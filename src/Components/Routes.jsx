import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Frontend from './Frontend';
import About from './Frontend/About';
import Contact from './Frontend/Contact';
import Projects from './Frontend/Projects';
import TermsAndConditions from './Frontend/TermsAndConditions';
import NotFound from './Frontend/NotFound';

const AppRoutes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Frontend />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
};

export default AppRoutes;