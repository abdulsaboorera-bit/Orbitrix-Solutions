import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendarAlt, faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SEO from '../../SEO';
import blogPosts from '../../../Data/blog';
import Footer from '../../Footer';
import './Blog.css';

const BlogArticle = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = blogPosts[currentIndex + 1] || null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <main id="main-content">
        <div className="blog-not-found">
          <h1>Article Not Found</h1>
          <p>The article you are looking for does not exist.</p>
          <Link to="/blog" className="blog-back-link">
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Orbitrix Solutions",
      "url": "https://orbitrixsolutions.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Orbitrix Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://orbitrixsolutions.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://orbitrixsolutions.com/blog/${post.slug}`
    },
    "keywords": post.category
  };

  return (
    <main id="main-content">
      <SEO
        title={`${post.title} | Orbitrix Solutions Blog`}
        description={post.excerpt}
        keywords={`${post.title}, ${post.category}, web development, SEO, Orbitrix Solutions`}
        schema={articleSchema}
        type="article"
      />

      <article className="blog-article">
        <div className="blog-article-container">
          <Link to="/blog" className="blog-back-link">
            <FontAwesomeIcon icon={faArrowLeft} />
            All Articles
          </Link>

          <div className="blog-article-header">
            <span className="blog-card-category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="blog-article-meta">
              <span><FontAwesomeIcon icon={faCalendarAlt} /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span><FontAwesomeIcon icon={faClock} /> {post.readTime}</span>
            </div>
          </div>

          <div
            className="blog-article-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {relatedPosts.length > 0 && (
            <div className="blog-related">
              <h3>Related Articles</h3>
              <div className="blog-related-grid">
                {relatedPosts.map((rp) => (
                  <Link key={rp.id} to={`/blog/${rp.slug}`} className="blog-related-card">
                    <span className="blog-card-category">{rp.category}</span>
                    <h4>{rp.title}</h4>
                    <span className="blog-card-link">
                      Read More <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {nextPost && (
            <Link to={`/blog/${nextPost.slug}`} className="blog-next-post">
              <span className="blog-next-label">Next Article</span>
              <span className="blog-next-title">{nextPost.title}</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default BlogArticle;
