import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft, faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SEO from '../../SEO';
import Footer from '../../Footer';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Ayesha Khan',
    role: 'Founder',
    company: 'Bloom Studio',
    quote: 'Orbitrix delivered a brand refresh and site rebuild that doubled our inbound leads in six weeks. Communication was sharp and proactive.',
    rating: 5,
    category: 'Web Development',
    country: 'USA',
  },
  {
    name: 'Hassan Raza',
    role: 'Marketing Lead',
    company: 'Nova Logistics',
    quote: 'The new SEO plan and landing pages improved our organic traffic and conversion rate almost immediately. The team moves fast and stays aligned.',
    rating: 5,
    category: 'SEO',
    country: 'UK',
  },
  {
    name: 'Sara Malik',
    role: 'COO',
    company: 'CarePulse',
    quote: 'We needed a reliable partner for a tight deadline. Orbitrix shipped a clean, performant experience that impressed our stakeholders.',
    rating: 5,
    category: 'Web Development',
    country: 'Canada',
  },
  {
    name: 'James O\'Connor',
    role: 'CEO',
    company: 'TechBridge Ireland',
    quote: 'Our e-commerce conversion rate jumped 40% after Orbitrix rebuilt our Shopify store. Their attention to UX detail is unmatched.',
    rating: 5,
    category: 'Web Development',
    country: 'Ireland',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Digital',
    company: 'GreenLeaf Organics',
    quote: 'The AI chatbot they built handles 70% of our customer queries now. Our support costs dropped dramatically and response times improved.',
    rating: 5,
    category: 'AI Automation',
    country: 'USA',
  },
  {
    name: 'Marcus Weber',
    role: 'Marketing Director',
    company: 'Apex Automotive',
    quote: 'Our Google rankings went from page 5 to page 1 for 12 target keywords in just four months. The ROI on their SEO service is incredible.',
    rating: 5,
    category: 'SEO',
    country: 'Germany',
  },
  {
    name: 'Fatima Al-Hassan',
    role: 'Founder',
    company: 'Luxe Interiors Dubai',
    quote: 'Orbitrix managed our social media and grew our Instagram from 2K to 28K followers in 6 months. Lead quality from social improved massively.',
    rating: 5,
    category: 'Digital Marketing',
    country: 'UAE',
  },
  {
    name: 'David Chen',
    role: 'CTO',
    company: 'DataSync Solutions',
    quote: 'They automated our entire onboarding workflow with AI. New client setup time went from 3 days to 4 hours. Game-changing efficiency.',
    rating: 5,
    category: 'AI Automation',
    country: 'USA',
  },
  {
    name: 'Sophie Laurent',
    role: 'Brand Manager',
    company: 'Maison Beaute',
    quote: 'Our paid ad campaigns with Orbitrix deliver a 6x ROAS consistently. Their data-driven approach to digital marketing is refreshing.',
    rating: 5,
    category: 'Digital Marketing',
    country: 'France',
  },
  {
    name: 'Omar Farooq',
    role: 'Operations Director',
    company: 'SwiftLogistics',
    quote: 'The custom dashboard they built gives us real-time visibility into our supply chain. It has become indispensable to our daily operations.',
    rating: 5,
    category: 'Web Development',
    country: 'UK',
  },
  {
    name: 'Anna van der Berg',
    role: 'E-commerce Manager',
    company: 'DutchDesign Studio',
    quote: 'Orbitrix restructured our product pages and site architecture. Organic revenue increased 85% within five months of launch.',
    rating: 5,
    category: 'SEO',
    country: 'Netherlands',
  },
  {
    name: 'Carlos Mendez',
    role: 'Founder',
    company: 'FitLife App',
    quote: 'The AI recommendation engine they built for our fitness app increased user engagement by 60%. Users love the personalized experience.',
    rating: 5,
    category: 'AI Automation',
    country: 'Spain',
  },
  {
    name: 'Emily Watson',
    role: 'Director of Growth',
    company: 'CloudNine SaaS',
    quote: 'From strategy to execution, Orbitrix handled our entire product launch campaign. We hit 5,000 sign-ups in the first week.',
    rating: 5,
    category: 'Digital Marketing',
    country: 'Australia',
  },
  {
    name: 'Ravi Patel',
    role: 'Managing Director',
    company: 'Patel Hospitality Group',
    quote: 'Our new booking engine and website redesigned by Orbitrix increased direct reservations by 55%. Guests love the seamless experience.',
    rating: 5,
    category: 'Web Development',
    country: 'UK',
  },
  {
    name: 'Leila Nouri',
    role: 'CEO',
    company: 'PersianEats Delivery',
    quote: 'Their SEO work for our restaurant chain drove a 200% increase in organic orders. We now outrank competitors across all major cities.',
    rating: 5,
    category: 'SEO',
    country: 'Canada',
  },
];

