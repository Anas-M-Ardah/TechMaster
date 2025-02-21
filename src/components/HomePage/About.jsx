// About.jsx
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaServer, FaUsers, FaPhoneAlt } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../../css/HomePage/About.css';

const About = () => {
    return (
        <section className="about-section py-5">
            <div className="pattern-overlay"></div>
            <Container style={{ width: '95%', maxWidth: '95%' }}>
                <Row className="align-items-center justify-content-center">
                    <Col lg={5} className="about-content pe-lg-4" data-aos="fade-right">
                        <div className="mb-4">
                            <span className="subtitle text-primary fw-semibold text-uppercase">
                                About Technology Master
                            </span>
                            <h2 className="title fw-bold mt-2">
                                A Team of <span className="text-primary">Experts</span>
                            </h2>
                        </div>

                        <p className="description text-muted">
                            We are an ICT (Information & Communication Technology) 
                            Solutions & Services Provider. We help clients 
                            <span className="fw-semibold text-dark"> plan, design, optimize,</span> and 
                            <span className="fw-semibold text-dark"> support</span> the mission of IT Infrastructure, 
                            Data Centers & Smart Solutions.
                        </p>

                        <div className="features">
                            <div className="feature-card p-3 mb-3 bg-white rounded shadow-sm" data-aos="fade-up" data-aos-delay="100">
                                <div className="d-flex align-items-start">
                                    <div className="feature-icon-wrapper">
                                        <FaServer className="feature-icon" />
                                    </div>
                                    <div className="ms-3">
                                        <h3 className="h5 fw-bold mb-2">Constant Technical Support</h3>
                                        <p className="text-muted mb-0">
                                            Technology Master provides its customers with professional 
                                            technical support services making sure That Technology Master 
                                            clients will get the assistance they need.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="feature-card p-3 mb-3 bg-white rounded shadow-sm" data-aos="fade-up" data-aos-delay="200">
                                <div className="d-flex align-items-start">
                                    <div className="feature-icon-wrapper">
                                        <FaUsers className="feature-icon" />
                                    </div>
                                    <div className="ms-3">
                                        <h3 className="h5 fw-bold mb-2">Expert Team Member</h3>
                                        <p className="text-muted mb-0">
                                            Technology Master has an elite team of highly qualified 
                                            professionals who provide specialist solutions for clients
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-wrap gap-3 mt-4" data-aos="fade-up" data-aos-delay="300">
                            <Button variant="primary" className="contact-btn d-inline-flex align-items-center">
                                <FaPhoneAlt className="me-2" />
                                Contact Us: +962-79-909-4176
                            </Button>

                            <Link to="/about" className="text-decoration-none">
                                <Button variant="outline-primary" className="more-btn d-inline-flex align-items-center">
                                    More About Us <BsArrowRight className="ms-2" />
                                </Button>
                            </Link>
                        </div>
                    </Col>

                    <Col lg={6} className="about-image-col" data-aos="fade-left">
                        <div className="image-wrapper">
                            <div className="experience-badge" data-aos="zoom-in" data-aos-delay="300">
                                <span className="number">15+</span>
                                <span className="text">Years of Experience</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;