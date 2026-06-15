import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../SEO'
import Footer from '../../Footer'
import './index.css'

const tocItems = [
  { id: 'services', label: 'Services', num: '01' },
  { id: 'payments', label: 'Payments', num: '02' },
  { id: 'refunds', label: 'Refunds', num: '03' },
  { id: 'responsibilities', label: 'Responsibilities', num: '04' },
  { id: 'ip', label: 'Intellectual Property', num: '05' },
  { id: 'support', label: 'Support & Maintenance', num: '06' },
  { id: 'liability', label: 'Liability', num: '07' },
  { id: 'termination', label: 'Termination', num: '08' },
  { id: 'governing-law', label: 'Governing Law', num: '09' },
  { id: 'provisions', label: 'General Provisions', num: '10' },
  { id: 'contact', label: 'Contact', num: '11' },
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
    const nodes = document.querySelectorAll('.tc-reveal')
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
    <div className="tc-progress" style={{ '--progress': `${width}%` }}>
      <div className="tc-progress-fill" />
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
  return <canvas ref={canvasRef} className="tc-particles" />
}

const AccordionItem = ({ title, children, defaultOpen }) => {
  const [open, setOpen] = useState(defaultOpen || false)
  return (
    <div className={`tc-accordion-item ${open ? 'open' : ''}`}>
      <button className="tc-accordion-trigger" onClick={() => setOpen(!open)}>
        <span className="tc-accordion-icon">{open ? '−' : '+'}</span>
        <span>{title}</span>
      </button>
      <div className="tc-accordion-body">
        <div className="tc-accordion-content">{children}</div>
      </div>
    </div>
  )
}

