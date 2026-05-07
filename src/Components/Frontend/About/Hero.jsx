import React from 'react'
import { Typography } from 'antd'

const Hero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-inner">
        <span className="about-hero-badge">Orbitrix Solutions</span>
        <Typography.Title className="about-hero-title">Designing digital momentum for ambitious brands.</Typography.Title>
        <Typography.Paragraph className="about-hero-copy">
          We blend strategy, design, and engineering to help modern businesses launch faster, scale with confidence, and
          deliver premium digital experiences that perform.
        </Typography.Paragraph>

        <div className="about-hero-stats">
          <div className="about-hero-stat">
            <h3>60+</h3>
            <p>Projects launched with measurable results.</p>
          </div>
          <div className="about-hero-stat">
            <h3>8+ years</h3>
            <p>Building digital systems that last.</p>
          </div>
          <div className="about-hero-stat">
            <h3>24/7</h3>
            <p>Client-first partnership and support.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
