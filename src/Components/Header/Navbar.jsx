import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../Images/logo.webp";
import { categories } from '../../Data/projects';

const ChevronDown = ({className}) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 512 512" fill="currentColor"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>;
const WhatsappIconNav = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>;

const projectSublinks = categories
  .filter((c) => c.slug !== 'all')
  .map((c) => ({
    ...c,
    href: `/projects?category=${c.slug}`,
  }));

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMobileProjectsOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownEnter = () => {
    clearTimeout(closeTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 120);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header>
      <nav className="site-nav navbar navbar-expand-lg w-100" aria-label="Main navigation">
        <div className="container-fluid px-4">
          <Link className="navbar-brand m-0" to="/" aria-label="Orbitrix Solutions Home">
            <img src={logo} alt="Orbitrix Solutions logo" width="220" height="56" loading="eager" style={{ objectFit: 'contain' }} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-controls="navbarScroll"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${mobileOpen ? 'show' : ''}`} id="navbarScroll">
            <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll" role="menubar">
              <li className="nav-item" role="none">
                <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/" role="menuitem" aria-current={isActive('/') ? 'page' : undefined}>
                  Home
                </Link>
              </li>
              <li className="nav-item" role="none">
                <Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} to="/about" role="menuitem" aria-current={isActive('/about') ? 'page' : undefined}>
                  About
                </Link>
              </li>
              <li className="nav-item" role="none">
                <Link className={`nav-link ${isActive('/services') ? 'active' : ''}`} to="/services" role="menuitem" aria-current={isActive('/services') ? 'page' : undefined}>
                  Services
                </Link>
              </li>

              {/* Projects Dropdown — hover handled on the wrapper */}
              <li
                className="nav-item nav-dropdown-wrapper"
                role="none"
                ref={dropdownRef}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                {/* Desktop trigger */}
                <button
                  className={`nav-link nav-dropdown-trigger ${isActive('/projects') ? 'active' : ''}`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                  role="menuitem"
                >
                  Projects
                  <ChevronDown className={`nav-dropdown-arrow ${dropdownOpen ? 'open' : ''}`} />
                </button>

                {dropdownOpen && (
                  <ul className="nav-dropdown-menu" role="menu">
                    {projectSublinks.map((cat) => (
                      <li key={cat.slug} role="none">
                        <Link className="nav-dropdown-item" to={cat.href} role="menuitem">
                          <span className="nav-dropdown-item-label">{cat.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Mobile accordion */}
                <button
                  className={`nav-link nav-dropdown-mobile-trigger ${isActive('/projects') ? 'active' : ''}`}
                  onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                  aria-expanded={mobileProjectsOpen}
                  aria-controls="mobile-projects-submenu"
                >
                  Projects
                  <ChevronDown className={`nav-dropdown-arrow ${mobileProjectsOpen ? 'open' : ''}`} />
                </button>
                {mobileProjectsOpen && (
                  <ul className="nav-mobile-submenu" id="mobile-projects-submenu" role="menu">
                    {projectSublinks.map((cat) => (
                      <li key={cat.slug} role="none">
                        <Link className="nav-mobile-submenu-link" to={cat.href} role="menuitem">{cat.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className="nav-item" role="none">
                <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact" role="menuitem" aria-current={isActive('/contact') ? 'page' : undefined}>
                  Contact
                </Link>
              </li>

              <li className="nav-item" role="none">
                <Link className={`nav-link ${isActive('/blog') ? 'active' : ''}`} to="/blog" role="menuitem" aria-current={isActive('/blog') ? 'page' : undefined}>
                  Blog
                </Link>
              </li>
              <li className="nav-item" role="none">
                <Link className={`nav-link ${isActive('/tools') ? 'active' : ''}`} to="/tools" role="menuitem" aria-current={isActive('/tools') ? 'page' : undefined}>
                  Free Tools
                </Link>
              </li>
              <li className="nav-item" role="none">
                <Link className={`nav-link ${isActive('/careers') ? 'active' : ''}`} to="/careers" role="menuitem" aria-current={isActive('/careers') ? 'page' : undefined}>
                  Careers
                </Link>
              </li>
            </ul>

            <div className="nav-btns d-flex ms-lg-3 align-items-center gap-2">
              <Link className="btn nav-cta-primary" to="/contact">Get Your Free Strategy Session</Link>
              <a className="btn nav-cta-whatsapp" href="https://wa.me/qr/7GSRQFMD6AMZG1" target="_blank" rel="noopener noreferrer">
                <WhatsappIconNav /> Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
