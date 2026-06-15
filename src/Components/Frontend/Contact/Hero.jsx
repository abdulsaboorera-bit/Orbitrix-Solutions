import React from 'react'
import { Typography } from 'antd'

const Hero = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero-inner">
        <Typography.Title level={1} className="contact-hero-title">Contact Orbitrix Solutions – Web Development & Digital Marketing Agency</Typography.Title>
        <Typography.Paragraph className="contact-hero-copy">
          Ready to start your next project? Contact Orbitrix Solutions for custom web development, SEO services, 
          AI automation, and digital marketing strategies. Share your goals and we will respond with a clear plan, 
          timeline, and the right mix of services. We keep communication transparent, fast, and focused on outcomes.
        </Typography.Paragraph>
      </div>
    </section>
  )
}

export default Hero
