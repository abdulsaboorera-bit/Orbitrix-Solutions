import React from 'react'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Cta = () => {
  return (
    <section className="home-section cta-section reveal" id="contact">
      <div className="cta-card">
        <div>
          <Typography.Title level={2}>Start Your Project with Orbitrix Solutions</Typography.Title>
          <Typography.Paragraph>
            Ready to work with a web development agency and digital marketing company that delivers results? Share your goals and we will recommend the right plan, timeline, and roadmap within 24 hours.
          </Typography.Paragraph>
        </div>
        <div className="cta-actions">
          <a className="hb1 hb1-whatsapp" href="https://wa.me/qr/7GSRQFMD6AMZG1" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </a>
          <a className="hb1 hb1-email" href="mailto:info@orbitrixsolutions.com">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
          <Link to="/contact" className="hb1 hb1-email" style={{ textDecoration: 'none' }}>
            Contact Page
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta
