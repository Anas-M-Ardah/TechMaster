// Clients.jsx
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../css/HomePage/Clients.css';

// Import your client logos
import client1 from '../../assets/images/clients/client-1.png';
import client2 from '../../assets/images/clients/client-2.png';
import client3 from '../../assets/images/clients/client-3.webp';
import client4 from '../../assets/images/clients/client-4.webp';
import client5 from '../../assets/images/clients/client-5.webp';
import client6 from '../../assets/images/clients/client-6.webp';
import client7 from '../../assets/images/clients/client-7.webp';
import client8 from '../../assets/images/clients/client-8.png';
import client9 from '../../assets/images/clients/client-9.png';
import client10 from '../../assets/images/clients/client-10.png';
import client11 from '../../assets/images/clients/client-11.png';
import client12 from '../../assets/images/clients/client-12.png';

const Clients = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const logos = [
        client1, client2, client3, client4,
        client5, client6, client7, client8,
        client9, client10, client11, client12
    ];

    const slidesToShow = window.innerWidth <= 576 ? 1 : 
                        window.innerWidth <= 768 ? 2 : 
                        window.innerWidth <= 991 ? 3 : 4;

    const maxIndex = logos.length - slidesToShow;

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
        <section className="clients-section py-5">
            <Container>
                <Row className="align-items-center">
                    <Col lg={3} className="mb-4 mb-lg-0">
                        <div className="clients-text">
                            <h2 className="fw-bold mb-3">
                                Join over <span className="text-primary">30+</span> happy clients!
                            </h2>
                            <p className="text-muted">
                                Trusted by leading companies worldwide
                            </p>
                        </div>
                    </Col>

                    <Col lg={9}>
                        <div className="clients-slider">
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
                                    {logos.map((logo, index) => (
                                        <div 
                                            key={index} 
                                            className="slider-item"
                                            style={{ width: `${100 / slidesToShow}%` }}
                                        >
                                            <div className="logo-container">
                                                <img
                                                    src={logo}
                                                    alt={`Client ${index + 1}`}
                                                    className="client-logo"
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

export default Clients;