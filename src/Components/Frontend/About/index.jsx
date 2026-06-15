import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../SEO'
import Hero from './Hero'
import Services from './Services'
import FAQ from './FAQ'
import './index.css'

const index = () => {
  return (
    <main>
      <SEO 
        title="About Us | Orbitrix Solutions - Web Development & Digital Marketing Agency" 
        description="Learn about Orbitrix Solutions, a results-driven web development agency and digital marketing company offering premier web development, SEO services, AI automation, and IT consulting." 
        keywords="about Orbitrix Solutions, web development agency, digital marketing company, SEO services, AI automation, IT consulting, React development, WordPress development"
      />
      <Hero/>
      <Services/>
      <FAQ/> 

      {/* Internal links section for SEO crawlability */}
      <section className="about-section" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px', color: 'var(--orbit-teal)' }}>
          Explore Our Services
        </h2>
        <p style={{ maxWidth: '640px', margin: '0 auto 24px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
          From custom web development to SEO optimization and AI automation, Orbitrix Solutions delivers 
          end-to-end digital solutions. See how we can help your business grow.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/projects" style={{ padding: '12px 28px', borderRadius: '8px', background: 'var(--orbit-teal)', color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
            View Our Projects
          </Link>
          <Link to="/contact" style={{ padding: '12px 28px', borderRadius: '8px', border: '2px solid var(--orbit-teal)', color: 'var(--orbit-teal)', textDecoration: 'none', fontWeight: 600 }}>
            Contact Us
          </Link>
          <Link to="/" style={{ padding: '12px 28px', borderRadius: '8px', border: '2px solid var(--orbit-sand)', color: 'var(--orbit-teal)', textDecoration: 'none', fontWeight: 600 }}>
            Home
          </Link>
        </div>
      </section>
    </main>
  )
}

export default index