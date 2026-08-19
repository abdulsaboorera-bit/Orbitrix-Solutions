
import React, { useEffect, lazy, Suspense, useCallback, useRef } from 'react';
import './App.scss';
import './Components/widgets.css';

import { useLocation } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Routes from './Components/Routes';
import ScrollToTop from './Components/ScrollToTop';
import ErrorBoundary from './Components/ErrorBoundary';

const WhatsAppWidget = lazy(() => import('./Components/WhatsAppWidget'));
const LiveChat = lazy(() => import('./Components/LiveChat'));

const StickySocial = () => (
  <div className="sticky-social">
    <a href="https://www.linkedin.com/in/abdul-saboor-5677643b4/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    </a>
    <a href="https://wa.me/qr/7GSRQFMD6AMZG1" target="_blank" rel="noreferrer" aria-label="Call us on WhatsApp">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.067 3.679c-2.114-2.117-4.934-3.339-7.977-3.339-6.248 0-11.328 5.08-11.328 11.328 0 2.003.521 3.963 1.508 5.674L2.053 22.37l5.805-1.849a11.29 11.29 0 005.603 1.443h.005c6.247 0 11.328-5.08 11.328-11.328 0-3.04-1.221-5.859-3.325-7.976l-.395-.381zM12.016 20.53a9.26 9.26 0 01-4.732-1.302l-.34-.2-3.443 1.097 1.099-3.361-.222-.351a9.302 9.302 0 01-1.427-4.957c0-5.15 4.192-9.34 9.342-9.34 2.494 0 4.835.975 6.596 2.74a9.308 9.308 0 012.735 6.589c-.003 5.15-4.193 9.34-9.34 9.34l-.478-.01zM16.642 14.59c-.277-.138-1.637-.808-1.892-.899-.255-.092-.44-.138-.627.138-.186.277-.722.899-.884 1.085-.162.186-.325.208-.602.07-.277-.138-1.17-.431-2.229-1.372-.824-.733-1.38-1.638-1.541-1.915-.162-.277-.017-.427.121-.564.124-.124.277-.325.416-.487.138-.162.185-.276.277-.463.092-.186.046-.349-.023-.487-.07-.138-.627-1.512-.859-2.07-.226-.542-.456-.468-.627-.477l-.535-.009c-.186 0-.487.07-.742.349-.255.277-.973.95-.973 2.317 0 1.367.998 2.688 1.137 2.876.138.186 1.969 2.999 4.773 4.205.668.286 1.19.457 1.595.585.671.214 1.282.183 1.764.111.537-.081 1.637-.669 1.868-1.316.232-.646.232-1.2.162-1.316-.07-.116-.255-.185-.532-.324z"/></svg>
    </a>
    <a href="https://www.instagram.com/orbitrix_solutions?igsh=ZGcydzJpMWFteHN6" target="_blank" rel="noreferrer" aria-label="Instagram">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    </a>
  </div>
);

const App = () => {
  const location = useLocation();
  const observerRef = useRef(null);
  const domObserverRef = useRef(null);

  useEffect(() => {
    const loadBootstrap = () => {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    };
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadBootstrap, { timeout: 5000 });
    } else {
      const timer = setTimeout(loadBootstrap, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const observeNewElements = useCallback(() => {
    if (!observerRef.current) return;
    const pending = document.querySelectorAll('.reveal:not(.is-visible), .reveal-left:not(.is-visible), .reveal-right:not(.is-visible), .reveal-scale:not(.is-visible), .reveal-blur:not(.is-visible), .reveal-draw:not(.is-visible), .reveal-flip:not(.is-visible)');
    for (let i = 0; i < pending.length; i++) {
      observerRef.current.observe(pending[i]);
    }
  }, []);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();
    if (domObserverRef.current) domObserverRef.current.disconnect();

    const setupObservers = () => {
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

      domObserverRef.current = new MutationObserver(() => {
        if (domObserverRef._timer) return;
        domObserverRef._timer = requestAnimationFrame(() => {
          domObserverRef._timer = null;
          observeNewElements();
        });
      });
      domObserverRef.current.observe(document.body, { childList: true, subtree: true });
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(setupObservers, { timeout: 2000 });
    } else {
      setTimeout(setupObservers, 0);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      if (domObserverRef.current) domObserverRef.current.disconnect();
    };
  }, [location.pathname, location.search, observeNewElements]);

  return (
  <ErrorBoundary>
  <>
  <ScrollToTop />
  <Navbar />
  <Routes/>
  <StickySocial />
  <Suspense fallback={null}>
    <WhatsAppWidget />
    <LiveChat />
  </Suspense>
  </>
  </ErrorBoundary>
  )
}

export default App
