import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Cta = () => {
  return (
    <section className="cta-services-section">
      <div className="cta-services-container">
        <div className="cta-services-card reveal">
          <div className="cta-services-content">
            <h2>Ready to Accelerate Your Digital Growth?</h2>
            <p>
              Whether you need a new website, better SEO rankings, AI-powered marketing, or
              complete digital transformation — Orbitrix Solutions is your trusted partner
              for measurable business growth across the USA, Canada, UK, Germany, and Europe.
            </p>
            <div className="cta-services-actions">
              <a
                className="cta-services-btn cta-services-btn-whatsapp"
                href="https://wa.me/qr/7GSRQFMD6AMZG1"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                WhatsApp Us
              </a>
              <a
                className="cta-services-btn cta-services-btn-email"
                href="mailto:info@orbitrixsolutions.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                Email Us
              </a>
              <a className="cta-services-btn cta-services-btn-quote" href="/contact">
                Get a Free Quote
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
