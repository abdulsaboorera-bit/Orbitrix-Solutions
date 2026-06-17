import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faHandshake,
  faChartLine,
  faShieldAlt,
  faLightbulb,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';

const stats = [
  { value: '80+', label: 'Projects Delivered' },
  { value: '2+', label: 'Years Experience' },
  { value: '15+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

const highlights = [
  'Frontend-Only Architecture',
  'SEO-First Approach',
  'International Market Expertise',
  'Transparent Communication',
  'Agile Development Process',
  'Post-Launch Support',
];

const reasons = [
  {
    icon: faGlobe,
    title: 'Global Reach, Local Expertise',
    description:
      'We serve clients across the USA, Canada, UK, Germany, Netherlands, and Europe. Our team understands the nuances of international markets and creates strategies that resonate with local audiences while maintaining global brand consistency.',
  },
  {
    icon: faChartLine,
    title: 'Results-Driven Approach',
    description:
      'Every strategy we implement is backed by data and focused on measurable outcomes. We track KPIs, provide transparent reporting, and continuously optimize to ensure your investment delivers real business growth.',
  },
  {
    icon: faShieldAlt,
    title: 'Technical Excellence',
    description:
      'From React development to WordPress optimization, our technical team follows industry best practices. We build fast, secure, and scalable solutions that meet Core Web Vitals standards and perform across all devices.',
  },
  {
    icon: faLightbulb,
    title: 'AI-Powered Innovation',
    description:
      'We leverage artificial intelligence to give your business a competitive edge. From AI-driven ad campaigns to intelligent automation workflows, we implement solutions that save time, reduce costs, and improve efficiency.',
  },
  {
    icon: faHandshake,
    title: 'Partnership, Not Just Service',
    description:
      'We treat every client as a strategic partner. Our collaborative approach means we invest time understanding your business goals, industry challenges, and growth aspirations before recommending solutions.',
  },
  {
    icon: faRocket,
    title: 'Rapid Time-to-Market',
    description:
      'Using agile development methodologies, we deliver projects efficiently without compromising quality. Our streamlined processes ensure your digital products launch on time and start generating results faster.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-services-section">
      <div className="why-choose-services-container">
        <div className="why-choose-services-header reveal-blur">
          <span className="about-label">Why Orbitrix Solutions</span>
          <h2>
            Why Global Businesses Choose <span className="heading-accent">Orbitrix Solutions</span>
          </h2>
          <p>
            Businesses across the USA, Canada, UK, Germany, and the Netherlands trust Orbitrix
            Solutions because we combine technical expertise with strategic thinking to deliver
            digital solutions that drive real business growth.
          </p>
        </div>

        <div className="why-choose-services-stats reveal">
          {stats.map((stat, index) => (
            <div key={index} className="why-choose-stat-card">
              <div className="why-choose-stat-value">{stat.value}</div>
              <div className="why-choose-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="why-choose-services-highlights reveal">
          {highlights.map((highlight, index) => (
            <span key={index} className="why-choose-highlight-chip">
              {highlight}
            </span>
          ))}
        </div>

        <div className="why-choose-services-grid">
          {reasons.map((reason, index) => (
            <article
              key={index}
              className="why-choose-reason-card reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="why-choose-reason-icon">
                <FontAwesomeIcon icon={reason.icon} />
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
