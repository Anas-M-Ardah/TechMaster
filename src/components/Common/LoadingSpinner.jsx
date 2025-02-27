// components/Common/LoadingSpinner.jsx
import React from 'react';
import '../../css/Common/LoadingSpinner.css';

const LoadingSpinner = ({ progress }) => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="spinner"></div>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="loading-text">
          Loading... {progress}%
        </div>
        {progress < 100 && (
          <div className="loading-message">
            Please wait while we load the content...
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingSpinner;