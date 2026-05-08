import React from 'react'
import { Typography } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Cta = () => {
  return (
    <section className="home-section cta-section">
      <div className="cta-card">
        <div>
          <Typography.Title level={2}>Ready to build your next growth milestone?</Typography.Title>
          <Typography.Paragraph>
            Share your goals and we will recommend the right plan, timeline, and roadmap within 24 hours.
          </Typography.Paragraph>
        </div>
        <div className="cta-actions">
          <a className="hb1 hb1-whatsapp" href="https://wa.me/qr/7GSRQFMD6AMZG1" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </a>
          <a className="hb1 hb1-email" href="mailto:abdulsaboormercedes@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default Cta
