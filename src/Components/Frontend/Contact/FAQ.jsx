import React, { useState, useRef } from "react"
import { Link } from "react-router-dom"
import { Typography, Input, Button } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faPhone, faEnvelope, faSpinner, faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import emailjs from "@emailjs/browser"
import Footer from '../../Footer'

const SERVICE_ID  = "service_XXXXXXX"   // Replace with your EmailJS Service ID
const TEMPLATE_ID = "template_XXXXXXX"  // Replace with your EmailJS Template ID
const PUBLIC_KEY  = "YOUR_PUBLIC_KEY"    // Replace with your EmailJS Public Key

const FAQ = () => {
  const formRef = useRef(null)

  const [form, setForm] = useState({ from_name: "", from_email: "", message: "" })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle") // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("")

  const validate = () => {
    const errs = {}
    if (!form.from_name.trim()) errs.from_name = "Name is required"
    if (!form.from_email.trim()) errs.from_email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email)) errs.from_email = "Enter a valid email"
    if (!form.message.trim()) errs.message = "Please tell us about your project"
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus("sending")
    setErrorMsg("")

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus("success")
      setForm({ from_name: "", from_email: "", message: "" })
      setErrors({})
    } catch (err) {
      setStatus("error")
      setErrorMsg(err?.text || "Something went wrong. Please try again later.")
    }
  }

  const handleClear = () => {
    setForm({ from_name: "", from_email: "", message: "" })
    setErrors({})
    setStatus("idle")
    setErrorMsg("")
  }

  return (
    <>
      <section className="contact-section reveal-blur">
        <div className="contact-grid">

          {/* ── Contact Info Cards ── */}
          <div>
            <div className="contact-card reveal-left" style={{ transitionDelay: '0ms' }}>
              <div className="contact-card-title">Visit</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="contact-icon"><FontAwesomeIcon icon={faHouse} /></span>
                <Typography.Text strong>Lahore, Pakistan</Typography.Text>
              </div>
            </div>
            <div className="contact-card reveal-left" style={{ transitionDelay: '80ms' }}>
              <div className="contact-card-title">Call</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="contact-icon"><FontAwesomeIcon icon={faPhone} /></span>
                <Typography.Text strong>03284678752</Typography.Text>
              </div>
            </div>
            <div className="contact-card reveal-left" style={{ transitionDelay: '160ms' }}>
              <div className="contact-card-title">Email</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="contact-icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                <Typography.Text strong>abdulsaboormercedes@gmail.com</Typography.Text>
              </div>
            </div>
          </div>

          {/* ── Contact Form ── */}
          <div className="contact-form reveal-right">
            <Typography.Title level={3}>Tell us about your project</Typography.Title>

            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="cf-field">
                <Input
                  name="from_name"
                  type="text"
                  placeholder="Full name"
                  value={form.from_name}
                  onChange={handleChange}
                  disabled={status === "sending"}
                  className={errors.from_name ? "cf-error" : ""}
                />
                {errors.from_name && <span className="cf-error-msg">{errors.from_name}</span>}
              </div>

              <div className="cf-field">
                <Input
                  name="from_email"
                  type="email"
                  placeholder="Email address"
                  value={form.from_email}
                  onChange={handleChange}
                  disabled={status === "sending"}
                  className={errors.from_email ? "cf-error" : ""}
                />
                {errors.from_email && <span className="cf-error-msg">{errors.from_email}</span>}
              </div>

              <div className="cf-field">
                <Input.TextArea
                  name="message"
                  rows={6}
                  placeholder="Project goals, timeline, and any links"
                  value={form.message}
                  onChange={handleChange}
                  disabled={status === "sending"}
                  className={errors.message ? "cf-error" : ""}
                />
                {errors.message && <span className="cf-error-msg">{errors.message}</span>}
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="cf-alert cf-success">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}
              {status === "error" && (
                <div className="cf-alert cf-error-alert">
                  <FontAwesomeIcon icon={faExclamationCircle} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="contact-actions">
                <Button
                  type="button"
                  onClick={handleClear}
                  disabled={status === "sending"}
                >
                  Clear
                </Button>
                <Button
                  className="btn-primary"
                  htmlType="submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} spin style={{ marginRight: 8 }} />
                      Sending...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* Google Maps */}
      <section className="contact-map-section reveal-scale">
        <div className="contact-map-container">
          <iframe
            title="Orbitrix Solutions Office Location – Lahore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13604.674541956339!2d74.32692455!3d31.5494934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904b0c0a1b0b3%3A0x8c1b3e6f2a5d8e0!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1"
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Internal links for SEO */}
      <section className="reveal-blur" style={{ padding: '40px 20px', textAlign: 'center', background: 'var(--orbit-cream)' }}>
        <Typography.Title level={2} style={{ marginBottom: '16px' }}>
          Explore More from Orbitrix Solutions
        </Typography.Title>
        <Typography.Paragraph style={{ maxWidth: '560px', margin: '0 auto 24px', color: 'var(--text-muted)' }}>
          Learn about our team, see our work, or review our terms. Orbitrix Solutions is your trusted 
          partner for web development, SEO, and digital marketing.
        </Typography.Paragraph>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/about" style={{ padding: '12px 28px', borderRadius: '8px', background: 'var(--orbit-teal)', color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
            About Us
          </Link>
          <Link to="/projects" style={{ padding: '12px 28px', borderRadius: '8px', border: '2px solid var(--orbit-teal)', color: 'var(--orbit-teal)', textDecoration: 'none', fontWeight: 600 }}>
            Our Projects
          </Link>
          <Link to="/terms-and-conditions" style={{ padding: '12px 28px', borderRadius: '8px', border: '2px solid var(--orbit-sand)', color: 'var(--orbit-teal)', textDecoration: 'none', fontWeight: 600 }}>
            Terms & Conditions
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default FAQ
