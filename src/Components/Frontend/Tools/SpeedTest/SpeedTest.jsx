import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpinner,
  faPlay,
  faArrowRight,
  faMobileAlt,
  faDesktop,
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,
  faBolt,
  faImage,
  faCode,
  faFileAlt,
  faPaintBrush,
} from '@fortawesome/free-solid-svg-icons';
import SEO from '../../../SEO';
import Footer from '../../../Footer';
import './SpeedTest.css';

const CIRCUMFERENCE = 2 * Math.PI * 40;

const getScoreColor = (score) => {
  if (score >= 90) return '#1aa356';
  if (score >= 50) return '#e6a800';
  return '#dc3545';
};

const getScoreLabel = (score) => {
  if (score >= 90) return 'Excellent';
  if (score >= 70) return 'Good';
  if (score >= 50) return 'Needs Work';
  return 'Poor';
};

const getMetricColor = (value, thresholds) => {
  if (value <= thresholds.good) return '#1aa356';
  if (value <= thresholds.medium) return '#e6a800';
  return '#dc3545';
};

const ScoreCircle = ({ score, label, size = 120 }) => {
  const color = getScoreColor(score);
  const offset = CIRCUMFERENCE - (score / 100) * CIRCUMFERENCE;
  const radius = (size - 16) / 2;

  return (
    <div className="st-score-card">
      <div className="st-circle" style={{ width: size, height: size }}>
        <svg viewBox={`0 0 ${size} ${size}`}>
          <circle
            className="st-circle-bg"
            cx={size / 2}
            cy={size / 2}
            r={radius}
          />
          <circle
            className="st-circle-progress"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            style={{
              strokeDashoffset: offset,
              strokeDasharray: 2 * Math.PI * radius,
            }}
          />
        </svg>
        <div className="st-circle-label" style={{ color, fontSize: size * 0.22 }}>
          {score}
        </div>
      </div>
      {label && <div className="st-score-label">{label}</div>}
    </div>
  );
};

const speedTestSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free Website Speed Test",
  "url": "https://orbitrixsolutions.com/free-seo-audit",
  "applicationCategory": "UtilityApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const SpeedTest = () => {
  const [url, setUrl] = useState('');
  const [strategy, setStrategy] = useState('mobile');
  const [status, setStatus] = useState('idle');
  const [loadingStep, setLoadingStep] = useState(0);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  const loadingSteps = [
    'Fetching your website...',
    'Running Lighthouse audit...',
    'Analyzing Core Web Vitals...',
    'Checking performance metrics...',
    'Generating recommendations...',
  ];

  const normalizeUrl = (input) => {
    let trimmed = input.trim();
    if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) {
      trimmed = 'https://' + trimmed;
    }
    return trimmed;
  };

  const runSpeedTest = useCallback(async () => {
    if (!url.trim()) return;
    const normalizedUrl = normalizeUrl(url);
    setStatus('loading');
    setLoadingStep(0);
    setError('');

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step < loadingSteps.length) {
        setLoadingStep(step);
      }
    }, 1200);

    try {
      const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(normalizedUrl)}&strategy=${strategy}`;
      const response = await fetch(apiUrl);
      clearInterval(interval);

      if (!response.ok) {
        throw new Error('Failed to analyze the URL. Please check the URL and try again.');
      }

      const data = await response.json();
      const lighthouse = data?.lighthouseResult;
      const categories = lighthouse?.categories || {};
      const audits = lighthouse?.audits || {};

      const performanceScore = Math.round((categories.performance?.score || 0) * 100);
      const accessibilityScore = Math.round((categories.accessibility?.score || 0) * 100);
      const bestPracticesScore = Math.round((categories['best-practices']?.score || 0) * 100);
      const seoScore = Math.round((categories.seo?.score || 0) * 100);

      const fcp = Math.round(audits['first-contentful-paint']?.numericValue || 0);
      const lcp = Math.round(audits['largest-contentful-paint']?.numericValue || 0);
      const tbt = Math.round(audits['total-blocking-time']?.numericValue || 0);
      const cls = parseFloat((audits['cumulative-layout-shift']?.numericValue || 0).toFixed(3));
      const si = Math.round(audits['speed-index']?.numericValue || 0);
      const domSize = audits['dom-size']?.numericValue || null;

      const recommendations = [];

      if (fcp > 1800) {
        recommendations.push({
          icon: faPaintBrush,
          title: 'Improve First Contentful Paint',
          desc: `FCP is ${fcp}ms. Target under 1,800ms. Consider reducing server response time, eliminating render-blocking resources, and optimizing CSS.`,
          severity: fcp > 3000 ? 'critical' : 'warning',
        });
      }
      if (lcp > 2500) {
        recommendations.push({
          icon: faImage,
          title: 'Improve Largest Contentful Paint',
          desc: `LCP is ${lcp}ms. Target under 2,500ms. Optimize images, preload key resources, and reduce server response times.`,
          severity: lcp > 4000 ? 'critical' : 'warning',
        });
      }
      if (tbt > 200) {
        recommendations.push({
          icon: faBolt,
          title: 'Reduce Total Blocking Time',
          desc: `TBT is ${tbt}ms. Target under 200ms. Break up long tasks, defer unused JavaScript, and reduce third-party script impact.`,
          severity: tbt > 600 ? 'critical' : 'warning',
        });
      }
      if (cls > 0.1) {
        recommendations.push({
          icon: faCode,
          title: 'Reduce Cumulative Layout Shift',
          desc: `CLS is ${cls}. Target under 0.1. Set explicit dimensions for images and ads, and avoid inserting content above existing content.`,
          severity: cls > 0.25 ? 'critical' : 'warning',
        });
      }
      if (si > 3400) {
        recommendations.push({
          icon: faFileAlt,
          title: 'Improve Speed Index',
          desc: `Speed Index is ${si}ms. Target under 3,400ms. Optimize critical rendering path and reduce above-the-fold content size.`,
          severity: si > 5800 ? 'critical' : 'warning',
        });
      }
      if (domSize && domSize > 1500) {
        recommendations.push({
          icon: faCode,
          title: 'Reduce DOM Size',
          desc: `DOM has ${domSize.toLocaleString()} elements. Target under 1,500. Remove unnecessary nodes and simplify page structure.`,
          severity: domSize > 3000 ? 'critical' : 'warning',
        });
      }

      if (audits['uses-responsive-images']?.score === 0) {
        recommendations.push({
          icon: faImage,
          title: 'Use Responsive Images',
          desc: 'Serve appropriately sized images for each device. Use srcset and sizes attributes.',
          severity: 'warning',
        });
      }
      if (audits['uses-optimized-images']?.score === 0) {
        recommendations.push({
          icon: faImage,
          title: 'Optimize Images',
          desc: 'Use modern formats like WebP and compress images to reduce file sizes without quality loss.',
          severity: 'warning',
        });
      }
      if (audits['render-blocking-resources']?.score === 0) {
        recommendations.push({
          icon: faCode,
          title: 'Eliminate Render-Blocking Resources',
          desc: 'Defer non-critical CSS and JavaScript. Inline critical CSS and load deferred scripts asynchronously.',
          severity: 'warning',
        });
      }
      if (audits['unused-javascript']?.score === 0) {
        recommendations.push({
          icon: faBolt,
          title: 'Remove Unused JavaScript',
          desc: 'Reduce JavaScript bundle size by removing unused code. Use code splitting and tree shaking.',
          severity: 'info',
        });
      }

      setResults({
        performance: performanceScore,
        accessibility: accessibilityScore,
        bestPractices: bestPracticesScore,
        seo: seoScore,
        fcp,
        lcp,
        tbt,
        cls,
        si,
        domSize,
        recommendations,
        url: normalizedUrl,
        fetchedUrl: lighthouse?.finalUrl || normalizedUrl,
      });

      setStatus('results');
    } catch (err) {
      clearInterval(interval);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('idle');
    }
  }, [url, strategy]);

  const reset = () => {
    setStatus('idle');
    setResults(null);
    setError('');
    setUrl('');
    setLoadingStep(0);
  };

  return (
    <div className="st-page">
      <SEO
        title="Free Website Speed Test | Check Page Speed & Core Web Vitals | Orbitrix Solutions"
        description="Test your website speed and Core Web Vitals for free. Get FCP, LCP, TBT, CLS scores and actionable performance recommendations."
        keywords="website speed test, page speed, Core Web Vitals, FCP, LCP, TBT, CLS, performance test, Google PageSpeed"
        schema={speedTestSchema}
      />

      <section className="st-hero">
        <div className="about-label">FREE TOOL</div>
        <h1>Website Speed Test</h1>
        <p>
          Test your website's performance and Core Web Vitals. Get real data
          powered by Google Lighthouse with actionable recommendations.
        </p>
      </section>

      {status === 'idle' && (
        <section className="st-tool-section">
          <div className="st-form-card">
            <div className="st-input-group">
              <label htmlFor="st-url">Website URL</label>
              <div className="st-input-row">
                <input
                  id="st-url"
                  type="text"
                  className="st-input"
                  placeholder="https://yourwebsite.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && runSpeedTest()}
                />
                <button className="st-run-btn" onClick={runSpeedTest}>
                  <FontAwesomeIcon icon={faPlay} /> Test Speed
                </button>
              </div>
            </div>

            <div className="st-strategy-toggle">
              <button
                className={`st-strategy-btn ${strategy === 'mobile' ? 'active' : ''}`}
                onClick={() => setStrategy('mobile')}
              >
                <FontAwesomeIcon icon={faMobileAlt} /> Mobile
              </button>
              <button
                className={`st-strategy-btn ${strategy === 'desktop' ? 'active' : ''}`}
                onClick={() => setStrategy('desktop')}
              >
                <FontAwesomeIcon icon={faDesktop} /> Desktop
              </button>
            </div>

            {error && <p className="st-error">{error}</p>}
          </div>
        </section>
      )}

      {status === 'loading' && (
        <section className="st-tool-section">
          <div className="st-loading-card">
            <div className="st-loading-spinner" />
            <h3>Analyzing {normalizeUrl(url)}</h3>
            <p>Running Lighthouse {strategy === 'mobile' ? 'mobile' : 'desktop'} audit...</p>
            <div className="st-loading-steps">
              {loadingSteps.map((step, i) => (
                <span
                  key={i}
                  className={`st-loading-step ${i < loadingStep ? 'done' : ''} ${i === loadingStep ? 'active' : ''}`}
                >
                  {i < loadingStep ? '✓ ' : ''}{step}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {status === 'results' && results && (
        <>
          <section className="st-results">
            <div className="st-results-header">
              <h2>Results for {results.fetchedUrl}</h2>
              <p>Tested on {strategy === 'mobile' ? 'Mobile' : 'Desktop'} &middot; Powered by Google Lighthouse</p>
            </div>

            {/* Overall Score */}
            <div className="st-overall-score">
              <ScoreCircle score={results.performance} label="Performance Score" size={160} />
            </div>

            {/* Category Scores */}
            <div className="st-category-grid">
              <div className="st-category-card">
                <ScoreCircle score={results.accessibility} label="Accessibility" size={100} />
              </div>
              <div className="st-category-card">
                <ScoreCircle score={results.bestPractices} label="Best Practices" size={100} />
              </div>
              <div className="st-category-card">
                <ScoreCircle score={results.seo} label="SEO" size={100} />
              </div>
            </div>

            {/* Core Web Vitals */}
            <div className="st-metrics-card">
              <h3>Core Web Vitals</h3>
              <div className="st-metrics-grid">
                <div className="st-metric-item">
                  <div className="st-metric-value" style={{ color: getMetricColor(results.fcp, { good: 1800, medium: 3000 }) }}>
                    {results.fcp}ms
                  </div>
                  <div className="st-metric-name">First Contentful Paint</div>
                  <div className="st-metric-target">Target: &lt;1,800ms</div>
                  <div className="st-metric-bar">
                    <div
                      className="st-metric-bar-fill"
                      style={{
                        width: `${Math.min(100, (results.fcp / 5000) * 100)}%`,
                        background: getMetricColor(results.fcp, { good: 1800, medium: 3000 }),
                      }}
                    />
                  </div>
                </div>

                <div className="st-metric-item">
                  <div className="st-metric-value" style={{ color: getMetricColor(results.lcp, { good: 2500, medium: 4000 }) }}>
                    {results.lcp}ms
                  </div>
                  <div className="st-metric-name">Largest Contentful Paint</div>
                  <div className="st-metric-target">Target: &lt;2,500ms</div>
                  <div className="st-metric-bar">
                    <div
                      className="st-metric-bar-fill"
                      style={{
                        width: `${Math.min(100, (results.lcp / 6000) * 100)}%`,
                        background: getMetricColor(results.lcp, { good: 2500, medium: 4000 }),
                      }}
                    />
                  </div>
                </div>

                <div className="st-metric-item">
                  <div className="st-metric-value" style={{ color: getMetricColor(results.tbt, { good: 200, medium: 600 }) }}>
                    {results.tbt}ms
                  </div>
                  <div className="st-metric-name">Total Blocking Time</div>
                  <div className="st-metric-target">Target: &lt;200ms</div>
                  <div className="st-metric-bar">
                    <div
                      className="st-metric-bar-fill"
                      style={{
                        width: `${Math.min(100, (results.tbt / 1500) * 100)}%`,
                        background: getMetricColor(results.tbt, { good: 200, medium: 600 }),
                      }}
                    />
                  </div>
                </div>

                <div className="st-metric-item">
                  <div className="st-metric-value" style={{ color: getMetricColor(results.cls * 1000, { good: 100, medium: 250 }) }}>
                    {results.cls}
                  </div>
                  <div className="st-metric-name">Cumulative Layout Shift</div>
                  <div className="st-metric-target">Target: &lt;0.1</div>
                  <div className="st-metric-bar">
                    <div
                      className="st-metric-bar-fill"
                      style={{
                        width: `${Math.min(100, (results.cls / 0.5) * 100)}%`,
                        background: getMetricColor(results.cls * 1000, { good: 100, medium: 250 }),
                      }}
                    />
                  </div>
                </div>

                <div className="st-metric-item">
                  <div className="st-metric-value" style={{ color: getMetricColor(results.si, { good: 3400, medium: 5800 }) }}>
                    {results.si}ms
                  </div>
                  <div className="st-metric-name">Speed Index</div>
                  <div className="st-metric-target">Target: &lt;3,400ms</div>
                  <div className="st-metric-bar">
                    <div
                      className="st-metric-bar-fill"
                      style={{
                        width: `${Math.min(100, (results.si / 8000) * 100)}%`,
                        background: getMetricColor(results.si, { good: 3400, medium: 5800 }),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {results.domSize && (
              <div className="st-info-card">
                <div className="st-info-item">
                  <FontAwesomeIcon icon={faCode} />
                  <div>
                    <strong>DOM Size</strong>
                    <span>{results.domSize.toLocaleString()} elements</span>
                  </div>
                </div>
              </div>
            )}

            {/* Recommendations */}
            {results.recommendations.length > 0 && (
              <div className="st-recommendations-card">
                <h3>Recommendations ({results.recommendations.length})</h3>
                <div className="st-recommendation-list">
                  {results.recommendations.map((rec, i) => (
                    <div className="st-recommendation" key={i}>
                      <div className={`st-recommendation-icon ${rec.severity}`}>
                        <FontAwesomeIcon icon={rec.severity === 'critical' ? faExclamationTriangle : rec.severity === 'warning' ? faExclamationTriangle : faInfoCircle} />
                      </div>
                      <div className="st-recommendation-content">
                        <h4>{rec.title}</h4>
                        <p>{rec.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* CTA */}
          <section className="st-cta-section">
            <div className="st-cta-card">
              <h2>Need Help Fixing These Issues?</h2>
              <p>
                Our team can optimize your website's speed, improve Core Web Vitals,
                and boost your search rankings. Get a free consultation.
              </p>
              <div className="st-cta-actions">
                <Link to="/contact" className="st-cta-btn">
                  Contact Us <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <button onClick={reset} className="st-cta-btn-outline">
                  Test Another URL
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
};

export default SpeedTest;
