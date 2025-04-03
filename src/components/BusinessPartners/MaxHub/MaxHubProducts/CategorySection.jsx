// CategorySection.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import './CategorySection.css';

const CategorySection = ({ category, isActive }) => {
    if (!isActive) return null;

    return (
        <div className="category-section">
            <div className="category-header">
                <h2 className="category-title">{category.name.toUpperCase()}</h2>
                <div className="title-underline"></div>
                <p className="category-description">{category.description}</p>
            </div>
            
            <div className="products-grid">
                {category.products && category.products.length > 0 ? (
                    category.products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-container">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="product-image"
                                />
                            </div>
                            <div className="product-info">
                                <div className="product-text">
                                    <h3 className="product-title">{product.name}</h3>
                                    <p className="product-description">{product.description}</p>
                                </div>
                                <div className="product-action">
                                    <a 
                                        href={product.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="learn-more-btn"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-products">No products available in this category.</p>
                )}
            </div>
        </div>
    );
};

export default CategorySection;