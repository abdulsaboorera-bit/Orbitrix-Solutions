import React, { useState, useCallback, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCopy,
  faCheck,
  faDownload,
  faExclamationTriangle,
  faGlobe,
  faImage,
  faUser,
  faTag,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import SEO from '../../../SEO';
import Footer from '../../../Footer';
import './MetaTagGenerator.css';

const MetaTagGenerator = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pageUrl, setPageUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('');
  const [addOG, setAddOG] = useState(true);
  const [addTwitter, setAddTwitter] = useState(true);
  const [addCanonical, setAddCanonical] = useState(true);
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  const TITLE_MAX = 60;
  const DESC_MAX = 160;

  const generateMetaTags = useCallback(() => {
    setGenerated(true);
  }, []);

  const getMetaTags = () => {
    const tags = [];
    const safeTitle = title || 'Page Title';
    const safeDesc = description || 'Page description goes here.';
    const safeUrl = pageUrl || 'https://example.com/page';
    const safeImage = imageUrl || 'https://example.com/image.jpg';
    const safeAuthor = author || 'Orbitrix Solutions';

    tags.push(`<title>${safeTitle}</title>`);
    tags.push(`<meta name="description" content="${safeDesc}" />`);
    tags.push(`<meta name="author" content="${safeAuthor}" />`);
    tags.push(`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`);

    if (addCanonical) {
      tags.push(`<link rel="canonical" href="${safeUrl}" />`);
    }

    if (addOG) {
      tags.push('');
      tags.push(`<!-- Open Graph Meta Tags -->`);
      tags.push(`<meta property="og:type" content="website" />`);
      tags.push(`<meta property="og:title" content="${safeTitle}" />`);
      tags.push(`<meta property="og:description" content="${safeDesc}" />`);
      tags.push(`<meta property="og:url" content="${safeUrl}" />`);
      tags.push(`<meta property="og:image" content="${safeImage}" />`);
      tags.push(`<meta property="og:site_name" content="${safeAuthor}" />`);
    }

    if (addTwitter) {
      tags.push('');
      tags.push(`<!-- Twitter Card Meta Tags -->`);
      tags.push(`<meta name="twitter:card" content="summary_large_image" />`);
      tags.push(`<meta name="twitter:title" content="${safeTitle}" />`);
      tags.push(`<meta name="twitter:description" content="${safeDesc}" />`);
      tags.push(`<meta name="twitter:image" content="${safeImage}" />`);
    }

    return tags.join('\n');
  };

  const highlightHTML = (code) => {
    return code
      .replace(/<!--.*?-->/g, '<span class="mtg-comment">$&</span>')
      .replace(/(&lt;|<)(\/?[a-zA-Z][\w-]*)/g, '$1<span class="mtg-tag">$2</span>')
      .replace(/(<\/?)([\w-]+)/g, '$1<span class="mtg-tag">$2</span>')
      .replace(/([\w-]+)(=")/g, '<span class="mtg-attr">$1</span>$2')
      .replace(/"([^"]*)"/g, '"<span class="mtg-value">$1</span>"');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getMetaTags());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = getMetaTags();
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const downloadHTML = () => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
${getMetaTags().split('\n').map(l => '  ' + l).join('\n')}
</head>
<body>
</body>
</html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'meta-tags.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const getGooglePreview = () => {
    const displayTitle = title || 'Page Title';
    const displayUrl = pageUrl || 'https://example.com/page';
    const displayDesc = description || 'Page description goes here. Add a compelling meta description to improve click-through rates from search results.';
    return { displayTitle, displayUrl, displayDesc };
  };

  const reset = () => {
    setTitle('');
    setDescription('');
    setPageUrl('');
    setImageUrl('');
    setAuthor('');
    setAddOG(true);
    setAddTwitter(true);
    setAddCanonical(true);
    setGenerated(false);
    setCopied(false);
  };

  const preview = getGooglePreview();

  return (
    <div className="mtg-page">
      <SEO
        title="Free Meta Tag Generator | Create SEO Meta Tags | Orbitrix Solutions"
        description="Generate optimized HTML meta tags for your website. Create Open Graph, Twitter Card, and canonical meta tags with our free tool."
        keywords="meta tag generator, SEO meta tags, Open Graph tags, Twitter Card tags, meta description generator, HTML meta tags"
      />

      <section className="mtg-hero">
        <div className="about-label">FREE TOOL</div>
        <h1>Meta Tag Generator</h1>
        <p>
          Generate optimized meta tags for better SEO and social sharing.
          Includes Open Graph, Twitter Card, and canonical URL support.
        </p>
      </section>

      {!generated ? (
        <section className="mtg-tool-section">
          <div className="mtg-form-card">
            <h2>Enter Your Page Details</h2>

            <div className="mtg-field">
              <label htmlFor="mtg-title">
                <FontAwesomeIcon icon={faTag} /> Page Title
              </label>
              <input
                id="mtg-title"
                type="text"
                placeholder="Enter your page title"
                value={title}
                onChange={(e) => setTitle(e.target.value.slice(0, TITLE_MAX))}
                className="mtg-input"
              />
              <div className="mtg-char-count">
                <span className={title.length >= TITLE_MAX ? 'mtg-limit' : ''}>
                  {title.length}
                </span>
                /{TITLE_MAX} characters
              </div>
            </div>

            <div className="mtg-field">
              <label htmlFor="mtg-desc">
                <FontAwesomeIcon icon={faTag} /> Meta Description
              </label>
              <textarea
                id="mtg-desc"
                placeholder="Enter your meta description"
                value={description}
                onChange={(e) => setDescription(e.target.value.slice(0, DESC_MAX))}
                className="mtg-textarea"
                rows={3}
              />
              <div className="mtg-char-count">
                <span className={description.length >= DESC_MAX ? 'mtg-limit' : ''}>
                  {description.length}
                </span>
                /{DESC_MAX} characters
              </div>
            </div>

            <div className="mtg-field">
              <label htmlFor="mtg-url">
                <FontAwesomeIcon icon={faGlobe} /> Page URL
              </label>
              <input
                id="mtg-url"
                type="url"
                placeholder="https://example.com/page"
                value={pageUrl}
                onChange={(e) => setPageUrl(e.target.value)}
                className="mtg-input"
              />
            </div>

            <div className="mtg-field">
              <label htmlFor="mtg-image">
                <FontAwesomeIcon icon={faImage} /> Image URL (OG Image)
              </label>
              <input
                id="mtg-image"
                type="url"
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="mtg-input"
              />
            </div>

            <div className="mtg-field">
              <label htmlFor="mtg-author">
                <FontAwesomeIcon icon={faUser} /> Author Name
              </label>
              <input
                id="mtg-author"
                type="text"
                placeholder="Your name or brand"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="mtg-input"
              />
            </div>

            <div className="mtg-checkboxes">
              <label className="mtg-checkbox-label">
                <input
                  type="checkbox"
                  checked={addOG}
                  onChange={(e) => setAddOG(e.target.checked)}
                />
                <span className="mtg-checkbox-custom" />
                <FontAwesomeIcon icon={faFacebook} className="mtg-icon-og" />
                Add Open Graph tags
              </label>
              <label className="mtg-checkbox-label">
                <input
                  type="checkbox"
                  checked={addTwitter}
                  onChange={(e) => setAddTwitter(e.target.checked)}
                />
                <span className="mtg-checkbox-custom" />
                <FontAwesomeIcon icon={faTwitter} className="mtg-icon-twitter" />
                Add Twitter Card tags
              </label>
              <label className="mtg-checkbox-label">
                <input
                  type="checkbox"
                  checked={addCanonical}
                  onChange={(e) => setAddCanonical(e.target.checked)}
                />
                <span className="mtg-checkbox-custom" />
                Add canonical URL
              </label>
            </div>

            <button
              className="mtg-generate-btn"
              onClick={generateMetaTags}
            >
              Generate Meta Tags
            </button>
          </div>

          {/* Live Previews */}
          {(title || description) && (
            <div className="mtg-preview-panel">
              {/* Google Search Preview */}
              <div className="mtg-preview-card">
                <h3>
                  <FontAwesomeIcon icon={faGlobe} /> Google Search Preview
                </h3>
                <div className="mtg-google-preview">
                  <div className="mtg-google-url">{preview.displayUrl}</div>
                  <div className="mtg-google-title">{preview.displayTitle}</div>
                  <div className="mtg-google-desc">
                    {preview.displayDesc.length > 160
                      ? preview.displayDesc.slice(0, 157) + '...'
                      : preview.displayDesc}
                  </div>
                </div>
              </div>

              {/* Social Media Preview */}
              <div className="mtg-preview-card">
                <h3>
                  <FontAwesomeIcon icon={faFacebook} /> Social Media Preview
                </h3>
                <div className="mtg-social-preview">
                  {imageUrl && (
                    <div className="mtg-social-image">
                      <div className="mtg-social-image-placeholder">
                        <FontAwesomeIcon icon={faImage} />
                        <span>OG Image Preview</span>
                      </div>
                    </div>
                  )}
                  <div className="mtg-social-content">
                    <div className="mtg-social-domain">
                      {pageUrl ? new URL(pageUrl.startsWith('http') ? pageUrl : `https://${pageUrl}`).hostname : 'example.com'}
                    </div>
                    <div className="mtg-social-title">{preview.displayTitle}</div>
                    <div className="mtg-social-desc">
                      {preview.displayDesc.length > 100
                        ? preview.displayDesc.slice(0, 97) + '...'
                        : preview.displayDesc}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      ) : (
        <section className="mtg-results-section">
          <div className="mtg-results-header">
            <h2>Your Generated Meta Tags</h2>
            <p>Copy the code below and paste it into your HTML's &lt;head&gt; section</p>
          </div>

          {/* Code Output */}
          <div className="mtg-code-block">
            <div className="mtg-code-toolbar">
              <span className="mtg-code-label">HTML Meta Tags</span>
              <div className="mtg-code-actions">
                <button className="mtg-code-btn" onClick={copyToClipboard}>
                  <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <button className="mtg-code-btn mtg-download-btn" onClick={downloadHTML}>
                  <FontAwesomeIcon icon={faDownload} />
                  Download HTML
                </button>
              </div>
            </div>
            <pre className="mtg-code-content" ref={codeRef}>
              <code dangerouslySetInnerHTML={{ __html: highlightHTML(getMetaTags()) }} />
            </pre>
          </div>

          {/* Previews */}
          <div className="mtg-preview-panel">
            <div className="mtg-preview-card">
              <h3>
                <FontAwesomeIcon icon={faGlobe} /> Google Search Preview
              </h3>
              <div className="mtg-google-preview">
                <div className="mtg-google-url">{preview.displayUrl}</div>
                <div className="mtg-google-title">{preview.displayTitle}</div>
                <div className="mtg-google-desc">
                  {preview.displayDesc.length > 160
                    ? preview.displayDesc.slice(0, 157) + '...'
                    : preview.displayDesc}
                </div>
              </div>
            </div>

            <div className="mtg-preview-card">
              <h3>
                <FontAwesomeIcon icon={faFacebook} /> Facebook Preview
              </h3>
              <div className="mtg-social-preview">
                {imageUrl && (
                  <div className="mtg-social-image">
                    <div className="mtg-social-image-placeholder">
                      <FontAwesomeIcon icon={faImage} />
                      <span>OG Image Preview</span>
                    </div>
                  </div>
                )}
                <div className="mtg-social-content">
                  <div className="mtg-social-domain">
                    {pageUrl ? (() => {
                      try {
                        return new URL(pageUrl.startsWith('http') ? pageUrl : `https://${pageUrl}`).hostname;
                      } catch {
                        return 'example.com';
                      }
                    })() : 'example.com'}
                  </div>
                  <div className="mtg-social-title">{preview.displayTitle}</div>
                  <div className="mtg-social-desc">
                    {preview.displayDesc.length > 100
                      ? preview.displayDesc.slice(0, 97) + '...'
                      : preview.displayDesc}
                  </div>
                </div>
              </div>
            </div>

            <div className="mtg-preview-card">
              <h3>
                <FontAwesomeIcon icon={faTwitter} /> Twitter Preview
              </h3>
              <div className="mtg-social-preview mtg-twitter-card">
                {imageUrl && (
                  <div className="mtg-social-image">
                    <div className="mtg-social-image-placeholder">
                      <FontAwesomeIcon icon={faImage} />
                      <span>Twitter Card Image</span>
                    </div>
                  </div>
                )}
                <div className="mtg-social-content">
                  <div className="mtg-social-title">{preview.displayTitle}</div>
                  <div className="mtg-social-desc">
                    {preview.displayDesc.length > 100
                      ? preview.displayDesc.slice(0, 97) + '...'
                      : preview.displayDesc}
                  </div>
                  <div className="mtg-social-domain">
                    {pageUrl ? (() => {
                      try {
                        return new URL(pageUrl.startsWith('http') ? pageUrl : `https://${pageUrl}`).hostname;
                      } catch {
                        return 'example.com';
                      }
                    })() : 'example.com'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mtg-info-box">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <p>
              Remember to add these meta tags to the <code>&lt;head&gt;</code> section of your HTML file.
              Changes may take time to appear in search results and social media previews.
            </p>
          </div>

          <button className="mtg-reset-btn" onClick={reset}>
            Generate New Tags
          </button>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default MetaTagGenerator;
