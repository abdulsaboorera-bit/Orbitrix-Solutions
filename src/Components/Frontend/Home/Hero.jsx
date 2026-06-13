import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import myPic from '../../../Images/my-pic.png';

const words = ['visions', 'ideas', 'products', 'strategies'];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

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

  return (
    <div className="header_container0 relative overflow-hidden">
      {/* Premium ambient light & pulsing background particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[15%] w-3 h-3 rounded-full bg-[#1aa356]/40 animate-pulse-fast"></div>
        <div className="absolute top-[20%] right-[20%] w-4 h-4 rounded-full bg-[#1a8187]/30 animate-pulse-slow"></div>
        <div className="absolute top-[60%] left-[8%] w-5 h-5 rounded-full bg-[#63c6b8]/40 animate-pulse-normal"></div>
        <div className="absolute top-[85%] right-[15%] w-3 h-3 rounded-full bg-[#1a8187]/35 animate-pulse-fast"></div>
        <div className="absolute top-[35%] left-[45%] w-2 h-2 rounded-full bg-[#63c6b8]/50 animate-pulse-slow"></div>
        <div className="absolute top-[75%] left-[25%] w-4 h-4 rounded-full bg-[#1aa356]/30 animate-pulse-normal"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(26,129,135,0.06),transparent_60%)]"></div>
      </div>

      <div className="header_container1 reveal relative z-10">
        <div className="hero_text">
          <Typography.Title level={1}>
            We turn{' '}
            <span className="word-rotator-wrapper">
              <span className={`word-rotator-text ${fadeState}`}>
                {words[wordIndex]}
              </span>
            </span>
            <br />
            into digital realities.
          </Typography.Title>

          <Typography.Paragraph className="p_container1">
            Orbitrix Solutions helps businesses thrive with premium web development, digital marketing, and IT consulting. We
            focus on measurable outcomes, clean execution, and long-term performance so your brand stays ahead.
          </Typography.Paragraph>

          <div className="btns">
            <a className="hb1 hb1-whatsapp" href="https://wa.me/qr/7GSRQFMD6AMZG1" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
            </a>
            <a className="hb1 hb1-email" href="mailto:abdulsaboormercedes@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
          </div>
        </div>

        <div className="header_container2 reveal" style={{ transitionDelay: '120ms' }}>
          <div className="hero-img-wrapper">
            <img src={myPic} alt="Orbitrix Web Development and Digital Growth" />
            <div className="floating-badge">⚡</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

