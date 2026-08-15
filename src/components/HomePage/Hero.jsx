// HomePage/Hero.jsx
// Asymmetric dark hero: statement on the left, a framed working plate on the
// right. The video is deliberately *contained* rather than used as wallpaper —
// a piece of evidence with a caption, not a mood backdrop.
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowDown } from 'react-icons/fi';
import BlurText from '../Common/BlurText';
import MagneticButton from '../Common/MagneticButton';
import SchematicGrid from '../Common/SchematicGrid';
import '../../css/HomePage/Hero.css';

import heroVideo from '../../assets/videos/vid-1.mp4';

const rise = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Hero = () => {
  return (
    <section className="hero tm-on-dark tm-grain">
      <SchematicGrid />
      <div className="hero-glow" aria-hidden="true" />

      <div className="tm-shell hero-shell">
        <div className="hero-grid">
          <div className="hero-statement">
            <motion.span
              className="tm-eyebrow hero-eyebrow"
              variants={rise}
              initial="hidden"
              animate="visible"
              custom={0.05}
            >
              ICT Solutions &amp; Services — Amman, Jordan
            </motion.span>

            <BlurText
              as="h1"
              className="tm-display hero-title"
              delay={0.06}
              amount={0.1}
              segments={[
                { text: 'Integrating technology', breakAfter: true },
                { text: 'with your business.' },
              ]}
            />

            <motion.p
              className="tm-lede hero-lede"
              variants={rise}
              initial="hidden"
              animate="visible"
              custom={0.45}
            >
              Data centers, IT infrastructure, smart buildings and MAXHUB display systems —
              planned, deployed and supported by one team in Amman.
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={rise}
              initial="hidden"
              animate="visible"
              custom={0.58}
            >
              <MagneticButton strength={0.25}>
                <Link to="/services" className="tm-btn tm-btn-solid">
                  Explore our services
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </MagneticButton>

              <Link to="/contact" className="tm-link hero-secondary">
                Start a conversation
                <FiArrowRight aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          <motion.figure
            className="hero-plate"
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            <div className="hero-plate-frame">
              <video
                className="hero-plate-media"
                src={heroVideo}
                poster="/images/banner1.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Technology Master installation work"
              />
              <span className="hero-tick hero-tick-tl" aria-hidden="true" />
              <span className="hero-tick hero-tick-tr" aria-hidden="true" />
              <span className="hero-tick hero-tick-bl" aria-hidden="true" />
              <span className="hero-tick hero-tick-br" aria-hidden="true" />
            </div>

            <figcaption className="hero-plate-caption">
              <span className="tm-num">FIG. 01</span>
              <span>Smart building &amp; AV deployments across the Kingdom</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>

      <motion.a
        href="#capabilities"
        className="hero-scroll"
        variants={rise}
        initial="hidden"
        animate="visible"
        custom={0.85}
      >
        <span className="tm-num">Scroll</span>
        <FiArrowDown aria-hidden="true" />
      </motion.a>
    </section>
  );
};

export default Hero;
