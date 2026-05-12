import React, { useEffect, useMemo, useState } from 'react'
import { Typography } from 'antd'

const Testimonials = () => {
  const items = useMemo(
    () => [
      {
        name: 'Ayesha Khan',
        role: 'Founder, Bloom Studio',
        quote:
          'Orbitrix delivered a brand refresh and site rebuild that doubled our inbound leads in six weeks. Communication was sharp and proactive.',
        rating: '5/5',
      },
      {
        name: 'Hassan Raza',
        role: 'Marketing Lead, Nova Logistics',
        quote:
          'The new SEO plan and landing pages improved our organic traffic and conversion rate almost immediately. The team moves fast and stays aligned.',
        rating: '5/5',
      },
      {
        name: 'Sara Malik',
        role: 'COO, CarePulse',
        quote:
          'We needed a reliable partner for a tight deadline. Orbitrix shipped a clean, performant experience that impressed our stakeholders.',
        rating: '5/5',
      },
    ],
    []
  )

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length)
    }, 6500)

    return () => clearInterval(timer)
  }, [items.length])

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length)
  }

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <section className="home-section testimonial-section reveal">
      <div className="section-header">
        <Typography.Title level={2}>Client testimonials</Typography.Title>
        <Typography.Paragraph>
          Real words from the teams that trusted Orbitrix Solutions with their growth.
        </Typography.Paragraph>
      </div>

      <div className="testimonial-carousel">
        <button className="carousel-btn" type="button" onClick={goPrev} aria-label="Previous testimonial">
          Prev
        </button>

        <div className="testimonial-card reveal">
          <p className="testimonial-quote">"{items[activeIndex].quote}"</p>
          <div className="testimonial-meta">
            <div>
              <h4>{items[activeIndex].name}</h4>
              <span>{items[activeIndex].role}</span>
            </div>
            <div className="testimonial-rating">{items[activeIndex].rating}</div>
          </div>
        </div>

        <button className="carousel-btn" type="button" onClick={goNext} aria-label="Next testimonial">
          Next
        </button>
      </div>

      <div className="carousel-dots">
        {items.map((item, index) => (
          <button
            key={item.name}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
