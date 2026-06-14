import React from 'react';
import SEO from '../../SEO';
import Hero from './Hero';
import Highlights from './Highlights';
import Services from './Services';
import Pricing from './Pricing';
import Process from './Process';
import StatsCounter from './StatsCounter';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Cta from './Cta';
import Footer from '../../Footer';
import './index.css';

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Orbitrix Solutions",
    "url": "https://orbitrixsolutions.com",
    "logo": "https://orbitrixsolutions.com/logo.png",
    "description": "Orbitrix Solutions is a web development agency, SEO services agency, AI automation agency, and digital marketing company offering custom web development, SEO, AI-powered marketing, and IT consulting.",
    "sameAs": [
      "https://www.linkedin.com/in/abdul-saboor-5677643b4/",
      "https://github.com/abdulsaboorera-bit",
      "https://www.instagram.com/orbitrix_solutions"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@orbitrixsolutions.com",
      "contactType": "customer service"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://orbitrixsolutions.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

const index = () => {
  return (
    <main>
      <SchemaMarkup />
      <SEO
        title="Orbitrix Solutions | Web Development Agency, SEO Services & AI Automation"
        description="Orbitrix Solutions is a web development agency and digital marketing company offering SEO services, AI automation, custom web development, React & WordPress development, and data-driven marketing strategies to accelerate business growth."
        keywords="web development agency, SEO services agency, AI automation agency, digital marketing company, custom web development, React development, WordPress development, SEO optimization, digital marketing strategy"
      />
      <Hero />
      <Highlights />
      <Services />
      <Pricing />
      <Process />
      <StatsCounter />
      <Testimonials />
      <FAQ />
      <Cta />
      <Footer />
    </main>
  );
};

export default index;
