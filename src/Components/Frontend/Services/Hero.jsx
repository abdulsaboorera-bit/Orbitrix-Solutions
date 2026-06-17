import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className="services-hero-section">
      <div className="services-hero-bg-grid" aria-hidden="true">
        <div className="grid-line grid-line-h" style={{ top: '20%' }}></div>
        <div className="grid-line grid-line-h" style={{ top: '50%' }}></div>
        <div className="grid-line grid-line-h" style={{ top: '80%' }}></div>
        <div className="grid-line grid-line-v" style={{ left: '20%' }}></div>
        <div className="grid-line grid-line-v" style={{ left: '50%' }}></div>
        <div className="grid-line grid-line-v" style={{ left: '80%' }}></div>
      </div>

      <div className="services-hero-orbs" aria-hidden="true">
        <div className="services-hero-orb orb-1"></div>
        <div className="services-hero-orb orb-2"></div>
        <div className="services-hero-orb orb-3"></div>
      </div>

      <div className="services-hero-container">
        <div className="services-hero-badge">
          <span className="badge-pulse"></span>
          Our Professional Services
        </div>

        <h1 className="services-hero-heading">
          Full-Service <span className="heading-accent">Digital Solutions</span> for Global Business Growth
        </h1>

        <p className="services-hero-description">
          From custom web development and search engine optimization to AI-powered marketing automation,
          Orbitrix Solutions delivers end-to-end digital services that help businesses across the USA,
          Canada, UK, Germany, and Europe scale their online presence and drive measurable revenue growth.
        </p>

        <div className="services-hero-tags">
          <span className="services-hero-tag">Web Development</span>
          <span className="services-hero-tag">SEO Services</span>
          <span className="services-hero-tag">AI Automation</span>
          <span className="services-hero-tag">Digital Marketing</span>
          <span className="services-hero-tag">Social Media</span>
        </div>

        <div className="services-hero-actions">
          <a
            className="services-hero-btn services-hero-btn-primary"
            href="https://wa.me/qr/7GSRQFMD6AMZG1"
            target="_blank"
            rel="noreferrer"
          >
            Get a Free Consultation
            <FontAwesomeIcon icon={faArrowRight} className="btn-arrow-icon" />
          </a>
          <a className="services-hero-btn services-hero-btn-secondary" href="#all-services">
            Explore Our Services
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
        </div>

        <div className="services-hero-trust">
          <div className="trust-item">
            <strong>80+</strong> Projects Delivered
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <strong>15+</strong> Countries Served
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <strong>98%</strong> Client Satisfaction
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
