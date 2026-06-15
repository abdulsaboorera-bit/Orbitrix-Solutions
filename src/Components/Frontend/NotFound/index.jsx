import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './NotFound.css';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Page Not Found | Orbitrix Solutions';
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'noindex, nofollow');

    return () => {
      metaRobots.setAttribute('content', 'index, follow');
    };
  }, []);
  return (
    <section className="not-found">
      <div className="not-found-container">
        <div className="not-found-visual">
          <span className="not-found-code">404</span>
          <div className="not-found-glow" />
        </div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-text">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="not-found-btn not-found-btn-primary">
            <FontAwesomeIcon icon={faHome} /> Go Home
          </Link>
          <button
            className="not-found-btn not-found-btn-secondary"
            onClick={() => window.history.back()}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
