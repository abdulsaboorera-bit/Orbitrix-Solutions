import React from 'react';
import { Typography } from 'antd';

const steps = [
  {
    index: '01',
    title: 'Planning',
    detail: 'We start by listening. Together, we define what you need, why you need it, and how it connects to your bigger goals.',
    bullets: [
      'Understand your business challenges and goals',
      'Discuss opportunities and expectations',
      'Map out a clear plan forward',
    ],
  },
  {
    index: '02',
    title: 'Concept & Strategy',
    detail: 'This is where ideas meet direction. We shape a strategy that reflects your vision and ensures every move has a clear purpose.',
    bullets: [
      'Define the big idea behind the project',
      'Outline the right digital approach',
      'Align the concept with your business goals',
    ],
  },
  {
    index: '03',
    title: 'Design & Development',
    detail: 'Now your vision starts taking shape. From visuals to functionality, we craft experiences that look great, work seamlessly, and feel effortless to use.',
    bullets: [
      'Beautiful, user-friendly designs',
      'Clean, reliable development',
      'Responsive layouts for all devices',
    ],
  },
  {
    index: '04',
    title: 'Optimize & Scale',
    detail: 'We refine, improve, and prepare your project for growth. Performance and scalability are built-in so you are ready for tomorrow.',
    bullets: [
      'Test and improve for best performance',
      'Ensure scalability for future growth',
      'Build efficiency into every detail',
    ],
  },
  {
    index: '05',
    title: 'Launch & Support',
    detail: 'Your project goes live, but we don\'t stop there. We provide ongoing support, improvements, and care to help your brand thrive long term.',
    bullets: [
      'Smooth launch and rollout',
      'Dedicated post-launch support',
      'Continuous updates and improvements',
    ],
  },
];

const Process = () => {
  return (
    <section className="home-section process-section reveal">
      <div className="section-header">
        <Typography.Title level={2}>How We Work – Our Web Development Process</Typography.Title>
        <Typography.Paragraph>
          Dive into the journey we take together to grow your brand. Our digital marketing company and web development agency follow a proven step-by-step process, moving your brand closer to its best version.
        </Typography.Paragraph>
      </div>

      <div className="process-flow-container">
        {steps.map((step, idx) => (
          <div 
            className="process-flow-item reveal" 
            key={step.title}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className="process-flow-badge">
              <span className="process-badge-index">{step.index}</span>
            </div>
            
            <div className="process-flow-content">
              <h3>{step.title}</h3>
              <p className="process-flow-description">{step.detail}</p>
              <ul className="process-flow-bullets">
                {step.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;

