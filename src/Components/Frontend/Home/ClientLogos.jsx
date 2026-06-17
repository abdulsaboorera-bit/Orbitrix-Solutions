import React from 'react';

const clients = [
  { name: 'Fonalize', url: 'https://fonalize.co.uk/' },
  { name: 'Royal Beauty Salon', url: 'https://royalbeautysaloon.com/' },
  { name: 'Prime Safari Dubai', url: 'https://primesafaridubai.com/' },
  { name: 'B2B Mobile', url: 'https://www.b2bmobilewholesalers.com/' },
  { name: 'Imran Woodworking', url: 'https://imranwoodworking.com/' },
];

const ClientLogos = () => {
  return (
    <section className="home-section client-logos-section reveal-blur">
      <div className="client-logos-header">
        <span className="about-label">TRUSTED BY</span>
        <p className="client-logos-subtitle">
          Businesses across 15+ countries trust Orbitrix Solutions to deliver results
        </p>
      </div>

      <div className="client-logos-track">
        <div className="client-logos-grid">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="client-logo-card"
              aria-label={`Visit ${client.name} website`}
            >
              <span className="client-logo-text">{client.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="client-logos-stats">
        <div className="client-logos-stat">
          <span className="client-logos-stat-num">80+</span>
          <span className="client-logos-stat-label">Projects Delivered</span>
        </div>
        <div className="client-logos-stat">
          <span className="client-logos-stat-num">15+</span>
          <span className="client-logos-stat-label">Countries Served</span>
        </div>
        <div className="client-logos-stat">
          <span className="client-logos-stat-num">100%</span>
          <span className="client-logos-stat-label">Client Satisfaction</span>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
