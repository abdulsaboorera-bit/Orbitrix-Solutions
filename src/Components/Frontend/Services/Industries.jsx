import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faCloud,
  faShoppingCart,
  faHeartbeat,
  faHome,
  faStore,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

const industries = [
  {
    icon: faRocket,
    title: 'Startups',
    description:
      'We help startups build their digital presence from the ground up. From MVP development to growth-focused SEO strategies, we provide the technical foundation and marketing expertise that early-stage companies need to launch, iterate, and scale.',
    services: ['React Web Development', 'SEO Services', 'Digital Marketing', 'AI Automation'],
    value:
      'Startups benefit from our lean approach — fast iterations, data-driven decisions, and scalable architecture that grows with your user base.',
  },
  {
    icon: faCloud,
    title: 'SaaS Companies',
    description:
      'SaaS businesses need high-performance web applications, strong organic visibility, and efficient customer acquisition funnels. We build React-based SaaS dashboards, optimize landing pages for conversion, and implement SEO strategies that drive qualified trial signups.',
    services: ['React Web Development', 'SEO Services', 'AI Ads & Marketing', 'Social Media Marketing'],
    value:
      'SaaS companies gain a technical partner who understands subscription metrics, user onboarding, and the importance of reducing churn through better UX.',
  },
  {
    icon: faShoppingCart,
    title: 'E-commerce',
    description:
      'From WooCommerce stores to custom e-commerce solutions, we build online stores that load fast, look great, and convert visitors into buyers. Our SEO and digital marketing services help e-commerce businesses increase organic traffic and reduce customer acquisition costs.',
    services: ['WordPress Development', 'SEO Services', 'Digital Marketing', 'AI Ads & Marketing'],
    value:
      'E-commerce businesses see improved conversion rates, lower bounce rates, and higher average order values through our optimization strategies.',
  },
  {
    icon: faHeartbeat,
    title: 'Healthcare',
    description:
      'Healthcare organizations need HIPAA-conscious digital solutions that build patient trust. We create professional websites, implement local SEO strategies, and develop automation systems that streamline patient communication and appointment scheduling.',
    services: ['WordPress Development', 'SEO Services', 'AI Automation Services', 'Social Media Marketing'],
    value:
      'Healthcare providers benefit from improved patient acquisition through local SEO, professional web presence, and automated communication workflows.',
  },
  {
    icon: faHome,
    title: 'Real Estate',
    description:
      'Real estate businesses need visually compelling websites, strong local SEO, and effective lead generation systems. We build property listing platforms, optimize for local search, and create marketing funnels that connect agents with potential buyers.',
    services: ['WordPress Development', 'SEO Services', 'Digital Marketing', 'Social Media Marketing'],
    value:
      'Real estate professionals gain a competitive edge through visually stunning property websites, local search dominance, and automated lead nurturing.',
  },
  {
    icon: faStore,
    title: 'Small Businesses',
    description:
      'Small businesses need cost-effective digital solutions that deliver real results. We provide affordable web development, local SEO, and social media management that help small businesses compete with larger competitors in their local markets.',
    services: ['WordPress Development', 'SEO Services', 'Social Media Marketing', 'Digital Marketing'],
    value:
      'Small businesses get enterprise-quality digital services at scalable prices, helping them grow their local presence and attract more customers.',
  },
];

const Industries = () => {
  return (
    <section className="industries-section">
      <div className="industries-container">
        <div className="industries-header reveal-blur">
          <span className="about-label">Industries We Serve</span>
          <h2>
            Digital Solutions for <span className="heading-accent">Every Industry</span>
          </h2>
          <p>
            We have experience working with businesses across diverse industries. Our tailored
            approach ensures that every solution we deliver addresses the unique challenges and
            opportunities of your specific sector.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <article
              key={index}
              className="industries-card reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="industries-card-icon">
                <FontAwesomeIcon icon={industry.icon} />
              </div>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>

              <div className="industries-card-services">
                <h4>Relevant Services:</h4>
                <div className="industries-card-tags">
                  {industry.services.map((service, si) => (
                    <span key={si} className="industries-card-tag">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="industries-card-value">
                <FontAwesomeIcon icon={faCheckCircle} />
                <p>{industry.value}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
