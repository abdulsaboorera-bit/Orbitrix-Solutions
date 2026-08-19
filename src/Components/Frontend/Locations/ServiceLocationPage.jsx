import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faArrowRight,
  faGlobe,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import SEO from '../../SEO';
import Breadcrumbs from '../../Breadcrumbs';
import Footer from '../../Footer';
import serviceLocations from './serviceLocations';
import './Locations.css';

const ServiceLocationPage = () => {
  const { slug } = useParams();
  const data = serviceLocations[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <main id="main-content">
        <div className="location-not-found">
          <h1>Service Not Found</h1>
          <p>The service page you are looking for does not exist.</p>
          <Link to="/" className="location-back-link">
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Home
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const otherPages = Object.entries(serviceLocations).filter(
    ([key]) => key !== slug
  );

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${data.service} Services in ${data.location}`,
    description: data.description.substring(0, 300),
    provider: {
      '@type': 'Organization',
      name: 'Orbitrix Solutions',
      url: 'https://orbitrixsolutions.com',
    },
    areaServed: {
      '@type': 'Country',
      name: data.locationShort,
    },
    serviceType: data.service,
    url: `https://orbitrixsolutions.com/services/${data.slug}`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What ${data.service.toLowerCase()} services does Orbitrix Solutions offer in ${data.location}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: data.services.join('. ') + '.',
        },
      },
      {
        '@type': 'Question',
        name: `Why choose Orbitrix Solutions for ${data.service.toLowerCase()} in ${data.location}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: data.whyChoose,
        },
      },
    ],
  };

  return (
    <main id="main-content">
      <SEO
        title={`${data.title} | Orbitrix Solutions`}
        description={data.description.substring(0, 160)}
        keywords={`${data.service.toLowerCase()} ${data.locationShort.toLowerCase()}, ${data.service.toLowerCase()} agency ${data.locationShort.toLowerCase()}, Orbitrix Solutions ${data.locationShort.toLowerCase()}`}
        schema={serviceSchema}
      />

      <Breadcrumbs />

      <section className="location-hero">
        <div className="location-hero-bg" aria-hidden="true">
          <div className="location-orb orb-1"></div>
          <div className="location-orb orb-2"></div>
        </div>
        <div className="location-hero-container">
          <Link to="/services" className="location-back-link">
            <FontAwesomeIcon icon={faArrowLeft} />
            Our Services
          </Link>
          <div className="location-badge">
            <FontAwesomeIcon icon={faGlobe} />
            {data.locationShort}
          </div>
          <h1>{data.title}</h1>
          <p className="location-subtitle">{data.subtitle}</p>
          <div className="location-stats">
            {data.stats.map((stat, i) => (
              <div key={i} className="location-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="location-content">
        <div className="location-container">
          <div className="location-main">
            <h2>
              {data.service} Services in {data.cities[0]} & Across{' '}
              {data.location}
            </h2>
            <p>{data.description}</p>

            <div className="location-services">
              <h3>What We Offer</h3>
              <ul>
                {data.services.map((service, i) => (
                  <li key={i}>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="location-check"
                    />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="location-why-section">
              <h3>
                Why Choose Orbitrix for {data.service} in {data.locationShort}
              </h3>
              <p>{data.whyChoose}</p>
            </div>

            <div className="location-cities">
              <h3>Cities We Serve</h3>
              <div className="location-cities-grid">
                {data.cities.map((city, i) => (
                  <span key={i} className="location-city-tag">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="location-sidebar">
            <div className="location-cta-box">
              <h3>Get Started Today</h3>
              <p>{data.cta}</p>
              <a
                className="location-cta-btn"
                href="https://wa.me/qr/7GSRQFMD6AMZG1"
                target="_blank"
                rel="noreferrer"
              >
                Free Consultation
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>

            <div className="location-other-box">
              <h3>Other Service Locations</h3>
              <div className="location-other-links">
                {otherPages.map(([key, loc]) => (
                  <Link
                    key={key}
                    to={`/services/${key}`}
                    className="location-other-link"
                  >
                    {loc.title}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceLocationPage;
