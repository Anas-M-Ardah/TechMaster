import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../Footer';
import Header from '../Header';
import PageHeader from '../Common/PageHeader';
import '../../css/ContactUsPage/ContactUs.css';

function ContactUs() {
    return (
        <>
            <Header />
            <PageHeader 
                title="Contact Us" 
                breadcrumb={[
                    { title: "Home", url: "/" },
                    { title: "Contact Us", url: "/contact-us" }
                ]}
            />
            <section className="contact-us-section py-5">
                <Container>
                    <Row className="mb-5">
                        <Col md={6}>
                            <h2 className="contact-us-title">
                                Grow Your Business With <span className="text-primary">Our Expertise</span>
                            </h2>
                            <p className="contact-us-description">
                                Technology Master provides its customers with professional technical support services making sure that Technology Master clients will get the assistance they need.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className="mb-4">
                            <div className="contact-info-box">
                                <h5>Office Address</h5>
                                <p>Building 219, Wasfi Tal St, Khalda, Amman, Jordan</p>
                            </div>
                            <div className="contact-info-box">
                                <h5>Telephone Number</h5>
                                <p>+962-79-909-4176</p>
                            </div>
                            <div className="contact-info-box">
                                <h5>Email Address</h5>
                                <p>malardah@technology-master.com</p>
                            </div>
                        </Col>
                        <Col md={8}>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="formName">
                                            <Form.Label>Name (required)</Form.Label>
                                            <Form.Control type="text" placeholder="Your Name*" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Email Address (required)</Form.Label>
                                            <Form.Control type="email" placeholder="Your Email Address*" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="formPhone">
                                            <Form.Label>Phone (optional)</Form.Label>
                                            <Form.Control type="text" placeholder="Your Phone Number" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group controlId="formMessage">
                                    <Form.Label>Your message</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder="Type your message*" required />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mt-3">
                                    Send message
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <h5 className="mb-3">Our Location</h5>
                            <div className="location-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019284123456!2d-122.419415484681!3d37.77492927975933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b6b6b6b%3A0x4b6b6b6b6b6b6b6b!2sYour%20Location!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="300"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
}

export default ContactUs;