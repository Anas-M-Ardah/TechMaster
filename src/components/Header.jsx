import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronDown, FiArrowUpRight, FiArrowRight } from 'react-icons/fi';
import '../css/Header.css';

import logo from '/images/technology-master-logo.png';

const SERVICE_LINKS = [
  { to: '/services', label: 'All services' },
  { to: '/services/data-center', label: 'Data center' },
  { to: '/services/structure-cabling', label: 'Structure cabling' },
  { to: '/services/smart-building', label: 'Smart building' },
];

// Numbered in the panel, matching the index language used across the site.
const PANEL_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services', group: true },
  { to: '/partners', label: 'Partners' },
  { to: '/clients', label: 'Clients' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // The home page opens on a dark hero, so the bar starts transparent there and
  // only takes on a surface once the visitor has scrolled past it.
  const isOverlay = location.pathname === '/' && !isScrolled;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hold the page still while the mobile panel is open.
  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const handleServicesClick = (event) => {
    if (!isMobile) return;
    event.preventDefault();
    setIsServicesOpen((open) => !open);
  };

  const isServicesRoute = location.pathname.startsWith('/services');

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`header${isScrolled ? ' is-solid' : ''}${isOverlay ? ' is-overlay' : ''}${
        isOpen ? ' is-open' : ''
      }`}
    >
      <div className="header-bar">
        <Link to="/" className="header-logo" aria-label="Technology Master — home">
          <img src={logo} alt="Technology Master" />
        </Link>

        <nav className="header-nav" aria-label="Primary">
          <Link to="/" className={`header-link${location.pathname === '/' ? ' is-active' : ''}`}>
            Home
          </Link>

          <Link
            to="/about"
            className={`header-link${location.pathname === '/about' ? ' is-active' : ''}`}
          >
            About
          </Link>

          <div className="header-dropdown">
            <Link
              to="/services"
              className={`header-link${isServicesRoute ? ' is-active' : ''}`}
              onClick={handleServicesClick}
            >
              Services
              <FiChevronDown className="header-caret" aria-hidden="true" />
            </Link>

            <div className="header-menu">
              {SERVICE_LINKS.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/partners"
            className={`header-link${location.pathname === '/partners' ? ' is-active' : ''}`}
          >
            Partners
          </Link>

          <Link
            to="/clients"
            className={`header-link${location.pathname === '/clients' ? ' is-active' : ''}`}
          >
            Clients
          </Link>

          <Link to="/contact" className="header-cta">
            Contact us
          </Link>
        </nav>

        <button
          type="button"
          className="header-toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="header-panel"
        >
          <span className="header-toggle-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="header-toggle-label tm-num">{isOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      <div className="header-panel" id="header-panel" hidden={!isOpen}>
        <nav className="header-panel-nav" aria-label="Mobile">
          {PANEL_LINKS.map((link, i) => {
            const index = String(i + 1).padStart(2, '0');

            if (link.group) {
              return (
                <div className="header-panel-group" key={link.to} style={{ '--i': i }}>
                  <button
                    type="button"
                    className={`header-panel-link header-panel-toggle${
                      isServicesOpen ? ' is-open' : ''
                    }`}
                    onClick={() => setIsServicesOpen((open) => !open)}
                    aria-expanded={isServicesOpen}
                  >
                    <span className="header-panel-index tm-num">{index}</span>
                    <span className="header-panel-label">{link.label}</span>
                    <FiChevronDown className="header-panel-caret" aria-hidden="true" />
                  </button>

                  {isServicesOpen && (
                    <div className="header-panel-sub">
                      {SERVICE_LINKS.map((sub) => (
                        <Link key={sub.to} to={sub.to}>
                          {sub.label}
                          <FiArrowRight aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link to={link.to} className="header-panel-link" key={link.to} style={{ '--i': i }}>
                <span className="header-panel-index tm-num">{index}</span>
                <span className="header-panel-label">{link.label}</span>
                <FiArrowUpRight className="header-panel-arrow" aria-hidden="true" />
              </Link>
            );
          })}
        </nav>

        <div className="header-panel-foot" style={{ '--i': PANEL_LINKS.length }}>
          <span className="header-panel-foot-label tm-num">Talk to us</span>
          <a href="tel:+962799094176">+962 79 909 4176</a>
          <a href="mailto:malardah@technology-master.com">malardah@technology-master.com</a>

          <Link to="/contact" className="tm-btn tm-btn-solid header-panel-cta">
            Start a conversation
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
