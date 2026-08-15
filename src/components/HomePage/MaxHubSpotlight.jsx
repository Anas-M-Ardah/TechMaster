// HomePage/MaxHubSpotlight.jsx
// The one product moment on the page, and the only dark band between the hero
// and the closing bookend — so the partnership lands as a change of register
// rather than another section.
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import BlurText from '../Common/BlurText';
import MagneticButton from '../Common/MagneticButton';
import VideoModal from '../Common/VideoModal';
import { MAXHUB_VIDEO } from '../../constants/video';
import '../../css/HomePage/MaxHubSpotlight.css';

import maxhubPanel from '/images/partners/maxhub/interactive-flat-panel/v7.webp';

const RANGE = ['Interactive flat panels', 'LED walls', 'Conferencing', 'Digital signage'];

const MaxHubSpotlight = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="mx tm-on-dark tm-grain">
      <div className="tm-shell">
        <div className="mx-grid">
          <motion.figure
            className="mx-plate"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={maxhubPanel} alt="MAXHUB XBoard V7 interactive flat panel" loading="lazy" />
            <button
              type="button"
              className="mx-play"
              onClick={() => setShowVideo(true)}
              aria-label="Watch the MAXHUB XBoard V7 overview"
            >
              <FiPlay aria-hidden="true" />
            </button>
          </motion.figure>

          <motion.div
            className="mx-content"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="tm-eyebrow">Official partner — Jordan</span>

            <BlurText
              as="h2"
              className="tm-h2 mx-title"
              segments={[{ text: 'MAXHUB, installed and', breakAfter: true }, { text: 'supported in country.' }]}
            />

            <p className="tm-lede mx-lede">
              Interactive flat panels, LED walls and conferencing systems for classrooms,
              boardrooms and control rooms — specified, commissioned and maintained by our own
              engineers rather than shipped and forgotten.
            </p>

            <ul className="mx-range">
              {RANGE.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>

            <div className="mx-actions">
              <MagneticButton strength={0.25}>
                <Link to="/maxhub/products" className="tm-btn tm-btn-solid">
                  Explore MAXHUB products
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </MagneticButton>

              <button type="button" className="tm-btn tm-btn-outline mx-watch" onClick={() => setShowVideo(true)}>
                <FiPlay aria-hidden="true" />
                Watch overview
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <VideoModal
        open={showVideo}
        onClose={() => setShowVideo(false)}
        src={MAXHUB_VIDEO.src}
        title={MAXHUB_VIDEO.title}
      />
    </section>
  );
};

export default MaxHubSpotlight;
