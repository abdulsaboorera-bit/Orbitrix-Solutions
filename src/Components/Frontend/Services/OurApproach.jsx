import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faPencilRuler,
  faCode,
  faRocket,
  faChartLine,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';

const steps = [
  {
    num: '01',
    icon: faSearch,
    title: 'Discovery & Research',
    description:
      'We begin every project with thorough research — understanding your business goals, target audience, competitors, and market landscape. This foundation ensures every technical and strategic decision is aligned with your growth objectives.',
    bullets: [
      'Business goals and KPI identification',
      'Target audience and market analysis',
      'Competitor benchmarking',
      'Technical requirements gathering',
    ],
  },
  {
    num: '02',
    icon: faPencilRuler,
    title: 'Strategy & Planning',
    description:
      'Based on our research, we develop a comprehensive strategy that outlines the technical architecture, design approach, content plan, and SEO framework. Every milestone is mapped to deliverables with clear timelines.',
    bullets: [
      'Technical architecture documentation',
      'UI/UX wireframes and prototypes',
      'SEO keyword mapping and content strategy',
      'Project timeline and milestone planning',
    ],
  },
  {
    num: '03',
    icon: faCode,
    title: 'Development & Design',
    description:
      'Our frontend developers build clean, performant code using modern frameworks like React and WordPress. We follow component-based architecture, semantic HTML, and accessibility standards to ensure your website is fast and inclusive.',
    bullets: [
      'Component-based frontend development',
      'Responsive design implementation',
      'Performance optimization from day one',
      'Accessibility (WCAG) compliance',
    ],
  },
  {
    num: '04',
    icon: faCogs,
    title: 'Testing & Quality Assurance',
    description:
      'Before launch, every project undergoes rigorous testing across browsers, devices, and screen sizes. We validate Core Web Vitals, SEO crawlability, accessibility, and security to ensure everything performs flawlessly.',
    bullets: [
      'Cross-browser and cross-device testing',
      'Core Web Vitals validation',
      'SEO audit and crawl testing',
      'Performance and security testing',
    ],
  },
  {
    num: '05',
    icon: faRocket,
    title: 'Launch & Deployment',
    description:
      'We handle the complete deployment process including DNS configuration, SSL setup, CDN integration, and analytics tracking. Your website goes live with all SEO fundamentals and monitoring tools in place.',
    bullets: [
      'Production deployment and DNS setup',
      'SSL and CDN configuration',
      'Analytics and tracking implementation',
      'Search console and sitemap submission',
    ],
  },
  {
    num: '06',
    icon: faChartLine,
    title: 'Optimization & Growth',
    description:
      'Post-launch, we continuously monitor performance, analyze user behavior, and optimize for better results. Our ongoing SEO, marketing, and automation services ensure your digital presence keeps improving.',
    bullets: [
      'Performance monitoring and optimization',
      'SEO ranking tracking and content updates',
      'A/B testing and conversion rate optimization',
      'Regular strategy reviews and reporting',
    ],
  },
];

const OurApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        <div className="approach-header reveal-blur">
          <span className="about-label">Our Process</span>
          <h2>
            Our Frontend <span className="heading-accent">Development Approach</span>
          </h2>
          <p>
            We follow a structured, transparent process that ensures every project is delivered
            on time, within scope, and optimized for performance, SEO, and user experience.
          </p>
        </div>

        <div className="approach-flow">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <article
                className="approach-step reveal"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="approach-step-badge">
                  <FontAwesomeIcon icon={step.icon} className="approach-step-icon" />
                </div>
                <div className="approach-step-content">
                  <div className="approach-step-header">
                    <span className="approach-step-num">Step {step.num}</span>
                    <h3>{step.title}</h3>
                  </div>
                  <p className="approach-step-description">{step.description}</p>
                  <ul className="approach-step-bullets">
                    {step.bullets.map((bullet, bi) => (
                      <li key={bi}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
              {index < steps.length - 1 && (
                <div className="approach-connector" aria-hidden="true">
                  <FontAwesomeIcon icon={faCogs} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
