import React, { useState, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignature, faCopy, faDownload, faCheckCircle, faEnvelope, faPhone, faGlobe, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin as faLinkedinBrand, faTwitter as faTwitterBrand, faInstagram as faInstagramBrand } from '@fortawesome/free-brands-svg-icons';
import SEO from '../../SEO';
import Footer from '../../Footer';
import './EmailSignatureGenerator.css';

const TEMPLATES = {
  professional: {
    name: 'Professional',
    description: 'Clean, corporate look',
  },
  modern: {
    name: 'Modern',
    description: 'Gradient accent styling',
  },
  minimal: {
    name: 'Minimal',
    description: 'Simple and elegant',
  },
};

const getSignatureHTML = (data, template) => {
  const { fullName, jobTitle, companyName, email, phone, website, logoUrl, linkedin, twitter, instagram } = data;
  const hasSocial = linkedin || twitter || instagram;
  const displayName = fullName || 'Your Name';
  const displayTitle = jobTitle || 'Job Title';
  const displayCompany = companyName || 'Company Name';

  const socialIcons = [];
  if (linkedin) {
    socialIcons.push(`<a href="${linkedin}" target="_blank" style="text-decoration:none;margin-right:8px;display:inline-block;"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="24" height="24" style="border:0;vertical-align:middle;" /></a>`);
  }
  if (twitter) {
    socialIcons.push(`<a href="${twitter}" target="_blank" style="text-decoration:none;margin-right:8px;display:inline-block;"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width="24" height="24" style="border:0;vertical-align:middle;" /></a>`);
  }
  if (instagram) {
    socialIcons.push(`<a href="${instagram}" target="_blank" style="text-decoration:none;margin-right:8px;display:inline-block;"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" width="24" height="24" style="border:0;vertical-align:middle;" /></a>`);
  }

  const logoHtml = logoUrl
    ? `<img src="${logoUrl}" alt="${displayCompany}" height="40" style="height:40px;border:0;display:block;margin-bottom:8px;" />`
    : '';

  if (template === 'professional') {
    return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333333;line-height:1.5;">
  <tr>
    <td style="padding-right:16px;vertical-align:top;border-right:2px solid #1a8187;">
      ${logoHtml ? `<div style="padding-bottom:10px;">${logoHtml}</div>` : ''}
      <div style="font-size:18px;font-weight:bold;color:#1a8187;">${displayName}</div>
    </td>
    <td style="padding-left:16px;vertical-align:top;">
      <div style="font-size:13px;color:#666;margin-bottom:2px;">${displayTitle}</div>
      <div style="font-size:14px;font-weight:bold;color:#333;margin-bottom:8px;">${displayCompany}</div>
      <table cellpadding="0" cellspacing="0" border="0" style="font-size:13px;color:#555;">
        ${email ? `<tr><td style="padding:2px 8px 2px 0;"><img src="https://cdn-icons-png.flaticon.com/512/552/552486.png" alt="" width="14" height="14" style="border:0;vertical-align:middle;" /></td><td style="padding:2px 0;"><a href="mailto:${email}" style="color:#1a8187;text-decoration:none;">${email}</a></td></tr>` : ''}
        ${phone ? `<tr><td style="padding:2px 8px 2px 0;"><img src="https://cdn-icons-png.flaticon.com/512/455/455604.png" alt="" width="14" height="14" style="border:0;vertical-align:middle;" /></td><td style="padding:2px 0;"><a href="tel:${phone}" style="color:#555;text-decoration:none;">${phone}</a></td></tr>` : ''}
        ${website ? `<tr><td style="padding:2px 8px 2px 0;"><img src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" alt="" width="14" height="14" style="border:0;vertical-align:middle;" /></td><td style="padding:2px 0;"><a href="${website}" target="_blank" style="color:#1a8187;text-decoration:none;">${website.replace(/^https?:\/\//, '')}</a></td></tr>` : ''}
      </table>
      ${hasSocial ? `<div style="margin-top:10px;">${socialIcons.join('')}</div>` : ''}
    </td>
  </tr>
</table>`;
  }

  if (template === 'modern') {
    return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333333;line-height:1.5;">
  <tr>
    <td style="padding:0;">
      <table cellpadding="0" cellspacing="0" border="0" style="background:linear-gradient(135deg,#1a8187,#0b5c61);border-radius:8px;padding:20px;">
        <tr>
          <td style="padding:0;">
            ${logoHtml ? `<div style="margin-bottom:12px;">${logoHtml.replace(/height="40"/, 'height="36"').replace(/style="height:40px;/, 'style="height:36px;')}</div>` : ''}
            <div style="font-size:20px;font-weight:bold;color:#ffffff;margin-bottom:2px;">${displayName}</div>
            <div style="font-size:13px;color:rgba(255,255,255,0.85);margin-bottom:4px;">${displayTitle}</div>
            <div style="font-size:14px;font-weight:600;color:#63c6b8;margin-bottom:14px;">${displayCompany}</div>
            <table cellpadding="0" cellspacing="0" border="0" style="font-size:12px;">
              ${email ? `<tr><td style="padding:3px 8px 3px 0;"><img src="https://cdn-icons-png.flaticon.com/512/552/552486.png" alt="" width="13" height="13" style="border:0;" /></td><td style="padding:3px 0;"><a href="mailto:${email}" style="color:rgba(255,255,255,0.9);text-decoration:none;">${email}</a></td></tr>` : ''}
              ${phone ? `<tr><td style="padding:3px 8px 3px 0;"><img src="https://cdn-icons-png.flaticon.com/512/455/455604.png" alt="" width="13" height="13" style="border:0;" /></td><td style="padding:3px 0;"><a href="tel:${phone}" style="color:rgba(255,255,255,0.9);text-decoration:none;">${phone}</a></td></tr>` : ''}
              ${website ? `<tr><td style="padding:3px 8px 3px 0;"><img src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" alt="" width="13" height="13" style="border:0;" /></td><td style="padding:3px 0;"><a href="${website}" target="_blank" style="color:#63c6b8;text-decoration:none;">${website.replace(/^https?:\/\//, '')}</a></td></tr>` : ''}
            </table>
            ${hasSocial ? `<div style="margin-top:12px;">${socialIcons.join('').replace(/width="24"/g, 'width="20"').replace(/height="24"/g, 'height="20"')}</div>` : ''}
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
  }

  // minimal
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333333;line-height:1.6;">
  <tr>
    <td style="padding:0;">
      ${logoHtml ? `<div style="margin-bottom:6px;">${logoHtml}</div>` : ''}
      <div style="font-size:16px;font-weight:bold;color:#1a8187;">${displayName}</div>
      <div style="font-size:13px;color:#888;margin-bottom:6px;">${displayTitle} at ${displayCompany}</div>
      <div style="font-size:13px;color:#555;">
        ${email ? `<a href="mailto:${email}" style="color:#1a8187;text-decoration:none;">${email}</a>` : ''}
        ${email && phone ? ' | ' : ''}
        ${phone ? `<a href="tel:${phone}" style="color:#555;text-decoration:none;">${phone}</a>` : ''}
        ${phone && website ? ' | ' : ''}
        ${website ? `<a href="${website}" target="_blank" style="color:#1a8187;text-decoration:none;">${website.replace(/^https?:\/\//, '')}</a>` : ''}
      </div>
      ${hasSocial ? `<div style="margin-top:8px;">${socialIcons.join('').replace(/width="24"/g, 'width="18"').replace(/height="24"/g, 'height="18"')}</div>` : ''}
    </td>
  </tr>
</table>`;
};

const EmailSignatureGenerator = () => {
  const [data, setData] = useState({
    fullName: '',
    jobTitle: '',
    companyName: '',
    email: '',
    phone: '',
    website: '',
    logoUrl: '',
    linkedin: '',
    twitter: '',
    instagram: '',
  });
  const [template, setTemplate] = useState('professional');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');
  const previewRef = useRef(null);
  const codeRef = useRef(null);

  const updateField = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const generatedHTML = getSignatureHTML(data, template);

  const handleCopyHTML = async () => {
    try {
      await navigator.clipboard.writeText(generatedHTML);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = generatedHTML;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyRichText = useCallback(async () => {
    try {
      const blob = new Blob([generatedHTML], { type: 'text/html' });
      const plainBlob = new Blob([generatedHTML], { type: 'text/plain' });
      const item = new ClipboardItem({
        'text/html': blob,
        'text/plain': plainBlob,
      });
      await navigator.clipboard.write([item]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      const temp = document.createElement('div');
      temp.innerHTML = generatedHTML;
      document.body.appendChild(temp);
      range.selectNodeContents(temp);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
      selection.removeAllRanges();
      document.body.removeChild(temp);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [generatedHTML]);

  const handleDownload = () => {
    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Email Signature</title>
</head>
<body>
  ${generatedHTML}
</body>
</html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'email-signature.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="esign-page">
      <SEO
        title="Free Email Signature Generator | Professional Email Signatures | Orbitrix Solutions"
        description="Create professional email signatures with your branding. Choose from multiple templates, add social links, and copy to any email client."
        keywords="email signature generator, professional email signature, email signature template, business email signature"
      />

      <section className="esign-hero">
        <div className="about-label">FREE EMAIL SIGNATURE GENERATOR</div>
        <h1>Create Your Email Signature</h1>
        <p>
          Design a professional email signature with your branding, contact info, and social media links.
          Copy directly to Gmail or download as HTML.
        </p>
      </section>

      <div className="esign-main">
        <div className="esign-form">
          <div className="esign-group">
            <label className="esign-label">Full Name</label>
            <input
              type="text"
              className="esign-input"
              placeholder="John Doe"
              value={data.fullName}
              onChange={(e) => updateField('fullName', e.target.value)}
            />
          </div>

          <div className="esign-group">
            <label className="esign-label">Job Title</label>
            <input
              type="text"
              className="esign-input"
              placeholder="Senior Developer"
              value={data.jobTitle}
              onChange={(e) => updateField('jobTitle', e.target.value)}
            />
          </div>

          <div className="esign-group">
            <label className="esign-label">Company Name</label>
            <input
              type="text"
              className="esign-input"
              placeholder="Acme Inc."
              value={data.companyName}
              onChange={(e) => updateField('companyName', e.target.value)}
            />
          </div>

          <div className="esign-group">
            <label className="esign-label">Email</label>
            <input
              type="email"
              className="esign-input"
              placeholder="john@acme.com"
              value={data.email}
              onChange={(e) => updateField('email', e.target.value)}
            />
          </div>

          <div className="esign-group">
            <label className="esign-label">Phone</label>
            <input
              type="tel"
              className="esign-input"
              placeholder="+1 (555) 123-4567"
              value={data.phone}
              onChange={(e) => updateField('phone', e.target.value)}
            />
          </div>

          <div className="esign-group">
            <label className="esign-label">Website URL</label>
            <input
              type="url"
              className="esign-input"
              placeholder="https://acme.com"
              value={data.website}
              onChange={(e) => updateField('website', e.target.value)}
            />
          </div>

          <div className="esign-group">
            <label className="esign-label">Logo URL (optional)</label>
            <input
              type="url"
              className="esign-input"
              placeholder="https://example.com/logo.png"
              value={data.logoUrl}
              onChange={(e) => updateField('logoUrl', e.target.value)}
            />
          </div>

          <div className="esign-group">
            <label className="esign-label">Social Media (optional)</label>
            <div className="esign-social-inputs">
              <div className="esign-social-field">
                <FontAwesomeIcon icon={faLinkedinBrand} className="esign-social-icon linkedin" />
                <input
                  type="url"
                  className="esign-input"
                  placeholder="LinkedIn URL"
                  value={data.linkedin}
                  onChange={(e) => updateField('linkedin', e.target.value)}
                />
              </div>
              <div className="esign-social-field">
                <FontAwesomeIcon icon={faTwitterBrand} className="esign-social-icon twitter" />
                <input
                  type="url"
                  className="esign-input"
                  placeholder="Twitter URL"
                  value={data.twitter}
                  onChange={(e) => updateField('twitter', e.target.value)}
                />
              </div>
              <div className="esign-social-field">
                <FontAwesomeIcon icon={faInstagramBrand} className="esign-social-icon instagram" />
                <input
                  type="url"
                  className="esign-input"
                  placeholder="Instagram URL"
                  value={data.instagram}
                  onChange={(e) => updateField('instagram', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="esign-group">
            <label className="esign-label">Template</label>
            <div className="esign-template-grid">
              {Object.entries(TEMPLATES).map(([key, tmpl]) => (
                <button
                  key={key}
                  className={`esign-template-btn ${template === key ? 'selected' : ''}`}
                  onClick={() => setTemplate(key)}
                  type="button"
                >
                  <span className="esign-template-name">{tmpl.name}</span>
                  <span className="esign-template-desc">{tmpl.description}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="esign-output">
          <div className="esign-tabs">
            <button
              className={`esign-tab ${activeTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveTab('preview')}
              type="button"
            >
              Live Preview
            </button>
            <button
              className={`esign-tab ${activeTab === 'code' ? 'active' : ''}`}
              onClick={() => setActiveTab('code')}
              type="button"
            >
              HTML Code
            </button>
          </div>

          {activeTab === 'preview' && (
            <div className="esign-preview-card">
              <div className="esign-preview-label">Email Preview</div>
              <div className="esign-preview-email">
                <div className="esign-preview-from">
                  <div className="esign-preview-avatar">
                    {data.fullName ? data.fullName.charAt(0).toUpperCase() : 'J'}
                  </div>
                  <div>
                    <div className="esign-preview-name">{data.fullName || 'John Doe'}</div>
                    <div className="esign-preview-email-addr">{data.email || 'john@example.com'}</div>
                  </div>
                </div>
                <div className="esign-preview-subject">RE: Project Update</div>
                <div className="esign-preview-body">
                  Hi team,<br /><br />
                  Thanks for the update. Looking forward to the next steps.
                </div>
                <div className="esign-preview-divider" />
                <div ref={previewRef} dangerouslySetInnerHTML={{ __html: generatedHTML }} />
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="esign-code-card">
              <pre className="esign-code" ref={codeRef}>{generatedHTML}</pre>
            </div>
          )}

          <div className="esign-output-actions">
            <button
              className={`esign-action-btn primary ${copied ? 'copied' : ''}`}
              onClick={handleCopyRichText}
              type="button"
            >
              <FontAwesomeIcon icon={copied ? faCheckCircle : faCopy} />
              {copied ? 'Copied!' : 'Copy to Gmail'}
            </button>
            <button className="esign-action-btn" onClick={handleCopyHTML} type="button">
              <FontAwesomeIcon icon={faCopy} /> Copy HTML
            </button>
            <button className="esign-action-btn" onClick={handleDownload} type="button">
              <FontAwesomeIcon icon={faDownload} /> Download
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EmailSignatureGenerator;
