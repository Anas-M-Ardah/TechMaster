import React from 'react';
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
    const chunkSize = 4; // Number of logos per slide
    const partnerChunks = [];

    for (let i = 0; i < partners.length; i += chunkSize) {
        partnerChunks.push(partners.slice(i, i + chunkSize));
    }

    return (
        <Container className="sd-partners-slider">
            <h3 className="text-left mb-4">Brought to you by:</h3>
            <Carousel indicators={false} interval={3000} controls={false}>
                {partnerChunks.map((chunk, index) => (
                    <Carousel.Item key={`sd-partner-chunk-${index}`}>
                        <Row className="justify-content-center">
                            {chunk.map((partner, idx) => (
                                <Col key={`sd-partner-${idx}`} xs={6} md={3} className="text-center">
                                    <img 
                                        src={partner.logo} 
                                        alt={partner.name}
                                        loading="lazy"
                                        className="img-fluid"
                                        style={{ width: '150px', height: 'auto' }} // Fixed size
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
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