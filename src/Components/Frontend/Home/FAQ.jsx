import React, { useEffect } from 'react'
import { Col, Row , Typography} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
const FAQ = () => {


 useEffect(() => {
   const accordians = document.querySelectorAll('.accordian');

   accordians.forEach((accordian) => {
      const answer = accordian.querySelector('.answer');
      if (answer) {
         answer.style.maxHeight = '0px';
      }

      accordian.onclick = () => {
         const icon = accordian.querySelector('.drop_icon');
         icon?.classList.toggle('active');

         if (!answer) {
            return;
         }

         const isActive = answer.classList.toggle('active');
         answer.style.maxHeight = isActive ? `${answer.scrollHeight}px` : '0px';
      };
   });

   return () => {
      accordians.forEach((accordian) => {
         accordian.onclick = null;
      });
   };
 }, [])





return (
<>
<div className="container">
<Typography.Title level={1} className="faq-title">Frequently Asked Questions</Typography.Title>
</div>



 <br />  <br />  <br />

 {/* faq 1 */}

<div className='accordian'>

   <div className='question'>

      <h4>How do I start a project with Orbitrix Solutions?</h4>

<div className="drop_icon">

   <FontAwesomeIcon icon={faAngleDown} />

</div>


  </div>

   <div className='answer'>
      
      <p>Share your goals through the contact form, WhatsApp, or email. We reply within 24 hours with next steps and a clear plan.</p>
    
   </div>

</div>


{/* faq 2 */}

<div className='accordian'>

   <div className='question'>

      <h4>What services do you offer?</h4>


<div className="drop_icon">

   <FontAwesomeIcon icon={faAngleDown} />

</div>



  </div>

   <div className='answer'>
      
      <p>We deliver WordPress and React development, SEO, digital marketing, AI ads, and social media growth services.</p>
    
   </div>

</div>





 {/* faq 3 */}



 <div className='accordian'>

   <div className='question'>

      <h4>How long does a typical website take?</h4>


<div className="drop_icon " >

   <FontAwesomeIcon icon={faAngleDown} />

</div>



  </div>

   <div className='answer'>
      
      <p>Most websites launch in 2 to 6 weeks, depending on scope and content readiness. We confirm a timeline after discovery.</p>
    
   </div>

</div>



{/* faq 4 */}



<div className='accordian'>

   <div className='question'>

      <h4>Do you provide ongoing support?</h4>


<div className="drop_icon " >

   <FontAwesomeIcon icon={faAngleDown} />

</div>



  </div>

   <div className='answer '>
      
      <p>Yes. We offer maintenance, optimization, and marketing support after launch with flexible monthly plans.</p>
    
   </div>

</div>


 <br />  <br />  <br />

</>


  )
}

export default FAQ
