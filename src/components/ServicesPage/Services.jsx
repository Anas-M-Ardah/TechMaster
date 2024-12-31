// components/Services/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/ServicePage/Services.css';

// Import your service images
import itServices from '../../assets/images/services/service5.webp';
import dataCenter from '../../assets/images/services/service1.webp';
import structureCabling from '../../assets/images/services/service2.webp';
import smartBuilding from '../../assets/images/services/service3.webp';
import smartClassroom from '../../assets/images/services/service7.webp';
import smartMeeting from '../../assets/images/services/service8.webp';
import lowCurrent from '../../assets/images/services/service6.webp';
import ledPanel from '../../assets/images/services/service4.webp';
import fireSystem from '../../assets/images/services/service9.webp';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "IT Services & Network",
            image: itServices,
            icon: "🖥️",
            link: "/services/it-services"
        },
        {
            id: 2,
            title: "Data Center Solution",
            image: dataCenter,
            icon: "🔋",
            link: "/services/data-center"
        },
        {
            id: 3,
            title: "Structure Cabling",
            image: structureCabling,
            icon: "🔌",
            link: "/services/structure-cabling"
        },
        {
            id: 4,
            title: "Smart Building Solution",
            image: smartBuilding,
            icon: "🏢",
            link: "/services/smart-building"
        },
        {
            id: 5,
            title: "Smart Classroom Solution",
            image: smartClassroom,
            icon: "📚",
            link: "/services/smart-classroom"
        },
        {
            id: 6,
            title: "Smart Meeting Rooms A/V",
            image: smartMeeting,
            icon: "🎥",
            link: "/services/smart-meeting"
        },
        {
            id: 7,
            title: "Low Current Solution",
            image: lowCurrent,
            icon: "⚡",
            link: "/services/low-current"
        },
        {
            id: 8,
            title: "LED Panel & Digital Signage",
            image: ledPanel,
            icon: "📺",
            link: "/services/led-panel"
        },
        {
            id: 9,
            title: "Fire Extinguishing Aerosol Systems",
            image: fireSystem,
            icon: "🧯",
            link: "/services/fire-system"
        }
    ];

    return (
        <section className="service-page-section">
            <div className="service-page-header" data-aos="fade-up">
                <div className="service-page-title">
                    <span>Our Services</span>
                    <h2>We provide the necessary<br />services to you</h2>
                </div>
            </div>

            <div className="service-page-grid" data-aos="fade-up">
                {services.map((service) => (
                    <Link 
                        to={service.link} 
                        className="service-page-card" 
                        key={service.id}
                        data-aos="fade-up"
                        data-aos-delay={(service.id - 1) * 100}
                    >
                        <div className="service-page-image">
                            <img src={service.image} alt={service.title} />
                            <div className="service-page-overlay">
                                <div className="service-page-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <span className="service-page-link">Learn More →</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Services;