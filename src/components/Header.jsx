import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import '../css/Header.css';

import logo from '/images/technology-master-logo.png';

const SERVICE_LINKS = [
  { to: '/services', label: 'All services' },
  { to: '/services/data-center', label: 'Data center' },
  { to: '/services/structure-cabling', label: 'Structure cabling' },
  { to: '/services/smart-building', label: 'Smart building' },
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
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="header-toggle-bar" />
          <span className="header-toggle-bar" />
        </button>
      </div>

      <div className="header-panel" id="header-panel" hidden={!isOpen}>
        <nav aria-label="Mobile">
          <Link to="/" className="header-panel-link">
            Home
          </Link>
          <Link to="/about" className="header-panel-link">
            About
          </Link>

          <button
            type="button"
            className={`header-panel-link header-panel-toggle${isServicesOpen ? ' is-open' : ''}`}
            onClick={() => setIsServicesOpen((open) => !open)}
            aria-expanded={isServicesOpen}
          >
            Services
            <FiChevronDown aria-hidden="true" />
          </button>

          {isServicesOpen && (
            <div className="header-panel-sub">
              {SERVICE_LINKS.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <Link to="/partners" className="header-panel-link">
            Partners
          </Link>
          <Link to="/clients" className="header-panel-link">
            Clients
          </Link>
          <Link to="/contact" className="header-panel-link">
            Contact us
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
