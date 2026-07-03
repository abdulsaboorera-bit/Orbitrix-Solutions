import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';

const routeLabels = {
  '/': 'Home',
  '/about': 'About Us',
  '/about/ceo': 'Meet Our CEO',
  '/services': 'Services',
  '/projects': 'Projects',
  '/blog': 'Blog',
  '/contact': 'Contact',
  '/terms-and-conditions': 'Terms & Conditions',
  '/industries': 'Industries',
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  const items = [
    { label: 'Home', path: '/' },
    ...pathnames.map((name, index) => {
      const routePath = '/' + pathnames.slice(0, index + 1).join('/');
      const label = routeLabels[routePath] || name.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
      return { label, path: routePath };
    }),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://orbitrixsolutions.com${item.path}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="breadcrumbs-inner">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <span key={item.path} className="breadcrumb-item">
                {index === 0 && <FontAwesomeIcon icon={faHome} className="breadcrumb-home" />}
                {isLast ? (
                  <span className="breadcrumb-current" aria-current="page">{item.label}</span>
                ) : (
                  <>
                    <Link to={item.path} className="breadcrumb-link">{item.label}</Link>
                    <FontAwesomeIcon icon={faChevronRight} className="breadcrumb-sep" />
                  </>
                )}
              </span>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
