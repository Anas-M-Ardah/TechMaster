// MaxHub.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Header from "../../Header";
import Footer from "../../Footer";
import PageHeader from "../../Common/PageHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MaxHub.css";

//images
import v7 from "../../../assets/images/partners/MaxHub/INTERACTIVE-FLAT-PANEL/v7.webp";
import wireless_dongle from "../../../assets/images/partners/MaxHub/ACCESSORIES/wireless-dongle.jpg";
import blackboard from "../../../assets/images/partners/MaxHub/INTERACTIVE-FLAT-PANEL/blackboard.webp";

const MaxHub = () => {
    const featuredProducts = [
        {
            id: 1,
            name: "XBoard V7 Series",
            image: v7,
            description: "",
            url: "https://www.maxhub.com/en/xboard_v7_series/"
        },
        {
            id: 2,
            name: "Wireless Dongle",
            image: wireless_dongle,
            description: "",
            url: "https://www.maxhub.com/en/wireless-dongle",
        },
        {
            id: 3,
            name: "MAXHUB UC BM21",
            description: "Bluetooth Speakerphone",
            image: blackboard,
            url: "/maxhub/uc-bm21"
        }
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="maxhub-page">
            <Header />
            <PageHeader
                title="MAXHUB"
                breadcrumb={[
                    { title: "Home", url: "/" },
                    { title: "Business Partners", url: "/business-partners" },
                    { title: "MAXHUB", url: "/maxhub" }
                ]}
            />

            <div className="maxhub-container">
                <Container>
                    <Row className="maxhub-intro-section mb-5">
                        <Col>
                            <h2 className="maxhub-section-title">About MAXHUB</h2>
                            <p className="maxhub-intro-text">
                                MAXHUB is a world-renowned brand specialized in developing and manufacturing interactive displays
                                and audio-visual collaboration solutions. With a focus on innovation and user experience, MAXHUB
                                provides cutting-edge technology solutions for modern workplaces and educational institutions.
                            </p>
                        </Col>
                    </Row>
                </Container>

                <div className="maxhub-products-section">
                    <Container>
                        <h2 className="maxhub-section-title">Featured Products</h2>
                    </Container>

                    <div className="maxhub-slider-container">
                        <Slider {...sliderSettings}>
                            {featuredProducts.map(product => (
                                <div key={product.id} className="maxhub-slider-item">
                                    <Link to={product.url} className="maxhub-product-link">
                                        <div className="maxhub-product-card">
                                            <div className="maxhub-product-image-container">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="maxhub-product-image"
                                                />
                                            </div>
                                            <div className="maxhub-product-content">
                                                <h3 className="maxhub-product-title">{product.name}</h3>
                                                <p className="maxhub-product-description">{product.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <Container>
                        <Row className="maxhub-cta-section mt-4">
                            <Col className="text-center">
                                <Link to="/maxhub/products">
                                    <Button className="maxhub-view-all-btn">
                                        View All Products
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MaxHub;