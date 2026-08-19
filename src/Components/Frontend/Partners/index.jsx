import React, { useState, useEffect, useRef } from 'react'
import SEO from '../../SEO'
import Footer from '../../Footer'
import './index.css'

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqgpzdq"

const partnershipTypes = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Agency Partnership',
    subtitle: 'White-Label Our Services',
    description: 'Offer our web development, SEO, and digital marketing services under your own brand. We handle the work, you keep the client relationship and earn recurring revenue.',
    features: [
      'White-label all services under your brand',
      'Dedicated account manager',
      'Priority turnaround times',
      'Custom pricing and margins',
      'Monthly performance reports',
    ],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
      </svg>
    ),
    title: 'Technology Partnership',
    subtitle: 'Integrate & Co-Build',
    description: 'Integrate Orbitrix solutions with your platform or co-develop digital products. Perfect for SaaS companies, tech startups, and software agencies looking to expand their offerings.',
    features: [
      'API integration and custom development',
      'Co-branded solutions and products',
      'Technical consultation and support',
      'Joint product development',
      'Shared innovation roadmap',
    ],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M16 8l-8 8"/><path d="M8.5 8.5a3.5 3.5 0 0 1 5 5"/><path d="M15.5 15.5a3.5 3.5 0 0 1-5-5"/>
      </svg>
    ),
    title: 'Referral Partnership',
    subtitle: 'Earn Commissions',
    description: 'Refer clients to Orbitrix Solutions and earn generous commissions for every successful project. No expertise required — just share our services with your network.',
    features: [
      'Up to 20% commission on first project',
      'Recurring revenue for ongoing clients',
      'Real-time tracking dashboard',
      'Marketing materials provided',
      'Dedicated referral portal',
    ],
  },
]

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Recurring Revenue',
    text: 'Earn ongoing income through revenue sharing, white-label margins, or referral commissions on every project.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Dedicated Support',
    text: 'Get a dedicated partner manager and priority support channel. We treat your success as our own.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Co-Marketing',
    text: 'Benefit from joint marketing campaigns, co-branded content, and shared promotional opportunities across our channels.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'Training & Resources',
    text: 'Access comprehensive training materials, sales playbooks, and technical documentation to help you succeed.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Quality Guarantee',
    text: 'All work is backed by our quality guarantee. Your clients receive the same high standard we deliver to our direct customers.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Global Reach',
    text: 'Partner with a team that serves clients across the USA, UK, Canada, Europe, and Dubai. Expand your market reach globally.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Apply',
    description: 'Fill out the partner application form below. Tell us about your company, your audience, and how you envision the partnership.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Get Approved',
    description: 'Our partnerships team reviews your application within 3-5 business days. We look for alignment in values and market fit.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Start Earning',
    description: 'Once approved, you get access to your partner dashboard, marketing materials, and dedicated support. Start referring or selling immediately.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Scale Together',
    description: 'As you grow, so do we. Unlock higher commission tiers, exclusive partnerships, and co-investment opportunities.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
]

const testimonials = [
  {
    quote: "Partnering with Orbitrix has been transformative for our agency. We've expanded our service offerings without hiring a single developer. Their white-label work is flawless.",
    name: "Sarah Mitchell",
    role: "CEO, Digital Pulse Agency",
    location: "New York, USA",
  },
  {
    quote: "The referral program is incredibly straightforward. We earn recurring commissions for simply connecting our clients with Orbitrix. Their team always delivers exceptional results.",
    name: "James Chen",
    role: "Managing Director, GrowthPath Consulting",
    location: "London, UK",
  },
  {
    quote: "We integrated Orbitrix's development capabilities with our SaaS platform. The co-development process was seamless, and our clients love the enhanced features.",
    name: "Priya Sharma",
    role: "CTO, TechFlow Solutions",
    location: "Toronto, Canada",
  },
]

