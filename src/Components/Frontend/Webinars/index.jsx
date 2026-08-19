import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../SEO'
import Footer from '../../Footer'
import './index.css'

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqgpzdq"

const topicsCovered = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1.27c.34-.6.99-1 1.73-1a2 2 0 1 1 0 4c-.74 0-1.39-.4-1.73-1H20a7 7 0 0 1-7 7v1.27c.6.34 1 .99 1 1.73a2 2 0 1 1-4 0c0-.74.4-1.39 1-1.73V20a7 7 0 0 1-7-7H2.73c-.34.6-.99 1-1.73 1a2 2 0 1 1 0-4c.74 0 1.39.4 1.73 1H4a7 7 0 0 1 7-7V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
      </svg>
    ),
    title: 'AI Automation',
    description: 'Artificial intelligence, machine learning, chatbots, and workflow automation.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'SEO Mastery',
    description: 'Search engine optimization, keyword research, technical audits, and ranking strategies.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
      </svg>
    ),
    title: 'Web Development',
    description: 'Modern frameworks, responsive design, performance optimization, and e-commerce.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: 'Digital Marketing',
    description: 'PPC advertising, email marketing, content marketing, and conversion optimization.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    title: 'Social Media Growth',
    description: 'Platform strategies, community management, influencer marketing, and analytics.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>
      </svg>
    ),
    title: 'Analytics & Data',
    description: 'Data tracking, KPI measurement, reporting dashboards, and data-driven decisions.',
  },
]

const useReveal = () => {
  useEffect(() => {
    const nodes = document.querySelectorAll('.wb-reveal')
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

const Webinars = () => {
  useReveal()
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Enter a valid email'
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
          name: formData.name,
          email: formData.email,
          type: 'webinar-notification',
          _subject: `Webinar Notification Request: ${formData.name}`,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '' })
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
        title="Webinars & Resources Coming Soon | Orbitrix Solutions"
        description="Free educational webinars on web development, SEO, AI automation, and digital marketing coming soon from Orbitrix Solutions. Sign up to be notified."
        keywords="Orbitrix Solutions webinars, free digital marketing webinar, SEO masterclass, AI business webinar, web development workshop"
      />

      {/* ─── HERO ─── */}
      <section className="wb-hero">
        <div className="wb-hero-bg" aria-hidden="true">
          <div className="wb-orb wb-orb-1" />
          <div className="wb-orb wb-orb-2" />
          <div className="wb-orb wb-orb-3" />
        </div>
        <div className="wb-hero-content">
          <span className="wb-hero-badge">Free Learning Resources</span>
          <h1 className="wb-hero-title">
            Webinars &amp; Resources
            <br />
            <span className="wb-hero-gradient">Coming Soon</span>
          </h1>
          <p className="wb-hero-sub">
            We're preparing free educational webinars on web development, SEO, AI automation, and digital marketing. Stay tuned.
          </p>
          <div className="wb-hero-stats">
            <div className="wb-stat">
              <strong>100%</strong>
              <span>Free to Attend</span>
            </div>
            <div className="wb-stat">
              <strong>6</strong>
              <span>Topics Covered</span>
            </div>
            <div className="wb-stat">
              <strong>Live Q&amp;A</strong>
              <span>Every Session</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TOPICS COVERED ─── */}
      <section className="wb-section wb-topics-section">
        <div className="wb-container">
          <div className="wb-section-header wb-reveal">
            <span className="wb-label">What We'll Cover</span>
            <h2>Topics Coming in Our Webinars</h2>
            <p>We'll cover the full spectrum of digital skills to help you succeed online.</p>
          </div>
          <div className="wb-topics-grid">
            {topicsCovered.map((topic, i) => (
              <div className="wb-topic-card wb-reveal" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="wb-topic-icon">{topic.icon}</div>
                <h4>{topic.title}</h4>
                <p>{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOTIFY ME FORM ─── */}
      <section className="wb-section wb-form-section" ref={formRef}>
        <div className="wb-container">
          <div className="wb-section-header wb-reveal">
            <span className="wb-label">Stay Updated</span>
            <h2>Get Notified When We Launch</h2>
            <p>Be the first to know when our free webinars go live. No spam — just a quick heads-up when we're ready.</p>
          </div>

          {status === 'success' ? (
            <div className="wb-form-success wb-reveal">
              <div className="wb-success-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>You're on the List!</h3>
              <p>We'll notify you as soon as our webinars are live. Keep an eye on your inbox.</p>
              <button className="wb-submit-btn" onClick={() => setStatus('idle')}>
                Notify Me Again
              </button>
            </div>
          ) : (
            <form className="wb-form wb-reveal" onSubmit={handleSubmit} noValidate>
              <div className="wb-form-grid">
                <div className="wb-field">
                  <label htmlFor="wb-name">Full Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="wb-name"
                    name="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'has-error' : ''}
                  />
                  {errors.name && <span className="wb-field-error">{errors.name}</span>}
                </div>
                <div className="wb-field">
                  <label htmlFor="wb-email">Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    id="wb-email"
                    name="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'has-error' : ''}
                  />
                  {errors.email && <span className="wb-field-error">{errors.email}</span>}
                </div>
              </div>

              {status === 'error' && (
                <div className="wb-form-alert wb-error-alert">
                  {errorMsg || 'Something went wrong. Please try again or email us directly at '}
                  {status === 'error' && <a href="mailto:info@orbitrixsolutions.com">info@orbitrixsolutions.com</a>}
                </div>
              )}

              <div className="wb-form-actions">
                <button type="submit" className="wb-submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <>
                      <span className="wb-spinner" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Notify Me When Webinars Launch
                      <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                      </svg>
                    </>
                  )}
                </button>
              </div>

              <p className="wb-trust-text">
                We respect your privacy. No spam — only webinar-related notifications.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="wb-section wb-cta-section">
        <div className="wb-container">
          <div className="wb-cta-card wb-reveal">
            <div className="wb-cta-content">
              <span className="wb-cta-badge">Explore Now</span>
              <h2>Check Out Our Free Tools</h2>
              <p>
                While you wait for our webinars, explore our free digital tools — website analyzers, SEO checkers, AI prompt generators, and more to help you grow your business today.
              </p>
              <Link to="/tools" className="wb-cta-btn">
                Browse Free Tools
                <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
              </Link>
            </div>
            <div className="wb-cta-visual">
              <div className="wb-cta-visual-card">
                <div className="wb-cta-visual-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                  </svg>
                </div>
                <h4>Free Digital Tools</h4>
                <p>Website analyzers, SEO checkers, AI prompt generators, and more — all free to use.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Webinars
