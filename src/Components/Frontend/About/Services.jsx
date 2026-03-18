import React from 'react'
import { Col, Row , Typography} from 'antd'
import meeting from '../../../Images/meeting.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshakeAngle,faBrain,faAward} from '@fortawesome/free-solid-svg-icons'




const Services = () => {
  return (
    <div className="container py-5">

<Row>
<Col span={24}>

<Typography.Title className='text-center'>Our Core Values</Typography.Title>  

</Col>

</Row>

<br /> <br />

<Row style={{display:'flex', justifyContent:'center', gap:'7%',width:'100%',border:'none'}}>



{/** Col 1 */}

<Col style={{textAlign:'center',backgroundColor:'#1a8187', padding:'10px', borderRadius:'10px',color:'#fdfaf3'}}>

<FontAwesomeIcon icon={faHandshakeAngle} style={{width:'80px', height:'auto',color:'#f5f2e1'}} />

<br /> <br />

<h1>Collaboration</h1>


<p>We believe great ideas grow through teamwork, working <br />
   closely with our clients to achieve shared success.</p>


</Col>




{/** Col 2 */}

<Col style={{textAlign:'center',backgroundColor:'#1a8187', padding:' 10px', borderRadius:'10px',color:'#fdfaf3'}}>


<FontAwesomeIcon icon={faBrain} style={{width:'80px', height:'auto',color:'#f5f2e1'}}/>
<br /> <br />

<h1>Innovation</h1>

<p>We believe great ideas grow through innovation, creating <br />
   smart solutions that help businesses move forward.</p>

</Col>



{/** Col 3 */}

<Col style={{textAlign:'center',backgroundColor:'#1a8187', padding:' 10px', borderRadius:'10px',color:'#fdfaf3'}}>


<FontAwesomeIcon icon={faAward} style={{width:'80px', height:'auto',color:'#f5f2e1'}}/>


<br /> <br />

<h1 >Achievement</h1>

<p>Success grows through achievement, working <br />
   together to reach goals.</p>
</Col>


</Row>


{/* meeting image section */}


<Row >


<Col style={{display:'flex',justifyContent:'space-between',flexDirection:'row'}}>

<img src={meeting} alt="Meeting Picture" style={{marginTop:'170px',width:'50%',height:'auto',border:'20px solid #1a8187' , borderRadius:'40px'}}/>



<Typography.Title style={{marginTop:'190px',marginBottom:'50px' ,  backgroundColor:'#1a8187' , padding:'55px' ,marginLeft:'150px',color:'#fdfaf3'}}>
  
  <div style={{backgroundColor:'#fdfaf3' , color:'#1a8187',}} >
  Our Story

  </div>
  
  <br />   <br />  

<Typography.Paragraph 
  style={{ 
    fontStyle: "italic", 
    fontSize: "17px", 
    lineHeight: "1.6",
color:'#fdfaf3'

  }}
>
Orbitrix Solutions was founded by Abdul Saboor, a university student <br />
with a strong passion for technology and web development. While pursuing his studies, he started learning and working <br />
on digital projects with the goal of helping businesses build a strong online presence. What began as a personal journey <br />
of learning and freelancing gradually evolved into Orbitrix Solutions, a platform dedicated to delivering reliable web development
and digital solutions.
</Typography.Paragraph>
  
  
  </Typography.Title>


</Col>





</Row>






    </div>
  )
}

export default Services
