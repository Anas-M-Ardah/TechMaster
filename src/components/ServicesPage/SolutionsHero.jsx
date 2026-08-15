// components/ServicesPage/SolutionsHero.jsx
// Closing band for the services page, pointing at the three solutions that
// have a page behind them.
//
// The previous version linked to /services/lc-solution and
// /services/fire-fighting, neither of which is a registered route — both
// rendered a blank page. These now point at the routes that actually exist.
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import BlurText from '../Common/BlurText';
import '../../css/ServicePage/SolutionsHero.css';

import heroImage from '/images/theme-15.jpg';

const SOLUTIONS = [
  { id: 'data-center', title: 'Data Center', note: 'Racks, power, cooling, containment', link: '/services/data-center' },
  { id: 'structure-cabling', title: 'Structure Cabling', note: 'Copper and fibre, certified', link: '/services/structure-cabling' },
  { id: 'smart-building', title: 'Smart Building', note: 'Management, access, automation', link: '/services/smart-building' },
];

const SolutionsHero = () => {
  return (
    <section className="sh tm-section tm-band-alt">
      <div className="tm-shell">
        <div className="sh-grid">
          <motion.figure
            className="sh-plate"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={heroImage} alt="Technology Master solutions" loading="lazy" />
          </motion.figure>

          <div className="sh-content">
            <span className="tm-eyebrow">In depth</span>

            <BlurText
              as="h2"
              className="tm-h2 sh-title"
              segments={[{ text: 'Three solutions,', breakAfter: true }, { text: 'documented properly.' }]}
            />

            <p className="tm-lede sh-lede">
              We provide the full spectrum of IT services, solutions and consultation across
              industries. These three carry a page of their own.
            </p>

            <ul className="sh-list">
              {SOLUTIONS.map((solution, i) => (
                <li key={solution.id}>
                  <Link to={solution.link} className="sh-row">
                    <span className="sh-row-index tm-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="sh-row-title">{solution.title}</span>
                    <span className="sh-row-note">{solution.note}</span>
                    <FiArrowRight className="sh-row-arrow" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="tm-btn tm-btn-outline sh-cta">
              Scope a project with us
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
