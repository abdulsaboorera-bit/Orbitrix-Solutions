
import React, { useEffect } from 'react';
import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Routes from './Components/Routes';


const App = () => {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px' }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
  
  <>
  <Navbar />
  <Routes/>
  <div className="sticky-social">
    <a href="https://www.linkedin.com/in/abdul-saboor-5677643b4/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href="https://wa.me/qr/7GSRQFMD6AMZG1" target="_blank" rel="noreferrer" aria-label="Call us on WhatsApp">
      <FontAwesomeIcon icon={faPhone} />
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