import React from 'react'
import { Typography } from 'antd'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import myPic from '../../../Images/my-pic.png'



const Hero = () => {
  return (
    <div className="header_container0">

<div className="header_container1 reveal">
  <div className="hero_text">
    <Typography.Title>Your partner in digital growth.</Typography.Title>

    <Typography.Paragraph className='p_container1'>
      Orbitrix Solutions helps businesses thrive with premium web development, digital marketing, and IT consulting. We
      focus on measurable outcomes, clean execution, and long-term performance so your brand stays ahead.
    </Typography.Paragraph>

    <div className="btns">
      <a className="hb1 hb1-whatsapp" href="https://wa.me/qr/7GSRQFMD6AMZG1" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
      </a>
      <a className="hb1 hb1-email" href="mailto:abdulsaboormercedes@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} /> Email
      </a>
    </div>
  </div>

  <div className="header_container2 reveal" style={{ transitionDelay: '120ms' }}>
    <img src={myPic} alt="My Picture"/>


  </div>



</div>



    </div>
  )
}

export default Hero
