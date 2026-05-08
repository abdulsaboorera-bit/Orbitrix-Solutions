import React from 'react'
import { Typography } from 'antd'

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
    <section className="home-section portfolio-section">
      <div className="section-header">
        <Typography.Title level={2}>Featured work</Typography.Title>
        <Typography.Paragraph>
          A snapshot of the outcomes we build for ambitious teams. Each engagement is tailored to growth goals.
        </Typography.Paragraph>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <article className="portfolio-card" key={project.title}>
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
    </section>
  )
}

export default Portfolio
