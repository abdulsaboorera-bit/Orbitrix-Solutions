import React, { Suspense, lazy } from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';

const Frontend = lazy(() => import('./Frontend'));
const About = lazy(() => import('./Frontend/About'));
const Ceo = lazy(() => import('./Frontend/About/Ceo'));
const Services = lazy(() => import('./Frontend/Services'));
const ServiceDetail = lazy(() => import('./Frontend/Services/ServiceDetail'));
const Contact = lazy(() => import('./Frontend/Contact'));
const Projects = lazy(() => import('./Frontend/Projects'));
const CaseStudy = lazy(() => import('./Frontend/CaseStudy'));
const TermsAndConditions = lazy(() => import('./Frontend/TermsAndConditions'));
const BlogList = lazy(() => import('./Frontend/Blog/BlogList'));
const BlogArticle = lazy(() => import('./Frontend/Blog/BlogArticle'));
const LocationPage = lazy(() => import('./Frontend/Locations/LocationPage'));
const Industries = lazy(() => import('./Frontend/Industries/Industries'));
const IndustryPage = lazy(() => import('./Frontend/Industries/IndustryPage'));
const NotFound = lazy(() => import('./Frontend/NotFound'));

const PageLoader = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: 32, height: 32, border: '3px solid rgba(26,129,135,0.2)', borderTopColor: '#1a8187', borderRadius: '50%', animation: 'spin 0.6s linear infinite' }} />
  </div>
);

const AppRoutes = () => {
  return (
      <Suspense fallback={<PageLoader />}>
        <RouterRoutes>
          <Route path="/" element={<Frontend />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/ceo" element={<Ceo />} />
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
      </Suspense>
  );
};

export default AppRoutes;
