// components/Common/LoadingSpinner.jsx
import React from 'react';
import '../../css/Common/LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;