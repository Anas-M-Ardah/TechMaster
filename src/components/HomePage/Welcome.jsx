// Welcome.jsx
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../css/HomePage/Welcome.css';
import backgroundVideo from '../../assets/videos/vid-1.mp4';
const Welcome = () => {
    return (
        <div className="welcome-section">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                className="background-video"
            >
                <source
                    src={backgroundVideo} // Use the imported video
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {/* Content Overlay */}
            <Container fluid className="content-overlay">
                <Row className="h-100 align-items-center">
                    <Col xs={12} className="text-center text-white">
                        <h1 className="main-title mb-4">
                            Integrating Technology with your business
                        </h1>
                        <p className="sub-title mb-5">
                            New technology Innovation Concept, Smart Solution, Data Center & IT infrastructure Solutions
                        </p>

                        <div className="button-group">
                            <Link to="/about">
                                <Button variant="outline-light" size="lg" className="mx-2 welcome-btn">
                                    About Us
                                </Button>
                            </Link>

                            <Link to="/services">
                                <Button variant="outline-light" size="lg" className="mx-2 welcome-btn">
                                    Our Services
                                </Button>
                            </Link>

                            <Link to="/contact">
                                <Button variant="outline-light" size="lg" className="mx-2 welcome-btn">
                                    See More
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Welcome;