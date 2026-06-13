import React, { useEffect, useState, useRef } from 'react';
import { Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPercentage } from '@fortawesome/free-solid-svg-icons';

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

const StatsCounter = () => {
  return (
    <section className="home-section stats-counter-section reveal">
      <div className="section-header">
        <Typography.Title level={2}>
          Building brands, boosting businesses, and redefining possibilities.
        </Typography.Title>
      </div>

      <div className="stats-grid">
        <div className="stat-card reveal" style={{ transitionDelay: '0ms' }}>
          <div className="stat-icon-wrapper">
            <FontAwesomeIcon icon={faPlus} className="stat-icon" />
          </div>
          <h3 className="stat-number">
            <CountUp end="250+" />
          </h3>
          <h4 className="stat-title">Projects Delivered</h4>
          <p className="stat-desc">
            You’re joining 250+ businesses who’ve launched successful projects with us, and we’re ready to build yours next.
          </p>
        </div>

        <div className="stat-card reveal" style={{ transitionDelay: '120ms' }}>
          <div className="stat-icon-wrapper">
            <FontAwesomeIcon icon={faPercentage} className="stat-icon" />
          </div>
          <h3 className="stat-number">
            <CountUp end="70%" />
          </h3>
          <h4 className="stat-title">Business Growth</h4>
          <p className="stat-desc">
            Our strategies help clients like you achieve real growth and success, up to 70% more revenue in just a year.
          </p>
        </div>

        <div className="stat-card reveal" style={{ transitionDelay: '240ms' }}>
          <div className="stat-icon-wrapper">
            <FontAwesomeIcon icon={faPlus} className="stat-icon" />
          </div>
          <h3 className="stat-number">
            <CountUp end="100+" />
          </h3>
          <h4 className="stat-title">Happy Clients</h4>
          <p className="stat-desc">
            Over 100 brands trust us to bring ideas to life. You’ll love the results, growth and success just as much as they did.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
