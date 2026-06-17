import React from 'react';
import { Link } from 'react-router-dom';
import meetingPic from '../../../Images/meeting.webp';

const AboutSection = () => {
  const lettersLine1 = 'CRAFTING'.split('');
  const lettersLine2 = 'DIGITAL'.split('');
  const lettersLine3 = 'EXCELLENCE'.split('');

  return (
    <section className="home-section about-home-section bg-black relative overflow-hidden reveal" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="text-center mb-12 lg:mb-16">
          <span className="text-xs md:text-sm font-semibold text-orange-500 uppercase tracking-[0.3em] block mb-4">
            WHO WE ARE
          </span>
          <h2 className="about-interactive-heading font-bold text-white leading-[0.95]">
            <div className="heading-line line-1 mb-2">
              {lettersLine1.map((char, index) => (
                <span key={index} className="interactive-letter text-gray-200">
                  {char}
                </span>
              ))}
            </div>
            <div className="heading-line line-2 text-orange-500 mb-2">
              {lettersLine2.map((char, index) => (
                <span key={index} className="interactive-letter">
                  {char}
                </span>
              ))}
            </div>
            <div className="heading-line line-3">
              {lettersLine3.map((char, index) => (
                <span key={index} className="interactive-letter text-gray-200">
                  {char}
                </span>
              ))}
            </div>
          </h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-12">
          <div className="relative group reveal-left reveal">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl image-container-border">
              <img
                alt="Orbitrix Solutions web development agency team collaborating on digital strategy"
                className="w-full h-auto object-cover team-img-zoom"
                src={meetingPic}
                width="1259"
                height="844"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-6 right-6 w-16 h-16 border-2 border-orange-500 rounded-full flex items-center justify-center text-orange-500 text-2xl font-bold bg-black/50 backdrop-blur-sm shadow-lg floating-emoji-badge">
                ⚡
              </div>
            </div>
          </div>

          <article className="space-y-8 reveal-right reveal" style={{ transitionDelay: '100ms' }}>
            <h3 className="text-3xl sm:text-4xl uppercase font-bold text-white text-center lg:text-left leading-tight">
              <span className="text-orange-500">Relax </span>Orbitrix is with you
            </h3>
            <p className="text-md sm:text-xl text-neutral-300 text-center lg:text-left leading-relaxed">
              We are a web development agency and digital marketing company trusted by 100+ clients over 2+ years, combining strategic thinking with innovative design and flawless execution. Every pixel, every line of code, every interaction is crafted to elevate your brand and captivate your audience.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link to="/about" className="discover-story-btn">
                DISCOVER OUR STORY ↗
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
