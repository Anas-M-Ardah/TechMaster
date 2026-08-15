// CategorySection.jsx
// One category of the MAXHUB catalogue. Product artwork is manufacturer
// supplied on white, so the cells stay white and the grid rules do the
// separating — no card fills, borders or shadows on top of the product shots.
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import './CategorySection.css';

const cell = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const CategorySection = ({ category, isActive }) => {
  if (!isActive) return null;

  const products = category.products || [];

  return (
    <section className="cs">
      <header className="cs-head">
        <span className="tm-eyebrow">{category.name}</span>
        {category.description && <p className="tm-lede cs-description">{category.description}</p>}
        <span className="cs-count tm-num">
          {products.length} {products.length === 1 ? 'product' : 'products'}
        </span>
      </header>

      {products.length > 0 ? (
        <motion.ul
          className="cs-grid"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.05 }}
        >
          {products.map((product) => (
            <motion.li className="cs-cell" key={product.id} variants={cell}>
              <a
                className="cs-link"
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cs-plate">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </span>

                <span className="cs-meta">
                  <span className="cs-name">{product.name}</span>
                  {product.description && <span className="cs-note">{product.description}</span>}
                </span>

                <span className="cs-more">
                  Learn more
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        <p className="cs-empty">No products listed in this category yet.</p>
      )}
    </section>
  );
};

CategorySection.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    products: PropTypes.array,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default CategorySection;
