import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faRobot,
  faHeadset,
  faCalendarCheck,
  faFileAlt,
  faBolt,
  faClock,
  faCheckCircle,
  faPlay,
  faVolumeUp,
  faWaveSquare,
  faUserTie,
  faCalendarPlus,
  faPaperPlane,
  faClipboardCheck,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './AIAutomation.css';

const PHASE_DELAY = 1400;

const AIVoiceAgent = () => {
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
    phase === 1 ? 'Call Received' :
    phase === 2 ? 'Processing Voice...' :
    phase === 3 ? 'Booking Appointment...' :
    phase === 4 ? 'Sending Confirmation...' :
    phase === 5 ? 'Generating Summary...' :
    'Done!';

  return (
    <section className="ai-wrapper" ref={sectionRef} aria-label="AI Voice Agent Automation">

      <div className="ai-agent-header">
        <div className="ai-agent-logo">
          <div className="ai-agent-logo-ring"></div>
          <div className="ai-agent-logo-ring ai-ring-2"></div>
          <FontAwesomeIcon icon={faPhoneAlt} />
        </div>
        <div className="ai-agent-header-text">
          <span className="ai-agent-badge">ORBITRIX AI VOICE AGENT</span>
          <h2>How the AI Voice Agent Handles Salon Calls 24/7</h2>
          <p>From answering calls to booking appointments and sending confirmations — watch the full AI voice pipeline in action.</p>
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
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <span className="ai-traveler__label">{travelerLabel}</span>
            </div>
          )}
        </div>

        <div className="ai-nodes-row">

          {/* 1 — Incoming Call */}
          <div className={`ai-n ${phase >= 1 ? 'on' : ''} ${phase === 1 ? 'cur' : ''} ai-n--agent`}>
            <div className="ai-n__rings">
              <span className="ai-r ai-r--1"></span>
              <span className="ai-r ai-r--2"></span>
              <span className="ai-r ai-r--3"></span>
            </div>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </div>
            <span className="ai-n__name">Incoming Call</span>
            <span className="ai-n__desc">Customer calls salon</span>
            <span className="ai-n__sub">{phase >= 1 ? 'Ringing...' : 'Standing by'}</span>
          </div>

          <div className={`ai-c ${phase >= 1 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 2 — AI Agent Answers */}
          <div className={`ai-n ${phase >= 2 ? 'on' : ''} ${phase === 2 ? 'cur' : ''} ai-n--scrape`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <span className="ai-n__name">AI Agent Answers</span>
            <span className="ai-n__desc">Voice recognition & NLP</span>
            <span className="ai-n__sub">{phase >= 2 ? 'Listening...' : 'Waiting'}</span>
            {phase >= 2 && (
              <div className="ai-card">
                <div className="ai-row"><FontAwesomeIcon icon={faVolumeUp} /><span>Language</span><strong className="ai-green">English</strong></div>
                <div className="ai-row"><FontAwesomeIcon icon={faWaveSquare} /><span>Intent</span><strong className="ai-green">Book Appointment</strong></div>
                <div className="ai-row"><FontAwesomeIcon icon={faUserTie} /><span>Sentiment</span><strong>Positive</strong></div>
                <div className="ai-done"><FontAwesomeIcon icon={faCheckCircle} /> Call understood</div>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 2 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 3 — Voice Processing */}
          <div className={`ai-n ${phase >= 3 ? 'on' : ''} ${phase === 3 ? 'cur' : ''} ai-n--analysis`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faHeadset} />
            </div>
            <span className="ai-n__name">Voice Processing</span>
            <span className="ai-n__desc">AI conversation engine</span>
            <span className="ai-n__sub">{phase >= 3 ? 'Processing...' : 'Waiting'}</span>
            {phase >= 3 && (
              <div className="ai-card ai-card--analysis">
                <div className="ai-cl ai-cl--1"><span className="ai-tag" style={{ background: '#059669' }}>SERVICE</span><span>Haircut & Styling</span></div>
                <div className="ai-cl ai-cl--2"><span className="ai-tag" style={{ background: '#059669' }}>DATE</span><span>Tomorrow at 2:30 PM</span></div>
                <div className="ai-cl ai-cl--3"><span className="ai-tag" style={{ background: '#059669' }}>DURATION</span><span>45 minutes</span></div>
                <div className="ai-done"><FontAwesomeIcon icon={faCheckCircle} /> Appointment details captured</div>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 3 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 4 — Calendar Booking */}
          <div className={`ai-n ${phase >= 4 ? 'on' : ''} ${phase === 4 ? 'cur' : ''} ai-n--create`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </div>
            <span className="ai-n__name">Calendar Booking</span>
            <span className="ai-n__desc">Auto scheduling system</span>
            <span className="ai-n__sub">{phase >= 4 ? 'Booking...' : 'Waiting'}</span>
            {phase >= 4 && (
              <div className="ai-card ai-card--content">
                <div className="ai-cl ai-cl--1"><span className="ai-tag" style={{ background: '#d97706' }}>SCHEDULED</span><span>Aug 15, 2024 — 2:30 PM</span></div>
                <div className="ai-cl ai-cl--2"><span className="ai-tag" style={{ background: '#d97706' }}>STYLIST</span><span>Sarah M. (Senior Stylist)</span></div>
                <div className="ai-cl ai-cl--3"><span className="ai-tag" style={{ background: '#d97706' }}>STATUS</span><span className="ai-tags" style={{ color: '#059669' }}>Confirmed</span></div>
                <div className="ai-done"><FontAwesomeIcon icon={faCheckCircle} /> Slot booked successfully</div>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 4 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 5 — WhatsApp Confirmation */}
          <div className={`ai-n ${phase >= 5 ? 'on' : ''} ${phase === 5 ? 'cur' : ''} ai-n--publish`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
            <span className="ai-n__name">WhatsApp Confirm</span>
            <span className="ai-n__desc">Instant message delivery</span>
            <span className="ai-n__sub">{phase >= 5 ? 'Sending...' : 'Waiting'}</span>
            {phase >= 5 && (
              <div className="ai-social">
                <div className="ai-chip" style={{ '--cc': '#25D366', '--cd': '0s' }}>
                  <FontAwesomeIcon icon={faWhatsapp} /><span>Appointment sent</span>
                  <FontAwesomeIcon icon={faCheckCircle} className="ai-chk" />
                </div>
                <div className="ai-chip" style={{ '--cc': '#25D366', '--cd': '.25s' }}>
                  <FontAwesomeIcon icon={faPaperPlane} /><span>Reminder queued</span>
                  <FontAwesomeIcon icon={faCheckCircle} className="ai-chk" />
                </div>
                <div className="ai-chip" style={{ '--cc': '#25D366', '--cd': '.5s' }}>
                  <FontAwesomeIcon icon={faClipboardCheck} /><span>Feedback request</span>
                  <FontAwesomeIcon icon={faCheckCircle} className="ai-chk" />
                </div>
              </div>
            )}
          </div>

          <div className={`ai-c ${phase >= 5 ? 'on' : ''}`}>
            <span></span><span></span><span></span>
          </div>

          {/* 6 — Call Summary */}
          <div className={`ai-n ${phase >= 6 ? 'on' : ''} ${phase === 6 ? 'cur' : ''} ai-n--results`}>
            <div className="ai-n__icon">
              <FontAwesomeIcon icon={faFileAlt} />
            </div>
            <span className="ai-n__name">Call Summary</span>
            <span className="ai-n__desc">Analytics & reporting</span>
            <span className="ai-n__sub">{phase >= 6 ? 'Summary ready' : 'Waiting'}</span>
            {phase >= 6 && (
              <div className="ai-metrics">
                <div className="ai-m"><FontAwesomeIcon icon={faPhoneAlt} /><span className="ai-metric-num" data-target="1247">0</span><span className="ai-ml">Calls Handled</span></div>
                <div className="ai-m"><FontAwesomeIcon icon={faCalendarCheck} /><span className="ai-metric-num" data-target="892">0</span><span className="ai-ml">Appointments Booked</span></div>
                <div className="ai-m"><FontAwesomeIcon icon={faClock} /><span className="ai-metric-num" data-target="3">0</span><span className="ai-ml">Avg. Response (sec)</span></div>
              </div>
            )}
          </div>

        </div>

        <div className="ai-steps">
          {[['01','Incoming',1],['02','Answer',2],['03','Voice',3],['04','Book',4],['05','Confirm',5],['06','Summary',6]].map(([n,t,p]) => (
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
          <FontAwesomeIcon icon={faPhoneAlt} className="ai-d__icon" />
          <h4>24/7 Call Handling</h4>
          <p>AI answers every call instantly — no hold times, no missed bookings, no staff needed on the phone.</p>
        </div>
        <div className="ai-d">
          <FontAwesomeIcon icon={faRobot} className="ai-d__icon" />
          <h4>Voice AI Engine</h4>
          <p>Advanced NLP understands customer intent, sentiment, and context to handle complex booking requests.</p>
        </div>
        <div className="ai-d">
          <FontAwesomeIcon icon={faCalendarCheck} className="ai-d__icon" />
          <h4>Auto Scheduling</h4>
          <p>Syncs with salon calendar in real-time — books, reschedules, and cancels appointments automatically.</p>
        </div>
        <div className="ai-d">
          <FontAwesomeIcon icon={faWhatsapp} className="ai-d__icon" />
          <h4>Instant Confirmations</h4>
          <p>Sends booking confirmations, reminders, and follow-ups via WhatsApp — zero manual work required.</p>
        </div>
      </div>

    </section>
  );
};

export default AIVoiceAgent;
