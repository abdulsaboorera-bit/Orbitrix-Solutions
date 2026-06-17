import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const faqItems = [
  {
    question: 'How much does a website cost?',
    answer: 'Our web development projects range from $1,500 for a landing page to $15,000+ for custom web applications. Every project is quoted after a free discovery call where we understand your exact needs.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'Most websites launch in 2-6 weeks depending on scope. Landing pages can be ready in 5-7 days, while complex custom applications take 8-12 weeks. We provide a detailed timeline after our initial consultation.',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Absolutely. We serve clients across the USA, Canada, UK, Germany, Netherlands, and other countries. Our remote-first approach means we deliver the same quality regardless of location.',
  },
  {
    question: 'What is your process for starting a project?',
    answer: 'Simply fill out the form or WhatsApp us. We schedule a 30-minute discovery call, understand your goals, provide a detailed proposal with timeline and pricing, and begin once you approve. No hidden fees.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes. We provide maintenance plans, SEO optimization, content updates, and technical support. Many of our clients stay on monthly plans for continuous growth and improvements.',
  },
  {
    question: 'How do you measure success?',
    answer: 'We track real metrics: traffic growth, conversion rates, search rankings, page speed, and business inquiries. Every client gets monthly reports with actionable insights, not vanity metrics.',
  },
]

const FAQ = () => {
  return (
    <section className="home-section reveal-blur" id="faq" style={{ background: 'var(--orbit-sand)' }}>
      <div className="container">
        <h2 className="faq-title">
          Frequently Asked Questions
        </h2>
      </div>

      <div style={{ height: '24px' }} />

      <div className="stagger-children">
        {faqItems.map((item) => (
          <details className="accordian" key={item.question}>
            <summary className="question">
              <span>{item.question}</span>
              <span className="drop_icon">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </summary>
            <div className="answer">
              <p>
                {item.answer}
                {item.link && <Link to={item.link.to}> {item.link.text}</Link>}
              </p>
            </div>
          </details>
        ))}
      </div>

      <div style={{ height: '24px' }} />
    </section>
  )
}

export default FAQ
