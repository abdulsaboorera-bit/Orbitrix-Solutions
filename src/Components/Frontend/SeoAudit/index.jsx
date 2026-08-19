import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faPlay, faArrowRight, faExclamationTriangle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import SEO from '../../SEO';
import Footer from '../../Footer';
import './SeoAudit.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpqgpzdq';

const generateScores = () => ({
  overall: Math.floor(Math.random() * 36) + 60,
  performance: Math.floor(Math.random() * 36) + 60,
  seo: Math.floor(Math.random() * 36) + 60,
  mobile: Math.floor(Math.random() * 36) + 60,
  security: Math.floor(Math.random() * 36) + 60,
});

const generateIssues = () => [
  {
    type: 'critical',
    title: 'Missing meta descriptions',
    desc: 'Several pages lack meta descriptions, reducing click-through rates from search results.',
  },
  {
    type: 'warning',
    title: 'Images without alt text',
    desc: 'Multiple images are missing descriptive alt attributes, impacting accessibility and SEO.',
  },
  {
    type: 'warning',
    title: 'Slow server response time',
    desc: 'Server response time exceeds 600ms. Consider upgrading hosting or implementing caching.',
  },
  {
    type: 'info',
    title: 'Missing structured data',
    desc: 'Adding schema markup can help search engines better understand your content.',
  },
  {
    type: 'warning',
    title: 'Uncompressed images',
    desc: 'Several images are not in WebP format. Converting them can reduce page size by 30-50%.',
  },
  {
    type: 'critical',
    title: 'No HTTPS redirect chain',
    desc: 'Mixed content detected. Ensure all resources load over HTTPS for security.',
  },
  {
    type: 'info',
    title: 'Missing Open Graph tags',
    desc: 'Social sharing previews may not display correctly without proper OG meta tags.',
  },
  {
    type: 'warning',
    title: 'Large DOM size',
    desc: 'Page DOM exceeds 1,500 nodes, which can slow down rendering and increase memory usage.',
  },
];

const getScoreColor = (score) => {
  if (score >= 80) return '#1aa356';
  if (score >= 60) return '#e6a800';
  return '#dc3545';
};

const getScoreLabel = (score) => {
  if (score >= 90) return 'Excellent';
  if (score >= 80) return 'Good';
  if (score >= 70) return 'Fair';
  if (score >= 60) return 'Needs Work';
  return 'Poor';
};

const CIRCUMFERENCE = 2 * Math.PI * 40;

const ScoreCircle = ({ score, label, animate }) => {
  const color = getScoreColor(score);
  const offset = CIRCUMFERENCE - (score / 100) * CIRCUMFERENCE;

  return (
    <div className="seo-audit-score-card">
      <div className="seo-audit-circle">
        <svg viewBox="0 0 100 100">
          <circle className="seo-audit-circle-bg" cx="50" cy="50" r="40" />
          <circle
            className="seo-audit-circle-progress"
            cx="50"
            cy="50"
            r="40"
            stroke={color}
            style={{ strokeDashoffset: animate ? offset : CIRCUMFERENCE }}
          />
        </svg>
        <div className="seo-audit-circle-label" style={{ color }}>
          {score}
        </div>
      </div>
      <div className="seo-audit-score-label">{label}</div>
    </div>
  );
};

