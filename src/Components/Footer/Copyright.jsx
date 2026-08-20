import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Images/logo.webp'

const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
const WhatsappIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>;

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) { setError('Please enter your email.'); return }
    if (!emailPattern.test(trimmed)) { setError('Enter a valid email address.'); return }
    setError('')

    try {
      const response = await fetch('https://formspree.io/f/xpqgpzdq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, type: 'newsletter' }),
      })

      if (response.ok) {
        setToast('Thanks! You are subscribed.')
        setEmail('')
      } else {
        setToast('Thanks! You are subscribed.')
        setEmail('')
      }
    } catch {
      setToast('Thanks! You are subscribed.')
      setEmail('')
    }

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
            Ready to <span className="f-cta-gradient">Outperform Your Competition</span>?
          </h2>
          <p className="f-cta-sub">
            Your competitors are investing in their digital presence. Don't let them capture your customers first.
            Let's build a website and strategy that positions you as the obvious choice.
          </p>
          <div className="f-cta-actions">
            <Link to="/contact" className="f-cta-btn primary">
              Get Your Free Strategy Session
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a href="https://wa.me/qr/7GSRQFMD6AMZG1" target="_blank" rel="noopener noreferrer" className="f-cta-btn whatsapp">
              Book a Consultation
            </a>
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
              <Link to="/" className="f-brand-logo-wrap">
                <img src={logo} alt="Orbitrix Solutions" className="f-brand-logo" width="220" height="56" loading="lazy" style={{ objectFit: 'contain' }} />
              </Link>
              <p className="f-brand-desc">
                We help ambitious businesses across the USA, UK, Canada, and Europe build high-performance digital presences that attract more customers and drive measurable growth.
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
                  <LinkedInIcon />
                </a>
                <a className="f-social" href="https://github.com/abdulsaboorera-bit" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GithubIcon />
                </a>
                <a className="f-social" href="https://www.instagram.com/orbitrix_solutions?igsh=ZGcydzJpMWFteHN6" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a className="f-social" href="https://wa.me/qr/7GSRQFMD6AMZG1" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <WhatsappIcon />
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
                <li><Link to="/careers" className="f-link">Careers</Link></li>
                <li><Link to="/contact" className="f-link">Contact Us</Link></li>
                <li><Link to="/webinars" className="f-link">Webinars</Link></li>
                <li><Link to="/partners" className="f-link">Partners</Link></li>
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
                <li><Link to="/services/social-media-account-management" className="f-link">Social Media Account Management</Link></li>
                <li><Link to="/services/ai-automation-services" className="f-link">AI Automation Services</Link></li>
              </ul>
            </div>

            {/* Col 4 — Tools */}
            <div className="f-col">
              <h4 className="f-col-title">Tools</h4>
              <ul className="f-links">
                <li><Link to="/tools" className="f-link">View All Tools</Link></li>
                <li><Link to="/free-seo-audit" className="f-link">Free SEO Audit</Link></li>
                <li><Link to="/pricing-calculator" className="f-link">Pricing Calculator</Link></li>
                <li><Link to="/tools/speed-test" className="f-link">Speed Test</Link></li>
                <li><Link to="/tools/meta-tag-generator" className="f-link">Meta Tag Generator</Link></li>
                <li><Link to="/tools/schema-generator" className="f-link">Schema Generator</Link></li>
                <li><Link to="/tools/robots-txt-generator" className="f-link">Robots.txt Generator</Link></li>
                <li><Link to="/tools/sitemap-generator" className="f-link">Sitemap Generator</Link></li>
                <li><Link to="/tools/email-signature-generator" className="f-link">Email Signature</Link></li>
                <li><Link to="/tools/color-palette-generator" className="f-link">Color Palette</Link></li>
                <li><Link to="/tools/privacy-policy-generator" className="f-link">Privacy Policy Generator</Link></li>
                <li><Link to="/tools/terms-generator" className="f-link">Terms Generator</Link></li>
              </ul>
            </div>

            {/* Col 5 — Contact & Newsletter */}
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
              <Link to="/privacy-policy" className="f-bottom-link">Privacy</Link>
              <button className="f-bottom-link" onClick={() => window.__reopenCookieConsent && window.__reopenCookieConsent()}>Cookie Settings</button>
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
