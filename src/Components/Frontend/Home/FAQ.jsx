import React from 'react'
import { Typography } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const faqItems = [
   {
      question: 'How do I start a project with Orbitrix Solutions?',
      answer:
         'Share your goals through the contact form, WhatsApp, or email. We reply within 24 hours with next steps and a clear plan.',
   },
   {
      question: 'What services do you offer?',
      answer: 'We deliver WordPress and React development, SEO, digital marketing, AI ads, and social media growth services.',
   },
   {
      question: 'How long does a typical website take?',
      answer: 'Most websites launch in 2 to 6 weeks, depending on scope and content readiness. We confirm a timeline after discovery.',
   },
   {
      question: 'Do you provide ongoing support?',
      answer: 'Yes. We offer maintenance, optimization, and marketing support after launch with flexible monthly plans.',
   },
]

const FAQ = () => {
   return (
      <>
         <div className="container">
            <Typography.Title level={2} className="faq-title">
               Frequently Asked Questions
            </Typography.Title>
         </div>

         <br />
         <br />
         <br />

         {faqItems.map((item) => (
            <details className="accordian" key={item.question}>
               <summary className="question">
                  <span>{item.question}</span>
                  <span className="drop_icon">
                     <FontAwesomeIcon icon={faAngleDown} />
                  </span>
               </summary>
               <div className="answer">
                  <p>{item.answer}</p>
               </div>
            </details>
         ))}

         <br />
         <br />
         <br />
      </>
   )
}

export default FAQ
