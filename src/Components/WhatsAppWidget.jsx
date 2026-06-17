import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !hasScrolled) {
        setHasScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <div className="wa-widget" role="complementary" aria-label="WhatsApp chat">
      {/* Chat bubble popup */}
      {isOpen && (
        <div className="wa-widget-popup">
          <div className="wa-popup-header">
            <div className="wa-popup-header-info">
              <div className="wa-popup-avatar">O</div>
              <div>
                <strong>Orbitrix Solutions</strong>
                <span className="wa-popup-status">Usually replies in minutes</span>
              </div>
            </div>
            <button className="wa-popup-close" onClick={() => setIsOpen(false)} aria-label="Close chat">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="wa-popup-body">
            <div className="wa-popup-message">
              <p>Hi there! 👋</p>
              <p>How can we help you today? Whether you need a website, SEO, or digital marketing — we are here to help.</p>
            </div>
          </div>
          <a
            className="wa-popup-cta"
            href="https://wa.me/qr/7GSRQFMD6AMZG1?text=Hi%20Orbitrix!%20I%27m%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            Start Chat on WhatsApp
          </a>
        </div>
      )}

      {/* Floating button */}
      <button
        className="wa-float-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
      >
        {isOpen ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faWhatsapp} />
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
