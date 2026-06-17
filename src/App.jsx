
import React, { useEffect, lazy, Suspense } from 'react';
import './App.scss';
import './Components/widgets.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Routes from './Components/Routes';
import ScrollToTop from './Components/ScrollToTop';

const WhatsAppWidget = lazy(() => import('./Components/WhatsAppWidget'));

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .reveal-draw, .reveal-flip');
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
  }, [location.pathname, location.search]);

  return (
  
  <>
  <ScrollToTop />
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
  </div>
  <Suspense fallback={null}>
    <WhatsAppWidget />
  </Suspense>

  </>
  )
}

export default App
