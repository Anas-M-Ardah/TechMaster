// components/Common/PageHeader.jsx
import React from 'react';
import '../../css/Common/PageHeader.css';

const PageHeader = ({ title }) => {
    return (
        <div className="page-header">
            <div className="page-header-overlay"></div>
            <div className="page-header-content">
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default PageHeader;