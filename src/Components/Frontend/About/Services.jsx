import React from 'react'
import { Link } from 'react-router-dom'
import meeting from '../../../Images/meeting.webp'
import ceoPic from '../../../Images/ceo pic.webp'
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
          <img src={ceoPic} alt="Abdul Saboor - Orbitrix Solutions Founder and CEO" width="910" height="886" loading="lazy" decoding="async" />
        </div>
        <div className="about-ceo-content reveal-right">
          <h2>CEO Story</h2>
          <p>
            I started my journey with a passion for technology, creativity, and solving real business problems through
            digital solutions. What began as an interest in web development and AI quickly turned into a mission to help
            businesses grow with modern technology.
          </p>
          <p>
            Today, I focus on building high-performing websites, AI-powered systems, and digital marketing strategies that
            help brands stand out online. From WordPress and React development to SEO, AI ads, and social media growth, my
            goal is to create solutions that are fast, scalable, and results-driven.
          </p>
          <p>
            I believe technology should not only look impressive - it should deliver real impact. That mindset continues
            to drive every project, partnership, and idea behind the company.
          </p>
          <div className="about-ceo-highlights">
            <span>Product + marketing mindset</span>
            <span>Performance-first delivery</span>
            <span>AI-assisted growth systems</span>
          </div>
          <div style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/projects" style={{ padding: '10px 20px', borderRadius: '8px', background: 'var(--orbit-teal)', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
              See Our Work
            </Link>
            <Link to="/contact" style={{ padding: '10px 20px', borderRadius: '8px', border: '2px solid var(--orbit-teal)', color: 'var(--orbit-teal)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
              Get in Touch
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
