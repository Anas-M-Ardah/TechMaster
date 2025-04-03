import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ServicesCard from './ServicesCard';
import {
    FaDesktop,
    FaFireExtinguisher,
    FaNetworkWired
} from 'react-icons/fa';
import '../../css/HomePage/Services.css';

// Import service images
import service1 from '/images/services/service1.webp';
import service2 from '/images/services/service2.webp';
import service3 from '/images/services/service3.webp';
import service4 from '/images/services/service4.webp';

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const services = useMemo(() => [
        {
            id: 1,
            title: "LED Panel & Digital Signage",
            icon: <FaDesktop />,
            image: service1,
            link: "/services"
        },
        {
            id: 2,
            title: "Fire Extinguishing Aerosol Systems",
            icon: <FaFireExtinguisher />,
            image: service2,
            link: "/services"
        },
        {
            id: 3,
            title: "IT Services & Network",
            icon: <FaNetworkWired />,
            image: service3,
            link: "/services"
        },
        {
            id: 4,
            title: "LED Panel & Digital Signage",
            icon: <FaDesktop />,
            image: service4,
            link: "/services"
        }
    ], []);

    // Auto-sliding effect
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(slideInterval);
    }, [services.length]);

    const getVisibleServices = useMemo(() => {
        return services.slice(activeIndex, activeIndex + 3)
            .concat(services.slice(0, Math.max(0, (activeIndex + 3) - services.length)));
    }, [activeIndex, services]);

    return (
        <section className="services-section py-5">
            <Container>
                <div className="text-center mb-5" data-aos="fade-up">
                    <span className="subtitle">Our Services</span>
                    <h2 className="title">
                        We Offer Special <span className="highlight">Services</span> Here
                    </h2>
                </div>

                <div className="services-slider" data-aos="fade-up">
                    <div className="services-track">
                        {getVisibleServices.map((service, index) => (
                            <div
                                key={service.id}
                                className={`service-slide ${index === 1 ? 'active' : ''}`}
                            >
                                <ServicesCard {...service} />
                            </div>
                        ))}
                    </div>

                    <div className="dots-and-arrows">
                        <div className="slider-dots">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === activeIndex ? 'active' : ''}`}
                                    onClick={() => setActiveIndex(index)}
                                    aria-label={`Go to service ${index + 1}`}
                                >
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <Link to="/services">
                            <button
                                className="more-services-btn"
                                aria-label="View More Services"
                            >
                                More Services +
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Services;