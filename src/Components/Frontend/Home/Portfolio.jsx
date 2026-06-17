import React from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'Ecommerce Revamp',
    summary: 'Redesigned storefront with faster checkout and clearer product discovery.',
    tags: ['UX', 'Shopify', 'CRO'],
  },
  {
    title: 'SaaS Growth Site',
    summary: 'Marketing site rebuild focused on clarity, speed, and demo conversions.',
    tags: ['React', 'Webflow', 'SEO'],
  },
  {
    title: 'Healthcare Visibility Boost',
    summary: 'Technical SEO and content plan that lifted qualified traffic within 60 days.',
    tags: ['SEO', 'Content', 'Analytics'],
  },
]

const Portfolio = () => {
  return (
    <section className="home-section portfolio-section reveal" id="case-studies">
      <div className="section-header">
        <h2>Case Studies & Projects</h2>
        <p>
          A snapshot of outcomes we build as a web development agency and SEO services agency. Each engagement is tailored to growth goals.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <article className="portfolio-card reveal" key={project.title} style={{ transitionDelay: `${index * 120}ms` }}>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <Link to="/projects" className="pricing-cta" style={{ display: 'inline-block', padding: '14px 32px', textDecoration: 'none' }}>
          View All Projects
        </Link>
      </div>
    </section>
  )
}

export default Portfolio
