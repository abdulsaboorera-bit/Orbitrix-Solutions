import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Frontend from './Frontend';
import About from './Frontend/About';
import Contact from './Frontend/Contact';
import Projects from './Frontend/Projects';

const AppRoutes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Frontend />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Frontend />} />
    </RouterRoutes>
  );
};

export default AppRoutes;