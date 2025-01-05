// Partners.jsx
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../../css/HomePage/Partners.css';

// Import your partner logos
import maxhub from '../../assets/images/partners/MAXHUB.png';
import huawei from '../../assets/images/partners/huawei.png';
import schneider from '../../assets/images/partners/schneider.png';
import hikvision from '../../assets/images/partners/hik.png';
import minrray from '../../assets/images/partners/logo-minrray.png';
import visionic from '../../assets/images/partners/vissonic.png';

const Partners = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="par-partners-section py-5">
            <Container>
                <Row className="align-items-center">
                    {/* Left Column - Text Content */}
                    <Col lg={4} className="par-partners-content">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="par-section-header"
                        >
                            <span className="par-subtitle">Our Business Partners</span>
                            <h2 className="par-title">
                                Partners with <span className="par-highlight">Global</span><br />
                                <span className="par-highlight">Companies</span>
                            </h2>
                            <p className="par-description">
                                We've been lucky to collaborate with a long list of international 
                                partners, located in and out of the country. Thanks to them we have 
                                grown as professionals.
                            </p>
                        </motion.div>
                    </Col>

                    {/* Right Column - Partner Logos */}
                    <Col lg={8}>
                        <motion.div
                            className="par-partners-grid"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                { src: maxhub, alt: "Maxhub" },
                                { src: huawei, alt: "Huawei" },
                                { src: schneider, alt: "Schneider Electric" },
                                { src: hikvision, alt: "Hikvision" },
                                { src: minrray, alt: "Minrray" },
                                { src: visionic, alt: "Visionic" }
                            ].map((partner, index) => (
                                <motion.div
                                    key={index}
                                    className="par-partner-logo"
                                    variants={itemVariants}
                                >
                                    <img src={partner.src} alt={partner.alt} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Partners;