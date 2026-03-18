
import React, { useState } from 'react';
import { Col, Row , Typography,Button} from 'antd'


const Services = () => {

const [showFull,setShowFull] = useState(false);

const [react_txt,setReactTxt] = useState(false);

const [seo_txt,setSeoTxt] = useState(false);

const [ai_txt,setAiTxt] = useState(false);

const [marketing_txt,setMarketingtxt] = useState(false);

const [social_txt,setSocialtxt] = useState(false);



const toggle = () => {
  setShowFull(!showFull);
};

const toggleReact = () => {
  setReactTxt(!react_txt);
}

const toggleSeo = () => {

    setSeoTxt(!seo_txt);

}


const toggleai = () => {

setAiTxt(!ai_txt);


}


const togglemarketing = () => {

setMarketingtxt(!marketing_txt);

}




const togglesocial = () => {

setSocialtxt(!social_txt);



}



  return (
    <div className="container">

<br /><br /><br />
<Typography.Title level={1} style={{width:'100%',margin:'auto',backgroundColor:'#1a8187' , textAlign:'center', marginTop:'30px' ,marginBottom:'0px'}}>Our Services</Typography.Title>


<br /><br /><br />

<div className="services">

<div className="s1">

  <Typography.Title  style={{backgroundColor:'#1a8187' ,textAlign:'center'}} >Wordpress</Typography.Title>

<Typography.Paragraph className='ser2'  style={{backgroundColor:'#fdfaf3' ,textAlign:'center'}} >

  {showFull ? (
  <>
We build fast, secure WordPress websites that are easy to manage<br/>
and fully customizable, including custom themes, plugins, and e-commerce stores.<br/>
Our solutions are SEO-friendly, responsive, and optimized for performance,<br/>
helping your business grow online and deliver seamless user experiences.
</>
  ) : (
  <>
  We build fast, secure WordPress websites<br/>
that are easy to manage and fully customizable.
</>
  )}

</Typography.Paragraph>

<br />

<Button onClick={toggle}>
  {showFull ? 'Show Less' : 'Learn More'}
</Button>

</div>


<div className="s2">

  <Typography.Title  style={{backgroundColor:'#1a8187' ,textAlign:'center'}} >React Websites</Typography.Title>

<Typography.Paragraph className='ser2' style={{backgroundColor:'#fdfaf3' ,textAlign:'center'}}>

{

  react_txt ? (
    <>
    
   We develop modern React websites that are fully responsive, interactive, and user-friendly.<br/>
Our team creates clean, scalable components with optimized performance<br/>
and seamless integration to deliver an engaging and smooth online experience for all users.
    
    
    </>

  ) : (

<>

We develop modern React websites<br/>
that are fully responsive, interactive, and provide a smooth, seamless user experience for everyone.

</>



  )

}


</Typography.Paragraph>

<br />


<Button onClick={toggleReact}>
  {react_txt ? 'Show Less' : 'Learn More'}
</Button>

</div>


<div className="s3">

  <Typography.Title  style={{backgroundColor:'#1a8187' ,textAlign:'center'}} >SEO Optimization</Typography.Title>

<Typography.Paragraph className='ser2' style={{backgroundColor:'#fdfaf3' ,textAlign:'center'}} >


{

  seo_txt ? (
    <>


We improve website SEO with advanced strategies that increase search visibility<br/>
and attract more organic traffic.<br/>
Our approach includes keyword research, on-page optimization, technical fixes,<br/>
and link-building to grow your business effectively and measurably.
    
    
    </>

  ) : (

<>

We improve website SEO<br/>
to increase search visibility and attract more organic traffic online effectively.
</>



  )

}



</Typography.Paragraph>

<br /><br />


<Button onClick={toggleSeo}>
  {seo_txt ? 'Show Less' : 'Learn More'}
</Button>


</div>

</div>


<div className='Services-2'>

<div className="s4">

  <Typography.Title  style={{backgroundColor:'#1a8187' ,textAlign:'center'}} >AI Ads</Typography.Title>

<Typography.Paragraph className='ser2' style={{backgroundColor:'#fdfaf3' ,textAlign:'center'}}>

{

ai_txt ? (
<>
We create AI-powered advertising campaigns that target the right audience<br/>
using intelligent, data-driven strategies and optimized ad creatives.<br/>
Our solutions increase engagement, improve conversions,<br/>
and maximize measurable business growth across digital platforms.
 </>
)  : (
<>
We create AI-powered advertising campaigns<br/>
that target the right audience effectively,<br/>
increase engagement, improve conversions,<br/>
and deliver measurable business results.
</>
)
}



</Typography.Paragraph>

<br />



<Button onClick={toggleai}>
  {ai_txt ? 'Show Less' : 'Learn More'}
</Button>


</div>


<div className="s5">

  <Typography.Title  style={{backgroundColor:'#1a8187' ,textAlign:'center'}}> Marketing</Typography.Title>

<Typography.Paragraph className='ser2' style={{backgroundColor:'#fdfaf3' ,textAlign:'center'}}>

{

marketing_txt ? (

<>

We provide comprehensive digital marketing services<br/>
to help your business grow online,<br/>
reach more customers, increase engagement,<br/>
boost sales, enhance brand visibility,<br/>
improve customer loyalty, and achieve long-term<br/>
success effectively with measurable results and insights.

</>
)
:(


<>

We provide full digital marketing services<br/>
to help your business grow online,<br/>
reach more customers, increase engagement,<br/>
boost sales, and strengthen your brand presence.

</>

)


}





</Typography.Paragraph>

<br />


<Button onClick={togglemarketing}>
  {marketing_txt ? 'Show Less' : 'Learn More'}
</Button>


</div>


<div className="s6">

  <Typography.Title style={{backgroundColor:'#1a8187' ,textAlign:'center'}}>Social Media</Typography.Title>

<Typography.Paragraph className='ser2'style={{backgroundColor:'#fdfaf3' ,textAlign:'center'}} >

{

social_txt ?(

<>

We provide<br/>
digital marketing<br/>
services to grow<br/>
your business<br/>
reach more customers<br/>
and increase engagement,<br/>
boost sales<br/>
effectively.<br/>
Our strategies include<br/>
targeted campaigns,<br/>
performance tracking,<br/>
and audience insights<br/>
to deliver<br/>
measurable results.

</> 
)
: 

(



<>

We provide digital<br/>
marketing services<br/>
to grow your business<br/>
online,<br/>
reach more customers,<br/>
increase engagement,<br/>
and boost sales<br/>
effectively worldwide.

</>




)






}

</Typography.Paragraph>

<br />



<Button onClick={togglesocial}>
  {social_txt ? 'Show Less' : 'Learn More'}
</Button>



</div>

</div>


</div>

  )
}
export default Services
