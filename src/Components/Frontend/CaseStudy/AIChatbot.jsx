import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRobot,
  faComments,
  faUserTie,
  faBolt,
  faClock,
  faCheckCircle,
  faPlay,
  faPaperPlane,
  faHandPaper,
  faHeadset,
  faThumbsUp,
  faTag,
  faReply,
  faEllipsisH,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './AIAutomation.css';

const PHASE_DELAY = 1400;

const AIChatbot = () => {
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
    phase === 1 ? 'Customer Message' :
    phase === 2 ? 'AI Processing...' :
    phase === 3 ? 'Generating Reply...' :
    phase === 4 ? 'Quick Replies Sent...' :
    phase === 5 ? 'Handoff Ready...' :
    'Done!';

  return (
    <section className="ai-wrapper" ref={sectionRef} aria-label="AI WhatsApp Chatbot Automation">

      <div className="ai-agent-header">
        <div className="ai-agent-logo">
          <div className="ai-agent-logo-ring"></div>
          <div className="ai-agent-logo-ring ai-ring-2"></div>
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
        <div className="ai-agent-header-text">
          <span className="ai-agent-badge">ORBITRIX AI CHATBOT</span>
          <h2>How the AI WhatsApp Chatbot Engages Customers 24/7</h2>
          <p>From receiving messages to intelligent responses and seamless human handoff — watch the full chatbot pipeline.</p>
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
                <FontAwesomeIcon icon={faComments} />
              </div>
              <span className="ai-traveler__label">{travelerLabel}</span>
            </div>
          )}
        </div>

        <div className="ai-nodes-row">

          {/* 1 — Customer Message */}
          <div className={`ai-n ${phase >= 1 ? 'on' : ''} ${phase === 1 ? 'cur' : ''} ai-n--agent`}>
            <div className="ai-n__rings">
              <span className="ai-r ai-r--1"></span>
              <span className="ai-r ai-r--2"></span>
              <span className="ai-r ai-r--3"></span>
            </div>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
            <span className="ai-n__name">Customer Message</span>
            <span className="ai-n__desc">WhatsApp inquiry received</span>
            <span className="ai-n__sub">{phase >= 1 ? 'Message received...' : 'Standing by'}</span>
          </div>

          <div className={`ai-c ${phase >= 1 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 2 — AI Processes */}
          <div className={`ai-n ${phase >= 2 ? 'on' : ''} ${phase === 2 ? 'cur' : ''} ai-n--scrape`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <span className="ai-n__name">AI Processing</span>
            <span className="ai-n__desc">Natural language understanding</span>
            <span className="ai-n__sub">{phase >= 2 ? 'Analyzing...' : 'Waiting'}</span>
            {phase >= 2 && (
              <div className="ai-card">
                <div className="ai-row"><FontAwesomeIcon icon={faTag} /><span>Topic</span><strong className="ai-green">Pricing</strong></div>
                <div className="ai-row"><FontAwesomeIcon icon={faBolt} /><span>Intent</span><strong className="ai-green">Service inquiry</strong></div>
                <div className="ai-row"><FontAwesomeIcon icon={faHeart} /><span>Sentiment</span><strong>Neutral</strong></div>
                <div className="ai-done"><FontAwesomeIcon icon={faCheckCircle} /> Message classified</div>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 2 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 3 — AI Generates Response */}
          <div className={`ai-n ${phase >= 3 ? 'on' : ''} ${phase === 3 ? 'cur' : ''} ai-n--analysis`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faComments} />
            </div>
            <span className="ai-n__name">AI Generates Reply</span>
            <span className="ai-n__desc">Contextual response engine</span>
            <span className="ai-n__sub">{phase >= 3 ? 'Typing...' : 'Waiting'}</span>
            {phase >= 3 && (
              <div className="ai-card ai-card--analysis">
                <div className="ai-cl ai-cl--1"><span className="ai-tag" style={{ background: '#059669' }}>REPLY</span><span>Hi! Our haircut service starts at $35...</span></div>
                <div className="ai-cl ai-cl--2"><span className="ai-tag" style={{ background: '#059669' }}>TONE</span><span>Warm, professional, helpful</span></div>
                <div className="ai-cl ai-cl--3"><span className="ai-tag" style={{ background: '#059669' }}>CTA</span><span>Would you like to book?</span></div>
                <div className="ai-done"><FontAwesomeIcon icon={faCheckCircle} /> Response ready</div>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 3 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 4 — Quick Reply Buttons */}
          <div className={`ai-n ${phase >= 4 ? 'on' : ''} ${phase === 4 ? 'cur' : ''} ai-n--create`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faReply} />
            </div>
            <span className="ai-n__name">Quick Replies</span>
            <span className="ai-n__desc">Interactive message delivery</span>
            <span className="ai-n__sub">{phase >= 4 ? 'Sending...' : 'Waiting'}</span>
            {phase >= 4 && (
              <div className="ai-card ai-card--content">
                <div className="ai-cl ai-cl--1"><span className="ai-tag" style={{ background: '#d97706' }}>MSG</span><span>Here are our services & pricing...</span></div>
                <div className="ai-cl ai-cl--2"><span className="ai-tag" style={{ background: '#d97706' }}>BTN</span><span className="ai-tags" style={{ color: '#d97706' }}>Book Now | See Menu | Call Us</span></div>
                <div className="ai-cl ai-cl--3"><span className="ai-tag" style={{ background: '#d97706' }}>STATUS</span><span className="ai-tags" style={{ color: '#059669' }}>Delivered & Read</span></div>
                <div className="ai-done"><FontAwesomeIcon icon={faCheckCircle} /> Message sent</div>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 4 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 5 — Human Handoff */}
          <div className={`ai-n ${phase >= 5 ? 'on' : ''} ${phase === 5 ? 'cur' : ''} ai-n--publish`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faHandPaper} />
            </div>
            <span className="ai-n__name">Smart Handoff</span>
            <span className="ai-n__desc">Human escalation when needed</span>
            <span className="ai-n__sub">{phase >= 5 ? 'Evaluating...' : 'Waiting'}</span>
            {phase >= 5 && (
              <div className="ai-social">
                <div className="ai-chip" style={{ '--cc': '#059669', '--cd': '0s' }}>
                  <FontAwesomeIcon icon={faCheckCircle} /><span>AI resolved: 87%</span>
                  <FontAwesomeIcon icon={faCheckCircle} className="ai-chk" />
                </div>
                <div className="ai-chip" style={{ '--cc': '#d97706', '--cd': '.25s' }}>
                  <FontAwesomeIcon icon={faHeadset} /><span>Handoff: 13%</span>
                  <FontAwesomeIcon icon={faCheckCircle} className="ai-chk" />
                </div>
                <div className="ai-chip" style={{ '--cc': '#2563eb', '--cd': '.5s' }}>
                  <FontAwesomeIcon icon={faUserTie} /><span>Agent notified</span>
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
              <FontAwesomeIcon icon={faBolt} />
            </div>
            <span className="ai-n__name">Bot Analytics</span>
            <span className="ai-n__desc">Performance metrics</span>
            <span className="ai-n__sub">{phase >= 6 ? 'Metrics live' : 'Waiting'}</span>
            {phase >= 6 && (
              <div className="ai-metrics">
                <div className="ai-m"><FontAwesomeIcon icon={faComments} /><span className="ai-metric-num" data-target="5420">0</span><span className="ai-ml">Messages Handled</span></div>
                <div className="ai-m"><FontAwesomeIcon icon={faThumbsUp} /><span className="ai-metric-num" data-target="94">0</span><span className="ai-ml">% Resolution</span></div>
                <div className="ai-m"><FontAwesomeIcon icon={faClock} /><span className="ai-metric-num" data-target="2">0</span><span className="ai-ml">Avg. Reply (sec)</span></div>
              </div>
            )}
          </div>

        </div>

        <div className="ai-steps">
          {[['01','Message',1],['02','Process',2],['03','Generate',3],['04','Deliver',4],['05','Handoff',5],['06','Results',6]].map(([n,t,p]) => (
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
          <FontAwesomeIcon icon={faWhatsapp} className="ai-d__icon" />
          <h4>WhatsApp Integration</h4>
          <p>Directly integrates with WhatsApp Business API — no new app for customers to download.</p>
        </div>
        <div className="ai-d">
          <FontAwesomeIcon icon={faRobot} className="ai-d__icon" />
          <h4>Smart AI Processing</h4>
          <p>Understands customer intent, sentiment, and context to deliver personalized responses instantly.</p>
        </div>
        <div className="ai-d">
          <FontAwesomeIcon icon={faReply} className="ai-d__icon" />
          <h4>Interactive Quick Replies</h4>
          <p>Sends formatted messages with quick reply buttons, carousels, and call-to-action elements.</p>
        </div>
        <div className="ai-d">
          <FontAwesomeIcon icon={faHandPaper} className="ai-d__icon" />
          <h4>Seamless Human Handoff</h4>
          <p>When AI can't resolve, it seamlessly transfers to a live agent with full conversation context.</p>
        </div>
      </div>

    </section>
  );
};

export default AIChatbot;
