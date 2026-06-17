import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faArrowRight, faRocket as faArrow } from '@fortawesome/free-solid-svg-icons';

const industriesList = [
  {
    slug: 'startups',
    name: 'Startups',
    tagline: 'Launch fast with MVP development and growth-focused marketing.',
    icon: faRocket,
  },
  {
    slug: 'saas',
    name: 'SaaS',
    tagline: 'High-converting SaaS platforms that scale with your users.',
    icon: faRocket,
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce',
    tagline: 'Online stores optimized for speed, design, and conversions.',
    icon: faRocket,
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    tagline: 'Professional healthcare websites that build patient trust.',
    icon: faRocket,
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    tagline: 'Property websites that attract buyers and close deals.',
    icon: faRocket,
  },
  {
    slug: 'small-business',
    name: 'Small Business',
    tagline: 'Affordable digital solutions for small businesses.',
    icon: faRocket,
  },
];

const Industries = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
        </div>
        <div className="hero-container">
          <div className="hero-badge">
            <FontAwesomeIcon icon={faRocket} />
            Industries We Serve
          </div>
          <h1>Web Development for Every Industry</h1>
          <p className="hero-subtitle">
            Orbitrix Solutions serves businesses across multiple industries with tailored digital solutions.
            From startups to healthcare, we understand your unique challenges and deliver strategies that work.
          </p>
        </div>
      </section>

      <section className="services-overview" id="services">
        <div className="overview-container">
          <div className="overview-header">
            <h2>Our Industry Expertise</h2>
            <p>
              Every industry has unique digital needs. We combine technical expertise with industry-specific
              knowledge to deliver solutions that drive real results for your business.
            </p>
          </div>

          <div className="services-grid">
            {industriesList.map((ind) => (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                className="service-card"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <div className="service-card-icon">
                  <FontAwesomeIcon icon={faRocket} />
                </div>
                <h3 className="service-card-title">{ind.name}</h3>
                <p className="service-card-description">{ind.tagline}</p>
                <div className="service-card-link">
                  Learn More
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
