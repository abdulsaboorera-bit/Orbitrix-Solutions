import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCheckCircle, faExclamationCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqgpzdq"

const ContactForm = () => {
  const [form, setForm] = useState({ from_name: '', from_email: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const validate = () => {
    const errs = {}
    if (!form.from_name.trim()) errs.from_name = 'Name is required'
    if (!form.from_email.trim()) errs.from_email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email)) errs.from_email = 'Enter a valid email'
    if (!form.message.trim()) errs.message = 'Please tell us about your project'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')
    setErrorMsg('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.from_name,
          email: form.from_email,
          _replyto: form.from_email,
          _subject: `New Contact: ${form.from_name} - ${form.service || 'General Inquiry'}`,
          _captcha: 'false',
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setForm({ from_name: '', from_email: '', phone: '', service: '', message: '' })
        setErrors({})
      } else {
        const data = await response.json()
        throw new Error(data.error || 'Something went wrong. Please try again later.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg(err?.message || 'Something went wrong. Please try again later.')
    }
  }

  const handleClear = () => {
    setForm({ from_name: '', from_email: '', phone: '', service: '', message: '' })
    setErrors({})
    setStatus('idle')
    setErrorMsg('')
  }

  return (
    <div className="cf-form-wrapper">
      <div className="cf-form-header">
        <h3>Get a Free Quote</h3>
        <p className="cf-form-subtitle">
          Tell us about your project and we will respond within 24 hours with a clear plan, timeline, and quote.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="cf-form">
        <div className="cf-row">
          <div className="cf-field">
            <label htmlFor="cf-name">Full Name *</label>
            <input
              id="cf-name"
              name="from_name"
              type="text"
              placeholder="John Smith"
              value={form.from_name}
              onChange={handleChange}
              disabled={status === 'sending'}
              className={errors.from_name ? 'cf-error' : ''}
            />
            {errors.from_name && <span className="cf-error-msg">{errors.from_name}</span>}
          </div>
          <div className="cf-field">
            <label htmlFor="cf-email">Email Address *</label>
            <input
              id="cf-email"
              name="from_email"
              type="email"
              placeholder="john@company.com"
              value={form.from_email}
              onChange={handleChange}
              disabled={status === 'sending'}
              className={errors.from_email ? 'cf-error' : ''}
            />
            {errors.from_email && <span className="cf-error-msg">{errors.from_email}</span>}
          </div>
        </div>

        <div className="cf-row">
          <div className="cf-field">
            <label htmlFor="cf-phone">Phone Number</label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={form.phone}
              onChange={handleChange}
              disabled={status === 'sending'}
            />
          </div>
          <div className="cf-field">
            <label htmlFor="cf-service">Service Interested In</label>
            <select
              id="cf-service"
              name="service"
              value={form.service}
              onChange={handleChange}
              disabled={status === 'sending'}
            >
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="seo">SEO Services</option>
              <option value="ai-automation">AI Automation</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="social-media">Social Media Account Management</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="cf-field">
          <label htmlFor="cf-message">Project Details *</label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            placeholder="Tell us about your goals, timeline, budget range, and any links..."
            value={form.message}
            onChange={handleChange}
            disabled={status === 'sending'}
            className={errors.message ? 'cf-error' : ''}
          />
          {errors.message && <span className="cf-error-msg">{errors.message}</span>}
        </div>

        {status === 'success' && (
          <div className="cf-alert cf-success">
            <FontAwesomeIcon icon={faCheckCircle} />
            <span>Message sent successfully! We'll get back to you within 24 hours.</span>
          </div>
        )}
        {status === 'error' && (
          <div className="cf-alert cf-error-alert">
            <FontAwesomeIcon icon={faExclamationCircle} />
            <span>{errorMsg}</span>
          </div>
        )}

        <div className="cf-actions">
          <button
            type="button"
            className="cf-btn cf-btn-clear"
            onClick={handleClear}
            disabled={status === 'sending'}
          >
            Clear
          </button>
          <button
            type="submit"
            className="cf-btn cf-btn-submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              <>
                <FontAwesomeIcon icon={faSpinner} spin /> Sending...
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faPaperPlane} /> Send Message
              </>
            )}
          </button>
        </div>
      </form>

      <p className="cf-trust-text">
        Your information is secure. We respond to every inquiry within 24 hours.
      </p>
    </div>
  )
}

export default ContactForm
