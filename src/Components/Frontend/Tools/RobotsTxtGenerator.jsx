import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faCopy, faDownload, faPlus, faTrash, faCheckCircle, faFileCode } from '@fortawesome/free-solid-svg-icons';
import SEO from '../../SEO';
import Footer from '../../Footer';
import './RobotsTxtGenerator.css';

const SEARCH_ENGINES = [
  { id: 'all', label: 'All Search Engines', agent: '*' },
  { id: 'google', label: 'Google', agent: 'Googlebot' },
  { id: 'bing', label: 'Bing', agent: 'bingbot' },
  { id: 'yandex', label: 'Yandex', agent: 'YandexBot' },
];

const COMMON_PATHS = [
  { path: '/admin', label: 'Admin panel' },
  { path: '/private', label: 'Private area' },
  { path: '/wp-admin', label: 'WordPress admin' },
  { path: '/cgi-bin', label: 'CGI scripts' },
  { path: '/tmp', label: 'Temp files' },
  { path: '/node_modules', label: 'Node modules' },
];

const TEMPLATES = {
  wordpress: {
    name: 'WordPress',
    agents: [{ id: 'all', disallow: ['/wp-admin/', '/wp-includes/', '/wp-content/plugins/', '/wp-content/cache/', '/xmlrpc.php', '/readme.html'] }],
    sitemap: true,
  },
  reactSpa: {
    name: 'React SPA',
    agents: [{ id: 'all', disallow: ['/static/', '/assets/'] }],
    sitemap: true,
  },
  ecommerce: {
    name: 'E-commerce',
    agents: [{ id: 'all', disallow: ['/cart/', '/checkout/', '/my-account/', '/admin/', '/search?'] }],
    sitemap: true,
  },
};

