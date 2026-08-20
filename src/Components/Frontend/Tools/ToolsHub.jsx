import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SEO from '../../SEO';
import Breadcrumbs from '../../Breadcrumbs';
import Footer from '../../Footer';
import toolsData from './toolsData';
import './ToolsHub.css';

const toolsHubSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://orbitrixsolutions.com/tools/#webpage",
      "url": "https://orbitrixsolutions.com/tools/",
      "name": "Free Digital Tools for Your Business | SEO, Legal & Design Tools",
      "isPartOf": { "@id": "https://orbitrixsolutions.com/#website" },
      "about": { "@id": "https://orbitrixsolutions.com/#organization" },
      "description": "Professional free tools to help you optimize your website, generate legal documents, create color palettes, and grow your business. 100% free, no signup required.",
      "breadcrumb": { "@id": "https://orbitrixsolutions.com/tools/#breadcrumb" },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://orbitrixsolutions.com/tools/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://orbitrixsolutions.com/" },
        { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://orbitrixsolutions.com/tools/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://orbitrixsolutions.com/tools/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are these tools really free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all tools on Orbitrix Solutions are 100% free to use. No signup or payment required."
          }
        },
        {
          "@type": "Question",
          "name": "What tools does Orbitrix Solutions offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer a Privacy Policy Generator, Terms & Conditions Generator, Color Palette Generator, Meta Tag Generator, Free SEO Audit Tool, Pricing Calculator, and Schema Markup Generator."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use the generated content for commercial purposes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can use the generated content for personal and commercial projects. For legal documents, we recommend reviewing with a legal professional."
          }
        }
      ]
    }
  ]
};

const ToolsHub = () => {
  return (
    <div className="th-page">
      <SEO
        title="Free Digital Tools for Your Business | SEO, Legal & Design Tools | Orbitrix Solutions"
        description="Professional free tools to help you optimize your website, generate legal documents, create color palettes, and grow your business. 100% free, no signup required."
        keywords="free SEO tools, privacy policy generator, terms generator, color palette generator, meta tag generator, free website tools"
        schema={toolsHubSchema}
      />

      <Breadcrumbs />

      <section className="th-hero">
        <div className="th-hero-bg">
          <div className="th-hero-circle th-hero-circle-1" />
          <div className="th-hero-circle th-hero-circle-2" />
        </div>
        <div className="th-hero-content">
          <div className="th-label">FREE TOOLS</div>
          <h1>Free Digital Tools for Your Business</h1>
          <p>
            Professional tools to help you optimize your website, generate code, and grow your business — 100% free.
          </p>
        </div>
      </section>

      <section className="th-tools-section">
        <div className="th-tools-grid">
          {toolsData.map((tool) => (
            <div key={tool.id} className="th-tool-card">
              <div className="th-tool-badge">{tool.badge}</div>
              <div className="th-tool-icon">
                <FontAwesomeIcon icon={tool.icon} />
              </div>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <Link to={tool.path} className="th-tool-btn">
                Use Tool <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="th-cta-section">
        <div className="th-cta-card">
          <h2>Need a Custom Tool?</h2>
          <p>
            We build custom web tools, calculators, and generators tailored to your business needs.
            Let's talk about what we can create for you.
          </p>
          <Link to="/contact" className="th-cta-btn">
            Contact Us <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ToolsHub;
