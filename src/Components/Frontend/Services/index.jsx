import React from 'react';
import SEO from '../../SEO';
import Hero from './Hero';
import ServiceOverview from './ServiceOverview';
import WhyChooseUs from './WhyChooseUs';
import Industries from './Industries';
import Cta from './Cta';
import Footer from '../../Footer';
import Breadcrumbs from '../../Breadcrumbs';
import './index.css';

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Orbitrix Solutions",
  "description": "Professional web development, SEO, AI automation, and digital marketing services for businesses in the USA, Canada, UK, Germany, and beyond.",
  "url": "https://orbitrixsolutions.com/services",
  "serviceType": ["Web Development", "SEO Services", "AI Automation", "n8n Automation", "Digital Marketing", "Social Media Account Management"],
  "areaServed": [
    "United States", "Canada", "United Kingdom", "Germany", "Netherlands"
  ],
  "provider": {
    "@type": "Organization",
    "name": "Orbitrix Solutions",
    "url": "https://orbitrixsolutions.com"
  }
};

const Services = () => {
  return (
    <main id="main-content">
      <SEO
        title="Web Development, SEO & AI Automation Services | Orbitrix"
        description="Custom React & WordPress development, data-driven SEO, AI voice agents, chatbots, n8n automation & digital marketing. 80+ projects across 15 countries. Free consultation."
        keywords="web development services, React development, WordPress development, SEO services, AI automation, n8n automation, digital marketing agency"
        schema={servicesSchema}
      />
      <Breadcrumbs />
      <Hero />
      <ServiceOverview />
      <WhyChooseUs />
      <Industries />
      <Cta />
      <Footer />
    </main>
  );
};

export default Services;
