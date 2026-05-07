
import React, { useState } from 'react';
import { Typography, Button } from 'antd'


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
    <section className="services-section">
      <div className="services-header">
        <Typography.Title level={1}>Our Services</Typography.Title>
        <Typography.Paragraph>
          A focused menu of growth services, designed to scale with your business. Each service blends strategy, design,
          and execution to deliver measurable results.
        </Typography.Paragraph>
      </div>

      <div className="services-grid">
        <article className="service-card">
          <div className="service-title">
            <span>01</span>
            <h3>WordPress</h3>
          </div>
          <Typography.Paragraph className={`ser2 ${showFull ? 'expanded' : ''}`}>

  {showFull ? (
  <>
We build fast, secure WordPress sites with custom themes, plugins, and ecommerce.
Every build is responsive, SEO-ready, and optimized for speed so your team can publish confidently.
</>
  ) : (
  <>
Fast, secure WordPress sites with custom themes, plugins, and easy content management.
</>
  )}

          </Typography.Paragraph>
          <div className="service-actions">
            <Button onClick={toggle}>{showFull ? 'Show Less' : 'Learn More'}</Button>
          </div>
        </article>

        <article className="service-card">
          <div className="service-title">
            <span>02</span>
            <h3>React Websites</h3>
          </div>
          <Typography.Paragraph className={`ser2 ${react_txt ? 'expanded' : ''}`}>

{

  react_txt ? (
    <>
We craft modern React experiences with clean component architecture, smooth interactions, and scalable code.
Performance-first builds ensure fast load times and seamless user journeys.
    </>

  ) : (

<>
Modern React websites with smooth interactions, fast performance, and scalable components.
</>



  )

}


          </Typography.Paragraph>
          <div className="service-actions">
            <Button onClick={toggleReact}>{react_txt ? 'Show Less' : 'Learn More'}</Button>
          </div>
        </article>

        <article className="service-card">
          <div className="service-title">
            <span>03</span>
            <h3>SEO Optimization</h3>
          </div>
          <Typography.Paragraph className={`ser2 ${seo_txt ? 'expanded' : ''}`}>


{

  seo_txt ? (
    <>
We improve visibility with technical audits, keyword strategy, on-page optimization, and quality link building.
The result is higher rankings, more qualified traffic, and measurable growth.
    </>

  ) : (

<>
SEO strategy and technical optimization to lift rankings and qualified traffic.
</>



  )

}



          </Typography.Paragraph>
          <div className="service-actions">
            <Button onClick={toggleSeo}>{seo_txt ? 'Show Less' : 'Learn More'}</Button>
          </div>
        </article>

        <article className="service-card">
          <div className="service-title">
            <span>04</span>
            <h3>AI Ads</h3>
          </div>
          <Typography.Paragraph className={`ser2 ${ai_txt ? 'expanded' : ''}`}>

{

ai_txt ? (
<>
We design AI-assisted ad campaigns that target the right audiences, iterate creative quickly, and optimize spend.
Expect higher engagement, better conversion rates, and clearer ROI.
 </>
)  : (
<>
AI-assisted ad campaigns that target the right audience and optimize results.
</>
)
}



          </Typography.Paragraph>
          <div className="service-actions">
            <Button onClick={toggleai}>{ai_txt ? 'Show Less' : 'Learn More'}</Button>
          </div>
        </article>

        <article className="service-card">
          <div className="service-title">
            <span>05</span>
            <h3>Marketing</h3>
          </div>
          <Typography.Paragraph className={`ser2 ${marketing_txt ? 'expanded' : ''}`}>

{

marketing_txt ? (

<>
We deliver full-funnel digital marketing, from positioning and content to conversion-focused campaigns.
You get clear reporting, smarter spend, and consistent growth.

</>
)
:(


<>
Full-funnel digital marketing to grow visibility, engagement, and revenue.
</>

)


}





          </Typography.Paragraph>
          <div className="service-actions">
            <Button onClick={togglemarketing}>{marketing_txt ? 'Show Less' : 'Learn More'}</Button>
          </div>
        </article>

        <article className="service-card">
          <div className="service-title">
            <span>06</span>
            <h3>Social Media</h3>
          </div>
          <Typography.Paragraph className={`ser2 ${social_txt ? 'expanded' : ''}`}>

{

social_txt ?(

<>
We plan content, manage campaigns, and track performance across key platforms.
Our strategy builds community, drives traffic, and supports your sales goals.

</> 
)
: 

(



<>
Social media strategy and management that builds community and drives traffic.
</>




)






}

          </Typography.Paragraph>
          <div className="service-actions">
            <Button onClick={togglesocial}>{social_txt ? 'Show Less' : 'Learn More'}</Button>
          </div>
        </article>
      </div>
    </section>

  )
}
export default Services
