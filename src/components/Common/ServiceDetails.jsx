import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../css/Common/ServiceDetails.css';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SDQuickLinks = ({ links }) => (
    <div className="sd-quick-links">
        <h3>Quick Services Links</h3>
        <ul>
            {links.map((link, index) => (
                <li key={`sd-quick-link-${index}`}>
                    <Link to={link.url}>{link.title}</Link>
                </li>
            ))}
        </ul>
    </div>
);

const SDContactBox = ({ number }) => (
    <div className="sd-contact-box">
        <h4>Contact Us Now</h4>
        <div className="sd-contact-title">For Help</div>
        <div className="sd-contact-number">
            <a href={`tel:${number}`}>{number}</a>
        </div>
    </div>
);

const SDCategory = ({ category }) => (
    <div className="sd-category">
        <h3>{category.title}</h3>
        <ol>
            {category.items.map((item, idx) => (
                <li key={`sd-category-item-${idx}`}>
                    <span className="sd-category-number">{idx + 1}</span>
                    {item}
                </li>
            ))}
        </ol>
    </div>
);

const SDPartners = ({ partners }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slidesToShow = window.innerWidth <= 576 ? 1 : 
                        window.innerWidth <= 768 ? 2 : 
                        window.innerWidth <= 991 ? 3 : 4;

    const maxIndex = partners.length - slidesToShow;

    const nextSlide = () => {
        setActiveIndex(prev => 
            prev >= maxIndex ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setActiveIndex(prev => 
            prev <= 0 ? maxIndex : prev - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="sd-partners-section py-5">
            <Container>
                <h3 className="text-left mb-4">Brought to you by:</h3>
                <Row className="align-items-center">
                    <Col>
                        <div className="partners-slider">
                            <button 
                                className="slider-arrow prev" 
                                onClick={prevSlide}
                                aria-label="Previous"
                            >
                                ‹
                            </button>
                            
                            <div className="slider-container">
                                <div 
                                    className="slider-track"
                                    style={{
                                        transform: `translateX(-${activeIndex * (100 / slidesToShow)}%)`
                                    }}
                                >
                                    {partners.map((partner, index) => (
                                        <div 
                                            key={index} 
                                            className="slider-item"
                                            style={{ width: `${100 / slidesToShow}%` }}
                                        >
                                            <div className="logo-container">
                                                <img
                                                    src={partner.logo}
                                                    alt={partner.name}
                                                    className="partner-logo"
                                                    style={{ width: '150px', height: 'auto'}} // Fixed size
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button 
                                className="slider-arrow next" 
                                onClick={nextSlide}
                                aria-label="Next"
                            >
                                ›
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

const ServiceDetailsView = ({ 
    title,
    mainImage,
    quickLinks,
    contactNumber,
    serviceCategories,
    partners,
    description
}) => {
    return (
        <section className="sd-wrapper">
            <div className="sd-container">
                <aside className="sd-sidebar">
                    <SDQuickLinks links={quickLinks} />
                    <SDContactBox number={contactNumber} />
                </aside>

                <main className="sd-main-content">
                    <h1>{title}</h1>
                    {description && <p className="sd-description">{description}</p>}
                    
                    <div className="sd-main-image">
                        <img 
                            src={mainImage} 
                            alt={title}
                            loading="lazy"
                        />
                    </div>

                    {serviceCategories.map((category, index) => (
                        <SDCategory 
                            key={`sd-category-${index}`} 
                            category={category} 
                        />
                    ))}
                </main>
            </div>

            <SDPartners partners={partners} />
        </section>
    );
};

ServiceDetailsView.propTypes = {
    title: PropTypes.string.isRequired,
    mainImage: PropTypes.string.isRequired,
    quickLinks: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
    contactNumber: PropTypes.string.isRequired,
    serviceCategories: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            items: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
    partners: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            logo: PropTypes.string.isRequired,
        })
    ).isRequired,
    description: PropTypes.string,
};

export default ServiceDetailsView;