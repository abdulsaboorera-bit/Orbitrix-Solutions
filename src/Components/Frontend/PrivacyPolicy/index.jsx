import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../SEO'
import Footer from '../../Footer'
import './index.css'

const tocItems = [
  { id: 'info-we-collect', label: 'Information We Collect', num: '01' },
  { id: 'how-we-use', label: 'How We Use Your Information', num: '02' },
  { id: 'cookie-policy', label: 'Cookie Policy', num: '03' },
  { id: 'data-sharing', label: 'Data Sharing & Third Parties', num: '04' },
  { id: 'data-security', label: 'Data Security', num: '05' },
  { id: 'your-rights', label: 'Your Rights', num: '06' },
  { id: 'international-transfers', label: 'International Data Transfers', num: '07' },
  { id: 'childrens-privacy', label: "Children's Privacy", num: '08' },
  { id: 'changes', label: 'Changes to This Policy', num: '09' },
  { id: 'contact', label: 'Contact Us', num: '10' },
]

const useScrollSpy = (ids) => {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  return active
}

const useReveal = () => {
  useEffect(() => {
    const nodes = document.querySelectorAll('.pp-reveal')
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

const ProgressBar = () => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="pp-progress" style={{ '--progress': `${width}%` }}>
      <div className="pp-progress-fill" />
    </div>
  )
}

const ParticleField = () => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let particles = []
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)
    const w = () => canvas.offsetWidth
    const h = () => canvas.offsetHeight
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        o: Math.random() * 0.5 + 0.1,
      })
    }
    const draw = () => {
      ctx.clearRect(0, 0, w(), h())
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99, 198, 184, ${p.o})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > w()) p.dx *= -1
        if (p.y < 0 || p.y > h()) p.dy *= -1
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])
  return <canvas ref={canvasRef} className="pp-particles" />
}

const AccordionItem = ({ title, children, defaultOpen }) => {
  const [open, setOpen] = useState(defaultOpen || false)
  return (
    <div className={`pp-accordion-item ${open ? 'open' : ''}`}>
      <button className="pp-accordion-trigger" onClick={() => setOpen(!open)}>
        <span className="pp-accordion-icon">{open ? '−' : '+'}</span>
        <span>{title}</span>
      </button>
      <div className="pp-accordion-body">
        <div className="pp-accordion-content">{children}</div>
      </div>
    </div>
  )
}

