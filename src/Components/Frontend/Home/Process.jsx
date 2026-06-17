import React from 'react';
import { Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPencilRuler, faCode, faRocket, faHeadset, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const steps = [
  {
    icon: faLightbulb,
    index: '01',
    title: 'Planning',
    detail: 'We start by listening. Together, we define what you need, why you need it, and how it connects to your bigger goals.',
    bullets: [
      'Understand your business challenges',
      'Discuss opportunities and expectations',
      'Map out a clear plan forward',
    ],
  },
  {
    icon: faPencilRuler,
    index: '02',
    title: 'Concept & Strategy',
    detail: 'This is where ideas meet direction. We shape a strategy that reflects your vision and ensures every move has a clear purpose.',
    bullets: [
      'Define the big idea behind the project',
      'Outline the right digital approach',
      'Align with your business goals',
    ],
  },
  {
    icon: faCode,
    index: '03',
    title: 'Design & Development',
    detail: 'Your vision starts taking shape. From visuals to functionality, we craft experiences that look great, work seamlessly, and feel effortless.',
    bullets: [
      'Beautiful, user-friendly designs',
      'Clean, reliable development',
      'Responsive for all devices',
    ],
  },
  {
    icon: faRocket,
    index: '04',
    title: 'Optimize & Scale',
    detail: 'We refine, improve, and prepare your project for growth. Performance and scalability are built-in so you are ready for tomorrow.',
    bullets: [
      'Test and improve performance',
      'Ensure scalability for growth',
      'Build efficiency into every detail',
    ],
  },
  {
    icon: faHeadset,
    index: '05',
    title: 'Launch & Support',
    detail: 'Your project goes live, but we don\'t stop there. We provide ongoing support, improvements, and care to help your brand thrive.',
    bullets: [
      'Smooth launch and rollout',
      'Dedicated post-launch support',
      'Continuous updates and improvements',
    ],
  },
];

const Process = () => {
  return (
    <section className="home-section process-section reveal-blur">
      <div className="section-header reveal-blur">
        <Typography.Title level={2}>How We Work</Typography.Title>
        <Typography.Paragraph>
          A proven step-by-step process that keeps your project on track, on time, and built for results.
        </Typography.Paragraph>
      </div>

      <div className="process-flow-container">
        {steps.map((step, idx) => (
          <React.Fragment key={step.title}>
            <div
              className={`process-flow-item reveal-left`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="process-flow-badge">
                <FontAwesomeIcon icon={step.icon} className="process-flow-icon" />
              </div>

              <div className="process-flow-content">
                <div className="process-flow-header">
                  <span className="process-flow-num">{step.index}</span>
                  <h3>{step.title}</h3>
                </div>
                <p className="process-flow-description">{step.detail}</p>
                <ul className="process-flow-bullets">
                  {step.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
            {idx < steps.length - 1 && (
              <div className="process-flow-connector">
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Process;

