import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faArrowRight,
  faArrowLeft,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import SEO from '../../SEO';
import servicesData from './servicesData';
import Cta from './Cta';
import Footer from '../../Footer';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === `/services/${slug}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <main id="main-content">
        <div className="service-detail-not-found">
          <h1>Service Not Found</h1>
          <p>The service you are looking for does not exist.</p>
          <Link to="/services" className="service-detail-back-link">
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Services
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const otherServices = servicesData.filter((s) => s.id !== service.id);

  return (
    <main id="main-content">
      <SEO
        title={`${service.title} | Orbitrix Solutions – Professional ${service.title} Services`}
        description={service.description.substring(0, 160)}
        keywords={` ${service.title}, ${service.title} USA, ${service.title} Canada, ${service.title} UK, Orbitrix Solutions ${service.title}`}
      />

      {/* Hero */}
      <section className="sd-hero">
        <div className="sd-hero-bg" aria-hidden="true">
          <div className="sd-hero-orb sd-orb-1"></div>
          <div className="sd-hero-orb sd-orb-2"></div>
        </div>
        <div className="sd-hero-container">
          <Link to="/services" className="sd-back-link">
            <FontAwesomeIcon icon={faArrowLeft} />
            All Services
          </Link>
          <div className="sd-hero-badge">
            <span className="badge-pulse"></span>
            Service {service.num}
          </div>
          <h1 className="sd-hero-heading">
            <FontAwesomeIcon icon={service.icon} className="sd-hero-icon" />
            {service.title}
          </h1>
          <p className="sd-hero-subtitle">{service.subtitle}</p>
          <div className="sd-hero-features">
            {service.features.map((feature, i) => (
              <div key={i} className="sd-hero-feature">
                <FontAwesomeIcon icon={feature.icon} />
                <span>{feature.label}</span>
              </div>
            ))}
          </div>
          <div className="sd-hero-actions">
            <a
              className="sd-btn sd-btn-primary"
              href="https://wa.me/qr/7GSRQFMD6AMZG1"
              target="_blank"
              rel="noreferrer"
            >
              Get a Free Quote
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a className="sd-btn sd-btn-secondary" href="mailto:info@orbitrixsolutions.com">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="sd-overview">
        <div className="sd-container">
          <div className="sd-overview-grid">
            <div className="sd-overview-main">
              <h2>About This Service</h2>
              <p className="sd-overview-description">{service.description}</p>

              <div className="sd-benefits">
                <h3>Key Benefits</h3>
                <ul>
                  {service.benefits.map((benefit, i) => (
                    <li key={i}>
                      <FontAwesomeIcon icon={faCheckCircle} className="sd-check" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sd-problems">
                <h3>Problems We Solve</h3>
                <ul>
                  {service.problemsSolved.map((problem, i) => (
                    <li key={i}>
                      <FontAwesomeIcon icon={faCheckCircle} className="sd-check-problem" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="sd-overview-sidebar">
              <div className="sd-international-box">
                <h3>
                  <FontAwesomeIcon icon={faGlobe} />
                  International Business Value
                </h3>
                <p>{service.internationalValue}</p>
              </div>

              <div className="sd-related-box">
                <h3>Related Services</h3>
                <div className="sd-related-links">
                  {service.relatedLinks.map((link, i) => (
                    <Link key={i} to={link.slug} className="sd-related-link">
                      {link.label}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="sd-cta-box">
                <h3>Ready to Get Started?</h3>
                <p>Contact us today to discuss how {service.title} can help your business grow.</p>
                <a
                  className="sd-btn sd-btn-primary sd-btn-full"
                  href="https://wa.me/qr/7GSRQFMD6AMZG1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Start Your Project
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="sd-other-services">
        <div className="sd-container">
          <h2>Explore Other Services</h2>
          <div className="sd-other-grid">
            {otherServices.map((s) => (
              <Link key={s.id} to={s.slug} className="sd-other-card">
                <FontAwesomeIcon icon={s.icon} className="sd-other-icon" />
                <h4>{s.title}</h4>
                <p>{s.summary.substring(0, 100)}...</p>
                <span className="sd-other-cta">
                  View Details
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
};

export default ServiceDetail;
