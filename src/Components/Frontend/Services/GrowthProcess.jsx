import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBullseye,
  faTachometerAlt,
  faLink,
  faFileAlt,
  faChartBar,
  faSync,
} from '@fortawesome/free-solid-svg-icons';

const processSteps = [
  {
    num: '01',
    icon: faSearch,
    title: 'Technical SEO Audit',
    description:
      'We perform a comprehensive technical audit of your website covering site speed, crawlability, indexation, mobile usability, Core Web Vitals, structured data, and security. Every issue is prioritized by impact.',
    detail: 'Our audit covers 200+ technical SEO factors to identify opportunities for immediate improvement.',
  },
  {
    num: '02',
    icon: faBullseye,
    title: 'Keyword Research & Strategy',
    description:
      'Using advanced keyword research tools, we identify high-value keywords for your target markets. We analyze search volume, competition, user intent, and business relevance to build a focused keyword strategy.',
    detail: 'We research keywords across multiple markets including USA, Canada, UK, Germany, and the Netherlands.',
  },
  {
    num: '03',
    icon: faFileAlt,
    title: 'On-Page Optimization',
    description:
      'We optimize every page for target keywords including title tags, meta descriptions, heading structure, internal linking, image optimization, and content enhancement. Each page is crafted to satisfy both users and search engines.',
    detail: 'On-page optimization follows Google E-E-A-T guidelines for maximum search visibility.',
  },
  {
    num: '04',
    icon: faTachometerAlt,
    title: 'Performance Optimization',
    description:
      'We optimize page speed, Core Web Vitals, lazy loading, code splitting, and server response times. Fast-loading pages improve both user experience and search rankings.',
    detail: 'We target LCP under 2.5s, FID under 100ms, and CLS under 0.1 for all pages.',
  },
  {
    num: '05',
    icon: faLink,
    title: 'Link Building & Authority',
    description:
      'Through strategic outreach, content marketing, and digital PR, we build high-quality backlinks from authoritative websites in your industry. This strengthens your domain authority and improves rankings.',
    detail: 'Our link building follows white-hat practices that comply with Google guidelines.',
  },
  {
    num: '06',
    icon: faChartBar,
    title: 'Analytics & Reporting',
    description:
      'We set up comprehensive analytics tracking and provide monthly reports with actionable insights. You will see exactly how your rankings, traffic, and conversions are improving over time.',
    detail: 'Reports include ranking movements, traffic trends, conversion data, and ROI analysis.',
  },
  {
    num: '07',
    icon: faSync,
    title: 'Continuous Optimization',
    description:
      'SEO is an ongoing process. We continuously monitor algorithm updates, analyze competitor changes, and refine our strategies to maintain and improve your rankings over time.',
    detail: 'Monthly strategy reviews ensure your SEO investment continues to deliver growing returns.',
  },
];

const GrowthProcess = () => {
  return (
    <section className="growth-process-section">
      <div className="growth-process-container">
        <div className="growth-process-header reveal-blur">
          <span className="about-label">SEO & Growth</span>
          <h2>
            Our SEO & Digital <span className="heading-accent">Growth Process</span>
          </h2>
          <p>
            A proven, systematic approach to improving your search rankings, driving organic traffic,
            and converting visitors into customers. Our SEO process is designed for businesses
            targeting local and international markets.
          </p>
        </div>

        <div className="growth-process-grid">
          {processSteps.map((step, index) => (
            <article
              key={index}
              className="growth-process-card reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="growth-process-card-num">{step.num}</div>
              <div className="growth-process-card-icon">
                <FontAwesomeIcon icon={step.icon} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <span className="growth-process-card-detail">{step.detail}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthProcess;