const useReveal = () => {
  useEffect(() => {
    const nodes = document.querySelectorAll('.pt-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    )
    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])
}

const Partners = () => {
  useReveal()
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    partnershipType: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const validate = () => {
    const errs = {}
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required'
    if (!formData.contactPerson.trim()) errs.contactPerson = 'Contact person is required'
    if (!formData.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Enter a valid email'
    if (!formData.partnershipType) errs.partnershipType = 'Please select a partnership type'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')
    setErrorMsg('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'partner-application',
          _subject: `Partner Application: ${formData.companyName} - ${formData.partnershipType}`,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ companyName: '', contactPerson: '', email: '', phone: '', partnershipType: '', message: '' })
        setErrors({})
      } else {
        const data = await response.json()
        throw new Error(data.error || 'Something went wrong. Please try again later.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg(err?.message || 'Something went wrong. Please try again later.')
    }
  }

  return (
    <main id="main-content">
      <SEO
        title="Partner With Orbitrix Solutions | Agency, Technology & Referral Partnerships"
        description="Join the Orbitrix Solutions partner network. White-label our services, integrate with your platform, or earn referral commissions. Grow your business with us."
        keywords="Orbitrix Solutions partnership, agency partner, referral program, white label web development, technology partner, digital agency partnership"
      />

      {/* ─── HERO ─── */}
      <section className="pt-hero">
        <div className="pt-hero-bg" aria-hidden="true">
          <div className="pt-orb pt-orb-1" />
          <div className="pt-orb pt-orb-2" />
        </div>
        <div className="pt-hero-content">
          <span className="pt-hero-badge">Partner Program</span>
          <h1 className="pt-hero-title">
            Partner With
            <br />
            <span className="pt-hero-gradient">Orbitrix Solutions</span>
          </h1>
          <p className="pt-hero-sub">
            Join our partner network and grow your business. We provide the expertise,
            technology, and support — you bring the clients and relationships.
          </p>
          <div className="pt-hero-stats">
            <div className="pt-stat">
              <strong>20%</strong>
              <span>Commission Rate</span>
            </div>
            <div className="pt-stat">
              <strong>3-5</strong>
              <span>Day Approval</span>
            </div>
            <div className="pt-stat">
              <strong>100%</strong>
              <span>White-Label Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PARTNERSHIP TYPES ─── */}
      <section className="pt-section">
        <div className="pt-container">
          <div className="pt-section-header pt-reveal">
            <span className="pt-label">Partnership Models</span>
            <h2>Choose Your Partnership Type</h2>
            <p>We offer flexible partnership models designed to align with your business goals and capabilities.</p>
          </div>
          <div className="pt-types-grid">
            {partnershipTypes.map((type, i) => (
              <div className="pt-type-card pt-reveal" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="pt-type-icon">{type.icon}</div>
                <div className="pt-type-content">
                  <span className="pt-type-badge">{type.subtitle}</span>
                  <h3>{type.title}</h3>
                  <p className="pt-type-desc">{type.description}</p>
                  <ul className="pt-type-features">
                    {type.features.map((feature, j) => (
                      <li key={j}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="pt-section pt-benefits-section">
        <div className="pt-container">
          <div className="pt-section-header pt-reveal">
            <span className="pt-label">Why Partner With Us</span>
            <h2>Benefits of the Orbitrix Partner Program</h2>
            <p>We invest in our partners because your success is our success.</p>
          </div>
          <div className="pt-benefits-grid">
            {benefits.map((benefit, i) => (
              <div className="pt-benefit-card pt-reveal" key={i}>
                <div className="pt-benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="pt-section pt-steps-section">
        <div className="pt-container">
          <div className="pt-section-header pt-reveal">
            <span className="pt-label">How It Works</span>
            <h2>Start Partnering in 4 Simple Steps</h2>
            <p>Our streamlined onboarding process gets you started quickly.</p>
          </div>
          <div className="pt-steps-grid">
            {steps.map((step, i) => (
              <div className="pt-step-card pt-reveal" key={i}>
                <div className="pt-step-num">{step.num}</div>
                <div className="pt-step-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                {i < steps.length - 1 && <div className="pt-step-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="pt-section pt-testimonials-section">
        <div className="pt-container">
          <div className="pt-section-header pt-reveal">
            <span className="pt-label">Partner Stories</span>
            <h2>What Our Partners Say</h2>
          </div>
          <div className="pt-testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="pt-testimonial-card pt-reveal" key={i}>
                <div className="pt-testimonial-quote">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3z"/>
                  </svg>
                </div>
                <p className="pt-testimonial-text">{t.quote}</p>
                <div className="pt-testimonial-author">
                  <div className="pt-testimonial-avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                    <span className="pt-testimonial-location">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPLICATION FORM ─── */}
      <section className="pt-section pt-form-section" ref={formRef}>
        <div className="pt-container">
          <div className="pt-section-header pt-reveal">
            <span className="pt-label">Apply Now</span>
            <h2>Become an Orbitrix Partner</h2>
            <p>Fill out the form below and our partnerships team will review your application within 3-5 business days.</p>
          </div>

          {status === 'success' ? (
            <div className="pt-form-success pt-reveal">
              <div className="pt-success-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Application Submitted!</h3>
              <p>Thank you for your interest in partnering with Orbitrix Solutions. We will review your application and get back to you within 3-5 business days.</p>
              <button className="pt-submit-btn" onClick={() => setStatus('idle')}>
                Submit Another Application
              </button>
            </div>
          ) : (
            <form className="pt-form pt-reveal" onSubmit={handleSubmit} noValidate>
              <div className="pt-form-grid">
                <div className="pt-field">
                  <label htmlFor="pt-company">Company Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="pt-company"
                    name="companyName"
                    placeholder="Your Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={errors.companyName ? 'has-error' : ''}
                  />
                  {errors.companyName && <span className="pt-field-error">{errors.companyName}</span>}
                </div>
                <div className="pt-field">
                  <label htmlFor="pt-contact">Contact Person <span className="required">*</span></label>
                  <input
                    type="text"
                    id="pt-contact"
                    name="contactPerson"
                    placeholder="John Smith"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className={errors.contactPerson ? 'has-error' : ''}
                  />
                  {errors.contactPerson && <span className="pt-field-error">{errors.contactPerson}</span>}
                </div>
                <div className="pt-field">
                  <label htmlFor="pt-email">Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    id="pt-email"
                    name="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'has-error' : ''}
                  />
                  {errors.email && <span className="pt-field-error">{errors.email}</span>}
                </div>
                <div className="pt-field">
                  <label htmlFor="pt-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="pt-phone"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="pt-field pt-field-full">
                  <label htmlFor="pt-type">Partnership Type <span className="required">*</span></label>
                  <select
                    id="pt-type"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    className={errors.partnershipType ? 'has-error' : ''}
                  >
                    <option value="">Select a partnership type</option>
                    <option value="agency">Agency Partnership (White-Label)</option>
                    <option value="technology">Technology Partnership</option>
                    <option value="referral">Referral Partnership</option>
                  </select>
                  {errors.partnershipType && <span className="pt-field-error">{errors.partnershipType}</span>}
                </div>
                <div className="pt-field pt-field-full">
                  <label htmlFor="pt-message">Tell Us About Your Business</label>
                  <textarea
                    id="pt-message"
                    name="message"
                    rows="5"
                    placeholder="Tell us about your company, your target market, and how you envision the partnership..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {status === 'error' && (
                <div className="pt-form-alert pt-error-alert">
                  {errorMsg || 'Something went wrong. Please try again or email us directly at '}
                  {status === 'error' && <a href="mailto:info@orbitrixsolutions.com">info@orbitrixsolutions.com</a>}
                </div>
              )}

              <div className="pt-form-actions">
                <button type="submit" className="pt-submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <>
                      <span className="pt-spinner" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                      </svg>
                    </>
                  )}
                </button>
              </div>

              <p className="pt-trust-text">
                Your information is secure and will only be used to evaluate your partnership application.
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Partners