const RobotsTxtGenerator = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [selectedEngines, setSelectedEngines] = useState(['all']);
  const [disallowPaths, setDisallowPaths] = useState(['/admin', '/private']);
  const [newPath, setNewPath] = useState('');
  const [sitemapUrl, setSitemapUrl] = useState('');
  const [mode, setMode] = useState('custom');
  const [generated, setGenerated] = useState('');
  const [copied, setCopied] = useState(false);
  const [plainEnglish, setPlainEnglish] = useState('');
  const codeRef = useRef(null);

  const toggleEngine = (id) => {
    setSelectedEngines((prev) => {
      if (id === 'all') return ['all'];
      const next = prev.filter((e) => e !== 'all');
      if (next.includes(id)) {
        const result = next.filter((e) => e !== id);
        return result.length === 0 ? ['all'] : result;
      }
      return [...next, id];
    });
  };

  const addPath = () => {
    const trimmed = newPath.trim();
    if (trimmed && !disallowPaths.includes(trimmed)) {
      setDisallowPaths((prev) => [...prev, trimmed]);
      setNewPath('');
    }
  };

  const removePath = (path) => {
    setDisallowPaths((prev) => prev.filter((p) => p !== path));
  };

  const addCommonPath = (path) => {
    if (!disallowPaths.includes(path)) {
      setDisallowPaths((prev) => [...prev, path]);
    }
  };

  const generateRobotsTxt = () => {
    const lines = [];
    const effectivePaths = mode === 'allowAll' ? [] : mode === 'blockAll' ? ['/'] : disallowPaths;

    if (mode === 'blockAll') {
      lines.push('# Blocked for all crawlers');
      lines.push('User-agent: *');
      lines.push('Disallow: /');
      if (sitemapUrl.trim()) {
        lines.push('');
        lines.push(`Sitemap: ${sitemapUrl.trim()}`);
      }
      const result = lines.join('\n');
      setGenerated(result);
      setPlainEnglish('This file blocks ALL search engines from crawling ANY page on your website.');
      return;
    }

    const engineList = selectedEngines.includes('all')
      ? [{ id: 'all', agent: '*' }]
      : SEARCH_ENGINES.filter((e) => selectedEngines.includes(e.id) && e.id !== 'all');

    engineList.forEach((engine, idx) => {
      if (idx > 0) lines.push('');
      lines.push(`# ${engine.label}`);
      lines.push(`User-agent: ${engine.agent}`);

      if (mode === 'allowAll') {
        lines.push('Allow: /');
      } else {
        effectivePaths.forEach((path) => {
          lines.push(`Disallow: ${path}`);
        });
      }
    });

    if (selectedEngines.includes('all') && engineList.length === 1) {
      lines[0] = '# All Search Engines';
    }

    if (sitemapUrl.trim()) {
      lines.push('');
      lines.push(`Sitemap: ${sitemapUrl.trim()}`);
    }

    const result = lines.join('\n');
    setGenerated(result);

    // Plain English
    let english = '';
    if (mode === 'allowAll') {
      english = 'All search engines are allowed to crawl every page on your website.';
    } else {
      const engineNames = selectedEngines.includes('all')
        ? 'All search engines'
        : engineList.map((e) => e.label).join(' and ');
      english = `${engineNames} ${engineList.length === 1 ? 'is' : 'are'} blocked from crawling these paths: ${effectivePaths.join(', ')}.`;
    }
    if (sitemapUrl.trim()) {
      english += ` A sitemap is provided at ${sitemapUrl.trim()} to help with indexing.`;
    }
    setPlainEnglish(english);
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
    const blob = new Blob([generated], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'robots.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const applyTemplate = (key) => {
    const t = TEMPLATES[key];
    if (!t) return;
    const allPaths = [];
    t.agents.forEach((a) => a.disallow.forEach((p) => { if (!allPaths.includes(p)) allPaths.push(p); }));
    setDisallowPaths(allPaths);
    setSelectedEngines(['all']);
    setMode('custom');
    if (websiteUrl.trim() && !sitemapUrl.trim()) {
      setSitemapUrl(websiteUrl.trim().replace(/\/$/, '') + '/sitemap.xml');
    }
  };

  return (
    <div className="robotstxt-page">
      <SEO
        title="Free Robots.txt Generator | Create SEO Robots File | Orbitrix Solutions"
        description="Generate a valid robots.txt file for your website. Control search engine crawling with allow/disallow rules, sitemaps, and common templates."
        keywords="robots.txt generator, create robots.txt, SEO tool, search engine crawler, robots file generator"
      />

      <section className="robotstxt-hero">
        <div className="about-label">FREE ROBOTS.TXT GENERATOR</div>
        <h1>Generate Your Robots.txt File</h1>
        <p>
          Control how search engines crawl your website. Generate a valid robots.txt with
          allow/disallow rules, sitemap references, and common templates.
        </p>
      </section>

      <div className="robotstxt-main">
        <div className="robotstxt-form">
          <div className="robotstxt-group">
            <label className="robotstxt-label">Website URL</label>
            <input
              type="text"
              className="robotstxt-input"
              placeholder="https://yourwebsite.com"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
            />
          </div>

          <div className="robotstxt-group">
            <label className="robotstxt-label">Crawl Mode</label>
            <div className="robotstxt-mode-options">
              {[
                { id: 'custom', label: 'Custom Rules' },
                { id: 'allowAll', label: 'Allow All' },
                { id: 'blockAll', label: 'Block All' },
              ].map((m) => (
                <button
                  key={m.id}
                  className={`robotstxt-mode-btn ${mode === m.id ? 'selected' : ''}`}
                  onClick={() => setMode(m.id)}
                  type="button"
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {mode === 'custom' && (
            <>
              <div className="robotstxt-group">
                <label className="robotstxt-label">Search Engines</label>
                <div className="robotstxt-engine-grid">
                  {SEARCH_ENGINES.map((engine) => (
                    <div
                      key={engine.id}
                      className={`robotstxt-engine-chip ${selectedEngines.includes(engine.id) ? 'checked' : ''}`}
                      onClick={() => toggleEngine(engine.id)}
                      role="checkbox"
                      aria-checked={selectedEngines.includes(engine.id)}
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') toggleEngine(engine.id); }}
                    >
                      <div className="robotstxt-checkbox">
                        {selectedEngines.includes(engine.id) && <span>&#10003;</span>}
                      </div>
                      {engine.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="robotstxt-group">
                <label className="robotstxt-label">Disallow Paths</label>
                <div className="robotstxt-path-list">
                  {disallowPaths.map((path) => (
                    <div key={path} className="robotstxt-path-tag">
                      <span>{path}</span>
                      <button onClick={() => removePath(path)} type="button" className="robotstxt-path-remove">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="robotstxt-path-add">
                  <input
                    type="text"
                    className="robotstxt-input"
                    placeholder="/path/to/block"
                    value={newPath}
                    onChange={(e) => setNewPath(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addPath(); } }}
                  />
                  <button onClick={addPath} type="button" className="robotstxt-add-btn">
                    <FontAwesomeIcon icon={faPlus} /> Add
                  </button>
                </div>
                <div className="robotstxt-common-paths">
                  <span className="robotstxt-common-label">Quick add:</span>
                  {COMMON_PATHS.map((cp) => (
                    <button
                      key={cp.path}
                      className={`robotstxt-common-btn ${disallowPaths.includes(cp.path) ? 'active' : ''}`}
                      onClick={() => addCommonPath(cp.path)}
                      type="button"
                      disabled={disallowPaths.includes(cp.path)}
                      title={cp.label}
                    >
                      {cp.path}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="robotstxt-group">
            <label className="robotstxt-label">Sitemap URL (optional)</label>
            <input
              type="text"
              className="robotstxt-input"
              placeholder="https://yourwebsite.com/sitemap.xml"
              value={sitemapUrl}
              onChange={(e) => setSitemapUrl(e.target.value)}
            />
          </div>

          <div className="robotstxt-group">
            <label className="robotstxt-label">Quick Templates</label>
            <div className="robotstxt-template-grid">
              {Object.entries(TEMPLATES).map(([key, tmpl]) => (
                <button
                  key={key}
                  className="robotstxt-template-btn"
                  onClick={() => applyTemplate(key)}
                  type="button"
                >
                  <FontAwesomeIcon icon={faFileCode} />
                  {tmpl.name}
                </button>
              ))}
            </div>
          </div>

          <button className="robotstxt-generate-btn" onClick={generateRobotsTxt} type="button">
            <FontAwesomeIcon icon={faRobot} /> Generate Robots.txt
          </button>
        </div>

        {generated && (
          <div className="robotstxt-output">
            <div className="robotstxt-output-header">
              <h3>Generated robots.txt</h3>
              <div className="robotstxt-output-actions">
                <button
                  className={`robotstxt-action-btn ${copied ? 'copied' : ''}`}
                  onClick={handleCopy}
                  type="button"
                >
                  <FontAwesomeIcon icon={copied ? faCheckCircle : faCopy} />
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <button className="robotstxt-action-btn" onClick={handleDownload} type="button">
                  <FontAwesomeIcon icon={faDownload} /> Download
                </button>
              </div>
            </div>
            <pre className="robotstxt-code" ref={codeRef}>{generated}</pre>

            {plainEnglish && (
              <div className="robotstxt-english">
                <h4>What this means:</h4>
                <p>{plainEnglish}</p>
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default RobotsTxtGenerator;
