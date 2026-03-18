import React from 'react'
import { Col, Row , Typography} from 'antd'

const Hero = () => {
  return (
<>


<div className="container1" style={{ backgroundColor: '#1a8187', width: "100%", height: "300px" , display: "flex", justifyContent: "center", alignItems: "center" }}>
  <Typography.Title>Contact Us</Typography.Title>
 
</div>

 <Typography.Paragraph style={{color:'#ffffff', marginTop:'-5%',marginLeft:'32%',fontSize:'1.1rem'}}>
   Fill out the contact form with your name, email, and message,and our team will  respond  <br />
  shortly. We look forward to hearing from you and helping you achieve your goals.

  </Typography.Paragraph>

</>

  )
}

export default Hero
