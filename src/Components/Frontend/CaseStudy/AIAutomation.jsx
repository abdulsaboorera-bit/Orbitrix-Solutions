import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRobot,
  faPenFancy,
  faShareAlt,
  faChartLine,
  faCheckCircle,
  faBolt,
  faRocket,
  faEye,
  faHashtag,
  faGlobe,
  faSpider,
  faChartBar,
  faNewspaper,
  faPlay,
  faPaperPlane,
  faImage,
  faCheck,
  faHeart,
  faComment,
  faRetweet,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import './AIAutomation.css';

const PHASE_DELAY = 1400;

const AIAutomation = () => {
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
    phase === 1 ? 'Agent Activated' :
    phase === 2 ? 'Scraping Viral Content...' :
    phase === 3 ? 'Analyzing Trends...' :
    phase === 4 ? 'Generating Posts...' :
    phase === 5 ? 'Publishing to Accounts...' :
    'Growth Unlocked!';

  return (
    <section className="ai-wrapper" ref={sectionRef} aria-label="Orbitrix AI Agent Automation">

      {/* Orbitrix AI Agent Header */}
      <div className="ai-agent-header">
        <div className="ai-agent-logo">
          <div className="ai-agent-logo-ring"></div>
          <div className="ai-agent-logo-ring ai-ring-2"></div>
          <FontAwesomeIcon icon={faRobot} />
        </div>
        <div className="ai-agent-header-text">
          <span className="ai-agent-badge">ORBITRIX AI AGENT</span>
          <h2>How the AI Agent Automates Your Social Media Growth</h2>
          <p>From scraping trending content to auto-publishing growth posts — watch the full AI automation pipeline in action.</p>
        </div>
      </div>

      {/* Pipeline Container */}
      <div className="ai-pipeline-container">

        {/* Flow line */}
        <div className="ai-flow-track">
          <div
            className={`ai-flow-fill ${phase >= 1 ? 'on' : ''}`}
            style={{ '--p': phase === 1 ? '0%' : phase === 2 ? '20%' : phase === 3 ? '40%' : phase === 4 ? '60%' : phase >= 5 ? '100%' : '0%' }}
          ></div>
          <div
            className={`ai-flow-bullet ${phase >= 1 ? 'on' : ''}`}
            style={{ '--p': phase === 1 ? '0%' : phase === 2 ? '20%' : phase === 3 ? '40%' : phase === 4 ? '60%' : phase >= 5 ? '100%' : '0%' }}
          ></div>

          {/* Traveler Icon */}
          {phase >= 1 && (
            <div
              className={`ai-traveler ${phase >= 6 ? 'ai-traveler--done' : ''}`}
              style={{ '--tp': travelerPos }}
            >
              <div className="ai-traveler__icon">
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
              <span className="ai-traveler__label">{travelerLabel}</span>
            </div>
          )}
        </div>

        {/* Nodes Row */}
        <div className="ai-nodes-row">

          {/* 1 — AI Agent */}
          <div className={`ai-n ${phase >= 1 ? 'on' : ''} ${phase === 1 ? 'cur' : ''} ai-n--agent`}>
            <div className="ai-n__rings">
              <span className="ai-r ai-r--1"></span>
              <span className="ai-r ai-r--2"></span>
              <span className="ai-r ai-r--3"></span>
            </div>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <span className="ai-n__name">Orbitrix AI Agent</span>
            <span className="ai-n__desc">Autonomous AI engine</span>
            <span className="ai-n__sub">{phase >= 1 ? 'Activating...' : 'Standing by'}</span>
          </div>

          <div className={`ai-c ${phase >= 1 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 2 — Content Scraping */}
          <div className={`ai-n ${phase >= 2 ? 'on' : ''} ${phase === 2 ? 'cur' : ''} ai-n--scrape`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faSpider} />
            </div>
            <span className="ai-n__name">Content Scraping</span>
            <span className="ai-n__desc">Web crawling & aggregation</span>
            <span className="ai-n__sub">{phase >= 2 ? 'Scraping growth content...' : 'Waiting'}</span>
            {phase >= 2 && (
              <div className="ai-feed">
                <span className="ai-f" style={{ '--d': '0s', '--tx': '-30px', '--ty': '-40px' }}><FontAwesomeIcon icon={faGlobe} /> growth hacks</span>
                <span className="ai-f" style={{ '--d': '.15s', '--tx': '30px', '--ty': '-34px' }}><FontAwesomeIcon icon={faNewspaper} /> viral posts</span>
                <span className="ai-f" style={{ '--d': '.3s', '--tx': '-26px', '--ty': '-52px' }}><FontAwesomeIcon icon={faBolt} /> trending reels</span>
                <span className="ai-f" style={{ '--d': '.45s', '--tx': '26px', '--ty': '-48px' }}><FontAwesomeIcon icon={faEye} /> top threads</span>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 2 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 3 — Market Analysis */}
          <div className={`ai-n ${phase >= 3 ? 'on' : ''} ${phase === 3 ? 'cur' : ''} ai-n--analysis`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faChartBar} />
            </div>
            <span className="ai-n__name">Market Analysis</span>
            <span className="ai-n__desc">AI trend intelligence</span>
            <span className="ai-n__sub">{phase >= 3 ? 'Analyzing trends...' : 'Waiting'}</span>
            {phase >= 3 && (
              <div className="ai-card ai-card--analysis">
                <div className="ai-row"><FontAwesomeIcon icon={faChartLine} /><span>Trend Score</span><strong className="ai-green">94%</strong></div>
                <div className="ai-row"><FontAwesomeIcon icon={faEye} /><span>Engagement</span><strong className="ai-green">4.8x</strong></div>
                <div className="ai-row"><FontAwesomeIcon icon={faHashtag} /><span>Keywords</span><strong>12 found</strong></div>
                <div className="ai-done"><FontAwesomeIcon icon={faCheckCircle} /> Analysis complete</div>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 3 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 4 — Post & Content */}
          <div className={`ai-n ${phase >= 4 ? 'on' : ''} ${phase === 4 ? 'cur' : ''} ai-n--create`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faPenFancy} />
            </div>
            <span className="ai-n__name">Post & Content</span>
            <span className="ai-n__desc">SEO content generation</span>
            <span className="ai-n__sub">{phase >= 4 ? 'Generating content...' : 'Waiting'}</span>
            {phase >= 4 && (
              <div className="ai-card ai-card--content">
                <div className="ai-cl ai-cl--1"><span className="ai-tag">POST</span><span>10 Proven Strategies to 10x Your Business Growth in 2024</span></div>
                <div className="ai-cl ai-cl--2"><span className="ai-tag">CAPTION</span><span>Discover actionable growth hacking techniques used by top brands...</span></div>
                <div className="ai-cl ai-cl--3">
                  <span className="ai-tag">SEO</span>
                  <span className="ai-tags">#GrowthHacking #DigitalMarketing #ScaleUp</span>
                </div>
                <div className="ai-done"><FontAwesomeIcon icon={faCheckCircle} /> Content ready</div>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 4 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 5 — Auto Publisher */}
          <div className={`ai-n ${phase >= 5 ? 'on' : ''} ${phase === 5 ? 'cur' : ''} ai-n--publish`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <span className="ai-n__name">Auto Publisher</span>
            <span className="ai-n__desc">Multi-platform scheduler</span>
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

          {/* 6 — Growth Results */}
          <div className={`ai-n ${phase >= 6 ? 'on' : ''} ${phase === 6 ? 'cur' : ''} ai-n--results`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <span className="ai-n__name">Growth Results</span>
            <span className="ai-n__desc">Performance analytics</span>
            <span className="ai-n__sub">{phase >= 6 ? 'Analytics live' : 'Waiting'}</span>
            {phase >= 6 && (
              <div className="ai-metrics">
                <div className="ai-m"><FontAwesomeIcon icon={faBolt} /><span className="ai-metric-num" data-target="2847">0</span><span className="ai-ml">Engagements</span></div>
                <div className="ai-m"><FontAwesomeIcon icon={faEye} /><span className="ai-metric-num" data-target="18500">0</span><span className="ai-ml">Reach</span></div>
                <div className="ai-m"><FontAwesomeIcon icon={faRocket} /><span className="ai-metric-num" data-target="340">0</span><span className="ai-ml">% Growth</span></div>
              </div>
            )}
          </div>

        </div>

        {/* Step Labels */}
        <div className="ai-steps">
          {[['01','AI Agent',1],['02','Scraping',2],['03','Analysis',3],['04','Content',4],['05','Publish',5],['06','Growth',6]].map(([n,t,p]) => (
            <div key={n} className={`ai-s ${phase >= p ? 'on' : ''}`}><span className="ai-s__n">{n}</span>{t}</div>
          ))}
        </div>
      </div>

      {/* Social Platform Connectors Section */}
      <div className="ai-platforms">
        <h3 className="ai-platforms__title">Connected Social Platforms</h3>
        <p className="ai-platforms__sub">The AI agent seamlessly connects and publishes growth content across these platforms in real-time.</p>
        <div className="ai-platforms__grid">

          {/* Facebook Connector */}
          <div className={`ai-plat ${phase >= 5 ? 'ai-plat--active' : ''}`}>
            <div className="ai-plat__connector">
              <div className="ai-plat__line"></div>
              <div className="ai-plat__dot"></div>
            </div>
            <div className="ai-plat__card">
              <div className="ai-plat__icon ai-plat__icon--fb">
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <span className="ai-plat__name">Facebook</span>
              <span className="ai-plat__status">{phase >= 5 ? 'Connected & Posting' : 'Waiting for connection'}</span>
              {phase >= 5 && (
                <div className="ai-plat__post">
                  <div className="ai-plat__post-img">
                    <FontAwesomeIcon icon={faImage} />
                    <span>Post Image</span>
                  </div>
                  <div className="ai-plat__post-action">
                    <FontAwesomeIcon icon={faCheck} />
                    <span>Published to Facebook</span>
                  </div>
                  <div className="ai-plat__post-stats">
                    <span><FontAwesomeIcon icon={faHeart} /> 234</span>
                    <span><FontAwesomeIcon icon={faComment} /> 48</span>
                    <span><FontAwesomeIcon icon={faShareAlt} /> 12</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Instagram Connector */}
          <div className={`ai-plat ${phase >= 5 ? 'ai-plat--active' : ''}`}>
            <div className="ai-plat__connector">
              <div className="ai-plat__line"></div>
              <div className="ai-plat__dot"></div>
            </div>
            <div className="ai-plat__card">
              <div className="ai-plat__icon ai-plat__icon--ig">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <span className="ai-plat__name">Instagram</span>
              <span className="ai-plat__status">{phase >= 5 ? 'Connected & Posting' : 'Waiting for connection'}</span>
              {phase >= 5 && (
                <div className="ai-plat__post">
                  <div className="ai-plat__post-img ai-plat__post-img--ig">
                    <FontAwesomeIcon icon={faImage} />
                    <span>Reel / Story</span>
                  </div>
                  <div className="ai-plat__post-action">
                    <FontAwesomeIcon icon={faCheck} />
                    <span>Published to Instagram</span>
                  </div>
                  <div className="ai-plat__post-stats">
                    <span><FontAwesomeIcon icon={faHeart} /> 512</span>
                    <span><FontAwesomeIcon icon={faComment} /> 87</span>
                    <span><FontAwesomeIcon icon={faRetweet} /> 34</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* LinkedIn Connector */}
          <div className={`ai-plat ${phase >= 5 ? 'ai-plat--active' : ''}`}>
            <div className="ai-plat__connector">
              <div className="ai-plat__line"></div>
              <div className="ai-plat__dot"></div>
            </div>
            <div className="ai-plat__card">
              <div className="ai-plat__icon ai-plat__icon--li">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <span className="ai-plat__name">LinkedIn</span>
              <span className="ai-plat__status">{phase >= 5 ? 'Connected & Posting' : 'Waiting for connection'}</span>
              {phase >= 5 && (
                <div className="ai-plat__post">
                  <div className="ai-plat__post-img ai-plat__post-img--li">
                    <FontAwesomeIcon icon={faImage} />
                    <span>Article Cover</span>
                  </div>
                  <div className="ai-plat__post-action">
                    <FontAwesomeIcon icon={faCheck} />
                    <span>Published to LinkedIn</span>
                  </div>
                  <div className="ai-plat__post-stats">
                    <span><FontAwesomeIcon icon={faThumbsUp} /> 189</span>
                    <span><FontAwesomeIcon icon={faComment} /> 56</span>
                    <span><FontAwesomeIcon icon={faShareAlt} /> 23</span>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* See Working Button — after social platforms */}
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

      {/* Detail Cards */}
      <div className="ai-details">
        <div className="ai-d">
          <FontAwesomeIcon icon={faSpider} className="ai-d__icon" />
          <h4>Content Scraping</h4>
          <p>AI scans hundreds of sources for trending growth content, viral posts, and high-engagement topics in your niche.</p>
        </div>
        <div className="ai-d">
          <FontAwesomeIcon icon={faChartBar} className="ai-d__icon" />
          <h4>Market Analysis</h4>
          <p>Analyzes competitor strategies, audience behavior, and trending keywords to find the best content opportunities.</p>
        </div>
        <div className="ai-d">
          <FontAwesomeIcon icon={faPenFancy} className="ai-d__icon" />
          <h4>SEO Content</h4>
          <p>Generates growth-focused posts with compelling captions, SEO descriptions, and targeted hashtags for organic reach.</p>
        </div>
        <div className="ai-d">
          <FontAwesomeIcon icon={faShareAlt} className="ai-d__icon" />
          <h4>Auto Publishing</h4>
          <p>Schedules and publishes across Facebook, Instagram, and LinkedIn at peak engagement times automatically.</p>
        </div>
      </div>

    </section>
  );
};

export default AIAutomation;
