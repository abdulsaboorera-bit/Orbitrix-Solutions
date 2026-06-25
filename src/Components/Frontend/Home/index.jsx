import React, { lazy, Suspense } from 'react';
import SEO from '../../SEO';
import Hero from './Hero';
import ClientLogos from './ClientLogos';
import Footer from '../../Footer';
import Breadcrumbs from '../../Breadcrumbs';
import './index.css';

const Services = lazy(() => import('./Services'));
const Pricing = lazy(() => import('./Pricing'));
const Process = lazy(() => import('./Process'));
const StatsCounter = lazy(() => import('./StatsCounter'));
const Testimonials = lazy(() => import('./Testimonials'));
const FAQ = lazy(() => import('./FAQ'));

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I start a project with Orbitrix Solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Share your goals through our contact page, WhatsApp, or email. We reply within 24 hours with next steps and a clear plan."
      }
    },
    {
      "@type": "Question",
      "name": "What services does your web development agency offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We deliver WordPress and React web development, SEO services, AI automation, digital marketing, and social media growth services as a full-service digital marketing company."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical website take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most websites launch in 2 to 6 weeks, depending on scope and content readiness. We confirm a timeline after a discovery call."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide ongoing support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer maintenance, optimization, and marketing support after launch with flexible monthly plans."
      }
    }
  ]
};

const index = () => {
  return (
    <main id="main-content">
      <SEO
        title="Orbitrix Solutions | Web Dev, SEO & AI Agency"
        description="Orbitrix Solutions: a web development &amp; digital marketing agency offering SEO, AI automation, and custom web development to accelerate your business growth."
        keywords="web development agency, digital marketing company, SEO services, AI automation, custom web development, React development, WordPress development"
        schema={homeSchema}
      />
      <Breadcrumbs />
      <Hero />
      <ClientLogos />
      <Suspense fallback={null}>
        <Services />
        <Pricing />
        <Process />
        <StatsCounter />
        <Testimonials />
        <FAQ />
      </Suspense>
      <Footer />
    </main>
  );
};

export default index;
