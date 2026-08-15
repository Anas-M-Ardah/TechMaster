// HomePage/Projects.jsx
// Selected work. Captions sit under the plates rather than on top of them —
// no scrims, no gradient overlays, and the images stay legible. Video tiles
// preview silently on hover and open fullscreen on click.
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import PropTypes from 'prop-types';
import BlurText from '../Common/BlurText';
import { playFullscreenVideo } from '../../utils/playFullscreenVideo';
import '../../css/HomePage/Projects.css';

import ammanArabUni from '../../assets/videos/amman-arab-university.mp4';
import crownPlaza from '../../assets/videos/crown-plaza.mp4';
import movenpick from '/images/gallery/movenpick-event.jpeg';
import finnishSchools from '/images/gallery/finnish-school.jpeg';
import senmarPhoto from '/images/gallery/senmar-photo.jpeg';

// Order is driven by the footage: the Crowne Plaza clip is landscape (848x478)
// so it takes the wide plate, while the Amman Arab University clip was shot
// vertically (2160x3840) and only survives in the tall one.
const PROJECTS = [
  {
    id: 'crown-plaza',
    name: 'Crowne Plaza',
    caption: 'Meeting rooms and event AV',
    type: 'video',
    src: crownPlaza,
    span: 'wide',
  },
  {
    id: 'amman-arab-university',
    name: 'Amman Arab University',
    caption: 'Smart classroom and AV deployment',
    type: 'video',
    src: ammanArabUni,
    span: 'tall',
  },
  {
    id: 'movenpick',
    name: 'Mövenpick',
    caption: 'Corporate event AV',
    type: 'image',
    src: movenpick,
  },
  {
    id: 'finnish-schools',
    name: 'Finnish Schools',
    caption: 'Smart classroom rollout',
    type: 'image',
    src: finnishSchools,
  },
  {
    id: 'senmar',
    name: 'Senmar',
    caption: 'Smart office fit-out',
    type: 'image',
    src: senmarPhoto,
  },
];

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const ProjectTile = ({ project, index }) => {
  const isVideo = project.type === 'video';

  // These clips run to tens of megabytes each, so nothing is fetched beyond
  // metadata until the visitor actually asks for playback. The #t fragment
  // makes the browser seek to a real frame for the still, rather than leaving
  // an empty black plate.
  const media = isVideo ? (
    <video
      className="work-media"
      src={`${project.src}#t=0.5`}
      muted
      playsInline
      preload="metadata"
      tabIndex={-1}
    />
  ) : (
    <img className="work-media" src={project.src} alt={project.name} loading="lazy" />
  );

  return (
    <motion.figure
      className={`work-item${project.span ? ` is-${project.span}` : ''}`}
      variants={item}
    >
      {isVideo ? (
        <button
          type="button"
          className="work-frame work-frame-button"
          onClick={() => playFullscreenVideo(project.src)}
          aria-label={`Play video: ${project.name}`}
        >
          {media}
          <span className="work-play" aria-hidden="true">
            <FiPlay />
          </span>
        </button>
      ) : (
        <div className="work-frame">{media}</div>
      )}

      <figcaption className="work-caption">
        <span className="tm-num work-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="work-meta">
          <span className="work-name">{project.name}</span>
          <span className="work-note">{project.caption}</span>
        </span>
      </figcaption>
    </motion.figure>
  );
};

ProjectTile.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video', 'image']).isRequired,
    src: PropTypes.string.isRequired,
    span: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Projects = () => {
  return (
    <section className="work tm-section">
      <div className="tm-shell">
        <header className="tm-section-head">
          <div>
            <span className="tm-eyebrow">Selected work</span>
            <BlurText as="h2" className="tm-h2" text="Delivered across the Kingdom." />
          </div>

          <div className="tm-section-head-aside">
            <p className="tm-lede">
              Universities, hotels, schools and offices — rooms that had to work on the day they
              opened.
            </p>
            <Link to="/clients" className="tm-link">
              See our clients
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </header>

        <motion.div
          className="work-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.09 }}
        >
          {PROJECTS.map((project, index) => (
            <ProjectTile key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
