import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css/Header.css';

import logo from '/images/technology-master-logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  // Check if mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleServicesClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      setIsServicesOpen(!isServicesOpen);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="header"
    >
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Company Logo" />
        </Link>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
          </button>
        )}

        {/* Navigation Links */}
        <nav className={`nav-links ${isMobile ? (isOpen ? 'show' : 'hide') : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About Us
          </Link>

          <div 
            className={`services-dropdown ${isServicesOpen ? 'active' : ''}`}
            onMouseEnter={() => !isMobile && setShowDropdown(true)}
            onMouseLeave={() => !isMobile && setShowDropdown(false)}
          >
            <Link
              to="/services"
              className={`services-link ${location.pathname.includes('/services') ? 'active' : ''}`}
              onClick={handleServicesClick}
            >
              Services {isMobile && <span className="dropdown-arrow">›</span>}
            </Link>
            <div className={`dropdown-content ${(showDropdown || (isMobile && isServicesOpen)) ? 'show' : ''}`}>
              <Link to="/services/" className="all-services-link">All Services</Link>
              <Link to="/services/data-center">Data Center</Link>
              <Link to="/services/structure-cabling">Structure Cabling</Link>
              <Link to="/services/smart-building">Smart Building</Link>
            </div>
          </div>

          <Link to="/partners" className={location.pathname === '/partners' ? 'active' : ''}>
            Business Partners
          </Link>

          <Link to="/clients" className={location.pathname === '/clients' ? 'active' : ''}>
            Clients
          </Link>

          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact Us
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;