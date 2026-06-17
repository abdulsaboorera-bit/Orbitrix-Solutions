import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import member1 from '../../../Images/member1.png'
import member2 from '../../../Images/member2.png'
import member3 from '../../../Images/member3.png'
import Footer from '../../Footer'

const FAQ = () => {
  return (
    <>
      <section className="about-section">
        <Typography.Title level={2} className="text-center reveal-blur">Meet Our Team</Typography.Title>
        <div className="about-team-grid">
          <div className="about-team-card reveal-scale" style={{ transitionDelay: '0ms' }}>
            <img src={member3} alt="Orbitrix Solutions Strategy Lead - Team Member" />
            <h4>Strategy Lead</h4>
            <p>Aligns positioning, messaging, and growth goals.</p>
          </div>
          <div className="about-team-card reveal-scale" style={{ transitionDelay: '100ms' }}>
            <img src={member2} alt="Orbitrix Solutions Design Director - Team Member" />
            <h4>Design Director</h4>
            <p>Shapes premium visual systems and UX.</p>
          </div>
          <div className="about-team-card reveal-scale" style={{ transitionDelay: '200ms' }}>
            <img src={member1} alt="Orbitrix Solutions Engineering Lead - Team Member" />
            <h4>Engineering Lead</h4>
            <p>Delivers high-performance web builds.</p>
          </div>
        </div>

        {/* Internal links for SEO */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
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
