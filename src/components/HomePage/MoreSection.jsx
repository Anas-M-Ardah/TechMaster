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
                <div className="play-button" onClick={handlePlayClick}>
                    <FaPlay />
                </div>
                <h1>Providing You With The Best<br />IT Solutions.</h1>
                <p>Dig deep into what we differentiate ourself with through our exceptional services</p>
            </div>
            
            {showVideo && (
                <div className="video-modal">
                    <div className="modal-content">
                        <button onClick={() => setShowVideo(false)}>Close</button>
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/XqZsoesa55w"
                            title="YouTube video player"
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