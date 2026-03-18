import React from 'react'
import { Col, Row , Typography} from 'antd'
import member1 from '../../../Images/member1.png'
import member2 from '../../../Images/member2.png'
import member3 from '../../../Images/member3.png'
import Footer from '../../Footer'

const FAQ = () => {
  return (

    <>
    
 
    <div className="container py-5">

<Row>

<div className="container">

<Typography.Title style={{display:'flex',justifyContent:'center',backgroundColor:'#1a8187',marginTop:'30px'}} >Meet Our Team Members</Typography.Title>

</div>
  

<Col span={24} style={{display:'flex',justifyContent:'space-between',overflow:'hidden',width:'100%'}}>


<img src={member3} alt="Member 3"  style={{width:'30%',margin:'auto',height:'auto'}} />
<img src={member2} alt="Member 2" style={{width:'30%',margin:'auto',height:'auto'}} />
<img src={member1} alt="Member 1" style={{width:'30%',margin:'auto',height:'auto'}} />



</Col>


</Row>



    </div>

<Footer />

   </>
  )
}

export default FAQ
