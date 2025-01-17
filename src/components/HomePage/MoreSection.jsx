import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import backgroundImage from '../../assets/images/background.jpg';
import '../../css/HomePage/MoreSection.css';

const MoreSection = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handlePlayClick = () => {
        setShowVideo(true);
    };

    return (
        <section className="more-section">
            <div className="more-content">
                <h1>Providing You With The Best<br />Smart Solutions.</h1>
                <p>Dig deep into what we differentiate ourself with through our exceptional services</p>
            </div>

            <div className="play-button-container">
                <div className="play-button" onClick={handlePlayClick}>
                    <FaPlay />
                </div>
                <p className="play-message">Play me</p>
            </div>

            {showVideo && (
                <div className="video-modal">
                    <div className="modal-content">
                        <button onClick={() => setShowVideo(false)}>Close</button>
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/6fK0hEoKNd4"
                            title="The MAXHUB XBoard V7 Series - Features Overview"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MoreSection;