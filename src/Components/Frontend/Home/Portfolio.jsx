import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../../../Data/projects'

const featuredProjects = projects.filter(p => p.status === 'Live').slice(0, 3)

const Portfolio = () => {
  return (
    <section className="home-section portfolio-section reveal" id="case-studies">
      <div className="section-header">
        <h2>Projects That Drive Real Growth</h2>
        <p>
          Every website we build is engineered to attract more customers, increase conversions, and strengthen your brand presence across global markets.
        </p>
      </div>

      <div className="portfolio-grid">
        {featuredProjects.map((project, index) => (
          <Link
            to={`/projects/${project.slug}`}
            className="portfolio-card reveal"
            key={project.slug}
            style={{ transitionDelay: `${index * 120}ms`, textDecoration: 'none' }}
          >
            {project.thumb && (
              <div style={{ borderRadius: '14px', overflow: 'hidden', marginBottom: '16px', aspectRatio: '16/9' }}>
                <img
                  src={project.thumb}
                  alt={project.name}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            )}
            <h3>{project.name}</h3>
            <p>{project.shortDescription}</p>
            <div className="tag-row">
              <span>{project.categoryLabel}</span>
              {project.results && project.results[0] && (
                <span>{project.results[0].metric} {project.results[0].label}</span>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <Link to="/projects" className="services-explore-btn" style={{ display: 'inline-flex' }}>
          View All Projects
          <svg className="services-explore-btn-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 448 512" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </Link>
      </div>
    </section>
  )
}

export default Portfolio
