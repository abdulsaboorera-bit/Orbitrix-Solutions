import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../SEO';
import Breadcrumbs from '../../Breadcrumbs';
import Footer from '../../Footer';
import './Careers.css';

const positions = [
  'Graphic Designer',
  'Web Developer',
  'SEO Specialist',
  'Content Writer',
  'Project Manager',
  'Digital Marketing Specialist',
];

const referralSources = [
  'LinkedIn',
  'Indeed',
  'Google Search',
  'Company Website',
  'Referral from Employee',
  'Social Media',
  'University / College',
  'Job Fair',
  'Other',
];

const ApplyPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: 'Graphic Designer',
    linkedin: '',
    coverLetter: '',
    cv: null,
    cvLink: '',
    referralSource: '',
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLargeFileMsg, setShowLargeFileMsg] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];
      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({ ...prev, cv: 'Please upload a PDF or Word document.' }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, cv: 'File size must be under 5MB.' }));
        return;
      }
      if (file.size > 200 * 1024) {
        setShowLargeFileMsg(true);
      } else {
        setShowLargeFileMsg(false);
      }
      setFormData((prev) => ({ ...prev, cv: file, cvLink: '' }));
      setErrors((prev) => ({ ...prev, cv: '', cvLink: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email address.';
    if (!formData.position) newErrors.position = 'Please select a position.';
    if (!formData.cv && !formData.cvLink.trim()) {
      newErrors.cv = 'Please upload your CV or paste a link.';
    }
    if (formData.cvLink.trim() && !showLargeFileMsg) {
      // If user typed a link and no large file warning, clear cv error
    }
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
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        position: formData.position,
        linkedin: formData.linkedin || 'Not provided',
        coverLetter: formData.coverLetter || 'Not provided',
        cvLink: formData.cvLink || (formData.cv ? formData.cv.name : 'Not provided'),
        referralSource: formData.referralSource || 'Not provided',
        type: 'job-application',
        _subject: `Job Application: ${formData.position} - ${formData.fullName}`,
      };

      let response;

      if (formData.cv && !showLargeFileMsg && formData.cv.size <= 200 * 1024) {
        const fd = new FormData();
        Object.entries(payload).forEach(([key, val]) => fd.append(key, val));
        fd.append('cv', formData.cv);
        response = await fetch('https://formspree.io/f/xpqgpzdq', {
          method: 'POST',
          body: fd,
        });
      } else {
        response = await fetch('https://formspree.io/f/xpqgpzdq', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: 'Graphic Designer',
          linkedin: '',
          coverLetter: '',
          cv: null,
          cvLink: '',
          referralSource: '',
        });
        setShowLargeFileMsg(false);
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
        title="Apply for a Position | Orbitrix Solutions Careers"
        description="Apply to join Orbitrix Solutions. Submit your application for our open positions and start building the future of digital with us."
        keywords="Orbitrix Solutions job application, apply graphic designer, remote jobs, digital agency careers"
      />

      <Breadcrumbs />

      {/* Hero */}
      <section className="careers-hero" style={{ paddingBottom: '48px' }}>
        <div className="careers-hero-bg" aria-hidden="true">
          <div className="careers-orb careers-orb-1"></div>
          <div className="careers-orb careers-orb-2"></div>
          <div className="careers-particle"></div>
          <div className="careers-particle"></div>
          <div className="careers-particle"></div>
        </div>
        <div className="careers-hero-content">
          <span className="careers-badge">We Are Hiring</span>
          <h1>Apply for {formData.position} at Orbitrix Solutions</h1>
          <p className="careers-hero-sub">
            We would love to hear from you. Fill out the form below and our team will review
            your application within 5 business days.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="careers-section careers-form-section">
        <div className="careers-container">
          {submitStatus === 'success' ? (
            <div className="careers-success show-confetti">
              <div className="careers-success-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>Application Submitted!</h3>
              <p>
                Thank you for your interest in joining Orbitrix Solutions. We will review your
                application and get back to you within 5 business days.
              </p>
              <Link to="/careers" className="careers-cta-btn">
                Back to Careers
              </Link>
            </div>
          ) : (
            <form className="careers-form" onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="careers-form-grid">
                {/* Full Name */}
                <div className="careers-field">
                  <label htmlFor="fullName">Full Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Smith"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? 'has-error' : ''}
                  />
                  {errors.fullName && <span className="careers-field-error">{errors.fullName}</span>}
                </div>

                {/* Email */}
                <div className="careers-field">
                  <label htmlFor="email">Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'has-error' : ''}
                  />
                  {errors.email && <span className="careers-field-error">{errors.email}</span>}
                </div>

                {/* Phone */}
                <div className="careers-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* Position */}
                <div className="careers-field">
                  <label htmlFor="position">Position Applied For <span className="required">*</span></label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className={errors.position ? 'has-error' : ''}
                  >
                    <option value="">Select a position</option>
                    {positions.map((pos) => (
                      <option key={pos} value={pos}>{pos}</option>
                    ))}
                  </select>
                  {errors.position && <span className="careers-field-error">{errors.position}</span>}
                </div>

                {/* LinkedIn */}
                <div className="careers-field careers-field-full">
                  <label htmlFor="linkedin">LinkedIn Profile URL</label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={formData.linkedin}
                    onChange={handleChange}
                  />
                </div>

                {/* CV Upload */}
                <div className="careers-field careers-field-full">
                  <label htmlFor="cv">CV / Resume <span className="required">*</span></label>
                  <div className={`careers-file-upload ${errors.cv ? 'has-error' : ''} ${formData.cv ? 'has-file' : ''}`}>
                    <input
                      type="file"
                      id="cv"
                      ref={fileInputRef}
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="careers-file-input"
                    />
                    <div className="careers-file-label">
                      {formData.cv ? (
                        <>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                          <span className="careers-file-name">{formData.cv.name}</span>
                          <span className="careers-file-size">({(formData.cv.size / 1024 / 1024).toFixed(2)} MB)</span>
                        </>
                      ) : (
                        <>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                          <span>Click to upload your CV or drag and drop</span>
                          <span className="careers-file-hint">PDF, DOC, or DOCX (Max 5MB)</span>
                        </>
                      )}
                    </div>
                  </div>
                  {errors.cv && <span className="careers-field-error">{errors.cv}</span>}

                  {showLargeFileMsg && (
                    <div style={{
                      marginTop: 12,
                      padding: '14px 18px',
                      background: 'rgba(26, 129, 135, 0.06)',
                      border: '1px solid rgba(26, 129, 135, 0.15)',
                      borderRadius: 12,
                      fontSize: '0.9rem',
                      color: 'var(--orbit-teal-strong)',
                      lineHeight: 1.6,
                    }}>
                      <strong>Your CV is large.</strong> Please upload it to Google Drive or Dropbox
                      and paste the shareable link below.
                    </div>
                  )}
                </div>

                {/* CV Link (fallback for large files) */}
                {showLargeFileMsg && (
                  <div className="careers-field careers-field-full">
                    <label htmlFor="cvLink">Google Drive / Dropbox Link</label>
                    <input
                      type="url"
                      id="cvLink"
                      name="cvLink"
                      placeholder="https://drive.google.com/file/d/..."
                      value={formData.cvLink}
                      onChange={handleChange}
                      className={errors.cvLink ? 'has-error' : ''}
                    />
                    {errors.cvLink && <span className="careers-field-error">{errors.cvLink}</span>}
                  </div>
                )}

                {/* Cover Letter */}
                <div className="careers-field careers-field-full">
                  <label htmlFor="coverLetter">Cover Letter / Message</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows="5"
                    placeholder="Tell us why you would be a great fit for this role and Orbitrix Solutions..."
                    value={formData.coverLetter}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* How did you hear about us */}
                <div className="careers-field careers-field-full">
                  <label htmlFor="referralSource">How did you hear about us?</label>
                  <select
                    id="referralSource"
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    {referralSources.map((src) => (
                      <option key={src} value={src}>{src}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="careers-form-actions">
                <button
                  type="submit"
                  className="careers-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="careers-spinner"></span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                    </>
                  )}
                </button>

                {submitStatus === 'error' && (
                  <div style={{ marginTop: 20 }}>
                    <p className="careers-form-error">
                      Something went wrong. Please try again or email us directly at{' '}
                      <a href="mailto:info@orbitrixsolutions.com">info@orbitrixsolutions.com</a>
                    </p>
                    <button
                      type="button"
                      className="careers-cta-btn"
                      style={{ marginTop: 12 }}
                      onClick={() => setSubmitStatus('')}
                    >
                      Try Again
                    </button>
                  </div>
                )}
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ApplyPage;
