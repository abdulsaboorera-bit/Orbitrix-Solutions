import React from 'react'
import SEO from '../../SEO'
import Hero from './Hero'
import Services from './Services'
import FAQ from './FAQ'
import './index.css'

const index = () => {
  return (
    <main id="main-content">
      <SEO 
        title="About Us | Orbitrix Solutions – Web & SEO Agency" 
        description="Learn about Orbitrix Solutions, a results-driven web development and digital marketing agency offering SEO, AI automation, and custom web development." 
        keywords="about Orbitrix Solutions, web development agency, digital marketing company, SEO services, AI automation"
      />
      <Hero/>
      <Services/>
      <FAQ/> 
    </main>
  )
}

export default index