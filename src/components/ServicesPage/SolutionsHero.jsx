// components/SolutionsHero/SolutionsHero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/ServicePage/SolutionsHero.css';
import heroImage from '/images/theme-15.jpg';

const SolutionsHero = () => {
    const solutions = [
        {
            id: 1,
            title: "Data Center",
            icon: "🗄️",
            link: "/services/data-center"
        },
        {
            id: 2,
            title: "LC Solution",
            icon: "⚡",
            link: "/services/lc-solution"
        },
        {
            id: 3,
            title: "Fire Fighting",
            icon: "🧯",
            link: "/services/fire-fighting"
        }
    ];

    return (
        <section className="tm-solutions-hero">
            <div className="tm-solutions-grid">
                {/* Left Section */}
                <div className="tm-solutions-left" style={{ backgroundImage: `url(${heroImage})` }}>
                    <div className="tm-solutions-left-content">
                        <span className="tm-solutions-label">More Into Our Services →</span>
                        <h2>A Variety of Solutions For You</h2>
                        <p>We deliver best-in-class solutions that will significantly enhance your business</p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="tm-solutions-right">
                    <div className="tm-solutions-right-content">
                        <div className="tm-solutions-header">
                            <span className="tm-solutions-subtitle">Giving Deep Care →</span>
                            <h2>Highly <span className="highlight">Professional</span> Solutions Provider Team</h2>
                            <p>We provide the full spectrum of IT services, solutions and consultations for various industries.</p>
                        </div>

                        <div className="tm-solutions-cards">
                            {solutions.map((solution) => (
                                <Link to={solution.link} key={solution.id} className="tm-solution-card">
                                    <div className="tm-solution-icon">{solution.icon}</div>
                                    <h3 className='tm-solution-title'>{solution.title}</h3>
                                    <div className="tm-solution-line"></div>
                                </Link>
                            ))}
                        </div>

                        <Link to="/about" className="tm-about-btn">About Us</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsHero;