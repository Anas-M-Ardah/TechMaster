// CategoryNav.jsx
// Icon tiles with a short label underneath — the arrangement this page had
// originally, which reads more calmly than a dense row of full category names.
//
// The icons come from react-icons/fi, already used across the site, rather
// than FontAwesome: same idea, without pulling four @fortawesome packages back
// into the bundle. Each entry also carries a short label, because the full
// category names ("Microsoft Teams Rooms", "Unified Communication") are what
// made the bar feel crowded.
import { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  FiMonitor,
  FiTv,
  FiGrid,
  FiVideo,
  FiUsers,
  FiCamera,
  FiTool,
  FiCode,
  FiBox,
} from 'react-icons/fi';
import './CategoryNav.css';

const CATEGORY_META = {
  'interactive-flat-panel': { icon: FiMonitor, short: 'Flat Panels' },
  'commercial-display': { icon: FiTv, short: 'Displays' },
  'led-display': { icon: FiGrid, short: 'LED' },
  'unified-communication': { icon: FiVideo, short: 'Unified Comms' },
  'microsoft-teams-rooms': { icon: FiUsers, short: 'Teams Rooms' },
  'capture-system': { icon: FiCamera, short: 'Capture' },
  accessories: { icon: FiTool, short: 'Accessories' },
  software: { icon: FiCode, short: 'Software' },
};

const CategoryNav = ({ categories, activeCategory, setActiveCategory }) => {
  const navRef = useRef(null);

  const handleClick = (categoryId) => {
    setActiveCategory(categoryId);
    // Scroll to the nav rather than past it, so the switched-to tile stays
    // visible alongside the products it just revealed.
    navRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="cat-nav" ref={navRef} aria-label="Product categories">
      <div className="tm-shell">
        <ul className="cat-nav-list">
          {categories.map((category) => {
            const meta = CATEGORY_META[category.id] || {};
            const Icon = meta.icon || FiBox;
            const isActive = activeCategory === category.id;

            return (
              <li key={category.id}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  className={`cat-nav-tab${isActive ? ' is-active' : ''}`}
                  onClick={() => handleClick(category.id)}
                >
                  <span className="cat-nav-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="cat-nav-name">{meta.short || category.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

CategoryNav.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeCategory: PropTypes.string.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
};

export default CategoryNav;
