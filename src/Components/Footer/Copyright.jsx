import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

import logo from '../../Images/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Copyright = () => {
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
          <div className="footer-form">
            <input className="footer-input" type="text" placeholder="Enter your email" />
            <button className="footer-button" type="button">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <Typography.Text>&copy; {new Date().getFullYear()} Orbitrix Solutions. All rights reserved.</Typography.Text>
      </div>
    </footer>
  )
}

export default Copyright