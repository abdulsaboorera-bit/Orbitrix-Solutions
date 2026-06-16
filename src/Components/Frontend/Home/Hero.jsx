import React, { useState, useEffect, useRef } from 'react';
import { Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCode, faBullhorn, faRobot, faChartLine, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const words = ['visions', 'ideas', 'products', 'strategies'];

const services = [
  { icon: faCode, label: 'Web Development' },
  { icon: faBullhorn, label: 'Digital Marketing' },
  { icon: faRobot, label: 'AI Automation' },
  { icon: faChartLine, label: 'SEO Services' },
];

const stats = [
  { value: '100+', label: 'Clients Served' },
  { value: '2+', label: 'Years Experience' },
  { value: '98%', label: 'Client Retention' },
];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');
  const [activeService, setActiveService] = useState(0);
  const [countersStarted, setCountersStarted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setFadeState('fade-in');
      }, 400);
    }, 3000);
    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(serviceInterval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-v2-section relative overflow-hidden">
      {/* Animated background grid */}
      <div className="hero-bg-grid absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="grid-line grid-line-h" style={{ top: '25%' }}></div>
        <div className="grid-line grid-line-h" style={{ top: '50%' }}></div>
        <div className="grid-line grid-line-h" style={{ top: '75%' }}></div>
        <div className="grid-line grid-line-v" style={{ left: '25%' }}></div>
        <div className="grid-line grid-line-v" style={{ left: '50%' }}></div>
        <div className="grid-line grid-line-v" style={{ left: '75%' }}></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
      </div>

      <div className="hero-v2-container relative z-10">
        {/* Top badge */}
        <div className="hero-top-badge">
          <span className="badge-dot"></span>
          Full-Service Digital Agency
        </div>

        {/* Main headline */}
        <h1 className="hero-v2-heading">
          <span className="hero-line hero-line-1">We Build</span>
          <span className="hero-line hero-line-2">
            Websites <span className="hero-ampersand">&amp;</span> Brands
          </span>
          <span className="hero-line hero-line-3">
            That{' '}
            <span className="hero-word-rotator-wrapper">
              <span className={`hero-word-rotator-text ${fadeState}`}>
                {words[wordIndex]}
              </span>
              <span className="hero-word-underline"></span>
            </span>
          </span>
        </h1>

        {/* Description */}
        <p className="hero-v2-description">
          Orbitrix Solutions is a full-service digital marketing company and web development
          agency helping businesses scale with professional SEO services, AI automation,
          custom web development, and data-driven digital marketing strategies.
        </p>

        {/* Service pills - rotating highlight */}
        <div className="hero-service-pills">
          {services.map((service, index) => (
            <div
              key={service.label}
              className={`hero-service-pill ${index === activeService ? 'active' : ''}`}
            >
              <FontAwesomeIcon icon={service.icon} className="pill-icon" />
              <span>{service.label}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hero-v2-actions">
          <a
            className="hero-btn hero-btn-primary"
            href="https://wa.me/qr/7GSRQFMD6AMZG1"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            <span>Get a Free Quote</span>
            <FontAwesomeIcon icon={faArrowRight} className="btn-arrow-icon" />
          </a>
          <a className="hero-btn hero-btn-secondary" href="mailto:info@orbitrixsolutions.com">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>info@orbitrixsolutions.com</span>
          </a>
        </div>

        {/* Stats row */}
        <div className="hero-stats-row" ref={statsRef}>
          {stats.map((stat, index) => (
            <div key={stat.label} className="hero-stat-item">
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
              {index < stats.length - 1 && <div className="hero-stat-divider"></div>}
            </div>
          ))}
        </div>

        {/* Explore link */}
        <Link to="/about" className="hero-explore-link">
          Explore Our Services
          <FontAwesomeIcon icon={faArrowRight} className="explore-arrow" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
