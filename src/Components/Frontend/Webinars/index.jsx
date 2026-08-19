import React, { useState, useEffect, useRef } from 'react'
import SEO from '../../SEO'
import Footer from '../../Footer'
import './index.css'

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqgpzdq"

const upcomingWebinars = [
  {
    id: 'ai-transform-business',
    title: 'How AI Can Transform Your Business in 2026',
    date: 'September 15, 2026',
    time: '2:00 PM GMT',
    duration: '60 minutes',
    description: 'Discover practical ways to leverage artificial intelligence to automate workflows, improve customer experiences, and drive growth in your business.',
    topics: ['AI Automation', 'Business Intelligence', 'Cost Reduction'],
    speaker: 'Orbitrix AI Team',
    spots: 47,
  },
  {
    id: 'seo-masterclass',
    title: 'SEO Masterclass: Rank #1 on Google',
    date: 'September 22, 2026',
    time: '11:00 AM GMT',
    duration: '75 minutes',
    description: 'Learn advanced SEO strategies including technical optimization, content clustering, link building, and AI-powered keyword research to dominate search rankings.',
    topics: ['Technical SEO', 'Content Strategy', 'Link Building'],
    speaker: 'Orbitrix SEO Experts',
    spots: 32,
  },
  {
    id: 'website-converts',
    title: 'Building a Website That Converts',
    date: 'October 5, 2026',
    time: '3:00 PM GMT',
    duration: '60 minutes',
    description: 'Master the art of conversion-focused web design. Learn how to create landing pages, optimize user flows, and implement CRO best practices that turn visitors into customers.',
    topics: ['CRO', 'UX Design', 'Landing Pages'],
    speaker: 'Orbitrix Design Team',
    spots: 55,
  },
]

const pastWebinars = [
  {
    title: 'Digital Marketing Trends You Can\'t Ignore in 2026',
    date: 'July 10, 2026',
    views: 1240,
    duration: '58 min',
  },
  {
    title: 'Social Media Strategy: From Zero to 10K Followers',
    date: 'June 18, 2026',
    views: 890,
    duration: '62 min',
  },
  {
    title: 'Google Analytics 4: Complete Setup & Reporting Guide',
    date: 'May 25, 2026',
    views: 2100,
    duration: '70 min',
  },
]

