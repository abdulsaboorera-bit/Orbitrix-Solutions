import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import Footer from '../../Footer'

const FAQ = () => {
  return (
    <>
      <section className="about-section">
        {/* Internal links for SEO */}
        <div style={{ textAlign: 'center' }}>
          <Typography.Paragraph style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
            Ready to work with our team? Let us build your next digital project.
          </Typography.Paragraph>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/projects" style={{ padding: '10px 20px', borderRadius: '8px', background: 'var(--orbit-teal)', color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
              View Projects
            </Link>
            <Link to="/contact" style={{ padding: '10px 20px', borderRadius: '8px', border: '2px solid var(--orbit-teal)', color: 'var(--orbit-teal)', textDecoration: 'none', fontWeight: 600 }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default FAQ
