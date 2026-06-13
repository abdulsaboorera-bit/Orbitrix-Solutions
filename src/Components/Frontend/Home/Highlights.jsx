import React, { useEffect, useState, useRef } from 'react';
import { Typography } from 'antd';

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const numericMatch = end.match(/^(\d+)(.*)$/);
    if (!numericMatch) {
      setCount(end);
      return;
    }

    const endNum = parseInt(numericMatch[1], 10);
    const suffix = numericMatch[2] || '';
    
    let start = 0;
    const totalSteps = 40;
    const stepTime = Math.floor(duration / totalSteps);
    const increment = Math.ceil(endNum / totalSteps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= endNum) {
        clearInterval(timer);
        setCount(end + '');
      } else {
        setCount(start + suffix);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return <span ref={elementRef}>{count}</span>;
};

const stats = [
  { value: '80+', label: 'Projects delivered' },
  { value: '45%', label: 'Average conversion lift' },
  { value: '24h', label: 'Response time' },
  { value: '2+', label: 'Years in delivery' },
];

const badges = [
  'Strategy-led delivery',
  'Design with performance focus',
  'SEO-first builds',
  'Dedicated project owners',
];

const Highlights = () => {
  return (
    <section className="home-section impact-section reveal">
      <div className="section-header">
        <Typography.Title level={2}>Impact that shows up in results</Typography.Title>
        <Typography.Paragraph>
          We blend strategy, execution, and performance optimization to help brands grow and stay ahead.
        </Typography.Paragraph>
      </div>

      <div className="impact-grid">
        {stats.map((item, index) => (
          <div className="impact-card reveal" key={item.label} style={{ transitionDelay: `${index * 120}ms` }}>
            <h3>
              <CountUp end={item.value} />
            </h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <div className="badge-row">
        {badges.map((badge) => (
          <span key={badge} className="badge-item">{badge}</span>
        ))}
      </div>
    </section>
  );
};

export default Highlights;

