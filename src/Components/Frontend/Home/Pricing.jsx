import React from 'react'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Launch Site',
    note: 'Perfect for new businesses that need a fast, polished web presence.',
    features: ['1 landing page', 'Responsive design', 'Basic SEO setup', 'Launch-ready in days'],
  },
  {
    name: 'Business Site',
    note: 'Best for teams that need multiple pages and strong conversion flow.',
    features: ['Up to 5 pages', 'Custom UI system', 'Conversion copy edits', 'Speed optimization'],
    highlighted: true,
  },
  {
    name: 'Scale Site',
    note: 'For brands that want a full website experience and ongoing growth.',
    features: ['Unlimited pages', 'Advanced SEO', 'Analytics + tracking', 'Ongoing support'],
  },
]

const Pricing = () => {
  return (
    <section className="home-section pricing-section reveal">
      <div className="section-header">
        <Typography.Title level={2}>Simple Pricing for Web Development & SEO Services</Typography.Title>
        <Typography.Paragraph>
          Choose a plan that fits your stage. Our digital marketing company tailors scopes quickly after a discovery call.
        </Typography.Paragraph>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <article
            className={`pricing-card reveal ${plan.highlighted ? 'highlighted' : ''}`}
            key={plan.name}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <div>
              <h3>{plan.name}</h3>
              <p className="pricing-note">{plan.note}</p>
            </div>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="pricing-cta"
            >
              Book a call
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Pricing
