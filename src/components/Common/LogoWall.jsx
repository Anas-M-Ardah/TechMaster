// components/Common/LogoWall.jsx
// Shared by the Clients and Partners pages. Logos arrive in every colour and
// crop imaginable, so the wall neutralises them to grayscale and lets the ruled
// grid — not the artwork — carry the composition. Colour returns on hover.
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import '../../css/Common/LogoWall.css';

const cell = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
};

const LogoWall = ({ items, captions = false, className = '' }) => {
  return (
    <motion.ul
      className={`wall${captions ? ' has-captions' : ''} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      transition={{ staggerChildren: 0.035 }}
    >
      {items.map((item) => {
        const body = (
          <>
            <span className="wall-logo">
              <img src={item.src} alt={item.name} loading="lazy" />
            </span>
            {captions && <span className="wall-name tm-num">{item.name}</span>}
          </>
        );

        return (
          <motion.li className="wall-cell" key={item.name} variants={cell}>
            {item.to ? (
              <Link to={item.to} className="wall-inner is-link">
                {body}
              </Link>
            ) : (
              <span className="wall-inner">{body}</span>
            )}
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

LogoWall.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      to: PropTypes.string,
    })
  ).isRequired,
  captions: PropTypes.bool,
  className: PropTypes.string,
};

export default LogoWall;
