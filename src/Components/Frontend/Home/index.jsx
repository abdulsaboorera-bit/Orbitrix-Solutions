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
    "@type": "ProfessionalService",
    "@id": "https://orbitrixsolutions.com/#agency",
    "name": "Orbitrix Solutions",
    "url": "https://orbitrixsolutions.com",
    "logo": "https://orbitrixsolutions.com/logo.png",
    "description": "Orbitrix Solutions: a web development and digital marketing agency offering SEO, AI automation, custom web development, and data-driven marketing.",
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
      "contactType": "customer service",
      "telephone": "+923284678752"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Pakistan"
    },
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Automation & Marketing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WordPress Development" } }
      ]
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
    <main id="main-content">
      <SchemaMarkup />
      <SEO
        title="Orbitrix Solutions | Web Dev, SEO & AI Agency"
        description="Orbitrix Solutions: a web development &amp; digital marketing agency offering SEO, AI automation, and custom web development to accelerate your business growth."
        keywords="web development agency, digital marketing company, SEO services, AI automation, custom web development, React development, WordPress development"
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
