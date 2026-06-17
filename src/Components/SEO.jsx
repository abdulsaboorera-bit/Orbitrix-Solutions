import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, canonicalUrl, keywords, schema, type = 'website' }) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Document Title
    if (title) {
      document.title = title;
    }

    // 2. Update Meta Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);

      // Update Open Graph and Twitter description tags
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);
      let twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute('content', description);
    }

    // 3. Update OG and Twitter Title tags
    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
      let twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute('content', title);
    }

    // 4. Update Canonical link
    const canonical = canonicalUrl || `https://orbitrixsolutions.com${location.pathname}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical);

    // Update OG Url tag
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonical);

    // 5. Update Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // 6. Update OG type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) ogType.setAttribute('content', type);

    // 7. Inject structured data
    // Remove existing dynamic schema
    const existingSchemas = document.querySelectorAll('script[data-dynamic-schema]');
    existingSchemas.forEach(el => el.remove());

    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-dynamic-schema', 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    // Cleanup
    return () => {
      const dynamicSchemas = document.querySelectorAll('script[data-dynamic-schema]');
      dynamicSchemas.forEach(el => el.remove());
    };
  }, [title, description, canonicalUrl, keywords, schema, type, location]);

  return null;
};

export default SEO;
