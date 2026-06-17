import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Footer = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [toast, setToast] = useState('')
  const timeoutRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) { setError('Please enter your email.'); return }
    if (!emailPattern.test(trimmed)) { setError('Enter a valid email address.'); return }
    setError('')
    setToast('Thanks! You are subscribed.')
    setEmail('')
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setToast(''), 3000)
  }

  return (
    <>
      {/* ─── CTA BANNER ─── */}
      <section className="f-cta">
        <div className="f-cta-glow" />
        <div className="f-cta-inner">
          <h2 className="f-cta-title">
            Ready to <span className="f-cta-gradient">Scale Your Business</span>?
          </h2>
          <p className="f-cta-sub">
            Let's build something exceptional together. From concept to launch, our web development agency and digital marketing company deliver digital experiences that drive real growth.
          </p>
          <div className="f-cta-actions">
            <Link to="/contact" className="f-cta-btn primary">
              Start a Project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/projects" className="f-cta-btn ghost">View Our Work</Link>
          </div>
        </div>
      </section>

      {/* ─── MAIN FOOTER ─── */}
      <footer className="f-premium">
        {/* Animated grid pattern */}
        <div className="f-grid-pattern" />
        {/* Floating blurred shapes */}
        <div className="f-float f-float-1" />
        <div className="f-float f-float-2" />
        <div className="f-float f-float-3" />

        <div className="f-container">

          {/* ─── TOP ROW: Brand + Links ─── */}
          <div className="f-top">
            {/* Col 1 — Brand */}
            <div className="f-brand">
              <div className="f-brand-logo-wrap">
                <img src={logo} alt="Orbitrix Solutions" className="f-brand-logo" />
              </div>
              <p className="f-brand-desc">
                Orbitrix Solutions helps businesses grow through premium web development, digital marketing, and IT consulting.
              </p>
              <div className="f-trust-badges">
                <div className="f-trust-badge">
                  <span className="f-trust-num">80+</span>
                  <span className="f-trust-label">Projects Delivered</span>
                </div>
                <div className="f-trust-badge">
                  <span className="f-trust-num">15+</span>
                  <span className="f-trust-label">Global Clients</span>
                </div>
                <div className="f-trust-badge">
                  <span className="f-trust-num">24h</span>
                  <span className="f-trust-label">Fast Response</span>
                </div>
              </div>
              <div className="f-socials">
                <a className="f-social" href="https://www.linkedin.com/in/abdul-saboor-5677643b4/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className="f-social" href="https://github.com/abdulsaboorera-bit" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className="f-social" href="https://www.instagram.com/orbitrix_solutions?igsh=ZGcydzJpMWFteHN6" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="f-social" href="https://wa.me/qr/7GSRQFMD6AMZG1" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>

            {/* Col 2 — Company */}
            <div className="f-col">
              <h4 className="f-col-title">Company</h4>
              <ul className="f-links">
                <li><Link to="/" className="f-link">Home</Link></li>
                <li><Link to="/about" className="f-link">About Us</Link></li>
                <li><Link to="/projects" className="f-link">Projects</Link></li>
                <li><Link to="/contact" className="f-link">Contact Us</Link></li>
                <li><Link to="/terms-and-conditions" className="f-link">Terms &amp; Conditions</Link></li>
              </ul>
            </div>

            {/* Col 3 — Services */}
            <div className="f-col">
              <h4 className="f-col-title">Services</h4>
              <ul className="f-links">
                <li><Link to="/services/wordpress-development" className="f-link">WordPress Development</Link></li>
                <li><Link to="/services/react-development" className="f-link">React Web Development</Link></li>
                <li><Link to="/services/seo-services" className="f-link">SEO Services</Link></li>
                <li><Link to="/services/ai-ads-marketing" className="f-link">AI Ads &amp; Marketing</Link></li>
                <li><Link to="/services/digital-marketing" className="f-link">Digital Marketing</Link></li>
                <li><Link to="/services/social-media-marketing" className="f-link">Social Media Marketing</Link></li>
                <li><Link to="/services/ai-automation-services" className="f-link">AI Automation Services</Link></li>
              </ul>
            </div>

            {/* Col 4 — Contact & Newsletter */}
            <div className="f-col f-col-contact">
              <h4 className="f-col-title">Stay Connected</h4>
              <div className="f-contact-items">
                <div className="f-contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span>info@orbitrixsolutions.com</span>
                </div>
                <div className="f-contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  <span>WhatsApp Us</span>
                </div>
                <div className="f-contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
              <div className="f-newsletter">
                <p className="f-newsletter-label">Get monthly insights on design &amp; growth.</p>
                <form className="f-newsletter-form" onSubmit={handleSubmit} noValidate>
                  <div className="f-newsletter-input-wrap">
                    <input
                      className={`f-newsletter-input ${error ? 'has-error' : ''}`}
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); if (error) setError('') }}
                      aria-invalid={Boolean(error)}
                    />
                    {error && <span className="f-newsletter-error">{error}</span>}
                  </div>
                  <button className="f-newsletter-btn" type="submit">Subscribe</button>
                </form>
                {toast && <div className="f-newsletter-toast" role="status">{toast}</div>}
              </div>
            </div>
          </div>

          {/* ─── GLOWING DIVIDER ─── */}
          <div className="f-divider" />

          {/* ─── BOTTOM BAR ─── */}
          <div className="f-bottom">
            <div className="f-bottom-left">
              <span>&copy; {new Date().getFullYear()} Orbitrix Solutions. All rights reserved.</span>
            </div>
            <div className="f-bottom-links">
              <Link to="/terms-and-conditions" className="f-bottom-link">Terms</Link>
              <Link to="/terms-and-conditions" className="f-bottom-link">Privacy</Link>
              <a className="f-bottom-link" href="https://www.linkedin.com/in/abdul-saboor-5677643b4/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="f-bottom-link" href="https://github.com/abdulsaboorera-bit" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
