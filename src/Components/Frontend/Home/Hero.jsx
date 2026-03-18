import React from 'react'
import { Col, Row , Typography , Button} from 'antd'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import myPic from '../../../Images/my-pic.png'



import './index.css'


const Hero = () => {
  return (
    <div className="header_container0">

<div className="header_container1">
  <div className="hero_text">
    <Typography.Title>Your Partner in Digital Growth</Typography.Title>

    <Typography.Paragraph className='p_container1'> At Orbitrix Solutions, we are dedicated to helping businesses 
        <br/> thrive in the digital age. With our comprehensive range of services,
        <br/> including web development, digital marketing, and IT consulting, 
        <br/>we empower our clients to achieve their goals and stay ahead of 
         <br/>the competition.</Typography.Paragraph>

    <div className="btns">
      <button className='hb1'>Get Started</button>
      <button className='hb1'>
        <FontAwesomeIcon icon={faDownload} /> Download
      </button>
    </div>
  </div>

  <div className="header_container2">
    <img src={myPic} alt="My Picture"/>


  </div>



</div>



    </div>
  )
}

export default Hero
