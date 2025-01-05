import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Footer from '../Footer';
import Header from '../Header';
import PageHeader from '../Common/PageHeader';
import '../../css/ContactUsPage/ContactUs.css';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/contact', formData);
            setResponseMessage(response.data.message);
        } catch (error) {
            setResponseMessage('Failed to send message. Please try again later.');
        }
    };

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
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="formName">
                                            <Form.Label>Name (required)</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="name"
                                                placeholder="Your Name*" 
                                                value={formData.name}
                                                onChange={handleChange}
                                                required 
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Email Address (required)</Form.Label>
                                            <Form.Control 
                                                type="email" 
                                                name="email"
                                                placeholder="Your Email Address*" 
                                                value={formData.email}
                                                onChange={handleChange}
                                                required 
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="formPhone">
                                            <Form.Label>Phone (optional)</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="phone"
                                                placeholder="Your Phone Number" 
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group controlId="formMessage">
                                    <Form.Label>Your message</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        name="message"
                                        rows={4} 
                                        placeholder="Type your message*" 
                                        value={formData.message}
                                        onChange={handleChange}
                                        required 
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mt-3">
                                    Send message
                                </Button>
                                {responseMessage && <p className="mt-3">{responseMessage}</p>}
                            </Form>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <h5 className="mb-3">Our Location</h5>
                            <div className="location-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3383.809706026183!2d35.85956907508888!3d31.993173673631727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBuilding%20219%2C%20Wasfi%20Tal%20St%2C%20Khalda%2C%20Amman%2C%20Jordan!5e0!3m2!1sen!2sjo!4v1736099352663!5m2!1sen!2sjo"
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