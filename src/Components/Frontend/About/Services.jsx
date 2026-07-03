import React from 'react'
import { Link } from 'react-router-dom'
import meeting from '../../../Images/meeting.webp'
import ceoPic from '../../../Images/AbdulSaboor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshakeAngle, faBrain, faAward } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <section className="about-section">
      <h2 className="text-center reveal-blur">Our Core Values</h2>

      <div className="about-values-grid">
        <div className="about-card reveal-scale" style={{ transitionDelay: '0ms' }}>
          <FontAwesomeIcon icon={faHandshakeAngle} size="2x" color="#1a8187" />
          <h3>Collaboration</h3>
          <p>We co-create with our clients, align goals early, and stay close through every milestone.</p>
        </div>
        <div className="about-card reveal-scale" style={{ transitionDelay: '100ms' }}>
          <FontAwesomeIcon icon={faBrain} size="2x" color="#1a8187" />
          <h3>Innovation</h3>
          <p>We test, learn, and ship smart solutions that keep you ahead of changing markets.</p>
        </div>
        <div className="about-card reveal-scale" style={{ transitionDelay: '200ms' }}>
          <FontAwesomeIcon icon={faAward} size="2x" color="#1a8187" />
          <h3>Achievement</h3>
          <p>We focus on measurable outcomes that move the business, not just the interface.</p>
        </div>
      </div>

      <div className="about-ceo reveal-left">
        <div className="about-ceo-image">
          <img src={ceoPic} alt="Abdul Saboor - Founder and CEO of Orbitrix Solutions" width="711" height="648" loading="lazy" decoding="async" />
        </div>
        <div className="about-ceo-content reveal-right">
          <span className="about-label">MEET OUR CEO</span>
          <h2>Abdul Saboor</h2>
          <span className="about-ceo-role">Founder &amp; CEO, Orbitrix Solutions</span>
          <p>
            Full Stack Software Engineer, AI Solutions Developer, and technology entrepreneur leading Orbitrix Solutions in
            delivering high-quality web applications, AI-powered automation, and scalable software solutions for clients
            worldwide.
          </p>
          <div className="about-ceo-highlights">
            <span>Full Stack Engineering</span>
            <span>AI-Powered Automation</span>
            <span>SEO &amp; Growth Strategy</span>
          </div>
          <div style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link
              to="/about/ceo"
              style={{ padding: '10px 20px', borderRadius: '8px', background: 'var(--orbit-teal)', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              Meet Our CEO →
            </Link>
          </div>
        </div>
      </div>

      <div className="about-story about-workflow reveal-blur">
        <div className="about-workflow-content">
          <h2>How We Work</h2>
          <p>
            A focused delivery system that keeps projects lean, visible, and outcome-driven from day one.
          </p>

          <div className="workflow-steps">
            <div className="workflow-step">
              <span>01</span>
              <div>
                <h4>Discovery Sprint</h4>
                <p>Align on goals, users, and the fastest path to impact.</p>
              </div>
            </div>
            <div className="workflow-step">
              <span>02</span>
              <div>
                <h4>Strategy + Design</h4>
                <p>Define the experience, messaging, and conversion flow.</p>
              </div>
            </div>
            <div className="workflow-step">
              <span>03</span>
              <div>
                <h4>Build + Launch</h4>
                <p>Ship fast with performance checks and quality gates.</p>
              </div>
            </div>
            <div className="workflow-step">
              <span>04</span>
              <div>
                <h4>Optimize</h4>
                <p>Measure results, iterate improvements, and scale what works.</p>
              </div>
            </div>
          </div>

          <div className="workflow-outcomes">
            <div>
              <h3>Clear milestones</h3>
              <p>Weekly visibility and predictable timelines.</p>
            </div>
            <div>
              <h3>Performance-first</h3>
              <p>Speed, SEO, and conversion focus on every release.</p>
            </div>
          </div>

          <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ padding: '10px 20px', borderRadius: '8px', background: 'var(--orbit-teal)', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
              Start a Project
            </Link>
            <Link to="/projects" style={{ padding: '10px 20px', borderRadius: '8px', border: '2px solid var(--orbit-teal)', color: 'var(--orbit-teal)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
              See Our Work
            </Link>
          </div>
        </div>

        <div className="about-workflow-media">
          <div className="about-story-image">
            <img src={meeting} alt="Orbitrix team collaborating" width="1259" height="844" loading="lazy" decoding="async" />
          </div>
          <div className="workflow-card">
            <h4>What you get</h4>
            <ul>
              <li>Dedicated project owner</li>
              <li>Weekly progress updates</li>
              <li>Launch-ready QA checklist</li>
              <li>Post-launch optimization plan</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
