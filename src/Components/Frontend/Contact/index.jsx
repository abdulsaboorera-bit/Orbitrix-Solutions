import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import SEO from '../../SEO'
import Hero from './Hero'
import FAQ from './FAQ'
import './index.css'

const index = () => {
  return (
    <main id="main-content">
      <SEO 
        title="Contact Us | Orbitrix Solutions – Web & SEO Agency" 
        description="Get in touch with Orbitrix Solutions for custom web development, SEO, AI automation, and digital marketing tailored to your business." 
        keywords="contact Orbitrix Solutions, web development agency, SEO services, digital marketing, AI automation"
      />
      <Hero/>

      {/* Services overview section for content depth + internal links */}
      <section className="contact-services-overview reveal-blur" style={{ padding: '60px 20px', maxWidth: '960px', margin: '0 auto' }}>
        <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: '32px' }}>
          Our Web Development & Digital Marketing Services
        </Typography.Title>
        <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          <div style={{ padding: '24px', borderRadius: '12px', background: 'var(--orbit-sand)', border: '1px solid rgba(26,129,135,0.1)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', color: 'var(--orbit-teal)' }}>Custom Web Development</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
              We build high-performance websites using React, WordPress, and modern frameworks. 
              Every project is optimized for speed, SEO, and conversions.
            </p>
          </div>
          <div style={{ padding: '24px', borderRadius: '12px', background: 'var(--orbit-sand)', border: '1px solid rgba(26,129,135,0.1)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', color: 'var(--orbit-teal)' }}>SEO Services</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
              Rank higher on Google with data-driven SEO strategies. We handle technical SEO, 
              content optimization, and ongoing performance tracking.
            </p>
          </div>
          <div style={{ padding: '24px', borderRadius: '12px', background: 'var(--orbit-sand)', border: '1px solid rgba(26,129,135,0.1)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', color: 'var(--orbit-teal)' }}>AI Automation</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
              Automate repetitive tasks with AI-powered workflows. From chatbots to content generation, 
              we build intelligent systems that save time and reduce costs.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/projects" style={{ padding: '12px 28px', borderRadius: '8px', background: 'var(--orbit-teal)', color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
            View Our Projects
          </Link>
          <Link to="/about" style={{ padding: '12px 28px', borderRadius: '8px', border: '2px solid var(--orbit-teal)', color: 'var(--orbit-teal)', textDecoration: 'none', fontWeight: 600 }}>
            About Us
          </Link>
          <Link to="/" style={{ padding: '12px 28px', borderRadius: '8px', border: '2px solid var(--orbit-sand)', color: 'var(--orbit-teal)', textDecoration: 'none', fontWeight: 600 }}>
            Home
          </Link>
        </div>
      </section>

      <FAQ/> 
    </main>
  )
}

export default index