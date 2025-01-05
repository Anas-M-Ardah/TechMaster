import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer';
import Header from '../Header';
import PageHeader from '../Common/PageHeader';
import '../../css/BusinessPartnersPage/BusinessPartners.css';

// Partner Logos
import maxhub from '../../assets/images/partners/maxhub.png';
import huawei from '../../assets/images/partners/huawei.png';
import schneider from '../../assets/images/partners/schneider.png';
import conteg from '../../assets/images/partners/Conteg-logo.png';
import hp from '../../assets/images/partners/hp.png';
import minrray from '../../assets/images/partners/logo-minrray.png';
import hikvision from '../../assets/images/partners/hik.png';
import leyard from '../../assets/images/partners/LEYARD.png';
import howen from '../../assets/images/partners/howen.png';
import vissonic from '../../assets/images/partners/vissonic.png';
import navori from '../../assets/images/partners/navori-labs.png';
import honeyw from '../../assets/images/partners/honeyw.png';
import comm from '../../assets/images/partners/comm.png';
import nexans from '../../assets/images/partners/nexans.png';
import techline from '../../assets/images/partners/techline.png';
import fireban from '../../assets/images/partners/FireBan.webp';

const partners = [
    { name: "Maxhub", logo: maxhub },
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
                                    <img 
                                        src={partner.logo} 
                                        alt={partner.name} 
                                        className="business-partner-logo"
                                    />
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