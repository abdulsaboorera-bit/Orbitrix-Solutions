import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCopy,
  faCheck,
  faDownload,
  faGlobe,
  faEnvelope,
  faBuilding,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import SEO from '../../SEO';
import Footer from '../../Footer';
import './PrivacyPolicyGenerator.css';

const countries = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany',
  'France', 'India', 'Brazil', 'Japan', 'South Korea',
  'Netherlands', 'Sweden', 'Switzerland', 'Singapore', 'UAE',
  'South Africa', 'Mexico', 'Italy', 'Spain', 'Other',
];

const dataPractices = [
  { id: 'cookies', label: 'Uses cookies' },
  { id: 'analytics', label: 'Uses analytics (e.g., Google Analytics)' },
  { id: 'thirdParty', label: 'Uses third-party services' },
  { id: 'personalData', label: 'Collects personal data' },
  { id: 'emailMarketing', label: 'Uses email marketing' },
];

const generatePrivacyPolicy = (data) => {
  const { companyName, websiteUrl, contactEmail, country, practices } = data;
  const name = companyName || 'Your Company';
  const url = websiteUrl || 'https://yourwebsite.com';
  const email = contactEmail || 'privacy@yourwebsite.com';
  const nation = country || 'Your Country';
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const usesCookies = practices.includes('cookies');
  const usesAnalytics = practices.includes('analytics');
  const usesThirdParty = practices.includes('thirdParty');
  const collectsPersonal = practices.includes('personalData');
  const usesEmailMarketing = practices.includes('emailMarketing');

  let policy = '';

  // Header
  policy += `PRIVACY POLICY\n`;
  policy += `${name}\n\n`;
  policy += `Last updated: ${today}\n\n`;

  // 1. Introduction
  policy += `1. INTRODUCTION\n\n`;
  policy += `Welcome to ${name} ("Company," "we," "us," or "our"). We operate ${url} (the "Website") and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Website and use our services.\n\n`;
  policy += `By accessing or using our Website, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with the terms of this policy, please do not access the Website.\n\n`;

  // 2. Information We Collect
  policy += `2. INFORMATION WE COLLECT\n\n`;

  if (collectsPersonal) {
    policy += `We may collect personal information that you voluntarily provide to us when you:\n`;
    policy += `  • Fill out forms on our Website\n`;
    policy += `  • Subscribe to our newsletter\n`;
    policy += `  • Contact us via email or other channels\n`;
    policy += `  • Purchase products or services\n\n`;
    policy += `This information may include:\n`;
    policy += `  • Name and contact information (email address, phone number, mailing address)\n`;
    policy += `  • Account credentials (username and password)\n`;
    policy += `  • Payment information (processed securely through third-party payment processors)\n`;
    policy += `  • Business information (company name, job title)\n`;
    policy += `  • Any other information you choose to provide\n\n`;
  }

  policy += `We automatically collect certain information when you visit the Website:\n`;
  policy += `  • IP address and browser type\n`;
  policy += `  • Operating system and device information\n`;
  policy += `  • Pages visited and time spent on each page\n`;
  policy += `  • Referring website or source\n`;
  policy += `  • Date and time of your visit\n\n`;

  if (usesCookies) {
    policy += `3. COOKIES AND TRACKING TECHNOLOGIES\n\n`;
    policy += `We use cookies and similar tracking technologies to enhance your experience on our Website. Cookies are small data files stored on your device that help us:\n`;
    policy += `  • Remember your preferences and settings\n`;
    policy += `  • Understand how you navigate our Website\n`;
    policy += `  • Analyze the effectiveness of our content\n`;
    policy += `  • Provide personalized experiences\n\n`;
    policy += `Types of cookies we use:\n`;
    policy += `  • Essential Cookies: Required for the Website to function properly\n`;
    policy += `  • Analytics Cookies: Help us understand how visitors interact with our Website\n`;
    policy += `  • Preference Cookies: Remember your preferences and settings\n`;
    policy += `  • Marketing Cookies: Used to deliver relevant advertisements\n\n`;
    policy += `You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of the Website.\n\n`;
  }

  if (usesAnalytics) {
    policy += `${usesCookies ? '4' : '3'}. ANALYTICS AND PERFORMANCE\n\n`;
    policy += `We use analytics services such as Google Analytics to collect information about how our Website is used. These services use cookies and other technologies to collect and analyze data including:\n`;
    policy += `  • Number of visitors to our Website\n`;
    policy += `  • Pages visited and navigation patterns\n`;
    policy += `  • Time spent on pages\n`;
    policy += `  • Referring websites\n`;
    policy += `  • Geographic location (country/city level)\n\n`;
    policy += `This data is used in aggregate form to improve our Website and services. Google Analytics does not identify individual users. You can opt out by installing the Google Analytics Opt-out Browser Add-on.\n\n`;
  }

  // How we use information
  const nextSectionNum = usesCookies ? (usesAnalytics ? '5' : '4') : (usesAnalytics ? '4' : '3');
  policy += `${nextSectionNum}. HOW WE USE YOUR INFORMATION\n\n`;
  policy += `We use the information we collect to:\n`;
  policy += `  • Provide, operate, and maintain our Website and services\n`;
  policy += `  • Improve, personalize, and expand our Website\n`;
  policy += `  • Understand and analyze how you use our Website\n`;
  policy += `  • Develop new products, services, features, and functionality\n`;
  policy += `  • Communicate with you for customer service and support\n`;
  policy += `  • Send you updates, newsletters, and marketing communications (with your consent)\n`;
  policy += `  • Process transactions and send related information\n`;
  policy += `  • Detect, prevent, and address technical issues and fraud\n`;
  policy += `  • Comply with legal obligations\n\n`;

  // Sharing
  const sharingNum = parseInt(nextSectionNum) + 1;
  policy += `${sharingNum}. INFORMATION SHARING AND DISCLOSURE\n\n`;
  policy += `We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:\n\n`;

  if (usesThirdParty) {
    policy += `  • Third-Party Service Providers: We may share information with trusted vendors who assist us in operating our Website and providing services, subject to confidentiality agreements.\n`;
    policy += `  • Analytics Partners: We share anonymized data with analytics services to help us understand website usage.\n`;
    policy += `  • Business Transfers: In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.\n\n`;
  }

  policy += `  • Legal Requirements: We may disclose your information if required by law, regulation, legal process, or governmental request.\n`;
  policy += `  • Protection of Rights: We may disclose information to protect the rights, property, or safety of ${name}, our users, or the public.\n\n`;

  // Security
  const securityNum = sharingNum + 1;
  policy += `${securityNum}. DATA SECURITY\n\n`;
  policy += `We implement appropriate technical and organizational security measures to protect your personal information, including:\n`;
  policy += `  • Encryption of data in transit (SSL/TLS)\n`;
  policy += `  • Secure storage of personal data\n`;
  policy += `  • Regular security assessments and updates\n`;
  policy += `  • Access controls and authentication measures\n`;
  policy += `  • Employee training on data protection practices\n\n`;
  policy += `However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.\n\n`;

  // Data Retention
  const retentionNum = securityNum + 1;
  policy += `${retentionNum}. DATA RETENTION\n\n`;
  policy += `We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.\n\n`;

  // User Rights
  const rightsNum = retentionNum + 1;
  policy += `${rightsNum}. YOUR RIGHTS\n\n`;
  policy += `Depending on your location in ${nation}, you may have the following rights regarding your personal data:\n`;
  policy += `  • Access: Request a copy of the personal data we hold about you\n`;
  policy += `  • Correction: Request correction of inaccurate or incomplete data\n`;
  policy += `  • Deletion: Request deletion of your personal data\n`;
  policy += `  • Restriction: Request restriction of processing of your data\n`;
  policy += `  • Portability: Request transfer of your data to another service provider\n`;
  policy += `  • Objection: Object to the processing of your personal data\n`;
  policy += `  • Withdraw Consent: Withdraw consent at any time where processing is based on consent\n\n`;
  policy += `To exercise any of these rights, please contact us at ${email}.\n\n`;

  // Children's Privacy
  const childrenNum = rightsNum + 1;
  policy += `${childrenNum}. CHILDREN'S PRIVACY\n\n`;
  policy += `Our Website is not intended for children under 13 years of age (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child, we will take steps to delete that information promptly.\n\n`;

  // Changes
  const changesNum = childrenNum + 1;
  policy += `${changesNum}. CHANGES TO THIS PRIVACY POLICY\n\n`;
  policy += `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.\n\n`;

  // Contact
  const contactNum = changesNum + 1;
  policy += `${contactNum}. CONTACT US\n\n`;
  policy += `If you have any questions about this Privacy Policy, please contact us:\n\n`;
  policy += `  ${name}\n`;
  policy += `  Website: ${url}\n`;
  policy += `  Email: ${email}\n`;
  policy += `  Country: ${nation}\n`;

  return policy;
};

