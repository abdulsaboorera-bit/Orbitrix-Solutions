import React from 'react';
import { Col, Row, Typography } from 'antd';

import logo from '../../Images/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'antd';



const Copyright = () => {
  return (
    <>
    
    <footer className="bg-secondary py-2" >


<div className="container" >


<Row style={{display:'flex' , justifyContent:"space-between" , padding:'5%'}}>

<Col span={8}>

<Typography.Title level={3} >

<img src={logo} alt="Orbitrix Logo" style={{ maxWidth: '180px', height: 'auto', backgroundColor: '#Fdfaf3', marginRight:'50%'}} />


<p style={{ width:'fullwidth', height: 'auto',color:'#Fdfaf3',marginTop:'5%', marginRight:'50%'}}>

At Orbitrix Solutions, we help businesses grow in the digital world through 
expert web development, digital marketing, and IT consulting services.

</p>

<div style={{color:'#Fdfaf3',marginRight:'50%'}}>


  <FontAwesomeIcon icon={faLinkedin} />
  <FontAwesomeIcon icon={faGithub} />
  <FontAwesomeIcon icon={faInstagram} />
  <FontAwesomeIcon icon={faWhatsapp} />




</div>


</Typography.Title>

</Col>

<Col span={8}>

<Typography.Title level={3} style={{color:"#fdfaf3"}}>Main Links</Typography.Title>

<div style={{display:'flex', flexDirection:'column', listStyleType:'none',color:"#fdfaf3",gap:'30px',fontSize:'20px' , cursor:'pointer'}}>

<li>Home </li>
<li>About</li>
<li>Contact Us</li>
<li>Github</li>
<li>LinkedIn</li>



</div>



</Col>


<Col span={8}>


<Typography.Title level={3} style={{color:'#Fdfaf3'}}>NewsLetter</Typography.Title>

<br />

<div style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'20px',marginLeft:"30%"} }>


<input type='text' placeholder='Enter your email' style={{padding:'5px' , border:' 1px solid white', borderRadius:'45px'}}></input>
<Button style={{color:'#1a8187'}}>Subscribe</Button>


</div>



</Col>


</Row>




<Row>



<Col span={24} >

<Typography.Paragraph className='text-center text-white'  style={{ fontSize: '20px' }} >&copy; {new Date().getFullYear()}. All Rights Reserved By Orbitrix Solutions</Typography.Paragraph>

</Col>

</Row>


</div>

    </footer>
    
    </>
  )
}

export default Copyright