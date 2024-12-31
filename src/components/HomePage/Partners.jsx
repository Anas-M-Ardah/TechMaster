// Partners.jsx
import { Container, Row, Col } from 'react-bootstrap';
import '../../css/HomePage/Partners.css';

// Import your partner logos
import maxhub from '../../assets/images/partners/MAXHUB.png';
import huawei from '../../assets/images/partners/huawei.png';
import schneider from '../../assets/images/partners/schneider.png';
import hikvision from '../../assets/images/partners/hik.png';
import minrray from '../../assets/images/partners/logo-minrray.png';
import visionic from '../../assets/images/partners/visonic-logo.jpg';

const Partners = () => {
    return (
        <section className="partners-section py-5">
            <Container>
                <Row className="align-items-center">
                    {/* Left Column - Text Content */}
                    <Col lg={4} className="partners-content" data-aos="fade-right">
                        <div className="section-header">
                            <span className="subtitle">Our Business Partners</span>
                            <h2 className="title">
                                Partners with <span className="highlight">Global</span><br />
                                <span className="highlight">Companies</span>
                            </h2>
                            <p className="description">
                                We've been lucky to collaborate with a long list of international 
                                partners, located in and out of the country. Thanks to them we have 
                                grown as professionals.
                            </p>
                        </div>
                    </Col>

                    {/* Right Column - Partner Logos */}
                    <Col lg={8} data-aos="fade-left">
                        <div className="partners-grid">
                            <div className="partner-logo" data-aos="fade-up" data-aos-delay="100">
                                <img src={maxhub} alt="Maxhub" />
                            </div>
                            <div className="partner-logo" data-aos="fade-up" data-aos-delay="200">
                                <img src={huawei} alt="Huawei" />
                            </div>
                            <div className="partner-logo" data-aos="fade-up" data-aos-delay="300">
                                <img src={schneider} alt="Schneider Electric" />
                            </div>
                            <div className="partner-logo" data-aos="fade-up" data-aos-delay="400">
                                <img src={hikvision} alt="Hikvision" />
                            </div>
                            <div className="partner-logo" data-aos="fade-up" data-aos-delay="500">
                                <img src={minrray} alt="Minrray" />
                            </div>
                            <div className="partner-logo" data-aos="fade-up" data-aos-delay="600">
                                <img src={visionic} alt="Visionic" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Partners;