const categories = ['All', 'Web Development', 'SEO', 'AI Automation', 'Digital Marketing'];

const videoTestimonials = [
  {
    name: 'James O\'Connor',
    company: 'TechBridge Ireland',
    title: 'How Our E-commerce Revenue Doubled',
    duration: '3:24',
  },
  {
    name: 'Marcus Weber',
    company: 'Apex Automotive',
    title: 'Page 1 Rankings in 4 Months',
    duration: '2:48',
  },
  {
    name: 'Fatima Al-Hassan',
    company: 'Luxe Interiors Dubai',
    title: 'From 2K to 28K Followers',
    duration: '4:12',
  },
];

const TestimonialsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? testimonials
    : testimonials.filter((t) => t.category === activeFilter);

  return (
    <div className="testimonials-page">
      <SEO
        title="Client Testimonials | Orbitrix Solutions Reviews"
        description="Read what our clients say about Orbitrix Solutions. 5-star reviews for web development, SEO, AI automation, and digital marketing services."
      />

      <section className="testimonials-hero">
        <div className="about-label">TESTIMONIALS</div>
        <h1>What Our Clients Say</h1>
        <p>
          Don't just take our word for it — hear from businesses across the globe who have transformed their digital presence with Orbitrix Solutions.
        </p>
        <div className="testimonials-stats-bar">
          <div className="testimonials-stat">
            <span className="testimonials-stat-value">80+</span>
            <span className="testimonials-stat-label">Projects Delivered</span>
          </div>
          <div className="testimonials-stat">
            <span className="testimonials-stat-value">50+</span>
            <span className="testimonials-stat-label">Happy Clients</span>
          </div>
          <div className="testimonials-stat">
            <span className="testimonials-stat-value">4.9/5</span>
            <span className="testimonials-stat-label">Average Rating</span>
          </div>
        </div>
      </section>

      <section className="testimonials-filters-section">
        <div className="testimonials-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`testimonials-filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="testimonials-grid-section">
        <div className="testimonials-grid">
          {filtered.map((t, i) => (
            <div className="testimonials-card" key={`${t.name}-${i}`}>
              <span className="testimonials-card-tag">{t.category}</span>
              <div className="testimonials-card-quote-mark">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <p className="testimonials-card-text">{t.quote}</p>
              <div className="testimonials-card-meta">
                <div className="testimonials-card-author">
                  <div className="testimonials-card-avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div className="testimonials-card-info">
                    <strong>{t.name}</strong>
                    <span>{t.role}, {t.company} &middot; {t.country}</span>
                  </div>
                </div>
                <div className="testimonials-card-stars">
                  {[...Array(t.rating)].map((_, j) => (
                    <FontAwesomeIcon icon={faStar} key={j} className="star-icon" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-video-section">
        <h2>Video Testimonials</h2>
        <div className="testimonials-video-grid">
          {videoTestimonials.map((v, i) => (
            <div className="testimonials-video-card" key={i}>
              <div className="testimonials-video-thumb">
                <div className="testimonials-video-play">
                  <FontAwesomeIcon icon={faPlay} />
                </div>
                <span className="testimonials-video-duration">{v.duration}</span>
              </div>
              <div className="testimonials-video-body">
                <h4>{v.title}</h4>
                <p>{v.name} &middot; {v.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-cta-section">
        <div className="testimonials-cta-card">
          <h2>Ready to Join Our Satisfied Clients?</h2>
          <p>
            Let's discuss your project and show you why businesses worldwide trust Orbitrix Solutions to deliver exceptional results.
          </p>
          <Link to="/contact" className="testimonials-cta-btn">
            Get Started Today <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
