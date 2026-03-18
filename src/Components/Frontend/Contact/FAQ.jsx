import React from "react";
import { Row, Col, Typography, Input , Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse , faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer from '../../Footer'

const FAQ = () => {
  return (

<>

    <Row style={{ marginTop: "10%", padding: "0 10%", alignItems: "flex-start", justifyContent: "space-between" }}>
      
      <Col >
        <div style={{ display: "flex", alignItems: "center", gap: "25px", marginBottom: "18px" }}>
          <FontAwesomeIcon icon={faHouse} size="2x" style={{ border: "2px solid white", color: "#f5f2e1", backgroundColor: "#1a8187", borderRadius: "50%", padding: "5px" }} />
          <Typography.Paragraph style={{ marginBottom: 0, fontSize: "1.5rem", fontWeight: 600 }}>
            Lahore, Pakistan
          </Typography.Paragraph>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "25px", marginBottom: "18px" }}>
          <FontAwesomeIcon icon={faPhone} size="2x" style={{ border: "2px solid white", color: "#f5f2e1", backgroundColor: "#1a8187", borderRadius: "50%", padding: "5px" }} />
          <Typography.Paragraph style={{ marginBottom: 0, fontSize: "1.5rem", fontWeight: 600 }}>
            03284678752
          </Typography.Paragraph>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
          <FontAwesomeIcon icon={faHouse} size="2x" style={{ border: "2px solid white", color: "#f5f2e1", backgroundColor: "#1a8187", borderRadius: "50%", padding: "5px" }} />
          <Typography.Paragraph style={{ marginBottom: 0, fontSize: "1.5rem", fontWeight: 600 }}>
            abdulsaboormercedes@gmail.com
          </Typography.Paragraph>
        </div>
      </Col>




      <Col style={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
    

        <div style={{ width: "100%", maxWidth: "520px"}}>
      
      <Typography.Title level={3} style={{marginLeft:'1%',fontSize:'1.9rem',fontFamily:'Poppins'}}>Send Message</Typography.Title>
      
          <Input
            type="text"
            placeholder="Enter Your Full Name"
            style={{ marginBottom: "12px" }}
          />
          <Input
            type="email"
            placeholder="Enter Your Email"
            style={{ marginBottom: "12px" }}
          />


          <Input.TextArea rows={7} placeholder="Enter Your Full Message" />
        
   
        </div>

 

      </Col>


    </Row>

<div style={{display:'flex',justifyContent:'flex-end',marginRight:'10%',gap:'1%',marginTop:'1%',marginBottom:'8%'}}>


     <Button>Clear</Button>
        <Button>Submit</Button>


</div>


<Footer/>


</>
  );
};

export default FAQ;