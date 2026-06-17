import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import SEO from '../../SEO'
import Hero from './Hero'
import FAQ from './FAQ'
import Footer from '../../Footer'
import './index.css'

const teamMembers = [
  {
    name: 'Abdul Saboor',
    role: 'Founder & Lead Developer',
    bio: 'Full-stack developer with expertise in React, WordPress, and modern web technologies. Passionate about building high-performance digital experiences that drive business growth.',
    linkedin: 'https://www.linkedin.com/in/abdul-saboor-5677643b4/',
    github: 'https://github.com/abdulsaboorera-bit',
  },
]

const certifications = [
  { name: 'Google Analytics', issuer: 'Google' },
  { name: 'SEO Fundamentals', issuer: 'HubSpot Academy' },
  { name: 'Digital Marketing', issuer: 'Google Digital Garage' },
  { name: 'React Development', issuer: 'Meta' },
]

const values = [
  {
    title: 'Results-Driven',
    description: 'Every decision we make is guided by measurable outcomes. We focus on strategies that deliver real business growth, not vanity metrics.',
  },
  {
    title: 'Transparent Communication',
    description: 'We believe in honest, clear communication. You will always know the status of your project, what we are working on, and what to expect next.',
  },
  {
    title: 'Quality Over Speed',
    description: 'We never cut corners. Every project is built to last with clean code, tested functionality, and attention to detail that shows.',
  },
  {
    title: 'Long-Term Partnership',
    description: 'We are not just a vendor — we are your digital partner. We invest in understanding your business so we can grow together over time.',
  },
]

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Orbitrix Solutions",
  "description": "Learn about Orbitrix Solutions, a results-driven web development and digital marketing agency offering SEO, AI automation, and custom web development.",
  "url": "https://orbitrixsolutions.com/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "Orbitrix Solutions",
    "url": "https://orbitrixsolutions.com",
    "foundingDate": "2024",
    "numberOfEmployees": "5+",
    "areaServed": [
      "United States", "Canada", "United Kingdom", "Germany", "Netherlands"
    ]
  }
}

const Index = () => {
  return (
    <main id="main-content">
      <SEO
        title="About Us | Orbitrix Solutions – Web & SEO Agency"
        description="Learn about Orbitrix Solutions, a results-driven web development and digital marketing agency offering SEO, AI automation, and custom web development."
        keywords="about Orbitrix Solutions, web development agency, digital marketing company, SEO services, AI automation"
        schema={aboutSchema}
      />
      <Hero />

      {/* Values Section */}
      <section className="about-values-section reveal-blur">
        <div className="about-values-container">
          <div className="about-values-header">
            <span className="about-label">OUR VALUES</span>
            <Typography.Title level={2}>What Drives Everything We Do</Typography.Title>
          </div>
          <div className="about-values-grid stagger-children">
            {values.map((value) => (
              <div className="about-value-card reveal-scale" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team-section reveal-blur">
        <div className="about-team-container">
          <div className="about-team-header">
            <span className="about-label">OUR TEAM</span>
            <Typography.Title level={2}>Meet the People Behind Orbitrix</Typography.Title>
            <Typography.Paragraph>
              A dedicated team of developers, designers, and strategists committed to delivering exceptional results for every client.
            </Typography.Paragraph>
          </div>

          <div className="about-team-grid stagger-children">
            {teamMembers.map((member) => (
              <div className="about-team-card reveal-scale" key={member.name}>
                <div className="about-team-avatar">
                  {member.name.charAt(0)}
                </div>
                <h3>{member.name}</h3>
                <span className="about-team-role">{member.role}</span>
                <p>{member.bio}</p>
                <div className="about-team-socials">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`}>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  )}
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} GitHub`}>
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="about-certs-section reveal-blur">
        <div className="about-certs-container">
          <span className="about-label">CERTIFICATIONS</span>
          <Typography.Title level={2} style={{ textAlign: 'center', marginTop: '12px' }}>
            Trusted & Certified
          </Typography.Title>
          <div className="about-certs-grid stagger-children">
            {certifications.map((cert) => (
              <div className="about-cert-badge reveal-scale" key={cert.name}>
                <div className="about-cert-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 15l-2 5l-1-3h-3l2.5-2L5 10l3 1l1-3l3 2l3-2l1 3l3-1l-2.5 3l2.5 2h-3l-1 3z"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
                <strong>{cert.name}</strong>
                <span>{cert.issuer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  )
}

export default Index
