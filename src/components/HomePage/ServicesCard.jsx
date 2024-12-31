// ServicesCard.jsx
import { Link } from 'react-router-dom';
import '../../css/HomePage/ServicesCard.css';

const ServicesCard = ({ icon, title, image, link }) => {
    return (
        <div className="service-card">
            <div className="service-image">
                <img src={image} alt={title} />
                <div className="service-overlay"></div>
            </div>
            <div className="service-content">
                <div className="service-icon">
                    {icon}
                </div>
                <h3>{title}</h3>
                <Link to={link} className="service-link">
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default ServicesCard;