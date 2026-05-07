import React from "react";
import { Typography, Input, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Footer from '../../Footer'

const FAQ = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-grid">
          <div>
            <div className="contact-card">
              <div className="contact-card-title">Visit</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="contact-icon"><FontAwesomeIcon icon={faHouse} /></span>
                <Typography.Text strong>Lahore, Pakistan</Typography.Text>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-title">Call</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="contact-icon"><FontAwesomeIcon icon={faPhone} /></span>
                <Typography.Text strong>03284678752</Typography.Text>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-title">Email</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="contact-icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                <Typography.Text strong>abdulsaboormercedes@gmail.com</Typography.Text>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <Typography.Title level={3}>Tell us about your project</Typography.Title>
            <Input type="text" placeholder="Full name" style={{ marginBottom: "12px" }} />
            <Input type="email" placeholder="Email address" style={{ marginBottom: "12px" }} />
            <Input.TextArea rows={6} placeholder="Project goals, timeline, and any links" />

            <div className="contact-actions">
              <Button>Clear</Button>
              <Button className="btn-primary">Submit</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FAQ;