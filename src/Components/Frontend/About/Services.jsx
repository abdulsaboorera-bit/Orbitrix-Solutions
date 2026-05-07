import React from 'react'
import { Typography } from 'antd'
import meeting from '../../../Images/meeting.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshakeAngle, faBrain, faAward } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <section className="about-section">
      <Typography.Title className="text-center">Our Core Values</Typography.Title>

      <div className="about-values-grid">
        <div className="about-card">
          <FontAwesomeIcon icon={faHandshakeAngle} size="2x" color="#1a8187" />
          <h3>Collaboration</h3>
          <p>We co-create with our clients, align goals early, and stay close through every milestone.</p>
        </div>
        <div className="about-card">
          <FontAwesomeIcon icon={faBrain} size="2x" color="#1a8187" />
          <h3>Innovation</h3>
          <p>We test, learn, and ship smart solutions that keep you ahead of changing markets.</p>
        </div>
        <div className="about-card">
          <FontAwesomeIcon icon={faAward} size="2x" color="#1a8187" />
          <h3>Achievement</h3>
          <p>We focus on measurable outcomes that move the business, not just the interface.</p>
        </div>
      </div>

      <div className="about-story">
        <div className="about-story-image">
          <img src={meeting} alt="Orbitrix team collaborating" />
        </div>
        <div className="about-story-content">
          <Typography.Title level={2}>Our Story</Typography.Title>
          <Typography.Paragraph>
            Orbitrix Solutions began as a passion project fueled by curiosity and a love for building on the web. Today, we
            partner with founders and teams to shape brands, products, and campaigns that feel premium and perform brilliantly.
          </Typography.Paragraph>
          <Typography.Paragraph>
            We blend thoughtful design with modern engineering so every launch feels confident, every experience feels smooth,
            and every client feels supported long after go-live.
          </Typography.Paragraph>
        </div>
      </div>
    </section>
  )
}

export default Services
