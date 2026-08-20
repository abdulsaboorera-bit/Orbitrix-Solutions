import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../SEO';
import Breadcrumbs from '../../Breadcrumbs';
import Footer from '../../Footer';
import './Careers.css';

const openJobs = [
  {
    id: 'graphic-designer',
    title: 'Graphic Designer',
    type: 'Full-Time / Remote',
    location: 'Remote (Global)',
    department: 'Design & Creative',
    description: 'We are looking for a talented Graphic Designer to join Orbitrix Solutions. You will create visually compelling designs for web, social media, and marketing materials that help our clients stand out in competitive markets.',
    responsibilities: [
      'Design UI/UX mockups for websites and web applications',
      'Create social media graphics, banners, and marketing visuals',
      'Develop brand identities and logo concepts for clients',
      'Design presentation decks, brochures, and sales materials',
      'Collaborate with developers to implement visual designs',
      'Maintain consistent brand guidelines across all projects',
    ],
    requirements: [
      '2+ years of professional graphic design experience',
      'Proficiency in Figma, Adobe Photoshop, Illustrator, and similar tools',
      'Strong portfolio showcasing web design, branding, and marketing materials',
      'Understanding of UI/UX principles and responsive design',
      'Ability to work with tight deadlines and manage multiple projects',
      'Excellent communication skills and attention to detail',
    ],
    niceToHave: [
      'Experience with motion graphics or video editing',
      'Knowledge of HTML/CSS basics',
      'Experience working with international clients',
    ],
  },
];

const cultureValues = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Global Mindset',
    desc: 'We collaborate across borders and timezones, bringing diverse perspectives to every project.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Own Your Impact',
    desc: 'Every team member drives real results. Your work directly shapes client success and company growth.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Relentless Quality',
    desc: 'We obsess over craft. Pixel-perfect design, clean code, and results that exceed expectations.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    title: 'Always Learning',
    desc: 'Stay ahead with new technologies, frameworks, and creative techniques. Growth never stops here.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'People First',
    desc: 'Flexible hours, remote-first culture, and a team that genuinely cares about each other.',
  },
];

