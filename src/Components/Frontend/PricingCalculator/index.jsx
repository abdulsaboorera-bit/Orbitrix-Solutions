import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import SEO from '../../SEO';
import Footer from '../../Footer';
import './PricingCalculator.css';

const services = [
  { id: 'web', label: 'Web Development' },
  { id: 'seo', label: 'SEO Services' },
  { id: 'marketing', label: 'Digital Marketing' },
  { id: 'ai', label: 'AI Automation' },
  { id: 'social', label: 'Social Media' },
];

const businessSizes = [
  { id: 'startup', label: 'Startup' },
  { id: 'small', label: 'Small Business' },
  { id: 'medium', label: 'Medium Enterprise' },
  { id: 'large', label: 'Large Enterprise' },
];

const featuresList = [
  { id: 'ecommerce', label: 'E-commerce Store' },
  { id: 'blog', label: 'Blog / CMS' },
  { id: 'analytics', label: 'Analytics Setup' },
  { id: 'chat', label: 'Live Chat / Chatbot' },
  { id: 'booking', label: 'Booking System' },
  { id: 'email', label: 'Email Marketing' },
  { id: 'social-int', label: 'Social Integration' },
  { id: 'payments', label: 'Payment Gateway' },
  { id: 'multilingual', label: 'Multi-language' },
  { id: 'admin', label: 'Admin Dashboard' },
];

const basePrices = {
  web: { startup: [2000, 5000], small: [5000, 12000], medium: [12000, 30000], large: [30000, 80000] },
  seo: { startup: [800, 2000], small: [2000, 4500], medium: [4500, 10000], large: [10000, 25000] },
  marketing: { startup: [1000, 3000], small: [3000, 7000], medium: [7000, 18000], large: [18000, 50000] },
  ai: { startup: [3000, 8000], small: [8000, 20000], medium: [20000, 50000], large: [50000, 120000] },
  social: { startup: [500, 1500], small: [1500, 3500], medium: [3500, 8000], large: [8000, 20000] },
};

const featureCosts = {
  ecommerce: 2000,
  blog: 800,
  analytics: 500,
  chat: 1200,
  booking: 1500,
  email: 600,
  'social-int': 400,
  payments: 1800,
  multilingual: 2000,
  admin: 3000,
};

const timelines = {
  web: { startup: '4-6 weeks', small: '6-10 weeks', medium: '10-16 weeks', large: '16-24 weeks' },
  seo: { startup: '3-6 months', small: '4-8 months', medium: '6-12 months', large: '8-14 months' },
  marketing: { startup: '3-6 months', small: '4-8 months', medium: '6-12 months', large: '8-14 months' },
  ai: { startup: '6-10 weeks', small: '8-14 weeks', medium: '12-20 weeks', large: '16-28 weeks' },
  social: { startup: '2-4 weeks', small: '3-6 weeks', medium: '4-8 weeks', large: '6-12 weeks' },
};

const includes = {
  web: ['Custom design', 'Responsive development', 'SEO-ready structure', 'Performance optimization'],
  seo: ['Technical audit', 'Keyword research', 'On-page optimization', 'Monthly reporting'],
  marketing: ['Strategy development', 'Campaign management', 'Analytics & reporting', 'A/B testing'],
  ai: ['Process analysis', 'Custom AI solution', 'Integration & testing', 'Ongoing support'],
  social: ['Content calendar', 'Post creation', 'Community management', 'Monthly analytics'],
};

const formatCurrency = (num) => {
  if (num >= 1000) return `$${(num / 1000).toFixed(num % 1000 === 0 ? 0 : 1)}K`;
  return `$${num}`;
};

