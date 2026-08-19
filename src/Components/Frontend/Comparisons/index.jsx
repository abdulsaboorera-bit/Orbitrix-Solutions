import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import SEO from '../../SEO';
import Breadcrumbs from '../../Breadcrumbs';
import Footer from '../../Footer';
import comparisons from './comparisons';
import './Comparisons.css';

const ComparisonPage = () => {
  const { slug } = useParams();
  const data = comparisons[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <main id="main-content">
        <div className="comparison-not-found">
          <h1>Comparison Not Found</h1>
          <p>The comparison you are looking for does not exist.</p>
          <Link to="/" className="comparison-back-link">
            Back to Home
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const otherComparisons = Object.entries(comparisons).filter(([key]) => key !== slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${data.optionA} vs ${data.optionB}: Which Is Right for Your Business?`,
    "description": data.metaDescription,
    "image": "https://orbitrixsolutions.com/logo-optimized.webp",
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
        "url": "https://orbitrixsolutions.com/logo-optimized.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://orbitrixsolutions.com/compare/${slug}`
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Which is better, ${data.optionA} or ${data.optionB}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": data.verdict
        }
      },
      {
        "@type": "Question",
        "name": `When should I choose ${data.optionA} over ${data.optionB}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": data.whenToChooseA.join(' ')
        }
      },
      {
        "@type": "Question",
        "name": `When should I choose ${data.optionB} over ${data.optionA}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": data.whenToChooseB.join(' ')
        }
      }
    ]
  };

  return (
    <main id="main-content">
      <SEO
        title={data.metaTitle}
        description={data.metaDescription}
        keywords={`${data.optionA} vs ${data.optionB}, ${data.optionA} comparison, ${data.optionB} comparison, web development, Orbitrix Solutions`}
        schema={schema}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs />

      <section className="comparison-hero">
        <div className="comparison-hero-bg" aria-hidden="true">
          <div className="comparison-orb orb-1"></div>
          <div className="comparison-orb orb-2"></div>
        </div>
        <div className="comparison-hero-container">
          <div className="comparison-badge">
            <span>{data.optionA}</span>
            <span className="comparison-badge-vs">vs</span>
            <span>{data.optionB}</span>
          </div>
          <h1>{data.heroTitle}</h1>
          <p className="comparison-hero-subtitle">
            A detailed, unbiased comparison to help you make the right decision for your project.
          </p>
        </div>
      </section>

      <section className="comparison-verdict reveal-scale">
        <div className="comparison-container">
          <div className="comparison-verdict-card">
            <h2>Quick Verdict</h2>
            <p>{data.verdict}</p>
          </div>
        </div>
      </section>

      <section className="comparison-table-section reveal-scale">
        <div className="comparison-container">
          <h2>{data.title} — Side by Side</h2>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  {data.table.headers.map((header, i) => (
                    <th key={i}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.table.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className={j === 0 ? 'comparison-table-label' : ''}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="comparison-detail-section reveal-scale">
        <div className="comparison-container">
          <div className="comparison-detail-grid">
            <div className="comparison-detail-card">
              <div className="comparison-detail-header comparison-detail-header-a">
                <h2>{data.optionA}</h2>
              </div>
              <div className="comparison-detail-body">
                <div className="comparison-pros-cons">
                  <h3>Pros</h3>
                  <ul>
                    {data.optionAData.pros.map((pro, i) => (
                      <li key={i}>
                        <FontAwesomeIcon icon={faCheckCircle} className="comparison-icon-pro" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="comparison-pros-cons">
                  <h3>Cons</h3>
                  <ul>
                    {data.optionAData.cons.map((con, i) => (
                      <li key={i}>
                        <FontAwesomeIcon icon={faTimesCircle} className="comparison-icon-con" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="comparison-detail-card">
              <div className="comparison-detail-header comparison-detail-header-b">
                <h2>{data.optionB}</h2>
              </div>
              <div className="comparison-detail-body">
                <div className="comparison-pros-cons">
                  <h3>Pros</h3>
                  <ul>
                    {data.optionBData.pros.map((pro, i) => (
                      <li key={i}>
                        <FontAwesomeIcon icon={faCheckCircle} className="comparison-icon-pro" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="comparison-pros-cons">
                  <h3>Cons</h3>
                  <ul>
                    {data.optionBData.cons.map((con, i) => (
                      <li key={i}>
                        <FontAwesomeIcon icon={faTimesCircle} className="comparison-icon-con" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison-when-section reveal-scale">
        <div className="comparison-container">
          <div className="comparison-when-grid">
            <div className="comparison-when-card">
              <div className="comparison-when-header comparison-when-header-a">
                <h3>When to Choose {data.optionA}</h3>
              </div>
              <ul>
                {data.whenToChooseA.map((item, i) => (
                  <li key={i}>
                    <FontAwesomeIcon icon={faCheckCircle} className="comparison-icon-check" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="comparison-when-card">
              <div className="comparison-when-header comparison-when-header-b">
                <h3>When to Choose {data.optionB}</h3>
              </div>
              <ul>
                {data.whenToChooseB.map((item, i) => (
                  <li key={i}>
                    <FontAwesomeIcon icon={faCheckCircle} className="comparison-icon-check" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison-recommendation reveal-scale">
        <div className="comparison-container">
          <div className="comparison-recommendation-card">
            <h2>Not Sure Which to Choose?</h2>
            <p>
              Every project is different. Tell us about your goals, budget, and timeline, and we will recommend
              the best approach for your specific situation. Get a free, no-obligation consultation from our team.
            </p>
            <div className="comparison-recommendation-actions">
              <a
                className="comparison-cta-btn comparison-cta-whatsapp"
                href="https://wa.me/qr/7GSRQFMD6AMZG1"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <Link to="/contact" className="comparison-cta-btn comparison-cta-contact">
                Contact Page
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {otherComparisons.length > 0 && (
        <section className="comparison-other reveal-scale">
          <div className="comparison-container">
            <h2>More Comparisons</h2>
            <div className="comparison-other-grid">
              {otherComparisons.map(([key, comp]) => (
                <Link key={key} to={`/compare/${key}`} className="comparison-other-card">
                  <span className="comparison-other-title">{comp.title}</span>
                  <span className="comparison-other-link">
                    Read Comparison <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default ComparisonPage;
