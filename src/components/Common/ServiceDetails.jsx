// components/Common/ServiceDetails.jsx
// Shared body for the three service detail pages. Same prop contract as before,
// so the pages that spread serviceData into it need no changes.
//
// The partner strip used to be an auto-advancing carousel that hid most of the
// logos most of the time; it is now a static wall, which is both calmer and
// shows every partner at once.
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import LogoWall from './LogoWall';
import '../../css/Common/ServiceDetails.css';

const SDCategory = ({ category, index }) => (
  <section className="sd-cat">
    <header className="sd-cat-head">
      <span className="sd-cat-index tm-num">{String(index + 1).padStart(2, '0')}</span>
      <h3 className="tm-h3">{category.title}</h3>
    </header>

    <ol className="sd-cat-list">
      {category.items.map((item, i) => (
        <li key={item}>
          <span className="sd-cat-item-index tm-num">{String(i + 1).padStart(2, '0')}</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  </section>
);

SDCategory.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const ServiceDetailsView = ({
  title,
  mainImage,
  quickLinks,
  contactNumber,
  serviceCategories,
  partners,
  description,
}) => {
  return (
    <>
      <section className="sd tm-section">
        <div className="tm-shell">
          <div className="sd-grid">
            <aside className="sd-aside">
              <nav className="sd-links" aria-label="Related services">
                <h2 className="sd-aside-label tm-num">Related services</h2>
                <ul>
                  {quickLinks.map((link) => (
                    <li key={link.url}>
                      <Link to={link.url}>
                        {link.title}
                        <FiArrowRight aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="sd-contact">
                <span className="sd-aside-label tm-num">Talk it through</span>
                <a className="sd-contact-number" href={`tel:${contactNumber.replace(/[^+\d]/g, '')}`}>
                  <FiPhone aria-hidden="true" />
                  {contactNumber}
                </a>
                <Link to="/contact" className="tm-link sd-contact-link">
                  Send a message
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </aside>

            <div className="sd-main">
              {/* h2, not h1 — PageHeader above already owns the page's h1. */}
              <h2 className="tm-h2 sd-title">{title}</h2>
              {description && <p className="tm-lede sd-description">{description}</p>}

              <motion.figure
                className="sd-plate"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <img src={mainImage} alt={title} loading="lazy" />
                <span className="sd-tick sd-tick-tl" aria-hidden="true" />
                <span className="sd-tick sd-tick-tr" aria-hidden="true" />
                <span className="sd-tick sd-tick-bl" aria-hidden="true" />
                <span className="sd-tick sd-tick-br" aria-hidden="true" />
              </motion.figure>

              {serviceCategories.map((category, index) => (
                <SDCategory key={category.title} category={category} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sd-partners tm-section tm-band-alt">
        <div className="tm-shell">
          <header className="sd-partners-head">
            <span className="tm-eyebrow">Brought to you by</span>
            <p className="tm-lede">
              The manufacturers behind this service line — all direct partnerships.
            </p>
          </header>

          <LogoWall items={partners.map((p) => ({ name: p.name, src: p.logo }))} captions />
        </div>
      </section>
    </>
  );
};

ServiceDetailsView.propTypes = {
  title: PropTypes.string.isRequired,
  mainImage: PropTypes.string.isRequired,
  quickLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  contactNumber: PropTypes.string.isRequired,
  serviceCategories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
    })
  ).isRequired,
  description: PropTypes.string,
};

export default ServiceDetailsView;