const TermsAndConditions = () => {
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
        title="Terms & Conditions | Orbitrix Solutions - Web Development & Digital Marketing Agency"
        description="Read the Terms and Conditions governing all web development, SEO, and digital marketing services provided by Orbitrix Solutions. Learn about our policies on payments, refunds, intellectual property, and more."
        keywords="Orbitrix Solutions terms, web development agency terms, SEO services conditions, digital marketing contract, IT solutions policy"
      />

      <ProgressBar />

      {/* ─── HERO ─── */}
      <section className="tc-hero">
        <ParticleField />
        <div className="tc-hero-mesh" />
        <div className="tc-hero-content">
          <span className="tc-hero-badge">Legal Documentation</span>
          <h1 className="tc-hero-title">
            Terms &amp; Conditions – Orbitrix Solutions
            <br />
            <span className="tc-hero-gradient">Web Development & Digital Marketing Agency</span>
          </h1>
          <p className="tc-hero-sub">
            Please read these Terms and Conditions carefully before engaging
            with Orbitrix Solutions. By using our services, you agree to be
            bound by the terms outlined below.
          </p>
          <div className="tc-hero-meta">
            <div className="tc-hero-date">
              <span className="tc-hero-dot" />
              Last updated June 14, 2026
            </div>
            <div className="tc-hero-reading">Estimated reading: 8 min</div>
          </div>
          <button className="tc-hero-cta" onClick={() => scrollTo('services')}>
            Read the terms
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10m0 0l4-4m-4 4L4 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      {/* ─── MAIN ─── */}
      <div className="tc-layout">
        {/* Sticky TOC */}
        <aside className="tc-toc">
          <nav className="tc-toc-nav">
            <span className="tc-toc-label">On this page</span>
            {tocItems.map((item) => (
              <button
                key={item.id}
                className={`tc-toc-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                <span className="tc-toc-num">{item.num}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="tc-content">

          {/* ─── 1. SERVICES — Split Card ─── */}
          <article id="services" className="tc-section tc-split tc-reveal">
            <div className="tc-split-left">
              <span className="tc-section-num">01</span>
              <h2>Services</h2>
              <p>
                Orbitrix Solutions provides professional digital services including,
                but not limited to, web development, mobile application development,
                UI/UX design, IT consulting, digital marketing, and performance
                advertising. The scope, deliverables, timelines, and fees for each
                engagement shall be defined in a written proposal, statement of
                work, or service agreement executed between Orbitrix Solutions and
                the Client.
              </p>
            </div>
            <div className="tc-split-right">
              <div className="tc-split-card">
                <div className="tc-split-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
                  </svg>
                </div>
                <h4>What We Deliver</h4>
                <ul>
                  <li>Web &amp; Mobile Development</li>
                  <li>UI/UX Design Systems</li>
                  <li>IT Consulting &amp; Strategy</li>
                  <li>Digital Marketing &amp; SEO</li>
                  <li>Performance Advertising</li>
                </ul>
              </div>
              <p className="tc-split-note">
                Any additions, modifications, or extensions to the originally agreed
                scope of work shall be treated as change requests and may require a
                separate written agreement, additional fees, and adjusted timelines.
              </p>
            </div>
          </article>

          {/* Divider */}
          <div className="tc-divider tc-reveal" />

          {/* ─── 2. PAYMENTS — Horizontal Band ─── */}
          <article id="payments" className="tc-section tc-band tc-reveal">
            <div className="tc-band-header">
              <span className="tc-section-num">02</span>
              <h2>Payments</h2>
              <p>All payment terms, schedules, and milestones shall be established in the applicable service agreement. Unless otherwise agreed in writing, the following conditions apply.</p>
            </div>
            <div className="tc-band-grid">
              <div className="tc-band-card">
                <div className="tc-band-card-num">A</div>
                <h4>Advance Payments</h4>
                <p>Any advance payment, deposit, booking fee, or project reservation fee paid by the Client is non-refundable once the project has been confirmed and work has commenced.</p>
              </div>
              <div className="tc-band-card">
                <div className="tc-band-card-num">B</div>
                <h4>Invoicing</h4>
                <p>Orbitrix Solutions shall issue invoices in accordance with the agreed payment schedule. All invoices are payable within fifteen (15) calendar days of the invoice date if no specific term is stated.</p>
              </div>
              <div className="tc-band-card">
                <div className="tc-band-card-num">C</div>
                <h4>Late Payments</h4>
                <p>Overdue payments may incur interest at a rate of one and a half percent (1.5%) per month. Orbitrix Solutions may also suspend work on the project until all outstanding amounts are settled.</p>
              </div>
              <div className="tc-band-card">
                <div className="tc-band-card-num">D</div>
                <h4>Taxes</h4>
                <p>All fees quoted are exclusive of applicable taxes, levies, or duties imposed by taxing authorities. The Client shall be responsible for the payment of any such additional taxes.</p>
              </div>
            </div>
          </article>

          <div className="tc-divider tc-reveal" />

          {/* ─── 3. REFUNDS — Timeline ─── */}
          <article id="refunds" className="tc-section tc-timeline tc-reveal">
            <div className="tc-timeline-header">
              <span className="tc-section-num">03</span>
              <h2>Refunds</h2>
              <p>Orbitrix Solutions is committed to fair and transparent refund practices.</p>
            </div>
            <div className="tc-timeline-track">
              <div className="tc-timeline-line" />
              <div className="tc-timeline-item">
                <div className="tc-timeline-dot" />
                <div className="tc-timeline-card">
                  <span className="tc-timeline-badge">Eligible</span>
                  <h4>Full Payment Refund Before Project Start</h4>
                  <p>If the Client has made full payment before project work has started and subsequently decides to cancel the project, Orbitrix Solutions may issue a refund within five (5) business days of the written cancellation request.</p>
                </div>
              </div>
              <div className="tc-timeline-item">
                <div className="tc-timeline-dot warning" />
                <div className="tc-timeline-card">
                  <span className="tc-timeline-badge warning">Partial</span>
                  <h4>Deductions for Work Commenced</h4>
                  <p>If project planning, consultation, research, design preparation, resource allocation, or any related work has already begun, Orbitrix Solutions reserves the right to deduct up to fifty percent (50%) of the total project amount to cover administrative, operational, and resource costs before issuing any refund.</p>
                </div>
              </div>
              <div className="tc-timeline-item">
                <div className="tc-timeline-dot danger" />
                <div className="tc-timeline-card">
                  <span className="tc-timeline-badge danger">Non-Refundable</span>
                  <h4>Excluded Items</h4>
                  <p>Advance payments, deposit fees, third-party software licenses, domain registration fees, hosting prepayments, and any non-recoverable costs incurred on behalf of the Client are non-refundable under all circumstances.</p>
                </div>
              </div>
              <div className="tc-timeline-item">
                <div className="tc-timeline-dot info" />
                <div className="tc-timeline-card">
                  <span className="tc-timeline-badge info">Processing</span>
                  <h4>Refund Processing</h4>
                  <p>Approved refunds shall be processed using the original payment method. Processing times may vary depending on the Client's financial institution.</p>
                </div>
              </div>
            </div>
          </article>

          <div className="tc-divider tc-reveal" />

          {/* ─── 4. RESPONSIBILITIES — Feature Blocks ─── */}
          <article id="responsibilities" className="tc-section tc-features tc-reveal">
            <div className="tc-features-header">
              <span className="tc-section-num">04</span>
              <h2>Client Responsibilities</h2>
              <p>The Client agrees to fulfill the following obligations to ensure the timely and successful delivery of services.</p>
            </div>
            <div className="tc-features-grid">
              {[
                { icon: '📋', title: 'Provide Information', text: 'Deliver accurate, complete, and timely information, materials, feedback, and approvals required for the progress of the project.' },
                { icon: '👤', title: 'Designate a Representative', text: 'Appoint an authorized representative with the authority to make decisions and provide approvals on behalf of the Client.' },
                { icon: '⏱', title: 'Timely Reviews', text: 'Review and respond to deliverables, drafts, and milestones within a reasonable timeframe, not to exceed ten (10) business days.' },
                { icon: '🔒', title: 'Content Ownership', text: 'Ensure that all content, materials, and intellectual property provided to Orbitrix Solutions are owned by the Client or properly licensed.' },
                { icon: '🛡', title: 'Confidentiality', text: 'Maintain the confidentiality of all login credentials, access information, and proprietary materials shared during the engagement.' },
              ].map((item, i) => (
                <div className="tc-feature-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                  <span className="tc-feature-icon">{item.icon}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div className="tc-features-note tc-reveal">
              <p><strong>Important:</strong> Delays caused by the Client's failure to meet these responsibilities may result in adjusted timelines, additional costs, and suspension of services without liability to Orbitrix Solutions.</p>
            </div>
          </article>

          <div className="tc-divider tc-reveal" />

          {/* ─── 5. IP — Glassmorphism Panel ─── */}
          <article id="ip" className="tc-section tc-glass tc-reveal">
            <div className="tc-glass-bg" />
            <div className="tc-glass-content">
              <span className="tc-section-num">05</span>
              <h2>Intellectual Property</h2>
              <p className="tc-glass-intro">
                Upon receipt of full and final payment for a project, the Client
                shall receive ownership of all final deliverables, including source
                code, design files, and content created specifically for the project,
                subject to the following conditions.
              </p>
              <div className="tc-glass-cards">
                <div className="tc-glass-card">
                  <div className="tc-glass-card-header">
                    <span className="tc-glass-card-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                      </svg>
                    </span>
                    <h4>Pre-Existing Materials</h4>
                  </div>
                  <p>Any pre-existing intellectual property, frameworks, libraries, tools, or code libraries used by Orbitrix Solutions shall remain the property of their respective owners. The Client receives a non-exclusive, perpetual license to use such components as integrated into the final deliverables.</p>
                </div>
                <div className="tc-glass-card">
                  <div className="tc-glass-card-header">
                    <span className="tc-glass-card-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
                      </svg>
                    </span>
                    <h4>Portfolio Rights</h4>
                  </div>
                  <p>Orbitrix Solutions reserves the right to display completed work, project descriptions, and screenshots in its professional portfolio, case studies, and marketing materials, unless the Client explicitly requests otherwise in writing.</p>
                </div>
                <div className="tc-glass-card">
                  <div className="tc-glass-card-header">
                    <span className="tc-glass-card-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      </svg>
                    </span>
                    <h4>Third-Party Assets</h4>
                  </div>
                  <p>Any third-party assets, plugins, fonts, images, or software incorporated into deliverables shall be subject to their own licensing terms. The Client shall be responsible for compliance with such licenses.</p>
                </div>
              </div>
            </div>
          </article>

          <div className="tc-divider tc-reveal" />

          {/* ─── 6. SUPPORT — Accordion ─── */}
          <article id="support" className="tc-section tc-accordion-section tc-reveal">
            <div className="tc-accordion-header">
              <span className="tc-section-num">06</span>
              <h2>Support &amp; Maintenance</h2>
              <p>Orbitrix Solutions provides post-delivery support and maintenance under the following terms.</p>
            </div>
            <div className="tc-accordion-list">
              <AccordionItem title="Independent Management" defaultOpen>
                <p>After project delivery, if the Client chooses to manage, host, modify, or maintain the software, website, application, or system independently or through a third party, Orbitrix Solutions shall not be responsible for issues, bugs, downtime, security vulnerabilities, or technical problems arising thereafter.</p>
                <p>Any support, debugging, troubleshooting, or repair work requested by the Client in such circumstances will be billed separately at the applicable service rates.</p>
              </AccordionItem>
              <AccordionItem title="Active Maintenance Agreements">
                <p>If the software, website, application, or system is hosted, managed, or maintained by Orbitrix Solutions under an active maintenance agreement, technical issues and bugs falling within the scope of the agreement shall be handled by our team at no additional cost during the agreement term.</p>
              </AccordionItem>
              <AccordionItem title="Out-of-Scope Support">
                <p>Features, enhancements, redesigns, new integrations, or any work that falls outside the defined scope of a maintenance agreement shall be quoted separately and executed upon written approval from the Client.</p>
              </AccordionItem>
              <AccordionItem title="Support Hours">
                <p>Unless otherwise specified in a maintenance agreement, standard support is available during business hours, Monday through Friday, 9:00 AM to 6:00 PM (UTC+5). Requests submitted outside business hours will be addressed on the next business day.</p>
              </AccordionItem>
            </div>
          </article>

          <div className="tc-divider tc-reveal" />

          {/* ─── 7. LIABILITY — Highlight Band ─── */}
          <article id="liability" className="tc-section tc-highlight tc-reveal">
            <div className="tc-highlight-inner">
              <span className="tc-section-num">07</span>
              <h2>Limitation of Liability</h2>
              <p className="tc-highlight-lead">To the maximum extent permitted by applicable law:</p>
              <div className="tc-highlight-grid">
                <div className="tc-highlight-card">
                  <div className="tc-highlight-card-bar" />
                  <h4>No Indirect Damages</h4>
                  <p>Orbitrix Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business opportunities, or goodwill, arising out of or in connection with the use of our services.</p>
                </div>
                <div className="tc-highlight-card">
                  <div className="tc-highlight-card-bar" />
                  <h4>Aggregate Cap</h4>
                  <p>The total aggregate liability of Orbitrix Solutions for any and all claims arising from or related to a specific project shall not exceed the total fees actually paid by the Client for that project during the twelve (12) months immediately preceding the event giving rise to the claim.</p>
                </div>
                <div className="tc-highlight-card">
                  <div className="tc-highlight-card-bar" />
                  <h4>Force Majeure</h4>
                  <p>Orbitrix Solutions shall not be liable for delays, failures, or interruptions in service caused by factors beyond its reasonable control, including but not limited to natural disasters, acts of government, power outages, internet disruptions, or third-party service failures.</p>
                </div>
              </div>
            </div>
          </article>

          <div className="tc-divider tc-reveal" />

          {/* ─── 8. TERMINATION — Timeline ─── */}
          <article id="termination" className="tc-section tc-timeline tc-reveal">
            <div className="tc-timeline-header">
              <span className="tc-section-num">08</span>
              <h2>Termination</h2>
              <p>Either party may terminate a service agreement under the following conditions.</p>
            </div>
            <div className="tc-timeline-track">
              <div className="tc-timeline-line" />
              <div className="tc-timeline-item">
                <div className="tc-timeline-dot info" />
                <div className="tc-timeline-card">
                  <span className="tc-timeline-badge info">Client-Initiated</span>
                  <h4>Termination for Convenience</h4>
                  <p>The Client may terminate the agreement at any time by providing written notice. In such cases, the Client shall be responsible for payment of all work completed and expenses incurred up to the date of termination, including any non-refundable third-party costs.</p>
                </div>
              </div>
              <div className="tc-timeline-item">
                <div className="tc-timeline-dot warning" />
                <div className="tc-timeline-card">
                  <span className="tc-timeline-badge warning">Mutual</span>
                  <h4>Termination for Cause</h4>
                  <p>Either party may terminate the agreement with immediate written notice if the other party commits a material breach that remains uncured for fifteen (15) calendar days after receipt of written notice of such breach.</p>
                </div>
              </div>
              <div className="tc-timeline-item">
                <div className="tc-timeline-dot" />
                <div className="tc-timeline-card">
                  <span className="tc-timeline-badge">Post-Termination</span>
                  <h4>Effect of Termination</h4>
                  <p>Upon termination, Orbitrix Solutions shall deliver to the Client all completed and partially completed work product, subject to receipt of payment for all outstanding amounts owed. Sections relating to intellectual property, limitation of liability, and confidentiality shall survive termination.</p>
                </div>
              </div>
            </div>
          </article>

          <div className="tc-divider tc-reveal" />

          {/* ─── 9. GOVERNING LAW — Split ─── */}
          <article id="governing-law" className="tc-section tc-split tc-reveal">
            <div className="tc-split-left">
              <span className="tc-section-num">09</span>
              <h2>Governing Law</h2>
              <p>
                These Terms and Conditions, and any dispute arising out of or in
                connection with the services provided by Orbitrix Solutions, shall
                be governed by and construed in accordance with the laws of
                Pakistan. Any disputes shall be subject to the exclusive jurisdiction
                of the courts of Lahore, Pakistan.
              </p>
              <p>
                Notwithstanding the foregoing, Orbitrix Solutions reserves the right
                to seek injunctive or other equitable relief in any jurisdiction
                where the Client may be located.
              </p>
            </div>
            <div className="tc-split-right">
              <div className="tc-split-card tc-split-card-accent">
                <div className="tc-split-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h4>Jurisdiction</h4>
                <p>Governed by the laws of Pakistan, with exclusive jurisdiction in the courts of Lahore.</p>
                <div className="tc-split-card-tag">Pakistan</div>
              </div>
            </div>
          </article>

          <div className="tc-divider tc-reveal" />

          {/* ─── 10. GENERAL PROVISIONS — Numbered Grid ─── */}
          <article id="provisions" className="tc-section tc-provisions tc-reveal">
            <div className="tc-provisions-header">
              <span className="tc-section-num">10</span>
              <h2>General Provisions</h2>
            </div>
            <div className="tc-provisions-grid">
              {[
                { title: 'Entire Agreement', text: 'The service agreement, together with these Terms and Conditions, constitutes the entire agreement between the parties and supersedes all prior negotiations, representations, and agreements, whether written or oral.' },
                { title: 'Severability', text: 'If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.' },
                { title: 'Assignment', text: 'The Client may not assign or transfer any rights or obligations under these Terms and Conditions without the prior written consent of Orbitrix Solutions.' },
                { title: 'Amendments', text: 'Orbitrix Solutions reserves the right to update these Terms and Conditions at any time. Changes shall be effective upon posting on this page. Continued engagement constitutes acceptance.' },
                { title: 'Waiver', text: 'The failure of either party to enforce any provision of these Terms and Conditions shall not constitute a waiver of that party\'s right to enforce that provision or any other provision in the future.' },
              ].map((item, i) => (
                <div className="tc-provision-card" key={i}>
                  <span className="tc-provision-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <div className="tc-divider tc-reveal" />

          {/* ─── 11. CONTACT ─── */}
          <article id="contact" className="tc-section tc-contact-section tc-reveal">
            <div className="tc-contact-inner">
              <span className="tc-section-num">11</span>
              <h2>Contact Information</h2>
              <p>If you have any questions, concerns, or requests regarding these Terms and Conditions, please reach out to us.</p>
              <div className="tc-contact-grid">
                <div className="tc-contact-card-premium">
                  <div className="tc-contact-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <h4>Orbitrix Solutions</h4>
                  <p>Lahore, Pakistan</p>
                </div>
                <div className="tc-contact-card-premium">
                  <div className="tc-contact-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <h4>Email Us</h4>
                  <p>info@orbitrixsolutions.com</p>
                </div>
                <div className="tc-contact-card-premium">
                  <div className="tc-contact-card-icon">
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
          <div className="tc-cta tc-reveal">
            <div className="tc-cta-inner">
              <h3>Have questions about our terms?</h3>
              <p>Our team is ready to clarify any aspect of these Terms &amp; Conditions.</p>
              <div className="tc-cta-actions">
                <Link to="/contact" className="tc-cta-btn primary">Contact Us</Link>
                <Link to="/" className="tc-cta-btn secondary">Back to Home</Link>
              </div>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </main>
  )
}

export default TermsAndConditions
