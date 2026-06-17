import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faExternalLinkAlt, faCode, faSearch } from '@fortawesome/free-solid-svg-icons';
import SEO from '../../SEO';
import Footer from '../../Footer';
import { projects } from '../../../Data/projects';
import './index.css';

const categoryIcons = {
  'website-development': faCode,
  'seo': faSearch,
};

const Projects = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const filteredProjects = categoryFilter && categoryFilter !== 'all'
    ? projects.filter((p) => p.category === categoryFilter)
    : projects;
  return (
    <main id="main-content">
      <SEO
        title="Our Projects | Web Dev & SEO Portfolio – Orbitrix Solutions"
        description="Explore Orbitrix Solutions' portfolio of WordPress websites and SEO campaigns. Custom web development and search engine optimization projects with measurable results."
        keywords="web development portfolio, WordPress development, custom websites, Orbitrix Solutions portfolio, responsive web design"
      />

      <section className="projects-page" aria-label="Projects">
        {/* Hero */}
        <div className="projects-hero reveal-blur">
          <div className="projects-hero-inner">
            <span className="about-label">OUR WORK</span>
            <h1>Our Work Speaks for Itself</h1>
            <p>
              From custom WordPress builds to data-driven SEO campaigns,
              every project we deliver is designed to perform and convert.
            </p>
            <div className="projects-hero-categories">
              <span className="projects-hero-cat">Web Development</span>
              <span className="projects-hero-cat-dot"></span>
              <span className="projects-hero-cat">SEO</span>
            </div>
          </div>
        </div>

        {/* Category heading */}
        {categoryFilter && categoryFilter !== 'all' && (
          <div className="projects-category-heading">
            Showing <strong>{filteredProjects.length}</strong> {categoryFilter === 'seo' ? 'SEO' : 'Web Development'} project{filteredProjects.length !== 1 ? 's' : ''}
            <Link to="/projects" className="projects-category-clear">Clear filter</Link>
          </div>
        )}

        {/* Projects Grid */}
        <div className="projects-grid" role="list" aria-label="Project list">
          {filteredProjects.length === 0 ? (
            <div className="projects-empty">
              <p>No projects found in this category.</p>
              <Link to="/projects" className="projects-cta-btn primary">View All Projects</Link>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
            <article
              key={project.slug}
              className="project-card reveal-scale"
              role="listitem"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link to={`/projects/${project.slug}`} className="project-card-link" aria-label={`View case study: ${project.name}`}>
                <div className="project-thumb">
                  <img src={project.thumb} alt={`${project.name} preview`} loading="lazy" width="800" height="380" decoding="async" />
                  <span className={`project-status ${project.status === 'Live' ? 'live' : 'progress'}`}>
                    {project.status}
                  </span>
                  <div className="project-card-overlay">
                    <span className="project-view-case-study">
                      View Case Study
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </div>
                </div>
              </Link>
              <div className="project-body">
                <div className="project-body-text">
                  <span className="project-category-tag">
                    <FontAwesomeIcon icon={categoryIcons[project.category]} className="project-category-icon" />
                    {project.categoryLabel}
                  </span>
                  <h3>{project.name}</h3>
                  <p>{project.shortDescription}</p>
                </div>
                <div className="project-body-actions">
                  <Link to={`/projects/${project.slug}`} className="project-case-study-btn">
                    Case Study
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                  {project.url !== '#' && (
                    <a href={project.url} target="_blank" rel="noreferrer" className="project-visit-btn" aria-label={`Visit ${project.name} website (opens in new tab)`}>
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      Visit
                    </a>
                  )}
                </div>
              </div>
            </article>
          )))}
        </div>

        {/* CTA */}
        <div className="projects-cta reveal-scale">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Let Orbitrix Solutions build your next website or SEO campaign.
            We deliver measurable results for businesses across Pakistan and beyond.
          </p>
          <div className="projects-cta-actions">
            <Link to="/contact" className="projects-cta-btn primary">
              Get a Free Quote
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link to="/about" className="projects-cta-btn secondary">
              About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;
