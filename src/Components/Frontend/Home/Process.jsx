import React from 'react'
import { Typography } from 'antd'

const steps = [
  {
    title: 'Discovery',
    detail: 'We align on goals, audience, and scope before moving into execution.',
  },
  {
    title: 'Strategy',
    detail: 'We map customer journeys, prioritize quick wins, and define success metrics.',
  },
  {
    title: 'Build',
    detail: 'We design, develop, and iterate quickly with clear communication.',
  },
  {
    title: 'Optimize',
    detail: 'We measure performance, ship improvements, and scale what works.',
  },
]

const Process = () => {
  return (
    <section className="home-section process-section">
      <div className="section-header">
        <Typography.Title level={2}>How we deliver</Typography.Title>
        <Typography.Paragraph>
          A clean, predictable process that keeps timelines tight and outcomes on track.
        </Typography.Paragraph>
      </div>

      <div className="process-grid">
        {steps.map((step, index) => (
          <div className="process-card" key={step.title}>
            <div className="process-index">{`0${index + 1}`}</div>
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process
