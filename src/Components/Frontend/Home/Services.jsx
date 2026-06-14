
import React, { useState } from 'react';
import { Typography, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCode, faShareAlt, faBullseye, faBullhorn, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';

const servicesData = [
  {
    id: '01',
    title: 'WordPress',
    icon: faWordpress,
    summary: 'Fast, secure WordPress sites with custom themes, plugins, and easy content management.',
    details: 'We build fully custom WordPress websites tailored to your brand — from theme design and plugin integration to WooCommerce setup, speed optimization, and security hardening. Your team gets full CMS training so managing content is effortless.',
  },
  {
    id: '02',
    title: 'React Web Development',
    icon: faCode,
    summary: 'Modern React websites with smooth interactions, fast performance, and scalable components.',
    details: 'We create blazing-fast React single-page applications with component-based architecture, API integration, real-time data handling, and responsive design across all devices. Every build is SEO-optimized and production-ready.',
  },
  {
    id: '03',
    title: 'SEO Services',
    icon: faSearch,
    summary: 'SEO strategy and technical optimization to lift rankings and qualified traffic.',
    details: 'We run comprehensive technical audits, keyword research, on-page optimization, content strategy, and authority-building link campaigns. Monthly reports with actionable insights ensure your rankings keep climbing.',
  },
  {
    id: '04',
    title: 'AI Ads & Marketing',
    icon: faRobot,
    summary: 'AI-assisted ad campaigns that target the right audience and optimize results.',
    details: 'We leverage machine learning for audience targeting, automated bid optimization, A/B testing with AI-driven creative variations, and predictive analytics for budget allocation across Google and Meta platforms.',
  },
  {
    id: '05',
    title: 'Digital Marketing',
    icon: faBullhorn,
    summary: 'Full-funnel digital marketing to grow visibility, engagement, and revenue.',
    details: 'We deliver complete marketing strategy including brand positioning, email marketing funnels, content marketing, conversion rate optimization, and analytics dashboards to track every metric that matters.',
  },
  {
    id: '06',
    title: 'Social Media',
    icon: faShareAlt,
    summary: 'Social media strategy and management that builds community and drives traffic.',
    details: 'We plan platform-specific content calendars, manage communities, run paid social campaigns, coordinate influencer outreach, and deliver growth analytics to expand your brand\'s organic footprint.',
  },
];

const Services = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [revealedIds, setRevealedIds] = useState({});

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setRevealedIds((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.service-card');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="services-section reveal">
      <div className="services-header">
        <Typography.Title level={2}>Our Digital Services</Typography.Title>
        <Typography.Paragraph>
          A focused menu of growth services from our web development agency and SEO services agency, designed to scale with your business. Each service blends strategy, design,
          and execution to deliver measurable results.
        </Typography.Paragraph>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => {
          const isExpanded = expandedId === service.id;
          const isRevealed = revealedIds[service.id];
          return (
            <article 
              className={`service-card reveal ${isRevealed ? 'is-visible' : ''} ${isExpanded ? 'expanded-card' : ''}`} 
              style={{ transitionDelay: `${index * 80}ms` }}
              key={service.id}
              data-id={service.id}
            >
              <div className="service-title">
                <div className="service-icon-num">
                  <span className="num-badge">{service.id}</span>
                  <FontAwesomeIcon icon={service.icon} className="service-icon-glyph" />
                </div>
                <h3>{service.title}</h3>
              </div>
              
              <Typography.Paragraph className={`ser2 ${isExpanded ? 'expanded' : ''}`}>
                {isExpanded ? service.details : service.summary}
              </Typography.Paragraph>
              
              <div className="service-actions">
                <Button 
                  type="text" 
                  onClick={() => toggleExpand(service.id)}
                  className="learn-more-btn"
                >
                  {isExpanded ? 'Show Less' : 'Learn More'}
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
