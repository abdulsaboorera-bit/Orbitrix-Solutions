import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import SEO from '../../SEO'
import ContactForm from './ContactForm'
import FAQ from './FAQ'
import Footer from '../../Footer'
import './index.css'

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a website cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our web development projects range from $1,500 for a landing page to $15,000+ for custom web applications. Every project is quoted after a free discovery call."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most websites launch in 2-6 weeks depending on scope. Landing pages can be ready in 5-7 days, while complex custom applications take 8-12 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with international clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We serve clients across the USA, Canada, UK, Germany, Netherlands, and other countries with our remote-first approach."
      }
    }
  ]
};

const contactInfo = [
  {
    icon: faHouse,
    title: 'Visit Us',
    lines: ['Lahore, Pakistan', 'Available Worldwide'],
  },
  {
    icon: faPhone,
    title: 'Call Us',
    lines: ['+92 328 467 8752', 'Mon - Sat, 9am - 6pm'],
  },
  {
    icon: faEnvelope,
    title: 'Email Us',
    lines: ['info@orbitrixsolutions.com', 'We reply within 24 hours'],
  },
  {
    icon: faWhatsapp,
    title: 'WhatsApp',
    lines: ['Chat instantly', 'Quick responses'],
    link: 'https://wa.me/qr/7GSRQFMD6AMZG1',
  },
]

const Index = () => {
  return (
    <main id="main-content">
      <SEO
        title="Contact Us | Get a Free Quote – Orbitrix Solutions"
        description="Get in touch with Orbitrix Solutions for custom web development, SEO, AI automation, and digital marketing. Request a free quote or book a consultation today."
        keywords="contact Orbitrix Solutions, free quote web development, SEO agency contact, digital marketing consultation, book a call"
        schema={contactSchema}
      />

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-inner reveal-blur">
          <span className="contact-hero-badge">Let's Work Together</span>
          <h1 className="contact-hero-title">
            Ready to Grow Your Business Online?
          </h1>
          <p className="contact-hero-copy">
            Share your goals with Orbitrix Solutions and we will respond with a clear plan, timeline, and the right mix of services — within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="contact-section">
        <div className="contact-grid">
          {/* Left: Info Cards */}
          <div className="contact-info-col">
            <div className="contact-info-header reveal-left">
              <h2>Get in Touch</h2>
              <p>Whether you need a new website, SEO strategy, or AI automation — we are here to help you succeed.</p>
            </div>
            <div className="contact-info-cards stagger-children">
              {contactInfo.map((item, i) => (
                <div className="contact-card reveal-left" key={item.title} style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="contact-card-inner">
                    <span className="contact-icon">
                      <FontAwesomeIcon icon={item.icon} />
                    </span>
                    <div className="contact-card-text">
                      <div className="contact-card-title">{item.title}</div>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noreferrer" className="contact-card-link">
                          {item.lines.map((l, j) => <span key={j}>{l}</span>)}
                        </a>
                      ) : (
                        item.lines.map((l, j) => <div key={j} className="contact-card-line">{l}</div>)
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="contact-trust reveal-left">
              <div className="contact-trust-item">
                <span className="contact-trust-num">80+</span>
                <span className="contact-trust-label">Projects Delivered</span>
              </div>
              <div className="contact-trust-item">
                <span className="contact-trust-num">24h</span>
                <span className="contact-trust-label">Response Time</span>
              </div>
              <div className="contact-trust-item">
                <span className="contact-trust-num">15+</span>
                <span className="contact-trust-label">Countries Served</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal-right">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="contact-map-section reveal-scale">
        <div className="contact-map-container">
          <iframe
            title="Orbitrix Solutions Office Location – Lahore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13604.674541956339!2d74.32692455!3d31.5494934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904b0c0a1b0b3%3A0x8c1b3e6f2a5d8e0!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1"
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Internal Links */}
      <section className="contact-explore reveal-blur">
        <h2 style={{ marginBottom: '16px' }}>
          Explore More from Orbitrix Solutions
        </h2>
        <p style={{ maxWidth: '560px', margin: '0 auto 24px', color: 'var(--text-muted)' }}>
          Learn about our team, see our work, or review our terms. Orbitrix Solutions is your trusted partner for web development, SEO, and digital marketing.
        </p>
        <div className="contact-explore-links">
          <Link to="/about" className="contact-explore-btn">About Us</Link>
          <Link to="/projects" className="contact-explore-btn outline">Our Projects</Link>
          <Link to="/blog" className="contact-explore-btn outline">Blog</Link>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  )
}

export default Index
