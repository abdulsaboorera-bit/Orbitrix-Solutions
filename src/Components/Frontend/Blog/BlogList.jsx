import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import SEO from '../../SEO';
import Breadcrumbs from '../../Breadcrumbs';
import blogPosts, { categories } from '../../../Data/blog';
import Footer from '../../Footer';
import './Blog.css';

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'all' || post.category.toLowerCase().replace(/\s+/g, '-') === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main id="main-content">
      <SEO
        title="Blog | Orbitrix Solutions – Web Development, SEO & AI Automation Insights"
        description="Expert insights on web development, SEO, AI automation, and digital marketing. Learn strategies to grow your business online across the USA, Canada, UK, and Europe."
        keywords="web development blog, SEO tips, AI automation guide, digital marketing strategy, web development agency blog"
      />

      <Breadcrumbs />

      <section className="blog-hero">
        <div className="blog-hero-container">
          <span className="about-label">Our Blog</span>
          <h1>Web Development, SEO & <span className="heading-accent">Digital Growth Insights</span></h1>
          <p>Expert articles on web development, search engine optimization, AI automation, and digital marketing strategies to help your business grow online.</p>
        </div>
      </section>

      <section className="blog-list-section">
        <div className="blog-list-container">
          <div className="blog-filters">
            <div className="blog-search">
              <FontAwesomeIcon icon={faSearch} className="blog-search-icon" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="blog-categories">
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  className={`blog-category-btn ${activeCategory === cat.slug ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.slug)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-meta">
                  <span className="blog-card-category">{post.category}</span>
                  <div className="blog-card-info">
                    <span><FontAwesomeIcon icon={faCalendarAlt} /> {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span><FontAwesomeIcon icon={faClock} /> {post.readTime}</span>
                  </div>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="blog-card-link">
                  Read Article <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="blog-no-results">
              <h3>No articles found</h3>
              <p>Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogList;