/* Simple count-up hook */
function useCountUp(end, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return [count, ref];
}

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Graphic Designer",
  "description": "We are looking for a talented Graphic Designer to join Orbitrix Solutions. You will create visually compelling designs for web, social media, and marketing materials that help our clients stand out in competitive markets. Responsibilities include designing UI/UX mockups, creating social media graphics, developing brand identities, and collaborating with developers to implement visual designs.",
  "datePosted": "2026-08-19",
  "validThrough": "2026-12-31",
  "employmentType": "FULL_TIME",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "Orbitrix Solutions",
    "sameAs": "https://orbitrixsolutions.com"
  },
  "jobLocation": {
    "@type": "Place",
    "address": "Remote"
  }
};

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    linkedin: '',
    coverLetter: '',
    cv: null,
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const fileInputRef = useRef(null);

  const [countries, countriesRef] = useCountUp(10, 1600);
  const [projects, projectsRef] = useCountUp(80, 1800);
  const [remote, remoteRef] = useCountUp(100, 1400);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({ ...prev, cv: 'Please upload a PDF or Word document.' }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, cv: 'File size must be under 5MB.' }));
        return;
      }
      setFormData((prev) => ({ ...prev, cv: file }));
      setErrors((prev) => ({ ...prev, cv: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email address.';
    if (!formData.position) newErrors.position = 'Please select a position.';
    if (!formData.cv) newErrors.cv = 'Please upload your CV/Resume.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('_replyto', formData.email);
      formDataToSend.append('_subject', `Job Application: ${formData.position} - ${formData.fullName}`);
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('phone', formData.phone || 'Not provided');
      formDataToSend.append('position', formData.position);
      formDataToSend.append('linkedin', formData.linkedin || 'Not provided');
      formDataToSend.append('coverLetter', formData.coverLetter || 'Not provided');
      formDataToSend.append('cv', formData.cv);
      formDataToSend.append('type', 'job-application');

      const response = await fetch('https://formspree.io/f/xpqgpzdq', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ fullName: '', email: '', phone: '', position: '', linkedin: '', coverLetter: '', cv: null });
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="main-content">
      <SEO
        title="Careers at Orbitrix Solutions | Join Our Global Team"
        description="Join Orbitrix Solutions and work on exciting projects with clients across the USA, UK, Canada, Europe & Dubai. View open positions and apply today."
        keywords="Orbitrix Solutions careers, web development jobs, remote jobs, graphic designer hiring, digital agency careers, SEO jobs remote"
        schema={jobPostingSchema}
      />

      <Breadcrumbs />

      {/* Hero */}
      <section className="careers-hero">
        <div className="careers-hero-bg" aria-hidden="true">
          <div className="careers-orb careers-orb-1"></div>
          <div className="careers-orb careers-orb-2"></div>
          <div className="careers-particle"></div>
          <div className="careers-particle"></div>
          <div className="careers-particle"></div>
          <div className="careers-particle"></div>
          <div className="careers-particle"></div>
        </div>
        <div className="careers-hero-content">
          <span className="careers-badge">We Are Hiring</span>
          <h1>Build the Future of Digital With Us</h1>
          <p className="careers-hero-sub">
            Join a team that works with ambitious businesses across the USA, UK, Canada,
            Europe &amp; Dubai. We are always looking for talented people who want to make an impact.
          </p>
          <div className="careers-hero-stats">
            <div className="careers-stat" ref={countriesRef}>
              <strong>{countries}+</strong>
              <span>Countries Served</span>
            </div>
            <div className="careers-stat" ref={projectsRef}>
              <strong>{projects}+</strong>
              <span>Projects Delivered</span>
            </div>
            <div className="careers-stat" ref={remoteRef}>
              <strong>{remote}%</strong>
              <span>Remote Friendly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Life at Orbitrix */}
      <section className="careers-section careers-life-section">
        <div className="careers-container">
          <div className="careers-section-header">
            <span className="careers-label">Our Culture</span>
            <h2>Life at Orbitrix</h2>
            <p>We believe great work comes from great people who love what they do. Here is what makes us different.</p>
          </div>
          <div className="careers-life-grid">
            {cultureValues.map((item, i) => (
              <div key={i} className="careers-life-card">
                <div className="careers-life-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="careers-section">
        <div className="careers-container">
          <div className="careers-section-header">
            <span className="careers-label">Open Positions</span>
            <h2>Current Openings</h2>
            <p>We are looking for talented individuals to join our growing team. Explore our current openings below.</p>
          </div>

          <div className="careers-jobs-list">
            {openJobs.map((job) => (
              <div key={job.id} className="careers-job-card">
                <div className="careers-job-header">
                  <div className="careers-job-info">
                    <h3>{job.title}</h3>
                    <div className="careers-job-meta">
                      <span className="careers-meta-tag">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        {job.department}
                      </span>
                      <span className="careers-meta-tag">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {job.type}
                      </span>
                      <span className="careers-meta-tag">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/careers/apply"
                    className="careers-apply-btn"
                  >
                    Apply Now
                    <svg width="14" height="14" viewBox="0 0 448 512" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                  </Link>
                </div>
                <p className="careers-job-desc">{job.description}</p>

                <div className="careers-job-details">
                  <div className="careers-detail-block">
                    <h4>Responsibilities</h4>
                    <ul>
                      {job.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="careers-detail-block">
                    <h4>Requirements</h4>
                    <ul>
                      {job.requirements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {job.niceToHave && (
                    <div className="careers-detail-block">
                      <h4>Nice to Have</h4>
                      <ul>
                        {job.niceToHave.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {openJobs.length === 0 && (
              <div className="careers-no-jobs">
                <h3>No Open Positions Right Now</h3>
                <p>We are always looking for talented people. Send us your resume and we will keep you in mind for future openings.</p>
                <Link to="/contact" className="careers-cta-btn">Contact Us</Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="careers-section careers-why-section">
        <div className="careers-container">
          <div className="careers-section-header">
            <span className="careers-label">Why Orbitrix</span>
            <h2>Why Join Orbitrix Solutions?</h2>
          </div>
          <div className="careers-perks-grid">
            <div className="careers-perk-card">
              <div className="careers-perk-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h4>Work Globally</h4>
              <p>Collaborate with clients across the USA, UK, Canada, Europe, and Dubai from anywhere in the world.</p>
            </div>
            <div className="careers-perk-card">
              <div className="careers-perk-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h4>Remote First</h4>
              <p>Work from anywhere with flexible hours. We care about results, not where you sit.</p>
            </div>
            <div className="careers-perk-card">
              <div className="careers-perk-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </div>
              <h4>Growth Focused</h4>
              <p>Work on diverse projects that challenge you and expand your skillset across industries.</p>
            </div>
            <div className="careers-perk-card">
              <div className="careers-perk-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4>Small Team, Big Impact</h4>
              <p>Your contributions matter. Join a team where every person drives real results for clients.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Careers;
