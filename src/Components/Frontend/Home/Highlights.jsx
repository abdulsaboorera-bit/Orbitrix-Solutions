import React from 'react'
import { Typography } from 'antd'

const stats = [
  { value: '80+', label: 'Projects delivered' },
  { value: '45%', label: 'Average conversion lift' },
  { value: '24h', label: 'Response time' },
  { value: '2+', label: 'Years in delivery' },
]

const badges = [
  'Strategy-led delivery',
  'Design with performance focus',
  'SEO-first builds',
  'Dedicated project owners',
]

const Highlights = () => {
  return (
    <section className="home-section impact-section">
      <div className="section-header">
        <Typography.Title level={2}>Impact that shows up in results</Typography.Title>
        <Typography.Paragraph>
          We blend strategy, execution, and performance optimization to help brands grow and stay ahead.
        </Typography.Paragraph>
      </div>

      <div className="impact-grid">
        {stats.map((item) => (
          <div className="impact-card" key={item.label}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <div className="badge-row">
        {badges.map((badge) => (
          <span key={badge}>{badge}</span>
        ))}
      </div>
    </section>
  )
}

export default Highlights