const PrivacyPolicyGenerator = () => {
  const [companyName, setCompanyName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [country, setCountry] = useState('');
  const [practices, setPractices] = useState([]);
  const [generated, setGenerated] = useState(false);
  const [policy, setPolicy] = useState('');
  const [copied, setCopied] = useState(false);
  const policyRef = useRef(null);

  const togglePractice = (id) => {
    setPractices((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleGenerate = () => {
    const text = generatePrivacyPolicy({
      companyName,
      websiteUrl,
      contactEmail,
      country,
      practices,
    });
    setPolicy(text);
    setGenerated(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(policy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = policy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const downloadPolicy = () => {
    const blob = new Blob([policy], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${companyName || 'privacy-policy'}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setCompanyName('');
    setWebsiteUrl('');
    setContactEmail('');
    setCountry('');
    setPractices([]);
    setGenerated(false);
    setPolicy('');
    setCopied(false);
  };

  return (
    <div className="ppg-page">
      <SEO
        title="Free Privacy Policy Generator | Create a Privacy Policy | Orbitrix Solutions"
        description="Generate a professional, customizable privacy policy for your website in seconds. Free tool with support for cookies, analytics, and data collection disclosures."
        keywords="privacy policy generator, free privacy policy, GDPR privacy policy, website privacy policy, create privacy policy"
      />

      <section className="ppg-hero">
        <div className="about-label">FREE TOOL</div>
        <h1>Privacy Policy Generator</h1>
        <p>
          Generate a professional privacy policy for your website in seconds.
          Fully customizable for your business type and jurisdiction.
        </p>
      </section>

      {!generated ? (
        <section className="ppg-tool-section">
          <div className="ppg-form-card">
            <h2>Enter Your Business Details</h2>

            <div className="ppg-field">
              <label htmlFor="ppg-company">
                <FontAwesomeIcon icon={faBuilding} /> Company Name
              </label>
              <input
                id="ppg-company"
                type="text"
                placeholder="Your Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="ppg-input"
              />
            </div>

            <div className="ppg-field">
              <label htmlFor="ppg-url">
                <FontAwesomeIcon icon={faGlobe} /> Company Website URL
              </label>
              <input
                id="ppg-url"
                type="url"
                placeholder="https://yourwebsite.com"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                className="ppg-input"
              />
            </div>

            <div className="ppg-field">
              <label htmlFor="ppg-email">
                <FontAwesomeIcon icon={faEnvelope} /> Contact Email
              </label>
              <input
                id="ppg-email"
                type="email"
                placeholder="privacy@yourcompany.com"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="ppg-input"
              />
            </div>

            <div className="ppg-field">
              <label htmlFor="ppg-country">
                <FontAwesomeIcon icon={faGlobe} /> Country of Operation
              </label>
              <select
                id="ppg-country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="ppg-select"
              >
                <option value="">Select Country</option>
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="ppg-field">
              <label>
                <FontAwesomeIcon icon={faShieldAlt} /> Data Practices
              </label>
              <div className="ppg-checkboxes">
                {dataPractices.map((p) => (
                  <label
                    key={p.id}
                    className={`ppg-checkbox-label ${practices.includes(p.id) ? 'checked' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={practices.includes(p.id)}
                      onChange={() => togglePractice(p.id)}
                    />
                    <span className="ppg-checkbox-custom" />
                    {p.label}
                  </label>
                ))}
              </div>
            </div>

            <button className="ppg-generate-btn" onClick={handleGenerate}>
              Generate Privacy Policy
            </button>
          </div>
        </section>
      ) : (
        <section className="ppg-results-section">
          <div className="ppg-results-header">
            <h2>Your Privacy Policy</h2>
            <p>Review, copy, or download your generated privacy policy below.</p>
          </div>

          <div className="ppg-policy-output">
            <div className="ppg-output-toolbar">
              <span className="ppg-output-label">Generated Privacy Policy</span>
              <div className="ppg-output-actions">
                <button className="ppg-output-btn" onClick={copyToClipboard}>
                  <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                  {copied ? 'Copied!' : 'Copy to Clipboard'}
                </button>
                <button className="ppg-output-btn ppg-download-btn" onClick={downloadPolicy}>
                  <FontAwesomeIcon icon={faDownload} />
                  Download as Text
                </button>
              </div>
            </div>
            <pre className="ppg-policy-content" ref={policyRef}>
              {policy}
            </pre>
          </div>

          <button className="ppg-reset-btn" onClick={reset}>
            Generate New Policy
          </button>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default PrivacyPolicyGenerator;
