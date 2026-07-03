import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';

const words = ['visions', 'ideas', 'products', 'strategies'];

const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 448 512" fill="currentColor"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg>;
const BullhornIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512" fill="currentColor"><path d="M480.1 209.9l-22.9-22.9-93.7 93.7c-13.3 13.3-38.5 13.3-51.8 0l-69.4-69.4c-13.3-13.3-13.3-38.5 0-51.8l93.7-93.7-93.7-93.7c-13.3-13.3-13.3-38.5 0-51.8l69.4-69.4c13.3-13.3 38.5-13.3 51.8 0l93.7 93.7 93.7-93.7c13.3-13.3 38.5-13.3 51.8 0l69.4 69.4c13.3 13.3 13.3 38.5 0 51.8l-93.7 93.7 93.7 93.7c13.3 13.3 13.3 38.5 0 51.8l-69.4 69.4c-13.3 13.3-38.5 13.3-51.8 0l-93.7-93.7zM16 160h48c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16z"/></svg>;
const RobotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 640 512" fill="currentColor"><path d="M320 0c17.7 0 32 14.3 32 32v46.3c52.4 7.1 98.5 33.6 131.7 72.4l30-17.1c15.8-9.2 36.2-6.1 48.3 7.6l26.5 30.2c12.1 13.7 10.5 34.7-3.2 46.8l-22.6 19.7c3.5 10.4 5.4 21.3 5.4 32.5v30.3c0 11.2-1.9 22.1-5.4 32.5l22.6 19.7c13.7 12.1 15.3 33.1 3.2 46.8l-26.5 30.2c-12.1 13.7-32.5 16.8-48.3 7.6l-30-17.1c-33.2 38.8-79.3 65.3-131.7 72.4V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-46.3c-52.4-7.1-98.5-33.6-131.7-72.4l-30 17.1c-15.8 9.2-36.2 6.1-48.3-7.6L73.2 359.9c-12.1-13.7-10.5-34.7 3.2-46.8l22.6-19.7C95.5 283 93.6 272.1 93.6 260.9v-30.3c0-11.2 1.9-22.1 5.4-32.5L76.4 178.4c-13.7-12.1-15.3-33.1-3.2-46.8L96.7 101.4c12.1-13.7 32.5-16.8 48.3-7.6l30 17.1c33.2-38.8 79.3-65.3 131.7-72.4V32c0-17.7 14.3-32 32-32zm0 144c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z"/></svg>;
const ChartLineIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512" fill="currentColor"><path d="M448 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H352v96h96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h96V160H32c-17.7 0-32-14.3-32-32V64C0 46.3 14.3 32 32 32h416z"/></svg>;
const ArrowRightIcon = ({className}) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M12 192c0-35.3 28.7-64 64-64h8c17.7 0 32-14.3 32-32s-14.3-32-32-32H64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V208c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H64V192zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32V448zM256 192h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V192h-48c-8.8 0-16 7.2-16 16V304c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V320h48c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>;
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>;
const WhatsappIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>;

const services = [
  { icon: CodeIcon, label: 'Web Development' },
  { icon: BullhornIcon, label: 'Digital Marketing' },
  { icon: RobotIcon, label: 'AI Automation' },
  { icon: ChartLineIcon, label: 'SEO Services' },
];

const Hero = memo(() => {
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setFadeState('fade-in');
      }, 400);
    }, 3000);
    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(serviceInterval);
  }, []);

  return (
    <section className="hero-v2-section relative overflow-hidden">
      {/* Animated background grid */}
      <div className="hero-bg-grid absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="grid-line grid-line-h" style={{ top: '25%' }}></div>
        <div className="grid-line grid-line-h" style={{ top: '50%' }}></div>
        <div className="grid-line grid-line-h" style={{ top: '75%' }}></div>
        <div className="grid-line grid-line-v" style={{ left: '25%' }}></div>
        <div className="grid-line grid-line-v" style={{ left: '50%' }}></div>
        <div className="grid-line grid-line-v" style={{ left: '75%' }}></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
      </div>

      <div className="hero-v2-container relative z-10">
        {/* Top badge */}
        <div className="hero-top-badge">
          <span className="badge-dot"></span>
          Full-Service Digital Agency
        </div>

        {/* Main headline */}
        <h1 className="hero-v2-heading">
          <span className="hero-line hero-line-1">We Build</span>
          <span className="hero-line hero-line-2">
            Websites <span className="hero-ampersand">&amp;</span> Brands
          </span>
          <span className="hero-line hero-line-3">
            That{' '}
            <span className="hero-word-rotator-wrapper">
              <span className={`hero-word-rotator-text ${fadeState}`}>
                {words[wordIndex]}
              </span>
              <span className="hero-word-underline"></span>
            </span>
          </span>
        </h1>

        {/* Description */}
        <p className="hero-v2-description">
          Orbitrix Solutions is a full-service digital marketing company and web development
          agency helping businesses scale with professional SEO services, AI automation,
          custom web development, and data-driven digital marketing strategies.
        </p>

        {/* Service pills - rotating highlight */}
        <div className="hero-service-pills">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.label}
                className={`hero-service-pill ${index === activeService ? 'active' : ''}`}
              >
                <span className="pill-icon"><Icon /></span>
                <span>{service.label}</span>
              </div>
            );
          })}
        </div>

        {/* CTA buttons */}
        <div className="hero-v2-actions">
          <a
            className="hero-btn hero-btn-primary"
            href="https://wa.me/qr/7GSRQFMD6AMZG1"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsappIcon />
            <span>Get a Free Quote</span>
            <ArrowRightIcon className="btn-arrow-icon" />
          </a>
          <Link className="hero-btn hero-btn-secondary" to="/about/ceo">
            <UserIcon />
            <span>About CEO</span>
          </Link>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
