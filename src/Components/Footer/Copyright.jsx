import React, { useEffect, useRef, useState } from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

import logo from '../../Images/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Copyright = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [toast, setToast] = useState('')
  const timeoutRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmed = email.trim()
    if (!trimmed) {
      setError('Please enter your email.')
      return
    }

    if (!emailPattern.test(trimmed)) {
      setError('Enter a valid email address.')
      return
    }

    setError('')
    setToast('Thanks! You are subscribed.')
    setEmail('')

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setToast('')
    }, 3000)
  }

  const handleChange = (event) => {
    setEmail(event.target.value)
    if (error) {
      setError('')
    }
  }
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="Orbitrix Logo" />
          <p>
            Orbitrix Solutions helps businesses grow through premium web development, digital marketing, and IT consulting.
          </p>
          <div className="footer-socials">
            <a className="footer-social" href="https://www.linkedin.com/in/abdul-saboor-5677643b4/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="footer-social" href="https://github.com/abdulsaboorera-bit" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="footer-social" href="https://www.instagram.com/orbitrix_solutions?igsh=ZGcydzJpMWFteHN6" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="footer-social" href="https://wa.me/qr/7GSRQFMD6AMZG1" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Main Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="https://github.com/abdulsaboorera-bit" target="_blank" rel="noreferrer">Github</a></li>
            <li><a href="https://www.linkedin.com/in/abdul-saboor-5677643b4/" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Monthly insights on design, development, and growth.</p>
          <form className="footer-form" onSubmit={handleSubmit} noValidate>
            <div className="footer-input-wrapper">
              <input
                className={`footer-input ${error ? 'has-error' : ''}`}
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? 'newsletter-error' : undefined}
              />
              {error ? (
                <span className="footer-error" id="newsletter-error">
                  {error}
                </span>
              ) : null}
            </div>
            <button className="footer-button" type="submit">Subscribe</button>
          </form>
          {toast ? <div className="footer-toast" role="status">{toast}</div> : null}
        </div>
      </div>

      <div className="footer-bottom">
        <Typography.Text>&copy; {new Date().getFullYear()} Orbitrix Solutions. All rights reserved.</Typography.Text>
      </div>
    </footer>
  )
}

export default Copyright