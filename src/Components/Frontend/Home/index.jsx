import React from 'react'
import Hero from './Hero'
import Highlights from './Highlights'
import Services from './Services'
import Pricing from './Pricing'
import Portfolio from './Portfolio'
import Process from './Process'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import Cta from './Cta'
import Footer from '../../Footer'
import './index.css'

const index = () => {
  return (

    <>
      <Hero/>
      <Highlights/>
      <Services/>
      <Pricing/>
      <Portfolio/>
      <Process/>
      <Testimonials/>
      <FAQ/>
      <Cta/>
      <Footer/>
    </>



  )
}

export default index