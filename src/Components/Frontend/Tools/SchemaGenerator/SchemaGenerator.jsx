import React, { useState, useCallback, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCopy,
  faCheck,
  faExternalLinkAlt,
  faPlus,
  faTrash,
  faCode,
  faNewspaper,
  faStore,
  faShoppingBag,
  faQuestionCircle,
  faBuilding,
  faGlobe,
  faListOl,
  faConciergeBell,
} from '@fortawesome/free-solid-svg-icons';
import SEO from '../../../SEO';
import Footer from '../../../Footer';
import './SchemaGenerator.css';

const SCHEMA_TYPES = [
  { id: 'Article', icon: faNewspaper, label: 'Article' },
  { id: 'LocalBusiness', icon: faStore, label: 'Local Business' },
  { id: 'Product', icon: faShoppingBag, label: 'Product' },
  { id: 'FAQPage', icon: faQuestionCircle, label: 'FAQ Page' },
  { id: 'Organization', icon: faBuilding, label: 'Organization' },
  { id: 'WebSite', icon: faGlobe, label: 'Web Site' },
  { id: 'BreadcrumbList', icon: faListOl, label: 'Breadcrumb List' },
  { id: 'Service', icon: faConciergeBell, label: 'Service' },
];

const defaultArticle = {
  headline: '',
  author: '',
  datePublished: '',
  image: '',
  description: '',
};

const defaultLocalBusiness = {
  name: '',
  address: '',
  phone: '',
  openingHours: '',
  priceRange: '',
};

const defaultProduct = {
  name: '',
  description: '',
  price: '',
  currency: 'USD',
  availability: 'InStock',
  image: '',
};

const defaultOrganization = {
  name: '',
  url: '',
  logo: '',
  contactPoint: '',
};

const defaultWebSite = {
  name: '',
  url: '',
  searchAction: '',
};

const defaultBreadcrumbItem = { name: '', url: '' };

const defaultService = {
  name: '',
  description: '',
  provider: '',
  areaServed: '',
};

const schemaGeneratorAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free Schema Markup Generator",
  "url": "https://orbitrixsolutions.com/tools/schema-generator",
  "applicationCategory": "UtilityApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const SchemaGenerator = () => {
  const [schemaType, setSchemaType] = useState('Article');
  const [article, setArticle] = useState(defaultArticle);
  const [localBusiness, setLocalBusiness] = useState(defaultLocalBusiness);
  const [product, setProduct] = useState(defaultProduct);
  const [faqs, setFaqs] = useState([{ question: '', answer: '' }]);
  const [organization, setOrganization] = useState(defaultOrganization);
  const [webSite, setWebSite] = useState(defaultWebSite);
  const [breadcrumbs, setBreadcrumbs] = useState([{ name: '', url: '' }]);
  const [service, setService] = useState(defaultService);
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  const generateSchema = useCallback(() => {
    setGenerated(true);
  }, []);

  const getSchemaData = () => {
    switch (schemaType) {
      case 'Article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.headline || 'Article Headline',
          author: { '@type': 'Person', name: article.author || 'Author Name' },
          datePublished: article.datePublished || new Date().toISOString().split('T')[0],
          image: article.image || 'https://example.com/image.jpg',
          description: article.description || 'Article description here.',
        };
      case 'LocalBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: localBusiness.name || 'Business Name',
          address: {
            '@type': 'PostalAddress',
            streetAddress: localBusiness.address || '123 Main St',
          },
          telephone: localBusiness.phone || '+1-555-555-5555',
          openingHours: localBusiness.openingHours || 'Mo-Fr 09:00-17:00',
          priceRange: localBusiness.priceRange || '$$',
        };
      case 'Product':
        return {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name || 'Product Name',
          description: product.description || 'Product description.',
          offers: {
            '@type': 'Offer',
            price: product.price || '9.99',
            priceCurrency: product.currency || 'USD',
            availability: `https://schema.org/${product.availability || 'InStock'}`,
          },
          image: product.image || 'https://example.com/product.jpg',
        };
      case 'FAQPage':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs
            .filter((f) => f.question && f.answer)
            .map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.answer,
              },
            })),
        };
      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: organization.name || 'Organization Name',
          url: organization.url || 'https://example.com',
          logo: organization.logo || 'https://example.com/logo.png',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: organization.contactPoint || '+1-555-555-5555',
            contactType: 'customer service',
          },
        };
      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: webSite.name || 'Website Name',
          url: webSite.url || 'https://example.com',
          potentialAction: webSite.searchAction
            ? {
                '@type': 'SearchAction',
                target: `${webSite.url || 'https://example.com'}/search?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              }
            : undefined,
        };
      case 'BreadcrumbList':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs
            .filter((b) => b.name && b.url)
            .map((b, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: b.name,
              item: b.url,
            })),
        };
      case 'Service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.name || 'Service Name',
          description: service.description || 'Service description.',
          provider: {
            '@type': 'Organization',
            name: service.provider || 'Provider Name',
          },
          areaServed: service.areaServed || 'Worldwide',
        };
      default:
        return {};
    }
  };

  const formatJSON = (obj) => {
    const cleaned = Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v !== undefined)
    );
    return JSON.stringify(cleaned, null, 2);
  };

  const highlightJSON = (code) => {
    return code
      .replace(/"([^"]+)"(?=\s*:)/g, '<span class="sg-key">"$1"</span>')
      .replace(/:\s*"([^"]*)"/g, ': <span class="sg-string">"$1"</span>')
      .replace(/:\s*(\d+\.?\d*)/g, ': <span class="sg-number">$1</span>')
      .replace(/:\s*(true|false)/g, ': <span class="sg-bool">$1</span>')
      .replace(/\{/g, '<span class="sg-brace">{</span>')
      .replace(/\}/g, '<span class="sg-brace">}</span>')
      .replace(/\[/g, '<span class="sg-brace">[</span>')
      .replace(/\]/g, '<span class="sg-brace">]</span>');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formatJSON(getSchemaData()));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = formatJSON(getSchemaData());
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const addFaq = () => setFaqs([...faqs, { question: '', answer: '' }]);
  const removeFaq = (i) => setFaqs(faqs.filter((_, idx) => idx !== i));
  const updateFaq = (i, field, value) => {
    const updated = [...faqs];
    updated[i][field] = value;
    setFaqs(updated);
  };

  const addBreadcrumb = () => setBreadcrumbs([...breadcrumbs, { name: '', url: '' }]);
  const removeBreadcrumb = (i) => setBreadcrumbs(breadcrumbs.filter((_, idx) => idx !== i));
  const updateBreadcrumb = (i, field, value) => {
    const updated = [...breadcrumbs];
    updated[i][field] = value;
    setBreadcrumbs(updated);
  };

  const reset = () => {
    setSchemaType('Article');
    setArticle(defaultArticle);
    setLocalBusiness(defaultLocalBusiness);
    setProduct(defaultProduct);
    setFaqs([{ question: '', answer: '' }]);
    setOrganization(defaultOrganization);
    setWebSite(defaultWebSite);
    setBreadcrumbs([{ name: '', url: '' }]);
    setService(defaultService);
    setGenerated(false);
    setCopied(false);
  };

  const renderFormFields = () => {
    switch (schemaType) {
      case 'Article':
        return (
          <>
            <div className="sg-field">
              <label>Headline</label>
              <input
                type="text"
                placeholder="Article headline"
                value={article.headline}
                onChange={(e) => setArticle({ ...article, headline: e.target.value })}
                className="sg-input"
              />
            </div>
            <div className="sg-field">
              <label>Author Name</label>
              <input
                type="text"
                placeholder="Author name"
                value={article.author}
                onChange={(e) => setArticle({ ...article, author: e.target.value })}
                className="sg-input"
              />
            </div>
            <div className="sg-field">
              <label>Date Published</label>
              <input
                type="date"
                value={article.datePublished}
                onChange={(e) => setArticle({ ...article, datePublished: e.target.value })}
                className="sg-input"
              />
            </div>
            <div className="sg-field">
              <label>Image URL</label>
              <input
                type="url"
                placeholder="https://example.com/image.jpg"
                value={article.image}
                onChange={(e) => setArticle({ ...article, image: e.target.value })}
                className="sg-input"
              />
            </div>
            <div className="sg-field">
              <label>Description</label>
              <textarea
                placeholder="Brief description of the article"
                value={article.description}
                onChange={(e) => setArticle({ ...article, description: e.target.value })}
                className="sg-textarea"
                rows={3}
              />
            </div>
          </>
        );

      case 'LocalBusiness':
        return (
          <>
            <div className="sg-field">
              <label>Business Name</label>
              <input
                type="text"
                placeholder="Business name"
                value={localBusiness.name}
                onChange={(e) => setLocalBusiness({ ...localBusiness, name: e.target.value })}
                className="sg-input"
              />
            </div>
            <div className="sg-field">
              <label>Street Address</label>
              <input
                type="text"
                placeholder="123 Main St, City, State"
                value={localBusiness.address}
                onChange={(e) => setLocalBusiness({ ...localBusiness, address: e.target.value })}
                className="sg-input"
              />
            </div>
            <div className="sg-field">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="+1-555-555-5555"
                value={localBusiness.phone}
                onChange={(e) => setLocalBusiness({ ...localBusiness, phone: e.target.value })}
                className="sg-input"
              />
            </div>
            <div className="sg-field">
              <label>Opening Hours</label>
              <input
                type="text"
                placeholder="Mo-Fr 09:00-17:00"
                value={localBusiness.openingHours}
                onChange={(e) => setLocalBusiness({ ...localBusiness, openingHours: e.target.value })}
                className="sg-input"
              />
            </div>
            <div className="sg-field">
              <label>Price Range</label>
              <input
                type="text"
                placeholder="$$"
                value={localBusiness.priceRange}
                onChange={(e) => setLocalBusiness({ ...localBusiness, priceRange: e.target.value })}
                className="sg-input"
              />
            </div>
          </>
        );

      case 'Product':
        return (
          <>
            <div className="sg-field">
              <label>Product Name</label>
              <input
                type="text"
                placeholder="Product name"
                value={product.name}
                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                className="sg-input"
              />
            </div>
            <div className="sg-field">
              <label>Description</label>
              <textarea
                placeholder="Product description"
                value={product.description}
                onChange={(e) => setProduct({ ...product, description: e.target.value })}
                className="sg-textarea"
                rows={3}
              />
            </div>
            <div className="sg-field-row">
              <div className="sg-field">
                <label>Price</label>
                <input
                  type="number"
                  placeholder="9.99"
                  value={product.price}
                  onChange={(e) => setProduct({ ...product, price: e.target.value })}
                  className="sg-input"
                />
              </div>
              <div className="sg-field">
                <label>Currency</label>
                <select
                  value={product.currency}
                  onChange={(e) => setProduct({ ...product, currency: e.target.value })}
                  className="sg-input"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="PKR">PKR (₨)</option>
                </select>
              </div>
            </div>
            <div className="sg-field">
              <label>Availability</label>
              <select
                value={product.availability}
                onChange={(e) => setProduct({ ...product, availability: e.target.value })}
                className="sg-input"
              >
                <option value="InStock">In Stock</option>
                <option value="OutOfStock">Out of Stock</option>
                <option value="PreOrder">Pre-Order</option>
                <option value="SoldOut">Sold Out</option>
              </select>
            </div>
            <div className="sg-field">
              <label>Image URL</label>
              <input
                type="url"
                placeholder="https://example.com/product.jpg"
                value={product.image}
                onChange={(e) => setProduct({ ...product, image: e.target.value })}
                className="sg-input"
              />
            </div>
          </>
        );

      case 'FAQPage':
        return (
          <>
            {faqs.map((faq, i) => (
              <div key={i} className="sg-repeater-item">
                <div className="sg-repeater-header">
                  <span>FAQ #{i + 1}</span>
                  {faqs.length > 1 && (
                    <button className="sg-remove-btn" onClick={() => removeFaq(i)}>
                      <FontAwesomeIcon icon={faTrash} /> Remove
                    </button>
                  )}
                </div>
                <div className="sg-field">
                  <label>Question</label>
                  <input
                    type="text"
                    placeholder="What is...?"
                    value={faq.question}
                    onChange={(e) => updateFaq(i, 'question', e.target.value)}
                    className="sg-input"
                  />
                </div>
                <div className="sg-field">
                  <label>Answer</label>
                  <textarea
                    placeholder="The answer is..."
                    value={faq.answer}
                    onChange={(e) => updateFaq(i, 'answer', e.target.value)}
                    className="sg-textarea"
                    rows={3}
                  />
                </div>
              </div>
            ))}
            <button className="sg-add-btn" onClick={addFaq}>
              <FontAwesomeIcon icon={faPlus} /> Add Question
            </button>
          </>
        );

      case 'Organization':
        return (
          <>
            <div className="sg-field">
              <label>Organization Name</label>
              <input
                type="text"
                placeholder="Organization name"
                value={organization.name}
                onChange={(e) => setOrganization({ ...organization, name: e.target.value })}
                className="sg-input"
              />
            </div>
            <div className="sg-field">
              <label>Website URL</label>
              <input
                type="url"
                placeholder="https://example.com"
                value={organization.url}
                onChange={(e) => setOrganization({ ...organization, url: e.target.value })}
                className="sg-input"
              />
            </div>
            <div className="sg-field">
              <label>Logo URL</label>
              <input
                type="url"
                placeholder="https://example.com/logo.png"
                value={organization.logo}
                onChange={(e) => setOrganization({ ...organization, logo: e.target.value })}
                className="sg-input"
              />
            </div>
            <div className="sg-field">
              <label>Contact Phone</label>
              <input
                type="tel"
                placeholder="+1-555-555-5555"
                value={organization.contactPoint}
                onChange={(e) => setOrganization({ ...organization, contactPoint: e.target.value })}
                className="sg-input"
              />
            </div>
          </>
        );

      case 'WebSite':
        return (
          <>
            <div className="sg-field">
              <label>Website Name</label>
              <input
                type="text"
                placeholder="Website name"
                value={webSite.name}
                onChange={(e) => setWebSite({ ...webSite, name: e.target.value })}
                className="sg-input"
              />
            </div>
            <div className="sg-field">
              <label>Website URL</label>
              <input
                type="url"
                placeholder="https://example.com"
                value={webSite.url}
                onChange={(e) => setWebSite({ ...webSite, url: e.target.value })}
                className="sg-input"
              />
            </div>
            <label className="sg-checkbox-label">
              <input
                type="checkbox"
                checked={webSite.searchAction}
                onChange={(e) => setWebSite({ ...webSite, searchAction: e.target.checked })}
              />
              <span className="sg-checkbox-custom" />
              Include SearchAction (sitelinks search box)
            </label>
          </>
        );

      case 'BreadcrumbList':
        return (
          <>
            {breadcrumbs.map((bc, i) => (
              <div key={i} className="sg-repeater-item">
                <div className="sg-repeater-header">
                  <span>Level {i + 1}</span>
                  {breadcrumbs.length > 1 && (
                    <button className="sg-remove-btn" onClick={() => removeBreadcrumb(i)}>
                      <FontAwesomeIcon icon={faTrash} /> Remove
                    </button>
                  )}
                </div>
                <div className="sg-field-row">
                  <div className="sg-field">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Home"
                      value={bc.name}
                      onChange={(e) => updateBreadcrumb(i, 'name', e.target.value)}
                      className="sg-input"
                    />
                  </div>
                  <div className="sg-field">
                    <label>URL</label>
                    <input
                      type="url"
                      placeholder="https://example.com"
                      value={bc.url}
                      onChange={(e) => updateBreadcrumb(i, 'url', e.target.value)}
                      className="sg-input"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button className="sg-add-btn" onClick={addBreadcrumb}>
              <FontAwesomeIcon icon={faPlus} /> Add Breadcrumb Level
            </button>
          </>
        );

      case 'Service':
        return (
          <>
            <div className="sg-field">
              <label>Service Name</label>
              <input
                type="text"
                placeholder="Service name"
                value={service.name}
                onChange={(e) => setService({ ...service, name: e.target.value })}
                className="sg-input"
              />
            </div>
            <div className="sg-field">
              <label>Description</label>
              <textarea
                placeholder="Service description"
                value={service.description}
                onChange={(e) => setService({ ...service, description: e.target.value })}
                className="sg-textarea"
                rows={3}
              />
            </div>
            <div className="sg-field">
              <label>Provider / Company</label>
              <input
                type="text"
                placeholder="Provider name"
                value={service.provider}
                onChange={(e) => setService({ ...service, provider: e.target.value })}
                className="sg-input"
              />
            </div>
            <div className="sg-field">
              <label>Area Served</label>
              <input
                type="text"
                placeholder="Worldwide, USA, etc."
                value={service.areaServed}
                onChange={(e) => setService({ ...service, areaServed: e.target.value })}
                className="sg-input"
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="sg-page">
      <SEO
        title="Free Schema Markup Generator | Create JSON-LD Structured Data | Orbitrix Solutions"
        description="Generate valid Schema.org JSON-LD markup for your website. Supports Article, Local Business, Product, FAQ, Organization, and more."
        keywords="schema markup generator, JSON-LD generator, structured data, schema.org, rich snippets, SEO schema"
        schema={schemaGeneratorAppSchema}
      />

      <section className="sg-hero">
        <div className="about-label">FREE TOOL</div>
        <h1>Schema Markup Generator</h1>
        <p>
          Generate valid Schema.org JSON-LD structured data to help search engines
          understand your content and display rich results.
        </p>
      </section>

      {!generated ? (
        <section className="sg-tool-section">
          <div className="sg-form-card">
            <h2>Select Schema Type</h2>
            <div className="sg-type-grid">
              {SCHEMA_TYPES.map((type) => (
                <button
                  key={type.id}
                  className={`sg-type-btn ${schemaType === type.id ? 'active' : ''}`}
                  onClick={() => setSchemaType(type.id)}
                >
                  <FontAwesomeIcon icon={type.icon} />
                  <span>{type.label}</span>
                </button>
              ))}
            </div>

            <div className="sg-fields-section">
              <h3>
                <FontAwesomeIcon icon={SCHEMA_TYPES.find(t => t.id === schemaType)?.icon} />
                {SCHEMA_TYPES.find(t => t.id === schemaType)?.label} Details
              </h3>
              {renderFormFields()}
            </div>

            <button className="sg-generate-btn" onClick={generateSchema}>
              <FontAwesomeIcon icon={faCode} /> Generate Schema
            </button>
          </div>
        </section>
      ) : (
        <section className="sg-results-section">
          <div className="sg-results-header">
            <h2>Your Schema Markup</h2>
            <p>Copy this JSON-LD code and add it to your page's <code>&lt;head&gt;</code> or <code>&lt;body&gt;</code></p>
          </div>

          {/* Code Output */}
          <div className="sg-code-block">
            <div className="sg-code-toolbar">
              <span className="sg-code-label">JSON-LD</span>
              <div className="sg-code-actions">
                <button className="sg-code-btn" onClick={copyToClipboard}>
                  <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <a
                  className="sg-code-btn sg-test-btn"
                  href="https://search.google.com/test/rich-results"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  Test with Google
                </a>
              </div>
            </div>
            <pre className="sg-code-content" ref={codeRef}>
              <code
                dangerouslySetInnerHTML={{
                  __html: highlightJSON(formatJSON(getSchemaData())),
                }}
              />
            </pre>
          </div>

          {/* Preview */}
          <div className="sg-preview-card">
            <h3>Schema Preview</h3>
            <div className="sg-preview-content">
              <div className="sg-preview-type">
                <FontAwesomeIcon icon={SCHEMA_TYPES.find(t => t.id === schemaType)?.icon} />
                <span>{schemaType}</span>
              </div>
              {schemaType === 'Article' && (
                <div className="sg-preview-detail">
                  <strong>{article.headline || 'Article Headline'}</strong>
                  <p>{article.description || 'Article description here.'}</p>
                  <span>By {article.author || 'Author Name'}</span>
                </div>
              )}
              {schemaType === 'LocalBusiness' && (
                <div className="sg-preview-detail">
                  <strong>{localBusiness.name || 'Business Name'}</strong>
                  <p>{localBusiness.address || '123 Main St'}</p>
                  <span>{localBusiness.phone || '+1-555-555-5555'}</span>
                </div>
              )}
              {schemaType === 'Product' && (
                <div className="sg-preview-detail">
                  <strong>{product.name || 'Product Name'}</strong>
                  <p>{product.description || 'Product description.'}</p>
                  <span>${product.price || '0.00'} {product.currency}</span>
                </div>
              )}
              {schemaType === 'FAQPage' && (
                <div className="sg-preview-detail">
                  {faqs.filter(f => f.question).map((faq, i) => (
                    <div key={i} className="sg-preview-faq">
                      <strong>Q: {faq.question}</strong>
                      <p>A: {faq.answer || '...'}</p>
                    </div>
                  ))}
                </div>
              )}
              {schemaType === 'Organization' && (
                <div className="sg-preview-detail">
                  <strong>{organization.name || 'Organization Name'}</strong>
                  <p>{organization.url || 'https://example.com'}</p>
                </div>
              )}
              {schemaType === 'WebSite' && (
                <div className="sg-preview-detail">
                  <strong>{webSite.name || 'Website Name'}</strong>
                  <p>{webSite.url || 'https://example.com'}</p>
                  {webSite.searchAction && <span>Includes search box</span>}
                </div>
              )}
              {schemaType === 'BreadcrumbList' && (
                <div className="sg-preview-detail sg-preview-breadcrumb">
                  {breadcrumbs.filter(b => b.name).map((bc, i) => (
                    <span key={i}>
                      {i > 0 && <span className="sg-breadcrumb-sep"> &gt; </span>}
                      {bc.name}
                    </span>
                  ))}
                </div>
              )}
              {schemaType === 'Service' && (
                <div className="sg-preview-detail">
                  <strong>{service.name || 'Service Name'}</strong>
                  <p>{service.description || 'Service description.'}</p>
                  <span>by {service.provider || 'Provider Name'}</span>
                </div>
              )}
            </div>
          </div>

          <button className="sg-reset-btn" onClick={reset}>
            Generate New Schema
          </button>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default SchemaGenerator;
