import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faDesktop, 
    faTv, 
    faLightbulb, 
    faVideo, 
    faComments, 
    faCamera, 
    faScrewdriverWrench, 
    faCode 
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './CategoryNav.css';

// Add icons to library
library.add(
    faDesktop, 
    faTv, 
    faLightbulb, 
    faVideo, 
    faComments, 
    faCamera, 
    faScrewdriverWrench, 
    faCode
);

const categoryIcons = {
    'interactive-flat-panel': faDesktop,
    'commercial-display': faTv,
    'led-display': faLightbulb,
    'unified-communication': faVideo,
    'microsoft-teams-rooms': faComments,
    'capture-system': faCamera,
    'accessories': faScrewdriverWrench,
    'software': faCode
};

const CategoryNav = ({ categories, activeCategory, setActiveCategory }) => {
    const handleCategoryClick = (categoryId) => {
        // Set the active category
        setActiveCategory(categoryId);
        
        // Scroll to top of the page
        window.scrollTo({
            top: 100,
            behavior: 'smooth'
        });
    };

    return (
        <div className="maxhub-category-nav">
            <div className="category-icons-container">
                {categories.map((category) => (
                    <div 
                        key={category.id}
                        className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(category.id)}
                    >
                        <div className="category-icon">
                            <FontAwesomeIcon 
                                icon={categoryIcons[category.id]} 
                                size="2x"
                            />
                        </div>
                        <span className="category-name">{category.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryNav;