import React from 'react'
import { Typography } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const faqItems = [
   {
      question: 'How do I start a project with Orbitrix Solutions?',
      answer:
         'Share your goals through our <a href="/contact">contact page</a>, WhatsApp, or email. We reply within 24 hours with next steps and a clear plan.',
   },
   {
      question: 'What services does your web development agency offer?',
      answer: 'We deliver WordPress and React web development, SEO services, AI automation, digital marketing, and social media growth services as a full-service digital marketing company.',
   },
   {
      question: 'How long does a typical website take?',
      answer: 'Most websites launch in 2 to 6 weeks, depending on scope and content readiness. We confirm a timeline after a discovery call.',
   },
   {
      question: 'Do you provide ongoing support?',
      answer: 'Yes. We offer maintenance, optimization, and marketing support after launch with flexible monthly plans. Visit our <a href="/about">about page</a> to learn more.',
   },
]

const FAQ = () => {
   return (
      <section className="home-section" id="faq">
         <div className="container">
            <Typography.Title level={2} className="faq-title">
               Frequently Asked Questions
            </Typography.Title>
         </div>

         <div style={{ height: '24px' }} />

         {faqItems.map((item) => (
            <details className="accordian" key={item.question}>
               <summary className="question">
                  <span>{item.question}</span>
                  <span className="drop_icon">
                     <FontAwesomeIcon icon={faAngleDown} />
                  </span>
               </summary>
               <div className="answer">
                  <p dangerouslySetInnerHTML={{ __html: item.answer }} />
               </div>
            </details>
         ))}

         <div style={{ height: '24px' }} />
      </section>
   )
}

export default FAQ
