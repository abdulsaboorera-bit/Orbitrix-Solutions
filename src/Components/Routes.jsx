import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Frontend from './Frontend';
import About from './Frontend/About';
import Services from './Frontend/Services';
import ServiceDetail from './Frontend/Services/ServiceDetail';
import Contact from './Frontend/Contact';
import Projects from './Frontend/Projects';
import CaseStudy from './Frontend/CaseStudy';
import TermsAndConditions from './Frontend/TermsAndConditions';
import BlogList from './Frontend/Blog/BlogList';
import BlogArticle from './Frontend/Blog/BlogArticle';
import LocationPage from './Frontend/Locations/LocationPage';
import Industries from './Frontend/Industries/Industries';
import IndustryPage from './Frontend/Industries/IndustryPage';
import NotFound from './Frontend/NotFound';

const AppRoutes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Frontend />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<CaseStudy />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogArticle />} />
      <Route path="/locations/:country" element={<LocationPage />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/industries/:industry" element={<IndustryPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
};

export default AppRoutes;
