import React from 'react'
import SEO from '../../SEO'
import Hero from './Hero'
import Services from './Services'
import FAQ from './FAQ'
import './index.css'

const index = () => {
  return (
    <main>
      <SEO 
        title="About Us | Orbitrix Solutions - Web Development & IT Solutions" 
        description="Learn about Orbitrix Solutions. We are a results-driven digital agency offering premier web development, IT consulting, and performance marketing." 
      />
      <Hero/>
      <Services/>
      <FAQ/> 
    </main>
  )
}

export default index