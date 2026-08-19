import React from 'react';
import { Link } from 'react-router-dom';

const IndustryExperience = () => {
  return (
    <section className="home-section industry-experience-section reveal" id="industry-experience">
      <div className="industry-exp-container">
        <div className="industry-exp-header">
          <span className="about-label">Industry Experience</span>
          <h2 className="industry-exp-heading">Experience Behind Every Solution</h2>
          <p className="industry-exp-subtitle">
            Our expertise is built through real-world software development experience,
            complex projects, and collaboration with established technology companies.
          </p>
        </div>

        <div className="industry-exp-grid">
          {/* Ezzstar Card */}
          <div className="industry-exp-card reveal-left">
            <div className="industry-exp-card-accent" />
            <div className="industry-exp-card-content">
              <div className="industry-exp-company-badge">
                <span className="industry-exp-company-letter">E</span>
              </div>
              <h3 className="industry-exp-company-name">Ezzstar</h3>
              <span className="industry-exp-collab-type">Project-Based Software Development Experience</span>
              <p className="industry-exp-description">
                Our team has contributed to real-world software development projects in collaboration
                with Ezzstar, gaining practical experience in developing, improving, debugging,
                and delivering production-ready software solutions.
              </p>
              <div className="industry-exp-tags">
                <span>Software Development</span>
                <span>Bug Fixing</span>
                <span>Production Delivery</span>
              </div>
            </div>
          </div>

          {/* Voxturr Card */}
          <div className="industry-exp-card reveal-right">
            <div className="industry-exp-card-accent" />
            <div className="industry-exp-card-content">
              <div className="industry-exp-company-badge">
                <span className="industry-exp-company-letter">V</span>
              </div>
              <h3 className="industry-exp-company-name">Voxturr</h3>
              <span className="industry-exp-collab-type">Project-Based Software Development Experience</span>
              <p className="industry-exp-description">
                Our team has contributed to software development projects in collaboration with
                Voxturr, working on development tasks, feature implementation, integrations,
                troubleshooting, and project delivery.
              </p>
              <div className="industry-exp-tags">
                <span>Feature Implementation</span>
                <span>Integrations</span>
                <span>Troubleshooting</span>
              </div>
            </div>
          </div>
        </div>

        {/* Marketing Statement */}
        <div className="industry-exp-statement reveal">
          <p>
            At Orbitrix Solutions, we combine hands-on industry experience with modern technologies
            to build reliable, scalable, and business-focused digital solutions.
          </p>
        </div>

        {/* CTA */}
        <div className="industry-exp-cta reveal">
          <Link to="/contact" className="industry-exp-btn">
            Work With Orbitrix
            <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
          </Link>
        </div>
      </div>

      <style>{`
        /* ===== INDUSTRY EXPERIENCE SECTION ===== */
        .industry-experience-section {
          padding: 80px 6%;
          background: linear-gradient(180deg, transparent, rgba(26, 129, 135, 0.03) 50%, transparent);
        }

        .industry-exp-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .industry-exp-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .industry-exp-heading {
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--orbit-deep);
          margin-bottom: 16px;
          font-weight: 700;
          line-height: 1.15;
        }

        .industry-exp-subtitle {
          font-size: 1.1rem;
          color: var(--orbit-muted-strong);
          line-height: 1.7;
          max-width: 640px;
          margin: 0 auto;
        }

        .industry-exp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          margin-bottom: 48px;
        }

        .industry-exp-card {
          position: relative;
          background: var(--orbit-white);
          border: 1px solid rgba(26, 129, 135, 0.1);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 12px 36px rgba(8, 34, 34, 0.06);
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .industry-exp-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 56px rgba(26, 129, 135, 0.12);
          border-color: rgba(26, 129, 135, 0.2);
        }

        .industry-exp-card-accent {
          height: 4px;
          background: linear-gradient(90deg, var(--orbit-teal), var(--orbit-mint));
          transition: height 0.3s ease;
        }

        .industry-exp-card:hover .industry-exp-card-accent {
          height: 6px;
        }

        .industry-exp-card-content {
          padding: 32px 28px;
        }

        .industry-exp-company-badge {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(26, 129, 135, 0.1), rgba(99, 198, 184, 0.1));
          border: 1px solid rgba(26, 129, 135, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .industry-exp-card:hover .industry-exp-company-badge {
          background: linear-gradient(135deg, var(--orbit-teal), var(--orbit-teal-strong));
          border-color: var(--orbit-teal);
          transform: scale(1.05);
        }

        .industry-exp-company-letter {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--orbit-teal);
          transition: color 0.3s ease;
        }

        .industry-exp-card:hover .industry-exp-company-letter {
          color: #fff;
        }

        .industry-exp-company-name {
          font-size: 1.5rem;
          color: var(--orbit-deep);
          margin-bottom: 6px;
          font-weight: 700;
          transition: color 0.3s ease;
        }

        .industry-exp-card:hover .industry-exp-company-name {
          color: var(--orbit-teal-strong);
        }

        .industry-exp-collab-type {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--orbit-teal);
          background: rgba(26, 129, 135, 0.06);
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 16px;
          letter-spacing: 0.02em;
        }

        .industry-exp-description {
          font-size: 1rem;
          color: var(--orbit-muted-strong);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .industry-exp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .industry-exp-tags span {
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(26, 129, 135, 0.06);
          border: 1px solid rgba(26, 129, 135, 0.1);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--orbit-teal-strong);
          transition: all 0.3s ease;
        }

        .industry-exp-card:hover .industry-exp-tags span {
          background: rgba(26, 129, 135, 0.1);
          border-color: rgba(26, 129, 135, 0.18);
        }

        /* Marketing Statement */
        .industry-exp-statement {
          text-align: center;
          max-width: 740px;
          margin: 0 auto 40px;
          padding: 28px 32px;
          background: linear-gradient(135deg, rgba(26, 129, 135, 0.06), rgba(99, 198, 184, 0.06));
          border: 1px solid rgba(26, 129, 135, 0.1);
          border-radius: 16px;
        }

        .industry-exp-statement p {
          font-size: 1.08rem;
          color: var(--orbit-muted-strong);
          line-height: 1.75;
          font-style: italic;
          margin: 0;
        }

        /* CTA */
        .industry-exp-cta {
          text-align: center;
        }

        .industry-exp-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          border-radius: 999px;
          background: linear-gradient(135deg, var(--orbit-teal), var(--orbit-teal-strong));
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-decoration: none;
          box-shadow: 0 10px 28px rgba(26, 129, 135, 0.3);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .industry-exp-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(26, 129, 135, 0.4);
        }

        .industry-exp-btn svg {
          transition: transform 0.3s ease;
        }

        .industry-exp-btn:hover svg {
          transform: translateX(4px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .industry-experience-section {
            padding: 48px 4%;
          }

          .industry-exp-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .industry-exp-card-content {
            padding: 24px 20px;
          }

          .industry-exp-statement {
            padding: 20px;
          }

          .industry-exp-statement p {
            font-size: 0.98rem;
          }
        }
      `}</style>
    </section>
  );
};

export default IndustryExperience;
