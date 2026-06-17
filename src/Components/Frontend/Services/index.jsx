import React from 'react';
import SEO from '../../SEO';
import Hero from './Hero';
import ServiceOverview from './ServiceOverview';
import WhyChooseUs from './WhyChooseUs';
import Industries from './Industries';
import Cta from './Cta';
import Footer from '../../Footer';
import './index.css';

const Services = () => {
  return (
    <main id="main-content">
      <SEO
        title="Services | Orbitrix Solutions – Web Development, SEO & AI Automation Agency"
        description="Explore professional web development, SEO services, AI automation, digital marketing, and social media management services by Orbitrix Solutions for businesses in the USA, Canada, UK, Germany & beyond."
        keywords="web development company USA, web development company Canada, React development company, WordPress development agency, SEO agency USA, digital marketing agency USA, AI automation services, AI automation agency, global digital solutions company"
      />
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
