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

const index = () => {
  return (
    <main id="main-content">
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
