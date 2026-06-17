import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowLeft,
  faCheck,
  faCogs,
  faShareAlt,
  faCalendarAlt,
  faUser,
  faIndustry,
  faClipboardList,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import SEO from '../../SEO';
import Footer from '../../Footer';
import { getProjectBySlug, getRelatedProjects, getAdjacentProjects } from '../../../Data/projects';
import './index.css';

const AnimatedBar = ({ value, displayValue, label, delay }) => {
  const barRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="cs-chart-bar-wrap" ref={barRef} style={{ transitionDelay: `${delay}ms` }}>
      <div className="cs-chart-bar-label">{label}</div>
      <div className="cs-chart-bar-track">
        <div
          className={`cs-chart-bar-fill ${isVisible ? 'animate' : ''}`}
          style={{ '--bar-width': `${value}%`, transitionDelay: `${delay}ms` }}
        >
          <span className="cs-chart-bar-value">{displayValue}</span>
        </div>
      </div>
    </div>
  );
};

const CaseStudy = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const related = getRelatedProjects(slug, 3);
  const { prev, next } = getAdjacentProjects(slug);

  const shareUrl = `https://orbitrixsolutions.com/projects/${slug}`;
  const shareText = `Check out this case study: ${project.name} by Orbitrix Solutions`;

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    name: `${project.name} Case Study – Orbitrix Solutions`,
    description: project.shortDescription,
    author: { '@type': 'Organization', name: 'Orbitrix Solutions' },
    publisher: {
      '@type': 'Organization',
      name: 'Orbitrix Solutions',
      url: 'https://orbitrixsolutions.com',
    },
    url: shareUrl,
    image: project.heroImage,
    about: {
      '@type': 'Organization',
      name: project.projectDetails.client,
    },
    datePublished: new Date().toISOString(),
  };

  return (
    <main id="main-content">
      <SEO
        title={`${project.name} Case Study | Orbitrix Solutions`}
        description={project.shortDescription}
        keywords={`${project.name}, ${project.categoryLabel}, case study, Orbitrix Solutions, ${project.technologies.join(', ')}`}
        canonicalUrl={shareUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <article className="case-study-page" aria-label={`Case study: ${project.name}`}>
        {/* Hero */}
        <section className="cs-hero" aria-label="Project hero">
          <div className="cs-hero-image">
            <img src={project.heroImage} alt={`${project.name} hero`} width="1900" height="900" loading="eager" decoding="async" />
            <div className="cs-hero-overlay"></div>
          </div>
          <div className="cs-hero-content">
            <span className="cs-category-badge">{project.categoryLabel}</span>
            <h1>{project.name}</h1>
            <p className="cs-hero-desc">{project.shortDescription}</p>
            {project.url !== '#' && (
              <a href={project.url} target="_blank" rel="noreferrer" className="cs-hero-link">
                Visit Live Site
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            )}
          </div>
        </section>

        <div className="cs-container">
          {/* Project Meta Bar */}
          <div className="cs-meta-bar reveal-blur">
            <div className="cs-meta-item">
              <FontAwesomeIcon icon={faUser} className="cs-meta-icon" />
              <div>
                <span className="cs-meta-label">Client</span>
                <span className="cs-meta-value">{project.projectDetails.client}</span>
              </div>
            </div>
            <div className="cs-meta-item">
              <FontAwesomeIcon icon={faCalendarAlt} className="cs-meta-icon" />
              <div>
                <span className="cs-meta-label">Timeline</span>
                <span className="cs-meta-value">{project.projectDetails.timeline}</span>
              </div>
            </div>
            <div className="cs-meta-item">
              <FontAwesomeIcon icon={faIndustry} className="cs-meta-icon" />
              <div>
                <span className="cs-meta-label">Industry</span>
                <span className="cs-meta-value">{project.projectDetails.industry}</span>
              </div>
            </div>
            <div className="cs-meta-item">
              <FontAwesomeIcon icon={faClipboardList} className="cs-meta-icon" />
              <div>
                <span className="cs-meta-label">Status</span>
                <span className={`cs-meta-value cs-status ${project.status === 'Live' ? 'live' : 'progress'}`}>{project.status}</span>
              </div>
            </div>
          </div>

          {/* Challenge */}
          <section className="cs-section reveal-left" aria-labelledby="cs-challenge">
            <div className="cs-section-header">
              <span className="cs-section-number">01</span>
              <h2 id="cs-challenge">The Challenge</h2>
            </div>
            <p className="cs-section-text">{project.challenge}</p>
          </section>

          {/* Approach */}
          <section className="cs-section cs-section-alt reveal-right" aria-labelledby="cs-approach">
            <div className="cs-section-header">
              <span className="cs-section-number">02</span>
              <h2 id="cs-approach">Our Approach</h2>
            </div>
            <p className="cs-section-text">{project.approach}</p>
          </section>

          {/* Solution */}
          <section className="cs-section reveal-left" aria-labelledby="cs-solution">
            <div className="cs-section-header">
              <span className="cs-section-number">03</span>
              <h2 id="cs-solution">The Solution</h2>
            </div>
            <p className="cs-section-text">{project.solution}</p>
          </section>

          {/* Results */}
          <section className="cs-results reveal-scale" aria-labelledby="cs-results">
            <div className="cs-section-header">
              <span className="cs-section-number">04</span>
              <h2 id="cs-results">The Results</h2>
            </div>
            <div className="cs-results-grid">
              {project.results.map((result, idx) => (
                <div key={idx} className="cs-result-card">
                  <span className="cs-result-metric">{result.metric}</span>
                  <span className="cs-result-label">{result.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Animated Chart */}
          {project.chartData && (
            <section className="cs-chart-section reveal-blur" aria-labelledby="cs-chart">
              <div className="cs-section-header">
                <FontAwesomeIcon icon={faChartLine} className="cs-section-icon" />
                <h2 id="cs-chart">{project.chartTitle}</h2>
              </div>
              <div className="cs-chart-container">
                {project.chartData.map((item, idx) => (
                  <AnimatedBar
                    key={item.label}
                    value={item.value}
                    displayValue={item.displayValue}
                    label={item.label}
                    delay={idx * 100}
                  />
                ))}
                <div className="cs-chart-y-label">{project.chartMetric}</div>
              </div>
            </section>
          )}

          {/* Key Highlights Before/After */}
          {project.keyHighlights && (
            <section className="cs-highlights-section cs-section-alt reveal-scale" aria-labelledby="cs-highlights">
              <div className="cs-section-header">
                <span className="cs-section-number">05</span>
                <h2 id="cs-highlights">Key Improvements</h2>
              </div>
              <div className="cs-highlights-grid">
                {project.keyHighlights.map((item, idx) => (
                  <div key={idx} className="cs-highlight-card">
                    <span className="cs-highlight-label">{item.label}</span>
                    <div className="cs-highlight-comparison">
                      <div className="cs-highlight-before">
                        <span className="cs-highlight-tag">Before</span>
                        <span className="cs-highlight-value">{item.before}{item.unit}</span>
                      </div>
                      <FontAwesomeIcon icon={faArrowRight} className="cs-highlight-arrow" />
                      <div className="cs-highlight-after">
                        <span className="cs-highlight-tag">After</span>
                        <span className="cs-highlight-value">{item.after}{item.unit}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technologies */}
          <section className="cs-section cs-section-alt reveal-left" aria-labelledby="cs-tech">
            <div className="cs-section-header">
              <FontAwesomeIcon icon={faCogs} className="cs-section-icon" />
              <h2 id="cs-tech">Technologies Used</h2>
            </div>
            <div className="cs-tech-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="cs-tech-tag">{tech}</span>
              ))}
            </div>
          </section>

          {/* Deliverables */}
          <section className="cs-section reveal-right" aria-labelledby="cs-deliverables">
            <div className="cs-section-header">
              <FontAwesomeIcon icon={faClipboardList} className="cs-section-icon" />
              <h2 id="cs-deliverables">Key Deliverables</h2>
            </div>
            <ul className="cs-deliverables-list">
              {project.projectDetails.deliverables.map((item) => (
                <li key={item}>
                  <FontAwesomeIcon icon={faCheck} className="cs-check-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Testimonial */}
          {project.testimonial && (
            <section className="cs-testimonial reveal-scale" aria-label="Client testimonial">
              <div className="cs-quote-icon">&ldquo;</div>
              <blockquote className="cs-testimonial-quote">
                {project.testimonial.quote}
              </blockquote>
              <div className="cs-testimonial-author">
                <strong>{project.testimonial.author}</strong>
                <span>{project.testimonial.role}</span>
              </div>
            </section>
          )}

          {/* Social Sharing */}
          <div className="cs-share reveal-blur" aria-label="Share this case study">
            <span className="cs-share-label">
              <FontAwesomeIcon icon={faShareAlt} />
              Share this case study
            </span>
            <div className="cs-share-links">
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noreferrer"
                className="cs-share-btn"
                aria-label="Share on LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="cs-share-btn"
                aria-label="Share on Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noreferrer"
                className="cs-share-btn"
                aria-label="Share on Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>

          {/* Previous / Next Navigation */}
          <nav className="cs-nav reveal-blur" aria-label="Previous and next case studies">
            <Link to={`/projects/${prev.slug}`} className="cs-nav-link cs-nav-prev" aria-label={`Previous project: ${prev.name}`}>
              <FontAwesomeIcon icon={faArrowLeft} className="cs-nav-arrow" />
              <div className="cs-nav-text">
                <span className="cs-nav-direction">Previous</span>
                <span className="cs-nav-name">{prev.name}</span>
              </div>
            </Link>
            <Link to={`/projects/${next.slug}`} className="cs-nav-link cs-nav-next" aria-label={`Next project: ${next.name}`}>
              <div className="cs-nav-text">
                <span className="cs-nav-direction">Next</span>
                <span className="cs-nav-name">{next.name}</span>
              </div>
              <FontAwesomeIcon icon={faArrowRight} className="cs-nav-arrow" />
            </Link>
          </nav>

          {/* Related Projects */}
          {related.length > 0 && (
            <section className="cs-related reveal-scale" aria-labelledby="cs-related-heading">
              <h2 id="cs-related-heading">Related Projects</h2>
              <div className="cs-related-grid">
                {related.map((rel) => (
                  <Link to={`/projects/${rel.slug}`} key={rel.slug} className="cs-related-card">
                    <div className="cs-related-thumb">
                      <img src={rel.thumb} alt={`${rel.name} preview`} loading="lazy" width="800" height="380" decoding="async" />
                    </div>
                    <div className="cs-related-body">
                      <span className="cs-related-category">{rel.categoryLabel}</span>
                      <h3>{rel.name}</h3>
                      <span className="cs-related-link">
                        View Case Study
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back to Projects */}
          <div className="cs-back reveal-blur">
            <Link to="/projects" className="cs-back-link">
              <FontAwesomeIcon icon={faArrowLeft} />
              Back to All Projects
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default CaseStudy;
