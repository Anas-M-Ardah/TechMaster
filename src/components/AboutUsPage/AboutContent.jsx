// components/AboutUsPage/AboutContent.jsx
import React, { useState } from 'react';
import '../../css/AboutUsPage/AboutContent.css';
import { FaTrophy } from 'react-icons/fa';
import aboutImage from '../../assets/images/banner1.jpg';

const AboutContent = () => {
    const [activeTab, setActiveTab] = useState('mission');

    const tabContent = {
        mission: "To empower our clients with an intelligent and excellent IT infrastructure equipped with smart technology for their homes and business that makes their life easier while enabling them to optimize the efficiency of their business operations in an always-on-line and controlled network",
        vision: "To be the world leader in providing flexible, end-to-end solutions for the design, deployment, and management of the provide a world-class effective, efficient, and consistent on-premises and Data Centers, Low Current, Cloud IT Infrastructure Solutions Implementation and support services and enable customers to consume technology in their business roles"
    };

    return (
        <div className="tm-about-content">
            <div className="tm-about-container">
                <div className="tm-about-grid">
                    <div className="tm-about-text" data-aos="fade-right">
                        <div className="tm-about-breadcrumb">
                            <span>About us</span>
                            <span className="tm-about-arrow">→</span>
                        </div>
                        
                        <h2>Choose <span className="tm-about-highlight">The Best</span><br />Solutions Provider</h2>
                        
                        <p className="tm-about-main-description">
                            an ICT (Information & Communication Technology) Solutions & Services provider. We help clients plan, Design Optimize, and support the mission of IT Infrastructure, Data Centers & Smart Solutions.
                        </p>

                        <p className="tm-about-sub-description">
                            We develop and customize Solutions for Customers targeting state-of-the-art solution.
                        </p>

                        <p className="tm-about-detailed-info">
                            Today, Technology Master offers cutting-edge enterprise solutions across all industry segments in the Kingdom. Its capability as a total solutions provider is further enhanced with its portfolio of services in networking, systems integration, consultation and implementation, business recovery, and operations support
                        </p>

                        <div className="tm-about-tabs">
                            <button 
                                className={`tm-about-tab ${activeTab === 'mission' ? 'active' : ''}`}
                                onClick={() => setActiveTab('mission')}
                            >
                                Our Mission
                            </button>
                            <button 
                                className={`tm-about-tab ${activeTab === 'vision' ? 'active' : ''}`}
                                onClick={() => setActiveTab('vision')}
                            >
                                Our Vision
                            </button>
                        </div>

                        <div className="tm-about-tab-content">
                            <p>
                                {tabContent[activeTab]}
                            </p>
                        </div>
                    </div>

                    <div className="tm-about-image-container" data-aos="fade-left">
                        <div className="tm-about-image-wrapper">
                            <img src={aboutImage} alt="About Us" />
                        </div>
                        <div className="tm-about-excellence-card">
                            <FaTrophy className="tm-about-trophy-icon" />
                            <h3>Thriving for Excellence</h3>
                            <p>We aim to always be the market leader in providing solutions to clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;