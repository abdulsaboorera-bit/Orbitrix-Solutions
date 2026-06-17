import React from 'react'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const plans = [
  {
    index: '01',
    name: 'Launch Site',
    note: 'Perfect for new businesses that need a fast, polished web presence.',
    features: ['1 landing page', 'Responsive design', 'Basic SEO setup', 'Launch-ready in days'],
  },
  {
    index: '02',
    name: 'Business Site',
    note: 'Best for teams that need multiple pages and strong conversion flow.',
    features: ['Up to 5 pages', 'Custom UI system', 'Conversion copy edits', 'Speed optimization'],
    highlighted: true,
  },
  {
    index: '03',
    name: 'Scale Site',
    note: 'For brands that want a full website experience and ongoing growth.',
    features: ['Unlimited pages', 'Advanced SEO', 'Analytics + tracking', 'Ongoing support'],
  },
]

const Pricing = () => {
  return (
    <section className="home-section pricing-section reveal-blur" id="pricing">
      <div className="section-header reveal-blur">
        <span className="about-label">PRICING</span>
        <Typography.Title level={2}>Simple Pricing Plans</Typography.Title>
        <Typography.Paragraph>
          Choose a plan that fits your stage. We tailor scopes quickly after a discovery call.
        </Typography.Paragraph>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <article
            className={`pricing-card reveal-scale ${plan.highlighted ? 'highlighted' : ''}`}
            key={plan.name}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <div className="pricing-card-header">
              <span className="pricing-card-index">{plan.index}</span>
              <h3>{plan.name}</h3>
              <p className="pricing-note">{plan.note}</p>
            </div>

            <div className="pricing-card-divider"></div>

            <ul className="pricing-card-features">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span className="pricing-check">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link to="/contact" className="pricing-cta">
              <span>Book a call</span>
              <FontAwesomeIcon icon={faArrowRight} className="pricing-cta-arrow" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Pricing
