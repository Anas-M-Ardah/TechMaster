// components/AboutUsPage/TimelineSection.jsx
import React, { useState, useEffect } from 'react';
import '../../css/AboutUsPage/TimelineSection.css';
import { FaCloud, FaLightbulb, FaFlag, FaArrowRight, FaLongArrowAltRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TimelineSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const timelineItems = [
        {
            icon: <FaCloud />,
            title: "Dream",
            subtitle: "Started from a dream",
            description: "It all began with an idea which grew",
            color: "#00BCD4"
        },
        {
            icon: <FaLightbulb />,
            title: "Implement",
            subtitle: "Then we began",
            description: "We decided to start Technology Master to provide solutions",
            color: "#2196F3"
        },
        {
            icon: <FaFlag />,
            title: "Present",
            subtitle: "Here we are",
            description: "Currently providing solutions for major organizations and continuing",
            color: "#1976D2"
        },
        {
            icon: <FaArrowRight />,
            title: "Future",
            subtitle: "What we aim for",
            description: "As we mentioned we plan to become the world leader in providing flexible, end-to-end solutions",
            color: "#0D47A1"
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === timelineItems.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? timelineItems.length - 1 : prev - 1));
    };

    // Auto slide for mobile
    useEffect(() => {
        if (isMobile) {
            const interval = setInterval(nextSlide, 3000);
            return () => clearInterval(interval);
        }
    }, [isMobile]);

    return (
        <div className="tm-timeline-section">
            <div className="tm-timeline-container">
                <div className={`tm-timeline ${isMobile ? 'mobile' : ''}`}>
                    {isMobile ? (
                        <>
                            <button className="tm-timeline-nav prev" onClick={prevSlide}>
                                <FaChevronLeft />
                            </button>
                            <div className="tm-timeline-mobile-wrapper">
                                <div 
                                    className="tm-timeline-mobile-slider"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    {timelineItems.map((item, index) => (
                                        <div 
                                            key={index}
                                            className={`tm-timeline-item ${index === currentSlide ? 'active' : ''}`}
                                        >
                                            <div 
                                                className="tm-timeline-icon-container"
                                                style={{ backgroundColor: item.color }}
                                            >
                                                {item.icon}
                                            </div>
                                            <div className="tm-timeline-content">
                                                <h3 style={{ color: item.color }}>{item.title}</h3>
                                                <h4>{item.subtitle}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button className="tm-timeline-nav next" onClick={nextSlide}>
                                <FaChevronRight />
                            </button>
                            <div className="tm-timeline-dots">
                                {timelineItems.map((_, index) => (
                                    <span 
                                        key={index}
                                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                                        onClick={() => setCurrentSlide(index)}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        // Desktop version remains the same
                        timelineItems.map((item, index) => (
                            <div 
                                className="tm-timeline-item" 
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="tm-timeline-icon-container" style={{ backgroundColor: item.color }}>
                                    {item.icon}
                                </div>
                                <div className="tm-timeline-content">
                                    <h4>{item.subtitle}</h4>
                                    <p>{item.description}</p>
                                </div>
                                {index < timelineItems.length - 1 && (
                                    <div className="tm-timeline-arrow">
                                        <FaLongArrowAltRight />
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimelineSection;