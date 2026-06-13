import React from 'react'
import { Typography } from 'antd'
import SEO from '../../SEO'
import Hero from './Hero'
import FAQ from './FAQ'
import './index.css'

const index = () => {
  return (
    <>
      <SEO 
        title="Contact Us | Orbitrix Solutions - Get a Quote" 
        description="Get in touch with Orbitrix Solutions today. Contact our team for customized web development, digital marketing, and IT solutions tailored to your business." 
      />
      <Hero/>
      <FAQ/> 
    </>
  )
}

export default index