const PricingCalculator = () => {
  const [service, setService] = useState('web');
  const [businessSize, setBusinessSize] = useState('startup');
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const toggleFeature = (id) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const estimate = useMemo(() => {
    const base = basePrices[service][businessSize];
    const featureExtra = selectedFeatures.reduce((sum, f) => sum + (featureCosts[f] || 0), 0);
    const low = base[0] + Math.round(featureExtra * 0.8);
    const high = base[1] + Math.round(featureExtra * 1.2);
    return { low, high, timeline: timelines[service][businessSize], serviceLabel: services.find(s => s.id === service)?.label };
  }, [service, businessSize, selectedFeatures]);

  const included = includes[service] || [];

  return (
    <div className="pricing-calc-page">
      <SEO
        title="Pricing Calculator | Get an Instant Estimate | Orbitrix Solutions"
        description="Use our free pricing calculator to estimate the cost of web development, SEO, digital marketing, and AI automation services for your business."
      />

      <section className="pricing-calc-hero">
        <div className="about-label">PRICING CALCULATOR</div>
        <h1>Estimate Your Project Cost</h1>
        <p>
          Select your service, business size, and needed features to get an instant estimate. Every project is unique — let's find the right fit for you.
        </p>
      </section>

      <div className="pricing-calc-main">
        <div className="pricing-calc-form">
          <h2>Configure Your Project</h2>

          <div className="pricing-calc-group">
            <span className="pricing-calc-label">Service Type</span>
            <div className="pricing-calc-options">
              {services.map((s) => (
                <button
                  key={s.id}
                  className={`pricing-calc-option ${service === s.id ? 'selected' : ''}`}
                  onClick={() => setService(s.id)}
                  type="button"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pricing-calc-group">
            <span className="pricing-calc-label">Business Size</span>
            <div className="pricing-calc-options">
              {businessSizes.map((b) => (
                <button
                  key={b.id}
                  className={`pricing-calc-option ${businessSize === b.id ? 'selected' : ''}`}
                  onClick={() => setBusinessSize(b.id)}
                  type="button"
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pricing-calc-group">
            <span className="pricing-calc-label">Additional Features</span>
            <div className="pricing-calc-features">
              {featuresList.map((f) => (
                <div
                  key={f.id}
                  className={`pricing-calc-feature ${selectedFeatures.includes(f.id) ? 'checked' : ''}`}
                  onClick={() => toggleFeature(f.id)}
                  role="checkbox"
                  aria-checked={selectedFeatures.includes(f.id)}
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') toggleFeature(f.id); }}
                >
                  <div className="pricing-calc-checkbox">
                    {selectedFeatures.includes(f.id) && <FontAwesomeIcon icon={faCheck} />}
                  </div>
                  {f.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pricing-calc-summary">
          <div className="pricing-calc-summary-card">
            <h3>Project Summary</h3>

            <div className="pricing-calc-summary-row">
              <span className="pricing-calc-summary-label">Service</span>
              <span className="pricing-calc-summary-value">{estimate.serviceLabel}</span>
            </div>
            <div className="pricing-calc-summary-row">
              <span className="pricing-calc-summary-label">Business Size</span>
              <span className="pricing-calc-summary-value">{businessSizes.find(b => b.id === businessSize)?.label}</span>
            </div>
            <div className="pricing-calc-summary-row">
              <span className="pricing-calc-summary-label">Features</span>
              <span className="pricing-calc-summary-value">{selectedFeatures.length} selected</span>
            </div>
            <div className="pricing-calc-summary-row">
              <span className="pricing-calc-summary-label">Timeline</span>
              <span className="pricing-calc-summary-value">{estimate.timeline}</span>
            </div>

            <div className="pricing-calc-price-block">
              <div className="pricing-calc-price-label">Estimated Cost Range</div>
              <div className="pricing-calc-price-range">
                {formatCurrency(estimate.low)} &ndash; {formatCurrency(estimate.high)}
              </div>
              <div className="pricing-calc-price-note">Final pricing depends on project scope</div>
            </div>

            <div className="pricing-calc-summary-divider" />

            <div className="pricing-calc-includes">
              <h4>What's Included</h4>
              <ul>
                {included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="pricing-calc-summary-divider" />

            <Link to="/contact" className="pricing-calc-cta-btn">
              Get Exact Quote <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PricingCalculator;
