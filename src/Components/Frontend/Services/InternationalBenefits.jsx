import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobeAmericas,
  faGlobeEurope,
  faGlobeAsia,
  faClock,
  faLanguage,
  faMoneyBillWave,
  faHandshake,
  faCheckCircle,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

const markets = [
  {
    icon: faGlobeAmericas,
    region: 'North America',
    countries: 'USA & Canada',
    description:
      'We help businesses in the United States and Canada build strong digital presences with targeted SEO strategies, high-performance web development, and data-driven marketing campaigns that connect with North American audiences.',
    highlights: ['Local SEO for US & Canadian markets', 'Multi-state/province targeting', 'USD & CAD pricing flexibility'],
  },
  {
    icon: faGlobeEurope,
    region: 'Europe',
    countries: 'UK, Germany & Netherlands',
    description:
      'Our European market expertise covers the UK, Germany, and the Netherlands. We implement hreflang tags, region-specific keyword strategies, and culturally adapted content that resonates with European consumers and businesses.',
    highlights: ['Multi-language SEO strategy', 'GDPR-compliant marketing', 'Region-specific content localization'],
  },
  {
    icon: faGlobeAsia,
    region: 'Global Reach',
    countries: 'Worldwide Clients',
    description:
      'Beyond our core markets, we serve clients across the globe. Our distributed team and remote-first approach mean we can deliver high-quality digital services to businesses anywhere, regardless of timezone or location.',
    highlights: ['Remote-first collaboration', 'Flexible timezone coordination', 'Global project management'],
  },
];

const benefits = [
  {
    icon: faClock,
    title: 'Timezone Flexibility',
    description:
      'Our team operates across multiple timezones, ensuring seamless communication with clients in the USA, Canada, UK, Germany, and the Netherlands.',
  },
  {
    icon: faLanguage,
    title: 'Multi-Market Expertise',
    description:
      'We understand cultural nuances and market differences across regions, creating content and strategies that resonate locally while maintaining global brand consistency.',
  },
  {
    icon: faMoneyBillWave,
    title: 'Competitive Global Pricing',
    description:
      'We offer world-class digital services at competitive rates, providing exceptional value for businesses in high-cost markets like the USA, UK, and Europe.',
  },
  {
    icon: faHandshake,
    title: 'Cross-Cultural Communication',
    description:
      'Our team communicates fluently in English and understands the business cultures of Western markets, ensuring smooth collaboration throughout every project.',
  },
];

const InternationalBenefits = () => {
  return (
    <section className="international-section">
      <div className="international-container">
        <div className="international-header reveal-blur">
          <span className="about-label">Global Services</span>
          <h2>
            International Client <span className="heading-accent">Benefits</span>
          </h2>
          <p>
            Orbitrix Solutions serves businesses across the USA, Canada, UK, Germany, the Netherlands,
            and Europe. Our global service delivery model combines technical excellence with local
            market understanding to help businesses succeed internationally.
          </p>
        </div>

        <div className="international-markets-grid">
          {markets.map((market, index) => (
            <article
              key={index}
              className="international-market-card reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="international-market-icon">
                <FontAwesomeIcon icon={market.icon} />
              </div>
              <div className="international-market-region">
                <span className="region-label">{market.region}</span>
                <h3>{market.countries}</h3>
              </div>
              <p>{market.description}</p>
              <ul className="international-market-highlights">
                {market.highlights.map((highlight, hi) => (
                  <li key={hi}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="international-benefits-grid">
          {benefits.map((benefit, index) => (
            <article
              key={index}
              className="international-benefit-card reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="international-benefit-icon">
                <FontAwesomeIcon icon={benefit.icon} />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>

        <div className="international-cta reveal">
          <h3>Ready to Grow Your Business Globally?</h3>
          <p>
            Whether you are based in the USA, Canada, UK, Germany, or anywhere in the world,
            Orbitrix Solutions is ready to help you achieve your digital growth goals.
          </p>
          <div className="international-cta-actions">
            <a
              className="services-hero-btn services-hero-btn-primary"
              href="https://wa.me/qr/7GSRQFMD6AMZG1"
              target="_blank"
              rel="noreferrer"
            >
              Start Your Project
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a className="services-hero-btn services-hero-btn-secondary" href="#faq">
              View FAQ
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalBenefits;
