import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: 'What services does Orbitrix Solutions offer?',
    answer:
      'Orbitrix Solutions offers a comprehensive range of digital services including WordPress Development, React Web Development, SEO Services, AI Ads & Marketing, Digital Marketing, Social Media Marketing, and AI Automation Services. We serve businesses across the USA, Canada, UK, Germany, Netherlands, and other European countries.',
  },
  {
    question: 'How does Orbitrix Solutions help businesses in the USA and Canada?',
    answer:
      'For businesses in the USA and Canada, we provide market-specific SEO strategies, high-performance web development, and targeted digital marketing campaigns. We understand the North American market landscape and create strategies that connect with local audiences while building a strong online presence that drives measurable results.',
  },
  {
    question: 'What makes Orbitrix Solutions different from other digital agencies?',
    answer:
      'Orbitrix Solutions combines technical excellence with strategic thinking. We are a frontend-only agency that specializes in building fast, SEO-optimized websites using React and WordPress. Our AI-powered marketing and automation services give businesses a competitive edge, and our international market expertise helps clients succeed across multiple regions.',
  },
  {
    question: 'Do you provide SEO services for international markets?',
    answer:
      'Yes, we provide comprehensive SEO services for international markets including the USA, Canada, UK, Germany, and the Netherlands. Our multi-market SEO approach includes hreflang implementation, region-specific keyword research, localized content strategies, and technical optimization for multi-regional websites.',
  },
  {
    question: 'What is AI Automation and how can it benefit my business?',
    answer:
      'AI Automation uses artificial intelligence to streamline business workflows, automate repetitive tasks, and create data-driven decision systems. Benefits include reduced operational costs, elimination of manual errors, 24/7 operational capability, faster response times, and the ability to scale operations without proportional cost increases.',
  },
  {
    question: 'How much do your services cost?',
    answer:
      'Our pricing varies based on the scope and complexity of each project. We offer flexible pricing models including project-based, monthly retainer, and custom packages. Contact us for a free consultation and we will provide a detailed quote tailored to your specific business needs and budget.',
  },
  {
    question: 'Do you work with startups and small businesses?',
    answer:
      'Absolutely. We work with businesses of all sizes — from early-stage startups building their MVP to established enterprises optimizing their digital presence. Our scalable approach means we can tailor our services to match your budget, timeline, and growth objectives.',
  },
  {
    question: 'How long does it take to see SEO results?',
    answer:
      'SEO is a long-term strategy. Most clients begin seeing meaningful improvements in rankings and traffic within 3-6 months. However, this timeline varies based on competition, current website state, and market conditions. We provide transparent monthly reports so you can track progress from day one.',
  },
  {
    question: 'Can you help with both website development and marketing?',
    answer:
      'Yes, we are a full-service digital agency. We handle everything from web development (WordPress and React) to SEO, digital marketing, social media account management, AI advertising, and automation. This integrated approach ensures all your digital efforts work together coherently.',
  },
  {
    question: 'Do you offer post-launch support and maintenance?',
    answer:
      'Yes, we provide ongoing support and maintenance after launch. This includes performance monitoring, security updates, content updates, SEO optimization, and marketing campaign management. Our goal is to be your long-term digital partner, not just a one-time service provider.',
  },
];

const FAQ = ({ data }) => {
  const faqItems = data || faqData;
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema-services';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-schema-services');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [faqItems]);

  return (
    <section id="faq" className="faq-services-section">
      <div className="faq-services-container">
        <div className="faq-services-header reveal-blur">
          <span className="about-label">Frequently Asked Questions</span>
          <h2>
            Common Questions About Our <span className="heading-accent">Services</span>
          </h2>
          <p>
            Find answers to the most common questions about our web development, SEO, AI automation,
            and digital marketing services. If you have additional questions, feel free to contact us.
          </p>
        </div>

        <div className="faq-services-list">
          {faqItems.map((faq, index) => (
            <article
              key={index}
              className={`faq-services-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-services-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3>{faq.question}</h3>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`faq-services-chevron ${activeIndex === index ? 'rotated' : ''}`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-services-answer"
                role="region"
                aria-hidden={activeIndex !== index}
              >
                <p>{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
