import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import logo from "../../Images/logo.png";
import { categories } from '../../Data/projects';

const projectSublinks = categories.filter((c) => c.slug !== 'all');

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
            <img src={logo} alt="Orbitrix Solutions logo" />
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
                  <FontAwesomeIcon icon={faChevronDown} className={`nav-dropdown-arrow ${dropdownOpen ? 'open' : ''}`} />
                </button>

                {dropdownOpen && (
                  <ul className="nav-dropdown-menu" role="menu">
                    {projectSublinks.map((cat) => (
                      <li key={cat.slug} role="none">
                        <Link className="nav-dropdown-item" to={`/projects?category=${cat.slug}`} role="menuitem">
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
                  <FontAwesomeIcon icon={faChevronDown} className={`nav-dropdown-arrow ${mobileProjectsOpen ? 'open' : ''}`} />
                </button>
                {mobileProjectsOpen && (
                  <ul className="nav-mobile-submenu" id="mobile-projects-submenu" role="menu">
                    {projectSublinks.map((cat) => (
                      <li key={cat.slug} role="none">
                        <Link className="nav-mobile-submenu-link" to={`/projects?category=${cat.slug}`} role="menuitem">{cat.label}</Link>
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
            </ul>

            <div className="nav-btns d-flex ms-lg-3 align-items-center gap-2">
              <Link className="btn nav-cta" to="/contact">Get a Quote</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
