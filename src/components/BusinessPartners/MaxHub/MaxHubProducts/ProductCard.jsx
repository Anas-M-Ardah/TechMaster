// components/BusinessPartners/MaxHub/MaxhubProducts/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Link to={product.url} className="product-card-link">
            <div className="product-card">
                <div className="product-image-container">
                    <img 
                        src={product.image} 
                        alt={product.name}
                        className="product-image"
                    />
                </div>
                <div className="product-info">
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;