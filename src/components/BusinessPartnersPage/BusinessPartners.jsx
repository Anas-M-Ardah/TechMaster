import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Add this import
import Footer from '../Footer';
import Header from '../Header';
import PageHeader from '../Common/PageHeader';
import '../../css/BusinessPartnersPage/BusinessPartners.css';

// Partner Logos
import maxhub from '/images/partners/MAXHUB.png';
import huawei from '/images/partners/huawei.png';
import schneider from '/images/partners/schneider.png';
import conteg from '/images/partners/Conteg-logo.png';
import hp from '/images/partners/hp.png';
import minrray from '/images/partners/logo-minrray.png';
import hikvision from '/images/partners/hik.png';
import leyard from '/images/partners/LEYARD.png';
import howen from '/images/partners/howen.png';
import vissonic from '/images/partners/vissonic.png';
import navori from '/images/partners/navori-labs.png';
import honeyw from '/images/partners/honeyw.png';
import comm from '/images/partners/comm.png';
import nexans from '/images/partners/nexans.png';
import techline from '/images/partners/techline.png';
import fireban from '/images/partners/FireBan.webp';

const partners = [
    { name: "Maxhub", logo: maxhub, url: "/maxhub" },
    { name: "Huawei", logo: huawei },
    { name: "Schneider Electric", logo: schneider },
    { name: "Conteg", logo: conteg },
    { name: "HP", logo: hp },
    { name: "Minrray", logo: minrray },
    { name: "Hikvision", logo: hikvision },
    { name: "Leyard", logo: leyard },
    { name: "Howen", logo: howen },
    { name: "Vissonic", logo: vissonic },
    { name: "Navori Labs", logo: navori },
    { name: "Honeywell", logo: honeyw },
    { name: "Comm", logo: comm },
    { name: "Nexans", logo: nexans },
    { name: "Techline", logo: techline },
    { name: "FireBan", logo: fireban },
];

function BusinessPartners() {
    return (
        <>
            <Header />
            <PageHeader
                title="Our Business Partners"
                breadcrumb={[
                    { title: "Home", url: "/" },
                    { title: "Business Partners", url: "/business-partners" }
                ]}
            />
            <section className="business-partners-section py-5">
                <Container>
                    <h2 className="business-partners-title text-center mb-5">OUR BUSINESS PARTNERS</h2>
                    <Row className="justify-content-center business-partners-row">
                        {partners.map((partner, index) => (
                            <Col key={index} xs={6} md={3} className="text-center mb-4">
                                <div className="business-partner-logo-container">
                                    {partner.url ? (
                                        <Link to={partner.url}>
                                            <img
                                                src={partner.logo}
                                                alt={partner.name}
                                                className="business-partner-logo"
                                            />
                                        </Link>
                                    ) : (
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="business-partner-logo"
                                        />
                                    )}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
}

export default BusinessPartners;