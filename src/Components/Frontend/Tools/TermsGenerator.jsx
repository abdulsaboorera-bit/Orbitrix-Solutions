import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCopy,
  faCheck,
  faDownload,
  faGlobe,
  faEnvelope,
  faBuilding,
  faFileContract,
} from '@fortawesome/free-solid-svg-icons';
import SEO from '../../SEO';
import Footer from '../../Footer';
import './TermsGenerator.css';

const countries = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany',
  'France', 'India', 'Brazil', 'Japan', 'South Korea',
  'Netherlands', 'Sweden', 'Switzerland', 'Singapore', 'UAE',
  'South Africa', 'Mexico', 'Italy', 'Spain', 'Other',
];

const businessTypes = [
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'saas', label: 'SaaS' },
  { id: 'content', label: 'Content / Media' },
  { id: 'service', label: 'Service Provider' },
  { id: 'marketplace', label: 'Marketplace' },
];

const generateTerms = (data) => {
  const { companyName, websiteUrl, contactEmail, country, businessType } = data;
  const name = companyName || 'Your Company';
  const url = websiteUrl || 'https://yourwebsite.com';
  const email = contactEmail || 'legal@yourwebsite.com';
  const nation = country || 'Your Country';
  const type = businessType || 'service';
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const typeLabels = {
    ecommerce: 'e-commerce platform',
    saas: 'SaaS platform',
    content: 'content and media platform',
    service: 'service platform',
    marketplace: 'marketplace',
  };

  let terms = '';

  terms += `TERMS AND CONDITIONS\n`;
  terms += `${name}\n\n`;
  terms += `Last updated: ${today}\n\n`;

  // 1. Acceptance of Terms
  terms += `1. ACCEPTANCE OF TERMS\n\n`;
  terms += `By accessing and using ${url} (the "Website") and our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms and Conditions, please do not use our Website or services.\n\n`;
  terms += `These Terms constitute a legally binding agreement between you ("User," "you," or "your") and ${name} ("Company," "we," "us," or "our").\n\n`;

  // 2. Definitions
  terms += `2. DEFINITIONS\n\n`;
  terms += `  • "Services" refers to the ${typeLabels[type]} operated by ${name}.\n`;
  terms += `  • "Content" includes text, images, graphics, logos, audio, video, and other materials.\n`;
  terms += `  • "User Content" refers to any content submitted by users.\n`;
  terms += `  • "Account" refers to a registered user account on our platform.\n\n`;

  // 3. Eligibility
  terms += `3. ELIGIBILITY\n\n`;
  terms += `By using our Services, you represent and warrant that:\n`;
  terms += `  • You are at least 18 years of age (or the age of majority in your jurisdiction).\n`;
  terms += `  • You have the legal capacity to enter into a binding agreement.\n`;
  terms += `  • Your use of the Services does not violate any applicable law or regulation.\n`;
  terms += `  • All information you provide is accurate, current, and complete.\n\n`;

  if (type === 'saas' || type === 'ecommerce' || type === 'marketplace') {
    terms += `4. USER ACCOUNTS\n\n`;
    terms += `To access certain features, you may need to create an account. You agree to:\n`;
    terms += `  • Provide accurate and complete registration information.\n`;
    terms += `  • Maintain the security and confidentiality of your account credentials.\n`;
    terms += `  • Accept responsibility for all activities that occur under your account.\n`;
    terms += `  • Notify us immediately of any unauthorized use of your account.\n\n`;
    terms += `We reserve the right to suspend or terminate accounts that violate these Terms.\n\n`;

    terms += `5. SUBSCRIPTIONS AND PAYMENTS\n\n`;
    if (type === 'saas') {
      terms += `Our SaaS services are offered through subscription plans. By subscribing:\n`;
      terms += `  • You authorize us to charge your chosen payment method on a recurring basis.\n`;
      terms += `  • Subscription fees are non-refundable unless stated otherwise.\n`;
      terms += `  • We may change subscription fees with 30 days' prior notice.\n`;
      terms += `  • You may cancel your subscription at any time; cancellation takes effect at the end of the current billing period.\n\n`;
    } else if (type === 'ecommerce') {
      terms += `For purchases made on our e-commerce platform:\n`;
      terms += `  • All prices are displayed in the applicable currency and include applicable taxes unless stated otherwise.\n`;
      terms += `  • We reserve the right to modify prices at any time without prior notice.\n`;
      terms += `  • Payment must be received in full before order processing.\n`;
      terms += `  • We accept major credit cards, debit cards, and other payment methods as displayed at checkout.\n\n`;
    } else {
      terms += `For marketplace transactions:\n`;
      terms += `  • All prices are set by individual sellers and may vary.\n`;
      terms += `  • Payment processing is handled through secure third-party processors.\n`;
      terms += `  • We do not guarantee the quality, safety, or legality of items listed.\n\n`;
    }
  }

  // Intellectual Property
  const ipSection = (type === 'saas' || type === 'ecommerce' || type === 'marketplace') ? '6' : '4';
  terms += `${ipSection}. INTELLECTUAL PROPERTY\n\n`;
  terms += `All content, features, and functionality on the Website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of ${name} or its licensors and are protected by copyright, trademark, and other intellectual property laws.\n\n`;
  terms += `You may not:\n`;
  terms += `  • Copy, modify, distribute, sell, or lease any part of our Services.\n`;
  terms += `  • Reverse engineer or attempt to extract the source code of our software.\n`;
  terms += `  • Use our trademarks, logos, or brand assets without prior written consent.\n`;
  terms += `  • Remove or alter any copyright, trademark, or other proprietary notices.\n\n`;

  // User Content
  const ucSection = parseInt(ipSection) + 1;
  terms += `${ucSection}. USER CONTENT\n\n`;
  terms += `By submitting content to our platform, you grant ${name} a worldwide, non-exclusive, royalty-free, transferable license to use, reproduce, modify, adapt, publish, translate, and distribute such content in any media format.\n\n`;
  terms += `You represent and warrant that:\n`;
  terms += `  • You own or have the necessary rights to the content you submit.\n`;
  terms += `  • Your content does not infringe the intellectual property rights of any third party.\n`;
  terms += `  • Your content does not contain any unlawful, defamatory, or harmful material.\n\n`;
  terms += `We reserve the right to remove any user content that violates these Terms.\n\n`;

  // Prohibited Conduct
  const pcSection = ucSection + 1;
  terms += `${pcSection}. PROHIBITED CONDUCT\n\n`;
  terms += `You agree not to:\n`;
  terms += `  • Use the Services for any unlawful purpose or in violation of any applicable law.\n`;
  terms += `  • Attempt to gain unauthorized access to any part of the Services.\n`;
  terms += `  • Interfere with or disrupt the integrity or performance of the Services.\n`;
  terms += `  • Transmit any viruses, malware, or other harmful code.\n`;
  terms += `  • Scrape, crawl, or use automated tools to access the Services.\n`;
  terms += `  • Impersonate any person or entity.\n`;
  terms += `  • Collect or harvest personal information of other users.\n`;
  terms += `  • Use the Services to send spam or unsolicited communications.\n\n`;

  // Disclaimer
  const dcSection = pcSection + 1;
  terms += `${dcSection}. DISCLAIMER OF WARRANTIES\n\n`;
  terms += `THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.\n\n`;
  terms += `${name} does not warrant that:\n`;
  terms += `  • The Services will be uninterrupted, timely, secure, or error-free.\n`;
  terms += `  • The results obtained from using the Services will be accurate or reliable.\n`;
  terms += `  • Any errors in the Services will be corrected.\n\n`;

  // Limitation of Liability
  const llSection = dcSection + 1;
  terms += `${llSection}. LIMITATION OF LIABILITY\n\n`;
  terms += `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ${name.toUpperCase()} SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:\n\n`;
  terms += `  • Your use of or inability to use the Services.\n`;
  terms += `  • Any unauthorized access to or alteration of your data.\n`;
  terms += `  • Any conduct or content of any third party on the Services.\n`;
  terms += `  • Any content obtained from the Services.\n\n`;
  terms += `In no event shall our aggregate liability exceed the greater of one hundred U.S. dollars ($100.00) or the amount you paid us, if any, in the past six months for the services giving rise to the claim.\n\n`;

  // Indemnification
  const inSection = llSection + 1;
  terms += `${inSection}. INDEMNIFICATION\n\n`;
  terms += `You agree to indemnify, defend, and hold harmless ${name}, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or related to:\n`;
  terms += `  • Your use of the Services.\n`;
  terms += `  • Your violation of these Terms.\n`;
  terms += `  • Your violation of any rights of a third party.\n`;
  terms += `  • Your user content.\n\n`;

  // Governing Law
  const glSection = inSection + 1;
  terms += `${glSection}. GOVERNING LAW AND DISPUTE RESOLUTION\n\n`;
  terms += `These Terms shall be governed by and construed in accordance with the laws of ${nation}, without regard to its conflict of law principles.\n\n`;
  terms += `Any disputes arising out of or relating to these Terms or the Services shall be resolved through:\n`;
  terms += `  1. Informal Negotiation: The parties shall first attempt to resolve disputes informally through good-faith negotiation.\n`;
  terms += `  2. Mediation: If informal resolution fails, the parties agree to submit to mediation before initiating any legal proceedings.\n`;
  terms += `  3. Arbitration / Litigation: If mediation fails, disputes shall be resolved in the courts of competent jurisdiction in ${nation}.\n\n`;

  // Termination
  const tmSection = glSection + 1;
  terms += `${tmSection}. TERMINATION\n\n`;
  terms += `We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason, including but not limited to a breach of these Terms.\n\n`;
  terms += `Upon termination:\n`;
  terms += `  • Your right to use the Services will immediately cease.\n`;
  terms += `  • We may delete your account and all associated data.\n`;
  terms += `  • Any outstanding obligations shall survive termination.\n\n`;
  terms += `You may terminate your account at any time by contacting us at ${email}.\n\n`;

  // Changes
  const chSection = tmSection + 1;
  terms += `${chSection}. CHANGES TO TERMS\n\n`;
  terms += `We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on this page and updating the "Last updated" date. Your continued use of the Services after any changes constitutes acceptance of the new Terms.\n\n`;

  // Severability
  const svSection = chSection + 1;
  terms += `${svSection}. SEVERABILITY\n\n`;
  terms += `If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining provisions shall remain in full force and effect.\n\n`;

  // Contact
  const ctSection = svSection + 1;
  terms += `${ctSection}. CONTACT US\n\n`;
  terms += `If you have any questions about these Terms and Conditions, please contact us:\n\n`;
  terms += `  ${name}\n`;
  terms += `  Website: ${url}\n`;
  terms += `  Email: ${email}\n`;
  terms += `  Country: ${nation}\n`;

  return terms;
};

