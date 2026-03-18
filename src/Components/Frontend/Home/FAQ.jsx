import React, { useEffect } from 'react'
import { Col, Row , Typography} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
const FAQ = () => {


 useEffect(() => {

  const accordians = document.querySelectorAll('.accordian');

   accordians.forEach((accordian) => {
      accordian.onclick = () => {
         accordian.querySelector('.drop_icon')?.classList.toggle('active');
         accordian.querySelector('.answer')?.classList.toggle('active');
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
<Typography.Title level={1} style={{width:'100%',margin:'auto',backgroundColor:'#1a8187' , textAlign:'center', marginTop:'30px' ,marginBottom:'0px'}}>Frequently Asked Questions</Typography.Title>
</div>



 <br />  <br />  <br />

 {/* faq 1 */}

<div className='accordian'>

   <div className='question'>

      <h4>How can I get in touch with Orbitrix Soliton?</h4>

<div className="drop_icon">

   <FontAwesomeIcon icon={faAngleDown} />

</div>


  </div>

   <div className='answer'>
      
      <p>You can contact us through the contact form on our website, email us directly at [abdulsaboormercedes@gmail.com], or call our support number. We aim to respond to all inquiries within 24 hours.</p>
    
   </div>

</div>


{/* faq 2 */}

<div className='accordian'>

   <div className='question'>

      <h4>How can I get in touch with Orbitrix Soliton?</h4>


<div className="drop_icon">

   <FontAwesomeIcon icon={faAngleDown} />

</div>



  </div>

   <div className='answer'>
      
      <p>You can contact us through the contact form on our website, email us directly at [abdulsaboormercedes@gmail.com], or call our support number. We aim to respond to all inquiries within 24 hours.</p>
    
   </div>

</div>





 {/* faq 3 */}



 <div className='accordian'>

   <div className='question'>

      <h4>How can I get in touch with Orbitrix Soliton?</h4>


<div className="drop_icon " >

   <FontAwesomeIcon icon={faAngleDown} />

</div>



  </div>

   <div className='answer'>
      
      <p>You can contact us through the contact form on our website, email us directly at [abdulsaboormercedes@gmail.com], or call our support number. We aim to respond to all inquiries within 24 hours.</p>
    
   </div>

</div>



{/* faq 4 */}



<div className='accordian'>

   <div className='question'>

      <h4>How can I get in touch with Orbitrix Soliton?</h4>


<div className="drop_icon " >

   <FontAwesomeIcon icon={faAngleDown} />

</div>



  </div>

   <div className='answer '>
      
      <p>You can contact us through the contact form on our website, email us directly at [abdulsaboormercedes@gmail.com], or call our support number. We aim to respond to all inquiries within 24 hours.</p>
    
   </div>

</div>


 <br />  <br />  <br />

</>


  )
}

export default FAQ
