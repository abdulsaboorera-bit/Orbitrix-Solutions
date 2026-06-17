import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import servicesData from './servicesData';

const ServiceOverview = () => {
  return (
    <section id="all-services" className="services-overview-section">
      <div className="services-overview-container">
        <div className="services-overview-header reveal-blur">
          <span className="about-label">What We Offer</span>
          <h2>
            Comprehensive Digital Services to <span className="heading-accent">Accelerate Growth</span>
          </h2>
          <p>
            Every service at Orbitrix Solutions is designed to solve real business challenges. We combine
            technical expertise with strategic thinking to deliver measurable outcomes for startups,
            SaaS companies, e-commerce stores, and enterprise businesses worldwide.
          </p>
        </div>

        <div className="services-overview-grid">
          {servicesData.map((service, index) => (
            <article
              key={service.id}
              className="services-overview-card reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="services-overview-card-top">
                <div className="services-overview-card-num">{service.num}</div>
                <FontAwesomeIcon icon={service.icon} className="services-overview-card-icon" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <div className="services-overview-card-link">
                <Link to={service.slug}>
                  Learn More
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
