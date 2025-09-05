import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTimes, FaPlayCircle } from 'react-icons/fa';
import '../css/Footer.css';

// Import your logo, gallery images, and videos
import logo from '/images/technology-master-logo.png';
import movenpick from '/images/gallery/movenpick-event.jpeg';
import gallery1 from '/images/gallery/gallery1.webp';
import gallery2 from '/images/gallery/gallery2.webp';
import gallery3 from '/images/gallery/gallery3.webp';
import gallery4 from '/images/gallery/gallery4.webp';
import gallery5 from '/images/gallery/gallery5.webp';
import gallery6 from '/images/gallery/gallery6.jpg';
import senmarPhoto from '/images/gallery/senmar-photo.jpeg';
import finnishSchools from '/images/gallery/finnish-school.jpeg';


import sampleVideo1 from '../assets/videos/sample-vid-1.mp4';
import sampleVideo2 from '../assets/videos/sample-vid-2.mp4';
import movenpickVideo from '../assets/videos/movenpick-event.mp4';
import senmarVideo from '../assets/videos/senmar.mp4';
import finnishSchoolsVideo from '../assets/videos/finnish-school-vid.mp4';


const Footer = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const galleryItems = [
        { id: 0, src: movenpick, alt: "Movenpick Event", type: "image" },
        { id: 1, src: gallery1, alt: "Gallery 1", type: "image" },
        { id: 2, src: gallery2, alt: "Gallery 2", type: "image" },
        { id: 3, src: gallery3, alt: "Gallery 3", type: "image" },
        { id: 4, src: gallery4, alt: "Gallery 4", type: "image" },
        { id: 5, src: gallery5, alt: "Gallery 5", type: "image" },
        { id: 6, src: gallery6, alt: "Gallery 6", type: "image" },
        { id: 7, src: senmarPhoto, alt: "Senmar Photo", type: "image" },
        { id: 8, src: finnishSchools, alt: "Finnish Schools", type: "image" },
        { id: 8, src: movenpickVideo, alt: "Movenpick Event Video", type: "video" },
        { id: 9, src: sampleVideo1, alt: "Sample Video 1", type: "video" },
        { id: 10, src: sampleVideo2, alt: "Sample Video 2", type: "video" },
        { id: 11, src: senmarVideo, alt: "Senmar Video", type: "video" },
        { id: 12, src: finnishSchoolsVideo, alt: "Finnish Schools Video", type: "video" },
    ];

    const handleVideoClick = (videoSrc) => {
        const videoElement = document.createElement('video');
        videoElement.src = videoSrc;
        videoElement.controls = true;
        videoElement.style.width = '100%';
        videoElement.style.height = '100%';
        document.body.appendChild(videoElement);

        const requestFullscreen = videoElement.requestFullscreen || videoElement.mozRequestFullScreen || videoElement.webkitRequestFullscreen || videoElement.msRequestFullscreen;
        if (requestFullscreen) {
            requestFullscreen.call(videoElement);
        }

        videoElement.onfullscreenchange = () => {
            if (!document.fullscreenElement) {
                videoElement.remove();
            }
        };
    };

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
                        <a href="https://www.facebook.com/profile.php?id=100091914343555" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul className="quick-links">
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
                        {galleryItems.map((item) => (
                            item.type === "image" ? (
                                <img
                                    key={item.id}
                                    src={item.src}
                                    alt={item.alt}
                                    onClick={() => setSelectedImage(item)}
                                    className="gallery-image"
                                />
                            ) : (
                                <div key={item.id} className="gallery-video-container" onClick={() => handleVideoClick(item.src)}>
                                    <video
                                        className="gallery-video"
                                        src={item.src}
                                        alt={item.alt}
                                    />
                                    <FaPlayCircle className="play-icon" />
                                </div>
                            )
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
                <p>© {new Date().getFullYear()} Technology Master | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;