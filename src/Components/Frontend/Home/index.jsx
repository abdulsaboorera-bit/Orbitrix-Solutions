import React from 'react';
import SEO from '../../SEO';
import Hero from './Hero';
import Highlights from './Highlights';
import Services from './Services';
import Pricing from './Pricing';
import Portfolio from './Portfolio';
import Process from './Process';
import StatsCounter from './StatsCounter';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Cta from './Cta';
import Footer from '../../Footer';
import './index.css';

const index = () => {
  return (
    <>
      <SEO 
        title="Orbitrix Solutions | Web Development & Digital Marketing Agency" 
        description="Orbitrix Solutions builds high-performance websites, custom web development, SEO services, and digital marketing strategies to accelerate business growth." 
      />
      <Hero />
      <Highlights />
      <Services />
      <Pricing />
      <Portfolio />
      <Process />
      <StatsCounter />
      <Testimonials />
      <FAQ />
      <Cta />
      <Footer />
    </>
  );
};

export default index;