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
          Client Results – Our Track Record as a Web Development Agency
        </Typography.Title>
      </div>

      <div className="stats-grid">
        <div className="stat-card reveal" style={{ transitionDelay: '0ms' }}>
          <div className="stat-icon-wrapper">
            <FontAwesomeIcon icon={faPlus} className="stat-icon" />
          </div>
          <h3 className="stat-number">
            <CountUp end="80+" />
          </h3>
          <h4 className="stat-title">Projects Delivered</h4>
          <p className="stat-desc">
            You're joining 80+ businesses who've launched successful web development and SEO projects with us, and we're ready to build yours next.
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
            Our SEO services and digital marketing strategies help clients achieve real growth — up to 70% more revenue in just a year.
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
            Over 100 brands trust our web development agency and digital marketing company to bring ideas to life. You'll love the results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
