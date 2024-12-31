// Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import '../css/Footer.css';

// Import your logo and gallery images
import logo from '../assets/images/technology-master-logo.png';
import gallery1 from '../assets/images/gallery/gallery1.webp';
import gallery2 from '../assets/images/gallery/gallery2.webp';
import gallery3 from '../assets/images/gallery/gallery3.webp';
import gallery4 from '../assets/images/gallery/gallery4.webp';
import gallery5 from '../assets/images/gallery/gallery5.webp';
import gallery6 from '../assets/images/gallery/gallery6.jpg';
import gallery7 from '../assets/images/gallery/gallery7.jpg';
import gallery8 from '../assets/images/gallery/gallery8.jpg';

const Footer = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const galleryImages = [
        { id: 1, src: gallery1, alt: "Gallery 1" },
        { id: 2, src: gallery2, alt: "Gallery 2" },
        { id: 3, src: gallery3, alt: "Gallery 3" },
        { id: 4, src: gallery4, alt: "Gallery 4" },
        { id: 5, src: gallery5, alt: "Gallery 5" },
        { id: 6, src: gallery6, alt: "Gallery 6" },
        { id: 7, src: gallery7, alt: "Gallery 7" },
        { id: 8, src: gallery8, alt: "Gallery 8" },
    ];

    return (
        <footer className="footer">
            <div className="footer-overlay"></div>
            <div className="footer-content">
                {/* Company Info Section */}
                <div className="footer-section">
                    <img src={logo} alt="Technology Master Logo" className="footer-logo" />
                    <p className="company-description">
                        Helping clients plan, design, optimize, and support the mission of IT Infrastructure, Data Centers & Smart Solutions
                    </p>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Our Services</Link></li>
                        <li><Link to="/partners">Our Business Partners</Link></li>
                        <li><Link to="/clients">Our Clients</Link></li>
                    </ul>
                </div>

                {/* Reach Us Section */}
                <div className="footer-section">
                    <h3>Reach Us</h3>
                    <div className="contact-info">
                        <div className="contact-item">
                            <FaPhone className="contact-icon" />
                            <div>
                                <p>Give us a Call</p>
                                <a href="tel:+962-79-909-4176">+962-79-909-4176</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <FaEnvelope className="contact-icon" />
                            <div>
                                <p>Send Us An Email</p>
                                <a href="mailto:malardah@technology-master.com">
                                    malardah@technology-master.com
                                </a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <FaMapMarkerAlt className="contact-icon" />
                            <div>
                                <p>Our Address</p>
                                <address>
                                    Building 219, Wasfi Tal St, Khalda, Amman, Jordan
                                </address>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="footer-section">
                    <h3>Gallery</h3>
                    <div className="gallery-grid">
                        {galleryImages.map((image) => (
                            <img
                                key={image.id}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => setSelectedImage(image)}
                                className="gallery-image"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
                    <button className="modal-close" onClick={() => setSelectedImage(null)}>
                        <FaTimes />
                    </button>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                    </div>
                </div>
            )}

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>© 2024 Technology Master | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;