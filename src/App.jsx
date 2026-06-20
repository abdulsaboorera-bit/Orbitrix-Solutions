
import React, { useEffect, lazy, Suspense, useCallback, useRef } from 'react';
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
  const observerRef = useRef(null);
  const domObserverRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const observeNewElements = useCallback(() => {
    if (!observerRef.current) return;
    document.querySelectorAll('.reveal:not(.is-visible), .reveal-left:not(.is-visible), .reveal-right:not(.is-visible), .reveal-scale:not(.is-visible), .reveal-blur:not(.is-visible), .reveal-draw:not(.is-visible), .reveal-flip:not(.is-visible)').forEach((el) => {
      observerRef.current.observe(el);
    });
  }, []);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();
    if (domObserverRef.current) domObserverRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i];
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observerRef.current.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observeNewElements();

    domObserverRef.current = new MutationObserver(observeNewElements);
    domObserverRef.current.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      if (domObserverRef.current) domObserverRef.current.disconnect();
    };
  }, [location.pathname, location.search, observeNewElements]);

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
