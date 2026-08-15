// HomePage/MaxHubSpotlight.jsx
// The one product moment on the page, and the only dark band between the hero
// and the closing bookend — so the partnership lands as a change of register
// rather than another section.
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay, FiX } from 'react-icons/fi';
import BlurText from '../Common/BlurText';
import MagneticButton from '../Common/MagneticButton';
import '../../css/HomePage/MaxHubSpotlight.css';

import maxhubPanel from '/images/partners/maxhub/interactive-flat-panel/v7.webp';

const RANGE = ['Interactive flat panels', 'LED walls', 'Conferencing', 'Digital signage'];

const MaxHubSpotlight = () => {
  const [showVideo, setShowVideo] = useState(false);
  const close = useCallback(() => setShowVideo(false), []);

  // Trap the page behind the overlay and let Escape dismiss it.
  useEffect(() => {
    if (!showVideo) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [showVideo, close]);

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

      {showVideo && (
        <div
          className="mx-modal"
          role="dialog"
          aria-modal="true"
          aria-label="MAXHUB XBoard V7 overview"
          onClick={close}
        >
          <button type="button" className="mx-modal-close" onClick={close} aria-label="Close video">
            <FiX aria-hidden="true" />
          </button>

          <div className="mx-modal-frame" onClick={(event) => event.stopPropagation()}>
            <iframe
              src="https://www.youtube.com/embed/6fK0hEoKNd4?autoplay=1"
              title="The MAXHUB XBoard V7 Series — Features Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default MaxHubSpotlight;