const PrivacyPolicy = () => {
  const activeSection = useScrollSpy(tocItems.map((t) => t.id))
  useReveal()

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <main>
      <SEO
        title="Privacy Policy | Orbitrix Solutions - Web Development & Digital Marketing Agency"
        description="Read the Privacy Policy of Orbitrix Solutions. Learn how we collect, use, protect, and handle your personal data in compliance with GDPR, CCPA, and international privacy regulations."
        keywords="Orbitrix Solutions privacy policy, data protection, GDPR, CCPA, cookie policy, personal data, web agency privacy"
      />

      <ProgressBar />

      {/* ─── HERO ─── */}
      <section className="pp-hero">
        <ParticleField />
        <div className="pp-hero-mesh" />
        <div className="pp-hero-content">
          <span className="pp-hero-badge">Legal Documentation</span>
          <h1 className="pp-hero-title">
            Privacy Policy
            <br />
            <span className="pp-hero-gradient">Orbitrix Solutions</span>
          </h1>
          <p className="pp-hero-sub">
            Your privacy matters to us. This policy explains how Orbitrix Solutions
            collects, uses, and protects your personal information when you interact
            with our website and services.
          </p>
          <div className="pp-hero-meta">
            <div className="pp-hero-date">
              <span className="pp-hero-dot" />
              Last updated August 19, 2026
            </div>
            <div className="pp-hero-reading">Estimated reading: 10 min</div>
          </div>
          <button className="pp-hero-cta" onClick={() => scrollTo('info-we-collect')}>
            Read the policy
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10m0 0l4-4m-4 4L4 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      {/* ─── MAIN ─── */}
      <div className="pp-layout">
        {/* Sticky TOC */}
        <aside className="pp-toc">
          <nav className="pp-toc-nav">
            <span className="pp-toc-label">On this page</span>
            {tocItems.map((item) => (
              <button
                key={item.id}
                className={`pp-toc-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                <span className="pp-toc-num">{item.num}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="pp-content">

          {/* ─── 1. INFORMATION WE COLLECT ─── */}
          <article id="info-we-collect" className="pp-section pp-split pp-reveal">
            <div className="pp-split-left">
              <span className="pp-section-num">01</span>
              <h2>Information We Collect</h2>
              <p>
                We collect various types of information to provide and improve
                our services. The data we gather falls into three primary categories:
              </p>
            </div>
            <div className="pp-split-right">
              <div className="pp-split-card">
                <div className="pp-split-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <h4>Personal Information</h4>
                <ul>
                  <li>Full name and contact details (email, phone, address)</li>
                  <li>Company name and job title</li>
                  <li>Billing and payment information</li>
                  <li>Account login credentials (where applicable)</li>
                </ul>
              </div>
              <div className="pp-split-card">
                <div className="pp-split-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
                  </svg>
                </div>
                <h4>Usage Data</h4>
                <ul>
                  <li>Pages visited, time spent, and navigation patterns</li>
                  <li>Browser type, operating system, and device information</li>
                  <li>IP address and approximate geographic location</li>
                  <li>Referring URLs and search engine keywords</li>
                </ul>
              </div>
              <div className="pp-split-card">
                <div className="pp-split-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h4>Cookies & Tracking Technologies</h4>
                <ul>
                  <li>Essential cookies for site functionality</li>
                  <li>Analytics cookies (Google Analytics)</li>
                  <li>Marketing and advertising cookies</li>
                  <li>Web beacons and pixel tags</li>
                </ul>
              </div>
              <p className="pp-split-note">
                We collect personal information only when you voluntarily provide it
                through contact forms, account registration, newsletter subscriptions,
                or direct communications with our team.
              </p>
            </div>
          </article>

          <div className="pp-divider pp-reveal" />

          {/* ─── 2. HOW WE USE YOUR INFORMATION ─── */}
          <article id="how-we-use" className="pp-section pp-band pp-reveal">
            <div className="pp-band-header">
              <span className="pp-section-num">02</span>
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
            </div>
            <div className="pp-band-grid">
              <div className="pp-band-card">
                <div className="pp-band-card-num">A</div>
                <h4>Service Delivery</h4>
                <p>To provide, operate, and maintain our web development, SEO, and digital marketing services. This includes processing transactions, sending invoices, and delivering project milestones.</p>
              </div>
              <div className="pp-band-card">
                <div className="pp-band-card-num">B</div>
                <h4>Communication</h4>
                <p>To respond to your inquiries, send project updates, provide customer support, and share important notices about changes to our services or policies.</p>
              </div>
              <div className="pp-band-card">
                <div className="pp-band-card-num">C</div>
                <h4>Marketing & Promotions</h4>
                <p>To send you newsletters, promotional materials, and information about services that may interest you. You can opt out at any time by clicking the unsubscribe link in our emails.</p>
              </div>
              <div className="pp-band-card">
                <div className="pp-band-card-num">D</div>
                <h4>Analytics & Improvement</h4>
                <p>To analyze usage patterns, measure the effectiveness of our content, and improve our website, services, and user experience through aggregated data insights.</p>
              </div>
              <div className="pp-band-card">
                <div className="pp-band-card-num">E</div>
                <h4>Legal Compliance</h4>
                <p>To comply with applicable laws, regulations, legal processes, and enforceable governmental requests, and to protect the rights, property, and safety of Orbitrix Solutions and our users.</p>
              </div>
              <div className="pp-band-card">
                <div className="pp-band-card-num">F</div>
                <h4>Security & Fraud Prevention</h4>
                <p>To detect, prevent, and address fraud, unauthorized access, and other malicious activities that could compromise the security of our services and user data.</p>
              </div>
            </div>
          </article>

          <div className="pp-divider pp-reveal" />

          {/* ─── 3. COOKIE POLICY ─── */}
          <article id="cookie-policy" className="pp-section pp-accordion-section pp-reveal">
            <div className="pp-accordion-header">
              <span className="pp-section-num">03</span>
              <h2>Cookie Policy</h2>
              <p>We use cookies and similar tracking technologies to enhance your browsing experience. Click each category to learn more.</p>
            </div>
            <div className="pp-accordion-list">
              <AccordionItem title="Essential Cookies" defaultOpen>
                <p>These cookies are necessary for the website to function properly. They enable core features such as page navigation, form submissions, and access to secure areas. The website cannot function properly without these cookies, and they cannot be disabled.</p>
                <p>Examples include session cookies that maintain your login state and CSRF tokens that protect against cross-site request forgery attacks.</p>
              </AccordionItem>
              <AccordionItem title="Analytics Cookies (Google Analytics)">
                <p>We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information such as how often users visit our site, what pages they visit, and what other sites they used prior to coming to our site.</p>
                <p>Google Analytics primarily collects IP address information to protect user privacy. We use the anonymizeIP feature which truncates IP addresses. You can opt out by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>
              </AccordionItem>
              <AccordionItem title="Marketing Cookies">
                <p>Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user. These cookies may be set through our site by our advertising partners, including Google Ads and Facebook Pixel.</p>
                <p>These third-party advertisers may use this information to build a profile of your interests and show you relevant advertisements on other sites.</p>
              </AccordionItem>
              <AccordionItem title="Managing Your Cookie Preferences">
                <p>You can control and manage cookies through your browser settings. Most browsers allow you to refuse or accept cookies, delete existing cookies, and set preferences for certain websites. Please note that disabling certain cookies may impact the functionality of our website.</p>
                <p>For detailed instructions on managing cookies in your browser, visit your browser's help documentation or <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.</p>
              </AccordionItem>
            </div>
          </article>

          <div className="pp-divider pp-reveal" />

          {/* ─── 4. DATA SHARING ─── */}
          <article id="data-sharing" className="pp-section pp-glass pp-reveal">
            <div className="pp-glass-bg" />
            <div className="pp-glass-content">
              <span className="pp-section-num">04</span>
              <h2>Data Sharing & Third Parties</h2>
              <p className="pp-glass-intro">
                We do not sell, trade, or rent your personal information to third parties.
                We may share data with trusted service providers who assist us in operating
                our website and conducting our business, subject to strict confidentiality
                agreements.
              </p>
              <div className="pp-glass-cards">
                <div className="pp-glass-card">
                  <div className="pp-glass-card-header">
                    <span className="pp-glass-card-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </span>
                    <h4>Formspree</h4>
                  </div>
                  <p>We use Formspree to process form submissions on our website. When you submit a contact or inquiry form, your data is transmitted to Formspree's servers for processing. Formspree's use of your data is governed by their <a href="https://formspree.io/legal/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>
                </div>
                <div className="pp-glass-card">
                  <div className="pp-glass-card-header">
                    <span className="pp-glass-card-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      </svg>
                    </span>
                    <h4>Hosting & Infrastructure</h4>
                  </div>
                  <p>Our website is hosted on Vercel, which provides hosting infrastructure. Vercel collects server logs including IP addresses, browser type, and access times for operational and security purposes. Their practices are described in the <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>.</p>
                </div>
                <div className="pp-glass-card">
                  <div className="pp-glass-card-header">
                    <span className="pp-glass-card-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                    </span>
                    <h4>Analytics Partners</h4>
                  </div>
                  <p>Google Analytics helps us understand website usage patterns. Google may access the data collected through cookies to provide analytics services. We have enabled IP anonymization to limit data collection. You can review Google's <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> for more details.</p>
                </div>
              </div>
              <div className="pp-glass-legal">
                <p><strong>Legal Basis for Sharing:</strong> We may also share your information when required by law, to respond to legal processes, to protect our rights, or to protect the personal safety of our users or the public.</p>
              </div>
            </div>
          </article>

          <div className="pp-divider pp-reveal" />

          {/* ─── 5. DATA SECURITY ─── */}
          <article id="data-security" className="pp-section pp-highlight pp-reveal">
            <div className="pp-highlight-inner">
              <span className="pp-section-num">05</span>
              <h2>Data Security</h2>
              <p className="pp-highlight-lead">We implement industry-standard measures to protect your personal information:</p>
              <div className="pp-highlight-grid">
                <div className="pp-highlight-card">
                  <div className="pp-highlight-card-bar" />
                  <h4>Encryption in Transit</h4>
                  <p>All data transmitted between your browser and our servers is encrypted using TLS/SSL (Transport Layer Security). This ensures your information cannot be intercepted during transmission.</p>
                </div>
                <div className="pp-highlight-card">
                  <div className="pp-highlight-card-bar" />
                  <h4>Secure Storage</h4>
                  <p>Personal data is stored on secure servers with firewall protection, access controls, and regular security audits. We follow industry best practices for data at rest encryption.</p>
                </div>
                <div className="pp-highlight-card">
                  <div className="pp-highlight-card-bar" />
                  <h4>Access Controls</h4>
                  <p>Access to personal information is restricted to authorized Orbitrix Solutions team members who need it to perform their duties. All team members are bound by confidentiality obligations.</p>
                </div>
              </div>
              <p className="pp-highlight-disclaimer">
                While we strive to use commercially acceptable means to protect your personal information, no method of electronic storage or transmission over the internet is 100% secure. We cannot guarantee absolute security but are committed to promptly addressing any security incidents.
              </p>
            </div>
          </article>

          <div className="pp-divider pp-reveal" />

          {/* ─── 6. YOUR RIGHTS ─── */}
          <article id="your-rights" className="pp-section pp-band pp-reveal">
            <div className="pp-band-header">
              <span className="pp-section-num">06</span>
              <h2>Your Rights</h2>
              <p>Depending on your location, you may have specific rights regarding your personal data.</p>
            </div>
            <div className="pp-rights-grid">
              <div className="pp-rights-block">
                <div className="pp-rights-badge">GDPR</div>
                <h4>Rights for European Users</h4>
                <p>If you are located in the European Economic Area (EEA), the UK, or Switzerland, you have the following rights under the General Data Protection Regulation (GDPR):</p>
                <ul>
                  <li><strong>Right of Access</strong> — Request a copy of the personal data we hold about you</li>
                  <li><strong>Right to Rectification</strong> — Request correction of inaccurate or incomplete data</li>
                  <li><strong>Right to Erasure</strong> — Request deletion of your personal data ("right to be forgotten")</li>
                  <li><strong>Right to Restrict Processing</strong> — Request limitation on how we use your data</li>
                  <li><strong>Right to Data Portability</strong> — Receive your data in a structured, machine-readable format</li>
                  <li><strong>Right to Object</strong> — Object to the processing of your data for certain purposes</li>
                  <li><strong>Right to Withdraw Consent</strong> — Withdraw your consent at any time where processing is based on consent</li>
                </ul>
              </div>
              <div className="pp-rights-block">
                <div className="pp-rights-badge ccpa">CCPA</div>
                <h4>Rights for California Residents</h4>
                <p>If you are a California resident, the California Consumer Privacy Act (CCPA) grants you the following rights:</p>
                <ul>
                  <li><strong>Right to Know</strong> — Request disclosure of the categories and specific pieces of personal information collected</li>
                  <li><strong>Right to Delete</strong> — Request deletion of personal information collected from you</li>
                  <li><strong>Right to Opt-Out</strong> — Opt out of the sale of your personal information (we do not sell data)</li>
                  <li><strong>Right to Non-Discrimination</strong> — Not be discriminated against for exercising your privacy rights</li>
                </ul>
              </div>
            </div>
            <div className="pp-rights-note">
              <p><strong>How to Exercise Your Rights:</strong> To exercise any of these rights, please contact us at <a href="mailto:info@orbitrixsolutions.com">info@orbitrixsolutions.com</a>. We will respond to your request within 30 days. We may ask you to verify your identity before processing your request.</p>
            </div>
          </article>

          <div className="pp-divider pp-reveal" />

          {/* ─── 7. INTERNATIONAL DATA TRANSFERS ─── */}
          <article id="international-transfers" className="pp-section pp-split pp-reveal">
            <div className="pp-split-left">
              <span className="pp-section-num">07</span>
              <h2>International Data Transfers</h2>
              <p>
                Orbitrix Solutions is based in Pakistan, and our servers are located
                in various regions through our hosting provider. Your information may be
                transferred to and processed in countries other than your country of residence.
              </p>
              <p>
                When we transfer personal data internationally, we ensure appropriate
                safeguards are in place, including:
              </p>
              <ul className="pp-transfer-list">
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Adequacy decisions where applicable</li>
                <li>Contractual obligations with data processors to maintain equivalent data protection standards</li>
                <li>Compliance with applicable data protection laws in the destination country</li>
              </ul>
            </div>
            <div className="pp-split-right">
              <div className="pp-split-card pp-split-card-accent">
                <div className="pp-split-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <h4>Data Processing Locations</h4>
                <p>Your data may be processed in Pakistan, the United States (where Google Analytics and Vercel operate), and other countries where our service providers maintain operations.</p>
                <div className="pp-split-card-tag">Global Infrastructure</div>
              </div>
            </div>
          </article>

          <div className="pp-divider pp-reveal" />

          {/* ─── 8. CHILDREN'S PRIVACY ─── */}
          <article id="childrens-privacy" className="pp-section pp-features pp-reveal">
            <div className="pp-features-header">
              <span className="pp-section-num">08</span>
              <h2>Children's Privacy</h2>
              <p>Protecting the privacy of young children is important to us.</p>
            </div>
            <div className="pp-features-grid">
              <div className="pp-feature-card">
                <span className="pp-feature-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </span>
                <h4>Age Restriction</h4>
                <p>Our website and services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16.</p>
              </div>
              <div className="pp-feature-card">
                <span className="pp-feature-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </span>
                <h4>Parental Notification</h4>
                <p>If we become aware that we have collected personal information from a child under 16 without parental consent, we will take steps to delete that information promptly.</p>
              </div>
              <div className="pp-feature-card">
                <span className="pp-feature-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </span>
                <h4>Reporting Concerns</h4>
                <p>If you believe that a child has provided us with personal information without proper consent, please contact us immediately at <a href="mailto:info@orbitrixsolutions.com">info@orbitrixsolutions.com</a> so we can take appropriate action.</p>
              </div>
            </div>
          </article>

          <div className="pp-divider pp-reveal" />

          {/* ─── 9. CHANGES TO THIS POLICY ─── */}
          <article id="changes" className="pp-section pp-timeline pp-reveal">
            <div className="pp-timeline-header">
              <span className="pp-section-num">09</span>
              <h2>Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.</p>
            </div>
            <div className="pp-timeline-track">
              <div className="pp-timeline-line" />
              <div className="pp-timeline-item">
                <div className="pp-timeline-dot info" />
                <div className="pp-timeline-card">
                  <span className="pp-timeline-badge info">Notification</span>
                  <h4>How We Notify You</h4>
                  <p>When we make material changes to this Privacy Policy, we will update the "Last Updated" date at the top of this page and may provide additional notice through our website, email, or other communication channels.</p>
                </div>
              </div>
              <div className="pp-timeline-item">
                <div className="pp-timeline-dot" />
                <div className="pp-timeline-card">
                  <span className="pp-timeline-badge">Review</span>
                  <h4>Periodic Review</h4>
                  <p>We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of our services after any changes constitutes acceptance of the updated policy.</p>
                </div>
              </div>
              <div className="pp-timeline-item">
                <div className="pp-timeline-dot warning" />
                <div className="pp-timeline-card">
                  <span className="pp-timeline-badge warning">Consent</span>
                  <h4>Material Changes</h4>
                  <p>For significant changes that affect how we use your personal information, we will seek your explicit consent where required by applicable law before implementing the changes.</p>
                </div>
              </div>
            </div>
          </article>

          <div className="pp-divider pp-reveal" />

          {/* ─── 10. CONTACT US ─── */}
          <article id="contact" className="pp-section pp-contact-section pp-reveal">
            <div className="pp-contact-inner">
              <span className="pp-section-num">10</span>
              <h2>Contact Us</h2>
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out to us.</p>
              <div className="pp-contact-grid">
                <div className="pp-contact-card-premium">
                  <div className="pp-contact-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <h4>Orbitrix Solutions</h4>
                  <p>Lahore, Pakistan</p>
                </div>
                <div className="pp-contact-card-premium">
                  <div className="pp-contact-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <h4>Email Us</h4>
                  <p><a href="mailto:info@orbitrixsolutions.com">info@orbitrixsolutions.com</a></p>
                </div>
                <div className="pp-contact-card-premium">
                  <div className="pp-contact-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                  </div>
                  <h4>WhatsApp</h4>
                  <p>
                    <a href="https://wa.me/qr/7GSRQFMD6AMZG1" target="_blank" rel="noreferrer">
                      Chat with us →
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* ─── FOOTER CTA ─── */}
          <div className="pp-cta pp-reveal">
            <div className="pp-cta-inner">
              <h3>Have questions about our privacy practices?</h3>
              <p>Our team is ready to help you understand how we protect your data.</p>
              <div className="pp-cta-actions">
                <Link to="/contact" className="pp-cta-btn primary">Contact Us</Link>
                <Link to="/" className="pp-cta-btn secondary">Back to Home</Link>
              </div>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </main>
  )
}

export default PrivacyPolicy
