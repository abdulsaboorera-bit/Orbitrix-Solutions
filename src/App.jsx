
import React from 'react';
import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Routes from './Components/Routes';


const App = () => {
  return (
  
  <>
  
  <Routes/>
  <div className="sticky-social">
    <a href="https://www.linkedin.com/in/abdul-saboor-5677643b4/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href="https://github.com/abdulsaboorera-bit" target="_blank" rel="noreferrer" aria-label="GitHub">
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a href="https://www.instagram.com/orbitrix_solutions?igsh=ZGcydzJpMWFteHN6" target="_blank" rel="noreferrer" aria-label="Instagram">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href="https://wa.me/qr/7GSRQFMD6AMZG1" target="_blank" rel="noreferrer" aria-label="WhatsApp">
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  </div>
  
  </>
  )
}

export default App