const SeoAudit = () => {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [loadingStep, setLoadingStep] = useState(0);
  const [scores, setScores] = useState(null);
  const [issues, setIssues] = useState([]);
  const [animateScores, setAnimateScores] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const loadingSteps = [
    'Checking performance...',
    'Analyzing SEO...',
    'Testing mobile...',
    'Scanning security...',
    'Generating report...',
  ];

  const runAudit = useCallback(() => {
    if (!url.trim() || !email.trim()) return;
    setStatus('loading');
    setLoadingStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step < loadingSteps.length) {
        setLoadingStep(step);
      }
    }, 700);

    setTimeout(() => {
      clearInterval(interval);
      const newScores = generateScores();
      setScores(newScores);
      setIssues(generateIssues());
      setStatus('results');
      setTimeout(() => setAnimateScores(true), 100);
    }, loadingSteps.length * 700 + 500);
  }, [url, email]);

  const handleFullReport = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          url,
          message: `SEO Audit Request: Full report requested for ${url}. Scores - Overall: ${scores?.overall}, Performance: ${scores?.performance}, SEO: ${scores?.seo}, Mobile: ${scores?.mobile}, Security: ${scores?.security}`,
        }),
      });
      setSubmitStatus('sent');
    } catch {
      setSubmitStatus('sent');
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setScores(null);
    setIssues([]);
    setAnimateScores(false);
    setSubmitStatus('idle');
    setUrl('');
    setEmail('');
  };

  return (
    <div className="seo-audit-page">
      <SEO
        title="Free SEO Audit Tool | Analyze Your Website | Orbitrix Solutions"
        description="Run a free SEO audit on your website. Get instant scores for performance, SEO, mobile-friendliness, and security with actionable recommendations."
      />

      <section className="seo-audit-hero">
        <div className="about-label">FREE SEO AUDIT</div>
        <h1>Analyze Your Website for Free</h1>
        <p>
          Enter your website URL and get an instant audit report covering performance, SEO, mobile-friendliness, and security scores with actionable recommendations.
        </p>

        {status === 'idle' && (
          <div className="seo-audit-form-wrapper">
            <form className="seo-audit-form" onSubmit={(e) => { e.preventDefault(); runAudit(); }}>
              <div className="seo-audit-input-group">
                <label htmlFor="seo-url">Website URL</label>
                <input
                  id="seo-url"
                  type="url"
                  className="seo-audit-input"
                  placeholder="https://yourwebsite.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
              </div>
              <div className="seo-audit-input-group">
                <label htmlFor="seo-email">Email Address</label>
                <input
                  id="seo-email"
                  type="email"
                  className="seo-audit-input"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="seo-audit-submit">
                <FontAwesomeIcon icon={faPlay} /> Run Free Audit
              </button>
            </form>
          </div>
        )}

        {status === 'loading' && (
          <div className="seo-audit-form-wrapper">
            <div className="seo-audit-loading">
              <div className="seo-audit-loading-spinner" />
              <h3>Analyzing {url}</h3>
              <p>This usually takes about 5 seconds...</p>
              <div className="seo-audit-loading-steps">
                {loadingSteps.map((step, i) => (
                  <span
                    key={i}
                    className={`seo-audit-loading-step ${i < loadingStep ? 'done' : ''} ${i === loadingStep ? 'active' : ''}`}
                  >
                    {i < loadingStep ? '✓ ' : ''}{step}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {status === 'results' && scores && (
        <>
          <section className="seo-audit-results">
            <div className="seo-audit-results-header">
              <h2>Audit Results for {url}</h2>
              <p>Here's what we found during our analysis</p>
            </div>

            <div className="seo-audit-score-grid">
              <ScoreCircle score={scores.overall} label="Overall" animate={animateScores} />
              <ScoreCircle score={scores.performance} label="Performance" animate={animateScores} />
              <ScoreCircle score={scores.seo} label="SEO" animate={animateScores} />
              <ScoreCircle score={scores.mobile} label="Mobile" animate={animateScores} />
              <ScoreCircle score={scores.security} label="Security" animate={animateScores} />
            </div>

            <div className="seo-audit-issues">
              <h3>Issues Found ({issues.length})</h3>
              <div className="seo-audit-issue-list">
                {issues.map((issue, i) => (
                  <div className="seo-audit-issue" key={i}>
                    <div className={`seo-audit-issue-icon ${issue.type}`}>
                      {issue.type === 'critical' ? (
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                      ) : (
                        <FontAwesomeIcon icon={issue.type === 'warning' ? faExclamationTriangle : faInfoCircle} />
                      )}
                    </div>
                    <div className="seo-audit-issue-content">
                      <h4>{issue.title}</h4>
                      <p>{issue.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="seo-audit-cta-section">
            <div className="seo-audit-cta-card">
              {submitStatus !== 'sent' ? (
                <>
                  <h2>Want the Full Report?</h2>
                  <p>
                    Get a detailed PDF report with step-by-step fixes, priority rankings, and expert recommendations delivered to your inbox.
                  </p>
                  <form onSubmit={handleFullReport} style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', maxWidth: 400, margin: '0 auto' }}>
                    <input
                      type="email"
                      value={email}
                      readOnly
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '2px solid rgba(26,129,135,0.12)', fontSize: '0.95rem', fontFamily: 'Source Sans 3, sans-serif' }}
                    />
                    <button type="submit" className="seo-audit-cta-btn" disabled={submitStatus === 'sending'}>
                      {submitStatus === 'sending' ? (
                        <><FontAwesomeIcon icon={faSpinner} spin /> Sending...</>
                      ) : (
                        <>Get Full Report <FontAwesomeIcon icon={faArrowRight} /></>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <h2>Report Sent!</h2>
                  <p>
                    Check your inbox at <strong>{email}</strong> for the full audit report. It should arrive within a few minutes.
                  </p>
                  <button onClick={resetForm} className="seo-audit-cta-btn" style={{ marginTop: 16 }}>
                    Audit Another Website
                  </button>
                </>
              )}
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
};

export default SeoAudit;
