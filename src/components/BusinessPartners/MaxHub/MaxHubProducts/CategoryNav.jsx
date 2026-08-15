// CategoryNav.jsx
// A sticky ruled tab bar. The previous version was a row of FontAwesome icon
// tiles — this component was the only thing in the codebase importing
// @fortawesome, and the icons were decorative next to labels that already said
// the same thing. Typography carries it instead.
import PropTypes from 'prop-types';
import './CategoryNav.css';

const CategoryNav = ({ categories, activeCategory, setActiveCategory }) => {
  const handleClick = (categoryId) => {
    setActiveCategory(categoryId);

    // Bring the newly revealed category to the top. scroll-margin-top on the
    // target keeps it clear of the fixed header and this sticky bar, rather
    // than the previous hard-coded scrollTo(100).
    document.getElementById('maxhub-catalogue')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="cat-nav" aria-label="Product categories">
      <div className="tm-shell">
        <ul className="cat-nav-list" role="tablist">
          {categories.map((category, i) => (
            <li key={category.id}>
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === category.id}
                className={`cat-nav-tab${activeCategory === category.id ? ' is-active' : ''}`}
                onClick={() => handleClick(category.id)}
              >
                <span className="cat-nav-index tm-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="cat-nav-name">{category.name}</span>
              </button>
            </li>
          ))}
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