const topicsCovered = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1.27c.34-.6.99-1 1.73-1a2 2 0 1 1 0 4c-.74 0-1.39-.4-1.73-1H20a7 7 0 0 1-7 7v1.27c.6.34 1 .99 1 1.73a2 2 0 1 1-4 0c0-.74.4-1.39 1-1.73V20a7 7 0 0 1-7-7H2.73c-.34.6-.99 1-1.73 1a2 2 0 1 1 0-4c.74 0 1.39.4 1.73 1H4a7 7 0 0 1 7-7V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
      </svg>
    ),
    title: 'AI & Automation',
    description: 'Artificial intelligence, machine learning, chatbots, and workflow automation.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'SEO',
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
    title: 'Social Media',
    description: 'Platform strategies, community management, influencer marketing, and analytics.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>
      </svg>
    ),
    title: 'Analytics',
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
    webinars: [],
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Enter a valid email'
    if (formData.webinars.length === 0) errs.webinars = 'Please select at least one webinar'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleWebinarToggle = (webinarId) => {
    setFormData((prev) => ({
      ...prev,
      webinars: prev.webinars.includes(webinarId)
        ? prev.webinars.filter((id) => id !== webinarId)
        : [...prev.webinars, webinarId],
    }))
    if (errors.webinars) setErrors((prev) => ({ ...prev, webinars: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')
    setErrorMsg('')

    try {
      const webinarLabels = formData.webinars.map((id) => {
        const w = upcomingWebinars.find((w) => w.id === id)
        return w ? w.title : id
      })

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          webinars: webinarLabels.join(', '),
          message: formData.message || 'No additional message',
          type: 'webinar-registration',
          _subject: `Webinar Registration: ${formData.name} - ${webinarLabels.join(', ')}`,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', webinars: [], message: '' })
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
        title="Free Webinars & Resources | Orbitrix Solutions - Learn Digital Skills"
        description="Join free webinars from Orbitrix Solutions on AI, SEO, web development, digital marketing, and analytics. Learn from experts and stay ahead of the digital curve."
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
            Free Webinars
            <br />
            <span className="wb-hero-gradient">&amp; Resources</span>
          </h1>
          <p className="wb-hero-sub">
            Learn from our experts and stay ahead of the digital curve. Join our
            free live webinars on AI, SEO, web development, and digital marketing.
          </p>
          <div className="wb-hero-stats">
            <div className="wb-stat">
              <strong>3</strong>
              <span>Upcoming Webinars</span>
            </div>
            <div className="wb-stat">
              <strong>100%</strong>
              <span>Free to Attend</span>
            </div>
            <div className="wb-stat">
              <strong>4,200+</strong>
              <span>Past Attendees</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── UPCOMING WEBINARS ─── */}
      <section className="wb-section">
        <div className="wb-container">
          <div className="wb-section-header wb-reveal">
            <span className="wb-label">Coming Soon</span>
            <h2>Upcoming Webinars</h2>
            <p>Reserve your spot today. All webinars are free and include live Q&A sessions.</p>
          </div>
          <div className="wb-upcoming-grid">
            {upcomingWebinars.map((webinar, i) => (
              <div className="wb-webinar-card wb-reveal" key={webinar.id} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="wb-webinar-top">
                  <div className="wb-webinar-date-badge">
                    <span className="wb-webinar-month">{webinar.date.split(' ')[0].slice(0, 3).toUpperCase()}</span>
                    <span className="wb-webinar-day">{webinar.date.split(' ')[1].replace(',', '')}</span>
                  </div>
                  <div className="wb-webinar-meta">
                    <span className="wb-webinar-time">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {webinar.time}
                    </span>
                    <span className="wb-webinar-duration">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
                      </svg>
                      {webinar.duration}
                    </span>
                  </div>
                </div>
                <h3 className="wb-webinar-title">{webinar.title}</h3>
                <p className="wb-webinar-desc">{webinar.description}</p>
                <div className="wb-webinar-topics">
                  {webinar.topics.map((topic, j) => (
                    <span className="wb-topic-tag" key={j}>{topic}</span>
                  ))}
                </div>
                <div className="wb-webinar-bottom">
                  <div className="wb-webinar-speaker">
                    <div className="wb-speaker-avatar">{webinar.speaker.charAt(0)}</div>
                    <span>{webinar.speaker}</span>
                  </div>
                  <div className="wb-webinar-spots">
                    <span className="wb-spots-dot" />
                    {webinar.spots} spots left
                  </div>
                </div>
                <button className="wb-register-btn" onClick={() => {
                  formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  handleWebinarToggle(webinar.id)
                }}>
                  Register Free
                  <svg width="14" height="14" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PAST WEBINARS ─── */}
      <section className="wb-section wb-past-section">
        <div className="wb-container">
          <div className="wb-section-header wb-reveal">
            <span className="wb-label">On Demand</span>
            <h2>Past Webinars</h2>
            <p>Missed a live session? Watch the recordings at your convenience.</p>
          </div>
          <div className="wb-past-grid">
            {pastWebinars.map((webinar, i) => (
              <div className="wb-past-card wb-reveal" key={i}>
                <div className="wb-past-thumb">
                  <div className="wb-past-play">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                  <span className="wb-past-duration">{webinar.duration}</span>
                </div>
                <div className="wb-past-content">
                  <h4>{webinar.title}</h4>
                  <div className="wb-past-meta">
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {webinar.date}
                    </span>
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                      </svg>
                      {webinar.views.toLocaleString()} views
                    </span>
                  </div>
                  <button className="wb-watch-btn">
                    Watch Recording
                    <svg width="14" height="14" viewBox="0 0 448 512" fill="currentColor">
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TOPICS COVERED ─── */}
      <section className="wb-section wb-topics-section">
        <div className="wb-container">
          <div className="wb-section-header wb-reveal">
            <span className="wb-label">What We Cover</span>
            <h2>Topics Covered in Our Webinars</h2>
            <p>We cover the full spectrum of digital skills to help you succeed online.</p>
          </div>
          <div className="wb-topics-grid">
            {topicsCovered.map((topic, i) => (
              <div className="wb-topic-card wb-reveal" key={i}>
                <div className="wb-topic-icon">{topic.icon}</div>
                <h4>{topic.title}</h4>
                <p>{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REGISTRATION FORM ─── */}
      <section className="wb-section wb-form-section" ref={formRef}>
        <div className="wb-container">
          <div className="wb-section-header wb-reveal">
            <span className="wb-label">Register Now</span>
            <h2>Reserve Your Spot</h2>
            <p>Fill out the form below to register for upcoming webinars. You'll receive a confirmation email with the join link.</p>
          </div>

          {status === 'success' ? (
            <div className="wb-form-success wb-reveal">
              <div className="wb-success-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Registration Confirmed!</h3>
              <p>Thank you for registering! Check your email for the webinar join link and calendar invite. We look forward to seeing you there.</p>
              <button className="wb-submit-btn" onClick={() => setStatus('idle')}>
                Register for More Webinars
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
                <div className="wb-field wb-field-full">
                  <label>Select Webinars <span className="required">*</span></label>
                  <div className={`wb-checkbox-group ${errors.webinars ? 'has-error' : ''}`}>
                    {upcomingWebinars.map((webinar) => (
                      <label className="wb-checkbox-label" key={webinar.id}>
                        <input
                          type="checkbox"
                          checked={formData.webinars.includes(webinar.id)}
                          onChange={() => handleWebinarToggle(webinar.id)}
                        />
                        <span className="wb-checkbox-custom" />
                        <span className="wb-checkbox-text">
                          <strong>{webinar.title}</strong>
                          <span>{webinar.date} — {webinar.time}</span>
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.webinars && <span className="wb-field-error">{errors.webinars}</span>}
                </div>
                <div className="wb-field wb-field-full">
                  <label htmlFor="wb-message">Additional Message (Optional)</label>
                  <textarea
                    id="wb-message"
                    name="message"
                    rows="3"
                    placeholder="Any specific questions you'd like us to address during the webinar?"
                    value={formData.message}
                    onChange={handleChange}
                  />
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
                      Registering...
                    </>
                  ) : (
                    <>
                      Register for Webinars
                      <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                      </svg>
                    </>
                  )}
                </button>
              </div>

              <p className="wb-trust-text">
                We respect your privacy. No spam — only webinar-related communications.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ─── REQUEST CUSTOM WEBINAR CTA ─── */}
      <section className="wb-section wb-cta-section">
        <div className="wb-container">
          <div className="wb-cta-card wb-reveal">
            <div className="wb-cta-content">
              <span className="wb-cta-badge">Custom Webinars</span>
              <h2>Request a Custom Webinar</h2>
              <p>
                Need a specialized training session for your team? We offer custom webinars
                tailored to your industry, skill level, and business objectives. Our experts
                will create a session that addresses your specific challenges.
              </p>
              <div className="wb-cta-features">
                <div className="wb-cta-feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Tailored to your industry
                </div>
                <div className="wb-cta-feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Interactive Q&A sessions
                </div>
                <div className="wb-cta-feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Recording included
                </div>
              </div>
              <a href="/contact" className="wb-cta-btn">
                Contact Us to Request
                <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
              </a>
            </div>
            <div className="wb-cta-visual">
              <div className="wb-cta-visual-card">
                <div className="wb-cta-visual-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                  </svg>
                </div>
                <h4>Private Team Training</h4>
                <p>Exclusive sessions for your organization with custom curriculum and hands-on workshops.</p>
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
