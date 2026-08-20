import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSitemap, faCopy, faDownload, faPlus, faTrash, faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import SEO from '../../SEO';
import Footer from '../../Footer';
import './SitemapGenerator.css';

const CHANGE_FREQ_OPTIONS = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'];
const PRIORITY_OPTIONS = ['1.0', '0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1', '0.0'];

const getTodayDate = () => new Date().toISOString().split('T')[0];

const sitemapGeneratorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free XML Sitemap Generator",
  "url": "https://orbitrixsolutions.com/tools/sitemap-generator",
  "applicationCategory": "UtilityApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const SitemapGenerator = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [urls, setUrls] = useState([
    { path: '', lastmod: getTodayDate(), changefreq: 'weekly', priority: '0.8' },
  ]);
  const [bulkInput, setBulkInput] = useState('');
  const [showBulk, setShowBulk] = useState(false);
  const [generated, setGenerated] = useState('');
  const [copied, setCopied] = useState(false);
  const [duplicateWarning, setDuplicateWarning] = useState('');
  const codeRef = useRef(null);

  const addUrl = () => {
    setUrls((prev) => [
      ...prev,
      { path: '', lastmod: getTodayDate(), changefreq: 'weekly', priority: '0.8' },
    ]);
  };

  const removeUrl = (idx) => {
    setUrls((prev) => prev.filter((_, i) => i !== idx));
  };

  const updateUrl = (idx, field, value) => {
    setUrls((prev) => prev.map((u, i) => (i === idx ? { ...u, [field]: value } : u)));
  };

  const processBulkInput = () => {
    const lines = bulkInput
      .split(/[\n,]+/)
      .map((l) => l.trim())
      .filter(Boolean);
    if (lines.length === 0) return;

    const newUrls = lines.map((line) => ({
      path: line.replace(/^https?:\/\/[^/]+/, '').replace(websiteUrl.replace(/^https?:\/\/[^/]+/, ''), ''),
      lastmod: getTodayDate(),
      changefreq: 'weekly',
      priority: '0.8',
    }));

    setUrls((prev) => {
      const combined = [...prev, ...newUrls];
      const unique = combined.filter(
        (u, i, arr) => arr.findIndex((x) => x.path === u.path) === i
      );
      return unique;
    });
    setBulkInput('');
    setShowBulk(false);
  };

  const normalizeUrl = (base, path) => {
    const cleanBase = base.trim().replace(/\/+$/, '');
    const cleanPath = path.trim().replace(/^\/+/, '');
    return cleanBase ? `${cleanBase}/${cleanPath}` : cleanPath;
  };

  const generateSitemap = () => {
    const base = websiteUrl.trim().replace(/\/+$/, '');
    if (!base) return;

    // Check duplicates
    const paths = urls.map((u) => u.path.trim());
    const seen = new Set();
    const dupes = [];
    paths.forEach((p) => {
      if (seen.has(p) && p) dupes.push(p);
      seen.add(p);
    });
    if (dupes.length > 0) {
      setDuplicateWarning(`Duplicate paths found: ${[...new Set(dupes)].join(', ')}. They will be included as-is.`);
    } else {
      setDuplicateWarning('');
    }

    const today = getTodayDate();

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
    xml += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
    xml += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n';
    xml += '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';

    urls.forEach((url) => {
      if (!url.path.trim()) return;
      const fullUrl = normalizeUrl(base, url.path);
      xml += '  <url>\n';
      xml += `    <loc>${fullUrl}</loc>\n`;
      xml += `    <lastmod>${url.lastmod || today}</lastmod>\n`;
      xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
      xml += `    <priority>${url.priority}</priority>\n`;
      xml += '  </url>\n';
    });

    xml += '</urlset>';
    setGenerated(xml);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generated);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = generated;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([generated], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();
    URL.revokeObjectURL(url);
  };

  const urlCount = urls.filter((u) => u.path.trim()).length;

  return (
    <div className="sitemap-page">
      <SEO
        title="Free XML Sitemap Generator | Create Sitemap for SEO | Orbitrix Solutions"
        description="Generate a valid XML sitemap for your website. Add multiple URLs with lastmod, changefreq, and priority settings for better search engine indexing."
        keywords="xml sitemap generator, create sitemap, SEO sitemap tool, website sitemap"
        schema={sitemapGeneratorSchema}
      />

      <section className="sitemap-hero">
        <div className="about-label">FREE SITEMAP GENERATOR</div>
        <h1>Generate Your XML Sitemap</h1>
        <p>
          Create a valid XML sitemap to help search engines discover and index all your pages efficiently.
          Add URLs, set priorities, and download your sitemap.
        </p>
      </section>

      <div className="sitemap-main">
        <div className="sitemap-form">
          <div className="sitemap-group">
            <label className="sitemap-label">Website URL</label>
            <input
              type="text"
              className="sitemap-input"
              placeholder="https://yourwebsite.com"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
            />
          </div>

          <div className="sitemap-group">
            <div className="sitemap-label-row">
              <label className="sitemap-label">Page URLs</label>
              <button
                className="sitemap-toggle-bulk"
                onClick={() => setShowBulk(!showBulk)}
                type="button"
              >
                {showBulk ? 'Add individually' : 'Bulk paste'}
              </button>
            </div>

            {showBulk ? (
              <div className="sitemap-bulk">
                <textarea
                  className="sitemap-textarea"
                  placeholder="/about&#10;/services&#10;/contact&#10;/blog/my-post"
                  value={bulkInput}
                  onChange={(e) => setBulkInput(e.target.value)}
                  rows={6}
                />
                <button className="sitemap-add-bulk-btn" onClick={processBulkInput} type="button">
                  <FontAwesomeIcon icon={faPlus} /> Add URLs
                </button>
              </div>
            ) : (
              <div className="sitemap-url-list">
                {urls.map((url, idx) => (
                  <div key={idx} className="sitemap-url-card">
                    <div className="sitemap-url-card-header">
                      <span className="sitemap-url-num">#{idx + 1}</span>
                      {urls.length > 1 && (
                        <button className="sitemap-remove-btn" onClick={() => removeUrl(idx)} type="button">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      className="sitemap-input"
                      placeholder="/page-path (e.g. /about)"
                      value={url.path}
                      onChange={(e) => updateUrl(idx, 'path', e.target.value)}
                    />
                    <div className="sitemap-url-meta">
                      <div className="sitemap-meta-field">
                        <label>Last Modified</label>
                        <input
                          type="date"
                          className="sitemap-input sitemap-date-input"
                          value={url.lastmod}
                          onChange={(e) => updateUrl(idx, 'lastmod', e.target.value)}
                        />
                      </div>
                      <div className="sitemap-meta-field">
                        <label>Change Freq</label>
                        <select
                          className="sitemap-select"
                          value={url.changefreq}
                          onChange={(e) => updateUrl(idx, 'changefreq', e.target.value)}
                        >
                          {CHANGE_FREQ_OPTIONS.map((f) => (
                            <option key={f} value={f}>{f}</option>
                          ))}
                        </select>
                      </div>
                      <div className="sitemap-meta-field">
                        <label>Priority</label>
                        <select
                          className="sitemap-select"
                          value={url.priority}
                          onChange={(e) => updateUrl(idx, 'priority', e.target.value)}
                        >
                          {PRIORITY_OPTIONS.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
                <button className="sitemap-add-btn" onClick={addUrl} type="button">
                  <FontAwesomeIcon icon={faPlus} /> Add URL
                </button>
              </div>
            )}
          </div>

          {duplicateWarning && (
            <div className="sitemap-duplicate-warning">
              <FontAwesomeIcon icon={faExclamationTriangle} /> {duplicateWarning}
            </div>
          )}

          <button
            className="sitemap-generate-btn"
            onClick={generateSitemap}
            type="button"
            disabled={!websiteUrl.trim() || urlCount === 0}
          >
            <FontAwesomeIcon icon={faSitemap} /> Generate Sitemap
          </button>
        </div>

        {generated && (
          <div className="sitemap-output">
            <div className="sitemap-output-header">
              <h3>Generated sitemap.xml</h3>
              <div className="sitemap-url-count">{urlCount} URL{urlCount !== 1 ? 's' : ''} included</div>
              <div className="sitemap-output-actions">
                <button
                  className={`sitemap-action-btn ${copied ? 'copied' : ''}`}
                  onClick={handleCopy}
                  type="button"
                >
                  <FontAwesomeIcon icon={copied ? faCheckCircle : faCopy} />
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <button className="sitemap-action-btn" onClick={handleDownload} type="button">
                  <FontAwesomeIcon icon={faDownload} /> Download
                </button>
              </div>
            </div>
            <pre className="sitemap-code" ref={codeRef}>{generated}</pre>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SitemapGenerator;
