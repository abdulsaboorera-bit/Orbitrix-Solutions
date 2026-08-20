import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faRobot,
  faPenFancy,
  faImage,
  faClock,
  faShareAlt,
  faBolt,
  faHeart,
  faComment,
  faRetweet,
  faThumbsUp,
  faCheckCircle,
  faPlay,
  faHashtag,
  faCalendarAlt,
  faRocket,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import './AIAutomation.css';

const PHASE_DELAY = 1400;

const AISocialMediaPoster = () => {
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
    phase === 1 ? 'Content Idea Found' :
    phase === 2 ? 'Creating Post...' :
    phase === 3 ? 'Generating Images...' :
    phase === 4 ? 'Scheduling...' :
    phase === 5 ? 'Publishing to All...' :
    'Growth Unlocked!';

  return (
    <section className="ai-wrapper" ref={sectionRef} aria-label="AI Social Media Auto-Poster">

      <div className="ai-agent-header">
        <div className="ai-agent-logo">
          <div className="ai-agent-logo-ring"></div>
          <div className="ai-agent-logo-ring ai-ring-2"></div>
          <FontAwesomeIcon icon={faShareAlt} />
        </div>
        <div className="ai-agent-header-text">
          <span className="ai-agent-badge">ORBITRIX AI SOCIAL POSTER</span>
          <h2>How the AI Social Media Poster Automates Your Growth</h2>
          <p>From content ideas to scheduled posts across all platforms — watch the full AI social media pipeline in action.</p>
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
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
              <span className="ai-traveler__label">{travelerLabel}</span>
            </div>
          )}
        </div>

        <div className="ai-nodes-row">

          {/* 1 — Content Idea */}
          <div className={`ai-n ${phase >= 1 ? 'on' : ''} ${phase === 1 ? 'cur' : ''} ai-n--agent`}>
            <div className="ai-n__rings">
              <span className="ai-r ai-r--1"></span>
              <span className="ai-r ai-r--2"></span>
              <span className="ai-r ai-r--3"></span>
            </div>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <span className="ai-n__name">Content Idea</span>
            <span className="ai-n__desc">Trend & niche research</span>
            <span className="ai-n__sub">{phase >= 1 ? 'Ideating...' : 'Standing by'}</span>
          </div>

          <div className={`ai-c ${phase >= 1 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 2 — Create Post */}
          <div className={`ai-n ${phase >= 2 ? 'on' : ''} ${phase === 2 ? 'cur' : ''} ai-n--scrape`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faPenFancy} />
            </div>
            <span className="ai-n__name">Create Post</span>
            <span className="ai-n__desc">Caption and hashtag engine</span>
            <span className="ai-n__sub">{phase >= 2 ? 'Writing...' : 'Waiting'}</span>
            {phase >= 2 && (
              <div className="ai-card">
                <div className="ai-row"><FontAwesomeIcon icon={faPenFancy} /><span>Caption</span><strong className="ai-green">156 chars</strong></div>
                <div className="ai-row"><FontAwesomeIcon icon={faHashtag} /><span>Hashtags</span><strong className="ai-green">15 found</strong></div>
                <div className="ai-row"><FontAwesomeIcon icon={faBolt} /><span>Engagement</span><strong>High predicted</strong></div>
                <div className="ai-done"><FontAwesomeIcon icon={faCheckCircle} /> Post drafted</div>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 2 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 3 — Image Generation */}
          <div className={`ai-n ${phase >= 3 ? 'on' : ''} ${phase === 3 ? 'cur' : ''} ai-n--analysis`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faImage} />
            </div>
            <span className="ai-n__name">Image Suggestion</span>
            <span className="ai-n__desc">AI visual content ideas</span>
            <span className="ai-n__sub">{phase >= 3 ? 'Generating...' : 'Waiting'}</span>
            {phase >= 3 && (
              <div className="ai-card ai-card--analysis">
                <div className="ai-cl ai-cl--1"><span className="ai-tag" style={{ background: '#059669' }}>COVER</span><span>AI-designed carousel slide</span></div>
                <div className="ai-cl ai-cl--2"><span className="ai-tag" style={{ background: '#059669' }}>STYLE</span><span>Brand-consistent colors</span></div>
                <div className="ai-cl ai-cl--3"><span className="ai-tag" style={{ background: '#059669' }}>FORMAT</span><span className="ai-tags" style={{ color: '#059669' }}>Square, 1080x1080px</span></div>
                <div className="ai-done"><FontAwesomeIcon icon={faCheckCircle} /> Visuals ready</div>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 3 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 4 — Schedule */}
          <div className={`ai-n ${phase >= 4 ? 'on' : ''} ${phase === 4 ? 'cur' : ''} ai-n--create`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <span className="ai-n__name">Optimal Schedule</span>
            <span className="ai-n__desc">Peak time optimization</span>
            <span className="ai-n__sub">{phase >= 4 ? 'Scheduling...' : 'Waiting'}</span>
            {phase >= 4 && (
              <div className="ai-card ai-card--content">
                <div className="ai-cl ai-cl--1"><span className="ai-tag" style={{ background: '#d97706' }}>TIME</span><span>Tuesday 9:00 AM (peak)</span></div>
                <div className="ai-cl ai-cl--2"><span className="ai-tag" style={{ background: '#d97706' }}>TIMEZONE</span><span>Audience local time</span></div>
                <div className="ai-cl ai-cl--3"><span className="ai-tag" style={{ background: '#d97706' }}>QUEUE</span><span className="ai-tags" style={{ color: '#059669' }}>Added to content queue</span></div>
                <div className="ai-done"><FontAwesomeIcon icon={faCheckCircle} /> Scheduled</div>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 4 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 5 — Publish */}
          <div className={`ai-n ${phase >= 5 ? 'on' : ''} ${phase === 5 ? 'cur' : ''} ai-n--publish`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <span className="ai-n__name">Publish All</span>
            <span className="ai-n__desc">Multi-platform posting</span>
            <span className="ai-n__sub">{phase >= 5 ? 'Publishing...' : 'Waiting'}</span>
            {phase >= 5 && (
              <div className="ai-social">
                {[
                  { n: 'Facebook', i: faFacebook, c: '#1877F2', d: '0s' },
                  { n: 'Instagram', i: faInstagram, c: '#E4405F', d: '.25s' },
                  { n: 'LinkedIn', i: faLinkedin, c: '#0A66C2', d: '.5s' },
                ].map((p) => (
                  <div key={p.n} className="ai-chip" style={{ '--cc': p.c, '--cd': p.d }}>
                    <FontAwesomeIcon icon={p.i} /><span>{p.n}</span>
                    <FontAwesomeIcon icon={faCheckCircle} className="ai-chk" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 5 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 6 — Engagement */}
          <div className={`ai-n ${phase >= 6 ? 'on' : ''} ${phase === 6 ? 'cur' : ''} ai-n--results`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <span className="ai-n__name">Engagement Stats</span>
            <span className="ai-n__desc">Real-time analytics</span>
            <span className="ai-n__sub">{phase >= 6 ? 'Stats live' : 'Waiting'}</span>
            {phase >= 6 && (
              <div className="ai-metrics">
                <div className="ai-m"><FontAwesomeIcon icon={faHeart} /><span className="ai-metric-num" data-target="3200">0</span><span className="ai-ml">Likes</span></div>
                <div className="ai-m"><FontAwesomeIcon icon={faComment} /><span className="ai-metric-num" data-target="847">0</span><span className="ai-ml">Comments</span></div>
                <div className="ai-m"><FontAwesomeIcon icon={faShareAlt} /><span className="ai-metric-num" data-target="562">0</span><span className="ai-ml">Shares</span></div>
              </div>
            )}
          </div>

        </div>

        <div className="ai-steps">
          {[['01','Ideas',1],['02','Create',2],['03','Visuals',3],['04','Schedule',4],['05','Publish',5],['06','Growth',6]].map(([n,t,p]) => (
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
          <FontAwesomeIcon icon={faLightbulb} className="ai-d__icon" />
          <h4>Content Ideation</h4>
          <p>AI researches trending topics in your niche and generates content ideas with high engagement potential.</p>
        </div>
        <div className="ai-d">
          <FontAwesomeIcon icon={faPenFancy} className="ai-d__icon" />
          <h4>Post Creation</h4>
          <p>Writes platform-optimized captions with targeted hashtags, emojis, and calls-to-action for each network.</p>
        </div>
        <div className="ai-d">
          <FontAwesomeIcon icon={faClock} className="ai-d__icon" />
          <h4>Smart Scheduling</h4>
          <p>Analyzes your audience activity to schedule posts at peak engagement times for maximum reach.</p>
        </div>
        <div className="ai-d">
          <FontAwesomeIcon icon={faShareAlt} className="ai-d__icon" />
          <h4>Multi-Platform Posting</h4>
          <p>One-click publish to Facebook, Instagram, and LinkedIn with platform-specific formatting.</p>
        </div>
      </div>

    </section>
  );
};

export default AISocialMediaPoster;