const TermsGenerator = () => {
  const [companyName, setCompanyName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [country, setCountry] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [generated, setGenerated] = useState(false);
  const [terms, setTerms] = useState('');
  const [copied, setCopied] = useState(false);
  const termsRef = useRef(null);

  const handleGenerate = () => {
    const text = generateTerms({
      companyName,
      websiteUrl,
      contactEmail,
      country,
      businessType,
    });
    setTerms(text);
    setGenerated(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(terms);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = terms;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const downloadTerms = () => {
    const blob = new Blob([terms], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${companyName || 'terms-and-conditions'}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setCompanyName('');
    setWebsiteUrl('');
    setContactEmail('');
    setCountry('');
    setBusinessType('');
    setGenerated(false);
    setTerms('');
    setCopied(false);
  };

  return (
    <div className="tg-page">
      <SEO
        title="Free Terms & Conditions Generator | Create Terms of Service | Orbitrix Solutions"
        description="Generate professional terms and conditions for your website or app. Customizable for e-commerce, SaaS, content, service providers, and marketplaces."
        keywords="terms and conditions generator, terms of service, terms of use, legal terms generator, website terms"
      />

      <section className="tg-hero">
        <div className="about-label">FREE TOOL</div>
        <h1>Terms & Conditions Generator</h1>
        <p>
          Create legally structured terms and conditions for your website or app
          in seconds. Tailored to your business type and jurisdiction.
        </p>
      </section>

      {!generated ? (
        <section className="tg-tool-section">
          <div className="tg-form-card">
            <h2>Enter Your Business Details</h2>

            <div className="tg-field">
              <label htmlFor="tg-company">
                <FontAwesomeIcon icon={faBuilding} /> Company Name
              </label>
              <input
                id="tg-company"
                type="text"
                placeholder="Your Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="tg-input"
              />
            </div>

            <div className="tg-field">
              <label htmlFor="tg-url">
                <FontAwesomeIcon icon={faGlobe} /> Website URL
              </label>
              <input
                id="tg-url"
                type="url"
                placeholder="https://yourwebsite.com"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                className="tg-input"
              />
            </div>

            <div className="tg-field">
              <label htmlFor="tg-email">
                <FontAwesomeIcon icon={faEnvelope} /> Contact Email
              </label>
              <input
                id="tg-email"
                type="email"
                placeholder="legal@yourcompany.com"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="tg-input"
              />
            </div>

            <div className="tg-field">
              <label htmlFor="tg-country">
                <FontAwesomeIcon icon={faGlobe} /> Country
              </label>
              <select
                id="tg-country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="tg-select"
              >
                <option value="">Select Country</option>
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="tg-field">
              <label>
                <FontAwesomeIcon icon={faFileContract} /> Business Type
              </label>
              <div className="tg-business-types">
                {businessTypes.map((bt) => (
                  <button
                    key={bt.id}
                    className={`tg-type-btn ${businessType === bt.id ? 'selected' : ''}`}
                    onClick={() => setBusinessType(bt.id)}
                    type="button"
                  >
                    {bt.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="tg-generate-btn"
              onClick={handleGenerate}
              disabled={!businessType}
            >
              Generate Terms & Conditions
            </button>
          </div>
        </section>
      ) : (
        <section className="tg-results-section">
          <div className="tg-results-header">
            <h2>Your Terms & Conditions</h2>
            <p>Review, copy, or download your generated terms below.</p>
          </div>

          <div className="tg-terms-output">
            <div className="tg-output-toolbar">
              <span className="tg-output-label">Generated Terms & Conditions</span>
              <div className="tg-output-actions">
                <button className="tg-output-btn" onClick={copyToClipboard}>
                  <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                  {copied ? 'Copied!' : 'Copy to Clipboard'}
                </button>
                <button className="tg-output-btn tg-download-btn" onClick={downloadTerms}>
                  <FontAwesomeIcon icon={faDownload} />
                  Download as Text
                </button>
              </div>
            </div>
            <pre className="tg-terms-content" ref={termsRef}>
              {terms}
            </pre>
          </div>

          <button className="tg-reset-btn" onClick={reset}>
            Generate New Terms
          </button>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default TermsGenerator;
