import React from 'react'

const Hero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-inner reveal-blur">
        <span className="about-hero-badge">Orbitrix Solutions</span>
        <h1 className="about-hero-title">About Orbitrix Solutions – Web Development & Digital Marketing Agency</h1>
        <p className="about-hero-copy">
          Orbitrix Solutions is a results-driven web development agency and digital marketing company helping businesses 
          launch faster, scale with confidence, and deliver premium digital experiences. We blend strategy, design, and 
          engineering to create websites, SEO campaigns, and AI-powered automation systems that perform.
        </p>

        <div className="about-hero-stats">
          <div className="about-hero-stat">
            <h3>80+</h3>
            <p>Projects delivered with measurable results.</p>
          </div>
          <div className="about-hero-stat">
            <h3>2+ years</h3>
            <p>Building digital systems that perform.</p>
          </div>
          <div className="about-hero-stat">
            <h3>15+</h3>
            <p>Countries served globally.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
