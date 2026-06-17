import React from 'react';
import SEO from '../../SEO';
import Hero from './Hero';
import Services from './Services';
import Pricing from './Pricing';
import Process from './Process';
import StatsCounter from './StatsCounter';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Cta from './Cta';
import ClientLogos from './ClientLogos';
import Footer from '../../Footer';
import './index.css';

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
      <Hero />
      <ClientLogos />
      <Services />
      <Pricing />
      <Process />
      <StatsCounter />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
};

export default index;
