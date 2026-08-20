import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faRobot,
  faTags,
  faReply,
  faShareSquare,
  faBolt,
  faClock,
  faCheckCircle,
  faPlay,
  faInbox,
  faFilter,
  faPaperPlane,
  faHeadset,
  faMoneyBill,
  faCogs,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './AIAutomation.css';

const PHASE_DELAY = 1400;

const AIEmailAutomation = () => {
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
    phase === 1 ? 'Email Arrived' :
    phase === 2 ? 'Classifying...' :
    phase === 3 ? 'Generating Reply...' :
    phase === 4 ? 'Routing...' :
    phase === 5 ? 'Sent in 28s...' :
    'Done!';

  return (
    <section className="ai-wrapper" ref={sectionRef} aria-label="AI Email Automation">

      <div className="ai-agent-header">
        <div className="ai-agent-logo">
          <div className="ai-agent-logo-ring"></div>
          <div className="ai-agent-logo-ring ai-ring-2"></div>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="ai-agent-header-text">
          <span className="ai-agent-badge">ORBITRIX AI EMAIL AGENT</span>
          <h2>How the AI Email Auto-Responder Answers in Under 30 Seconds</h2>
          <p>From inbox arrival to classified routing and instant reply — watch the full email automation pipeline.</p>
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
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <span className="ai-traveler__label">{travelerLabel}</span>
            </div>
          )}
        </div>

        <div className="ai-nodes-row">

          {/* 1 — Email Arrives */}
          <div className={`ai-n ${phase >= 1 ? 'on' : ''} ${phase === 1 ? 'cur' : ''} ai-n--agent`}>
            <div className="ai-n__rings">
              <span className="ai-r ai-r--1"></span>
              <span className="ai-r ai-r--2"></span>
              <span className="ai-r ai-r--3"></span>
            </div>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faInbox} />
            </div>
            <span className="ai-n__name">Email Arrives</span>
            <span className="ai-n__desc">New inbox notification</span>
            <span className="ai-n__sub">{phase >= 1 ? 'Detected...' : 'Standing by'}</span>
          </div>

          <div className={`ai-c ${phase >= 1 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 2 — AI Classifies */}
          <div className={`ai-n ${phase >= 2 ? 'on' : ''} ${phase === 2 ? 'cur' : ''} ai-n--scrape`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faFilter} />
            </div>
            <span className="ai-n__name">AI Classification</span>
            <span className="ai-n__desc">Intent & category detection</span>
            <span className="ai-n__sub">{phase >= 2 ? 'Classifying...' : 'Waiting'}</span>
            {phase >= 2 && (
              <div className="ai-card">
                <div className="ai-row"><FontAwesomeIcon icon={faTags} /><span>Category</span><strong className="ai-green">Sales</strong></div>
                <div className="ai-row"><FontAwesomeIcon icon={faBolt} /><span>Priority</span><strong className="ai-green">High</strong></div>
                <div className="ai-row"><FontAwesomeIcon icon={faRobot} /><span>Sentiment</span><strong>Interested</strong></div>
                <div className="ai-done"><FontAwesomeIcon icon={faCheckCircle} /> Email classified</div>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 2 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 3 — Auto-Reply Generated */}
          <div className={`ai-n ${phase >= 3 ? 'on' : ''} ${phase === 3 ? 'cur' : ''} ai-n--analysis`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faReply} />
            </div>
            <span className="ai-n__name">Auto-Reply</span>
            <span className="ai-n__desc">AI response generation</span>
            <span className="ai-n__sub">{phase >= 3 ? 'Writing...' : 'Waiting'}</span>
            {phase >= 3 && (
              <div className="ai-card ai-card--analysis">
                <div className="ai-cl ai-cl--1"><span className="ai-tag" style={{ background: '#059669' }}>SUBJECT</span><span>Re: Your inquiry about our services</span></div>
                <div className="ai-cl ai-cl--2"><span className="ai-tag" style={{ background: '#059669' }}>TONE</span><span>Professional, helpful, warm</span></div>
                <div className="ai-cl ai-cl--3"><span className="ai-tag" style={{ background: '#059669' }}>CTA</span><span>Schedule a free consultation</span></div>
                <div className="ai-done"><FontAwesomeIcon icon={faCheckCircle} /> Reply drafted</div>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 3 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 4 — Department Routing */}
          <div className={`ai-n ${phase >= 4 ? 'on' : ''} ${phase === 4 ? 'cur' : ''} ai-n--create`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faShareSquare} />
            </div>
            <span className="ai-n__name">Dept. Routing</span>
            <span className="ai-n__desc">Smart email distribution</span>
            <span className="ai-n__sub">{phase >= 4 ? 'Routing...' : 'Waiting'}</span>
            {phase >= 4 && (
              <div className="ai-card ai-card--content">
                <div className="ai-cl ai-cl--1"><span className="ai-tag" style={{ background: '#d97706' }}>SALES</span><span>Routed to: John D. (Sales Lead)</span></div>
                <div className="ai-cl ai-cl--2"><span className="ai-tag" style={{ background: '#d97706' }}>CC</span><span>Team notified via Slack</span></div>
                <div className="ai-cl ai-cl--3"><span className="ai-tag" style={{ background: '#d97706' }}>SLA</span><span className="ai-tags" style={{ color: '#059669' }}>28s response time</span></div>
                <div className="ai-done"><FontAwesomeIcon icon={faCheckCircle} /> Routed successfully</div>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 4 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 5 — Response Time */}
          <div className={`ai-n ${phase >= 5 ? 'on' : ''} ${phase === 5 ? 'cur' : ''} ai-n--publish`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <span className="ai-n__name">Speed Counter</span>
            <span className="ai-n__desc">Response time tracker</span>
            <span className="ai-n__sub">{phase >= 5 ? 'Tracking...' : 'Waiting'}</span>
            {phase >= 5 && (
              <div className="ai-social">
                <div className="ai-chip" style={{ '--cc': '#059669', '--cd': '0s' }}>
                  <FontAwesomeIcon icon={faBolt} /><span>Reply sent in 28s</span>
                  <FontAwesomeIcon icon={faCheckCircle} className="ai-chk" />
                </div>
                <div className="ai-chip" style={{ '--cc': '#2563eb', '--cd': '.25s' }}>
                  <FontAwesomeIcon icon={faShareSquare} /><span>Routed to Sales</span>
                  <FontAwesomeIcon icon={faCheckCircle} className="ai-chk" />
                </div>
                <div className="ai-chip" style={{ '--cc': '#7c3aed', '--cd': '.5s' }}>
                  <FontAwesomeIcon icon={faCogs} /><span>CRM updated</span>
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
            <span className="ai-n__name">Email Metrics</span>
            <span className="ai-n__desc">Performance dashboard</span>
            <span className="ai-n__sub">{phase >= 6 ? 'Metrics live' : 'Waiting'}</span>
            {phase >= 6 && (
              <div className="ai-metrics">
                <div className="ai-m"><FontAwesomeIcon icon={faEnvelope} /><span className="ai-metric-num" data-target="8750">0</span><span className="ai-ml">Emails Processed</span></div>
                <div className="ai-m"><FontAwesomeIcon icon={faBolt} /><span className="ai-metric-num" data-target="28">0</span><span className="ai-ml">Avg. Response (sec)</span></div>
                <div className="ai-m"><FontAwesomeIcon icon={faCheckCircle} /><span className="ai-metric-num" data-target="97">0</span><span className="ai-ml">% Accuracy</span></div>
              </div>
            )}
          </div>

        </div>

        <div className="ai-steps">
          {[['01','Inbox',1],['02','Classify',2],['03','Reply',3],['04','Route',4],['05','Speed',5],['06','Metrics',6]].map(([n,t,p]) => (
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
          <FontAwesomeIcon icon={faInbox} className="ai-d__icon" />
          <h4>Instant Email Detection</h4>
          <p>Monitors inbox 24/7 — every email is detected, read, and processed within seconds of arrival.</p>
        </div>
        <div className="ai-d">
          <FontAwesomeIcon icon={faFilter} className="ai-d__icon" />
          <h4>Smart Classification</h4>
          <p>AI categorizes emails as Sales, Support, or Billing with sentiment analysis and priority scoring.</p>
        </div>
        <div className="ai-d">
          <FontAwesomeIcon icon={faReply} className="ai-d__icon" />
          <h4>Auto-Reply Generation</h4>
          <p>Drafts contextual, personalized responses that sound human — not robotic — in under 30 seconds.</p>
        </div>
        <div className="ai-d">
          <FontAwesomeIcon icon={faShareSquare} className="ai-d__icon" />
          <h4>Smart Department Routing</h4>
          <p>Routes emails to the right team member with full context, CRM updates, and Slack notifications.</p>
        </div>
      </div>

    </section>
  );
};

export default AIEmailAutomation;
