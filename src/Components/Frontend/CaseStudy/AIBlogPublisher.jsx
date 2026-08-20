import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenFancy,
  faSearch,
  faCogs,
  faImage,
  faRocket,
  faBolt,
  faCheckCircle,
  faPlay,
  faNewspaper,
  faHashtag,
  faEye,
  faGlobe,
  faChartLine,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './AIAutomation.css';

const PHASE_DELAY = 1400;

const AIBlogPublisher = () => {
  const sectionRef = useRef(null);
  const [phase, setPhase] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef([]);

  const clearTimers = useCallback(() => {
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [];
  }, []);

  const startSequence = useCallback(() => {
    clearTimers();
    setPhase(0);
    setIsAnimating(true);

    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 300 + PHASE_DELAY * 1);
    const t3 = setTimeout(() => setPhase(3), 300 + PHASE_DELAY * 2);
    const t4 = setTimeout(() => setPhase(4), 300 + PHASE_DELAY * 3);
    const t5 = setTimeout(() => setPhase(5), 300 + PHASE_DELAY * 4);
    const t6 = setTimeout(() => setPhase(6), 300 + PHASE_DELAY * 5);
    const t7 = setTimeout(() => setIsAnimating(false), 300 + PHASE_DELAY * 5 + 1200);

    timerRef.current = [t1, t2, t3, t4, t5, t6, t7];
  }, [clearTimers]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startSequence();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => { observer.disconnect(); clearTimers(); };
  }, [startSequence, clearTimers]);

  useEffect(() => {
    if (phase < 6) return;
    const el = sectionRef.current;
    if (!el) return;
    const nums = el.querySelectorAll('.ai-metric-num');
    nums.forEach((numEl) => {
      const target = parseInt(numEl.dataset.target, 10);
      const duration = 1800;
      const steps = 50;
      const interval = duration / steps;
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const eased = 1 - Math.pow(1 - progress, 3);
        numEl.textContent = Math.floor(target * eased).toLocaleString();
        if (step >= steps) clearInterval(timer);
      }, interval);
    });
  }, [phase]);

  const handleReplay = () => {
    const el = sectionRef.current;
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(startSequence, 400);
  };

  const travelerPos =
    phase === 0 ? '-3%' :
    phase === 1 ? '0%' :
    phase === 2 ? '20%' :
    phase === 3 ? '40%' :
    phase === 4 ? '60%' :
    phase === 5 ? '80%' :
    '100%';

  const travelerLabel =
    phase === 0 ? '' :
    phase === 1 ? 'Researching Topics...' :
    phase === 2 ? 'Writing Content...' :
    phase === 3 ? 'Optimizing SEO...' :
    phase === 4 ? 'Selecting Images...' :
    phase === 5 ? 'Publishing Live...' :
    'Published!';

  return (
    <section className="ai-wrapper" ref={sectionRef} aria-label="AI Blog Publisher Automation">

      <div className="ai-agent-header">
        <div className="ai-agent-logo">
          <div className="ai-agent-logo-ring"></div>
          <div className="ai-agent-logo-ring ai-ring-2"></div>
          <FontAwesomeIcon icon={faNewspaper} />
        </div>
        <div className="ai-agent-header-text">
          <span className="ai-agent-badge">ORBITRIX AI BLOG PUBLISHER</span>
          <h2>How the AI Blog Auto-Publisher Creates & Publishes Content</h2>
          <p>From keyword research to live publishing — watch the full AI content creation pipeline in action.</p>
        </div>
      </div>

      <div className="ai-pipeline-container">
        <div className="ai-flow-track">
          <div
            className={`ai-flow-fill ${phase >= 1 ? 'on' : ''}`}
            style={{ '--p': phase === 1 ? '0%' : phase === 2 ? '20%' : phase === 3 ? '40%' : phase === 4 ? '60%' : phase >= 5 ? '100%' : '0%' }}
          ></div>
          <div
            className={`ai-flow-bullet ${phase >= 1 ? 'on' : ''}`}
            style={{ '--p': phase === 1 ? '0%' : phase === 2 ? '20%' : phase === 3 ? '40%' : phase === 4 ? '60%' : phase >= 5 ? '100%' : '0%' }}
          ></div>

          {phase >= 1 && (
            <div
              className={`ai-traveler ${phase >= 6 ? 'ai-traveler--done' : ''}`}
              style={{ '--tp': travelerPos }}
            >
              <div className="ai-traveler__icon">
                <FontAwesomeIcon icon={faPenFancy} />
              </div>
              <span className="ai-traveler__label">{travelerLabel}</span>
            </div>
          )}
        </div>

        <div className="ai-nodes-row">

          {/* 1 — Keyword Research */}
          <div className={`ai-n ${phase >= 1 ? 'on' : ''} ${phase === 1 ? 'cur' : ''} ai-n--agent`}>
            <div className="ai-n__rings">
              <span className="ai-r ai-r--1"></span>
              <span className="ai-r ai-r--2"></span>
              <span className="ai-r ai-r--3"></span>
            </div>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <span className="ai-n__name">Keyword Research</span>
            <span className="ai-n__desc">Trend analysis engine</span>
            <span className="ai-n__sub">{phase >= 1 ? 'Researching...' : 'Standing by'}</span>
          </div>

          <div className={`ai-c ${phase >= 1 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 2 — AI Writes Content */}
          <div className={`ai-n ${phase >= 2 ? 'on' : ''} ${phase === 2 ? 'cur' : ''} ai-n--scrape`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faPenFancy} />
            </div>
            <span className="ai-n__name">AI Writes Blog</span>
            <span className="ai-n__desc">Content generation engine</span>
            <span className="ai-n__sub">{phase >= 2 ? 'Writing...' : 'Waiting'}</span>
            {phase >= 2 && (
              <div className="ai-card">
                <div className="ai-row"><FontAwesomeIcon icon={faHashtag} /><span>Keywords</span><strong className="ai-green">8 found</strong></div>
                <div className="ai-row"><FontAwesomeIcon icon={faEye} /><span>Search Vol.</span><strong className="ai-green">14.2K/mo</strong></div>
                <div className="ai-row"><FontAwesomeIcon icon={faChartLine} /><span>Difficulty</span><strong>Medium</strong></div>
                <div className="ai-done"><FontAwesomeIcon icon={faCheckCircle} /> Topics selected</div>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 2 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 3 — SEO Optimization */}
          <div className={`ai-n ${phase >= 3 ? 'on' : ''} ${phase === 3 ? 'cur' : ''} ai-n--analysis`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faCogs} />
            </div>
            <span className="ai-n__name">SEO Optimization</span>
            <span className="ai-n__desc">Meta tags and structure</span>
            <span className="ai-n__sub">{phase >= 3 ? 'Optimizing...' : 'Waiting'}</span>
            {phase >= 3 && (
              <div className="ai-card ai-card--analysis">
                <div className="ai-cl ai-cl--1"><span className="ai-tag" style={{ background: '#059669' }}>TITLE</span><span>10 Proven Ways to Scale Your Business...</span></div>
                <div className="ai-cl ai-cl--2"><span className="ai-tag" style={{ background: '#059669' }}>META</span><span>155 chars optimized description</span></div>
                <div className="ai-cl ai-cl--3"><span className="ai-tag" style={{ background: '#059669' }}>SCORE</span><span className="ai-tags" style={{ color: '#059669' }}>SEO Score: 94/100</span></div>
                <div className="ai-done"><FontAwesomeIcon icon={faCheckCircle} /> SEO complete</div>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 3 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 4 — Image Selection */}
          <div className={`ai-n ${phase >= 4 ? 'on' : ''} ${phase === 4 ? 'cur' : ''} ai-n--create`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faImage} />
            </div>
            <span className="ai-n__name">Image Selection</span>
            <span className="ai-n__desc">Visual content curation</span>
            <span className="ai-n__sub">{phase >= 4 ? 'Selecting...' : 'Waiting'}</span>
            {phase >= 4 && (
              <div className="ai-card ai-card--content">
                <div className="ai-cl ai-cl--1"><span className="ai-tag" style={{ background: '#d97706' }}>HERO</span><span>AI-generated cover image</span></div>
                <div className="ai-cl ai-cl--2"><span className="ai-tag" style={{ background: '#d97706' }}>ALT</span><span>Optimized alt text added</span></div>
                <div className="ai-cl ai-cl--3"><span className="ai-tag" style={{ background: '#d97706' }}>SIZE</span><span className="ai-tags" style={{ color: '#059669' }}>WebP, compressed 85%</span></div>
                <div className="ai-done"><FontAwesomeIcon icon={faCheckCircle} /> Images ready</div>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 4 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 5 — Publish Live */}
          <div className={`ai-n ${phase >= 5 ? 'on' : ''} ${phase === 5 ? 'cur' : ''} ai-n--publish`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <span className="ai-n__name">Publish Live</span>
            <span className="ai-n__desc">Instant deployment</span>
            <span className="ai-n__sub">{phase >= 5 ? 'Publishing...' : 'Waiting'}</span>
            {phase >= 5 && (
              <div className="ai-social">
                <div className="ai-chip" style={{ '--cc': '#059669', '--cd': '0s' }}>
                  <FontAwesomeIcon icon={faGlobe} /><span>Website live</span>
                  <FontAwesomeIcon icon={faCheckCircle} className="ai-chk" />
                </div>
                <div className="ai-chip" style={{ '--cc': '#2563eb', '--cd': '.25s' }}>
                  <FontAwesomeIcon icon={faSitemap} /><span>Sitemap updated</span>
                  <FontAwesomeIcon icon={faCheckCircle} className="ai-chk" />
                </div>
                <div className="ai-chip" style={{ '--cc': '#7c3aed', '--cd': '.5s' }}>
                  <FontAwesomeIcon icon={faBolt} /><span>Speed optimized</span>
                  <FontAwesomeIcon icon={faCheckCircle} className="ai-chk" />
                </div>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 5 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 6 — Results */}
          <div className={`ai-n ${phase >= 6 ? 'on' : ''} ${phase === 6 ? 'cur' : ''} ai-n--results`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <span className="ai-n__name">Content Metrics</span>
            <span className="ai-n__desc">Performance analytics</span>
            <span className="ai-n__sub">{phase >= 6 ? 'Analytics live' : 'Waiting'}</span>
            {phase >= 6 && (
              <div className="ai-metrics">
                <div className="ai-m"><FontAwesomeIcon icon={faNewspaper} /><span className="ai-metric-num" data-target="324">0</span><span className="ai-ml">Blogs Published</span></div>
                <div className="ai-m"><FontAwesomeIcon icon={faEye} /><span className="ai-metric-num" data-target="52800">0</span><span className="ai-ml">Organic Views</span></div>
                <div className="ai-m"><FontAwesomeIcon icon={faBolt} /><span className="ai-metric-num" data-target="12">0</span><span className="ai-ml">Posts / Week</span></div>
              </div>
            )}
          </div>

        </div>

        <div className="ai-steps">
          {[['01','Research',1],['02','Write',2],['03','SEO',3],['04','Images',4],['05','Publish',5],['06','Results',6]].map(([n,t,p]) => (
            <div key={n} className={`ai-s ${phase >= p ? 'on' : ''}`}><span className="ai-s__n">{n}</span>{t}</div>
          ))}
        </div>
      </div>

      <div className="ai-cta-row">
        <button
          className={`ai-replay-btn ${isAnimating ? 'ai-replay-btn--running' : ''}`}
          onClick={handleReplay}
          disabled={isAnimating}
          type="button"
        >
          <FontAwesomeIcon icon={faPlay} className="ai-replay-btn__icon" />
          {isAnimating ? 'Working...' : 'See Working'}
        </button>
        <a
          href="https://wa.me/qr/7GSRQFMD6AMZG1"
          target="_blank"
          rel="noopener noreferrer"
          className="ai-whatsapp-btn"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
          Get This Agent Now
        </a>
      </div>

      <div className="ai-details">
        <div className="ai-d">
          <FontAwesomeIcon icon={faSearch} className="ai-d__icon" />
          <h4>Keyword Research</h4>
          <p>AI scans trending topics, search volumes, and competition to find the best content opportunities.</p>
        </div>
        <div className="ai-d">
          <FontAwesomeIcon icon={faPenFancy} className="ai-d__icon" />
          <h4>Content Generation</h4>
          <p>Writes long-form, SEO-optimized blog posts with compelling intros, structured sections, and CTAs.</p>
        </div>
        <div className="ai-d">
          <FontAwesomeIcon icon={faCogs} className="ai-d__icon" />
          <h4>SEO Optimization</h4>
          <p>Auto-generates meta titles, descriptions, alt tags, internal links, and schema markup.</p>
        </div>
        <div className="ai-d">
          <FontAwesomeIcon icon={faRocket} className="ai-d__icon" />
          <h4>Auto Publishing</h4>
          <p>One-click publish to your website with sitemap updates, image optimization, and speed checks.</p>
        </div>
      </div>

    </section>
  );
};

export default AIBlogPublisher;
