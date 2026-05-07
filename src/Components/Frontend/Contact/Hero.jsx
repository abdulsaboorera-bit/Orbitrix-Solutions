import React from 'react'
import { Typography } from 'antd'

const Hero = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero-inner">
        <Typography.Title className="contact-hero-title">Let us build your next digital milestone.</Typography.Title>
        <Typography.Paragraph className="contact-hero-copy">
          Share your goals and we will respond with a clear plan, timeline, and the right mix of services. We keep
          communication transparent, fast, and focused on outcomes.
        </Typography.Paragraph>
      </div>
    </section>
  )
}

export default Hero
