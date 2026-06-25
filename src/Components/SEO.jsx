import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, canonicalUrl, keywords, schema, type = 'website', dateModified, articlePublishedTime, articleSection, image }) => {
  const location = useLocation();
  const ogImage = image || 'https://orbitrixsolutions.com/logo-optimized.webp';

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

    // Update OG and Twitter image tags
    let ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) ogImageTag.setAttribute('content', ogImage);
    let twitterImageTag = document.querySelector('meta[name="twitter:image"]');
    if (twitterImageTag) twitterImageTag.setAttribute('content', ogImage);

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

    // 7. Open Graph article tags
    const existingArticleTags = document.querySelectorAll('meta[property^="article:"]');
    existingArticleTags.forEach(el => el.remove());
    if (type === 'article') {
      if (articlePublishedTime) {
        let pubTag = document.createElement('meta');
        pubTag.setAttribute('property', 'article:published_time');
        pubTag.setAttribute('content', articlePublishedTime);
        document.head.appendChild(pubTag);
      }
      if (dateModified) {
        let modTag = document.createElement('meta');
        modTag.setAttribute('property', 'article:modified_time');
        modTag.setAttribute('content', dateModified);
        document.head.appendChild(modTag);
      }
      if (articleSection) {
        let secTag = document.createElement('meta');
        secTag.setAttribute('property', 'article:section');
        secTag.setAttribute('content', articleSection);
        document.head.appendChild(secTag);
      }
      let authorTag = document.createElement('meta');
      authorTag.setAttribute('property', 'article:author');
      authorTag.setAttribute('content', 'Orbitrix Solutions');
      document.head.appendChild(authorTag);
    }

    // 8. dateModified meta tag
    if (dateModified) {
      let metaMod = document.querySelector('meta[itemprop="dateModified"]');
      if (!metaMod) {
        metaMod = document.createElement('meta');
        metaMod.setAttribute('itemprop', 'dateModified');
        document.head.appendChild(metaMod);
      }
      metaMod.setAttribute('content', dateModified);
    }

    // 9. Inject structured data
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
  }, [title, description, canonicalUrl, keywords, schema, type, dateModified, articlePublishedTime, articleSection, location]);

  return null;
};

export default SEO;
