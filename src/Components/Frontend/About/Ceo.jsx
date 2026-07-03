import React from 'react'
import SEO from '../../SEO'
import Footer from '../../Footer'
import Breadcrumbs from '../../Breadcrumbs'
import ceoPic from '../../../Images/AbdulSaboor.png'
import './index.css'

const ceoSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "name": "Abdul Saboor - Founder & CEO of Orbitrix Solutions",
  "url": "https://orbitrixsolutions.com/about/ceo",
  "mainEntity": {
    "@type": "Person",
    "name": "Abdul Saboor",
    "jobTitle": "Founder & CEO",
    "worksFor": {
      "@type": "Organization",
      "name": "Orbitrix Solutions",
      "url": "https://orbitrixsolutions.com"
    },
    "sameAs": ["https://abdulsaboor.online"]
  }
}

const Ceo = () => {
  return (
    <main id="main-content">
      <SEO
        title="Meet Our CEO - Abdul Saboor | Orbitrix Solutions"
        description="Meet Abdul Saboor, Founder & CEO of Orbitrix Solutions - a Full Stack Software Engineer and AI Solutions Developer building high-performance digital products."
        keywords="Abdul Saboor, Orbitrix Solutions CEO, Founder, Full Stack Developer, AI Solutions Developer"
        schema={ceoSchema}
      />
      <Breadcrumbs />

      <section className="about-hero">
        <div className="about-hero-inner reveal-blur">
          <span className="about-hero-badge">Leadership</span>
          <h1 className="about-hero-title">Meet Our CEO</h1>
          <p className="about-hero-copy">
            The vision, engineering expertise, and leadership behind Orbitrix Solutions.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-ceo reveal-left">
          <div className="about-ceo-image">
            <img src={ceoPic} alt="Abdul Saboor - Founder and CEO of Orbitrix Solutions" width="711" height="648" loading="lazy" decoding="async" />
          </div>
          <div className="about-ceo-content reveal-right">
            <span className="about-label">FOUNDER &amp; CEO</span>
            <h2>Abdul Saboor</h2>
            <span className="about-ceo-role">Founder &amp; CEO, Orbitrix Solutions</span>
            <p>
              Abdul Saboor is a Full Stack Software Engineer, AI Solutions Developer, and technology entrepreneur passionate
              about building innovative digital products that help businesses grow. As the Founder &amp; CEO of Orbitrix
              Solutions, he leads a team dedicated to delivering high-quality web applications, AI-powered automation, SEO
              strategies, and scalable software solutions for clients worldwide.
            </p>
            <p>
              With expertise in modern technologies including React, Node.js, Express.js, MongoDB, Docker, Linux, CI/CD, and
              AI integration, Abdul focuses on creating secure, high-performance, and future-ready solutions. His vision is
              to empower startups and businesses through technology that drives measurable results and long-term success.
            </p>
            <p>
              Under his leadership, Orbitrix Solutions continues to help organizations transform ideas into powerful digital
              experiences while maintaining a strong commitment to innovation, quality, and customer satisfaction.
            </p>
            <div className="about-ceo-highlights">
              <span>Full Stack Engineering</span>
              <span>AI-Powered Automation</span>
              <span>SEO &amp; Growth Strategy</span>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://abdulsaboor.online"
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '10px 20px', borderRadius: '8px', background: 'var(--orbit-teal)', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                Explore More About Our CEO →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Ceo
