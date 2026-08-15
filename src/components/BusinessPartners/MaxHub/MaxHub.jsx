// MaxHub.jsx
// Partner landing page.
//
// Two fixes carried in with the redesign: the featured products used
// react-router <Link> for absolute maxhub.com URLs, which routed in-app to
// "/https://www.maxhub.com/..." instead of leaving the site; and one card
// pointed at /maxhub/uc-bm21, which is not a registered route. External
// destinations now use <a>, and the internal one points at the catalogue.
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import Header from '../../Header';
import Footer from '../../Footer';
import PageHeader from '../../Common/PageHeader';
import BlurText from '../../Common/BlurText';
import MagneticButton from '../../Common/MagneticButton';
import './MaxHub.css';

import v7 from '/images/partners/maxhub/interactive-flat-panel/v7.jpg';
import wirelessDongle from '/images/partners/maxhub/accessories/wireless-dongle.jpg';
import blackboard from '/images/partners/maxhub/interactive-flat-panel/blackboard.jpg';

const FEATURED = [
  {
    id: 'xboard-v7',
    name: 'XBoard V7 Series',
    note: 'Interactive flat panel',
    image: v7,
    href: 'https://www.maxhub.com/en/xboard_v7_series/',
    external: true,
  },
  {
    id: 'wireless-dongle',
    name: 'Wireless Dongle',
    note: 'One-touch screen sharing',
    image: wirelessDongle,
    href: 'https://www.maxhub.com/en/wireless-dongle',
    external: true,
  },
  {
    id: 'blackboard',
    name: 'Interactive Blackboard',
    note: 'Classroom writing surface and display',
    image: blackboard,
    href: '/maxhub/products',
  },
];

const cell = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const MaxHub = () => {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="MAXHUB"
          eyebrow="Official partner — Jordan"
          lede="Interactive displays and audio-visual collaboration systems, carried and supported in country by our own engineers."
          crumbs={[{ to: '/partners', label: 'Business partners' }]}
        />

        <section className="mh tm-section">
          <div className="tm-shell">
            <div className="mh-intro">
              <div>
                <span className="tm-eyebrow">About MAXHUB</span>
                <BlurText
                  as="h2"
                  className="tm-h2 mh-intro-title"
                  text="Displays built for rooms that have to work."
                />
              </div>

              <p className="tm-lede">
                MAXHUB develops and manufactures interactive displays and audio-visual
                collaboration solutions, with a focus on innovation and user experience — for
                modern workplaces and educational institutions.
              </p>
            </div>
          </div>
        </section>

        <section className="mh-featured tm-section tm-band-alt">
          <div className="tm-shell">
            <header className="tm-section-head">
              <div>
                <span className="tm-eyebrow">Featured</span>
                <h2 className="tm-h2">A sample of the range.</h2>
              </div>

              <div className="tm-section-head-aside">
                <p className="tm-lede">
                  Panels, LED, conferencing, signage and the software behind them — the full
                  catalogue runs to several categories.
                </p>
              </div>
            </header>

            <motion.ul
              className="mh-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ staggerChildren: 0.08 }}
            >
              {FEATURED.map((product, i) => {
                const body = (
                  <>
                    <span className="mh-plate">
                      <img src={product.image} alt={product.name} loading="lazy" />
                    </span>
                    <span className="mh-meta">
                      <span className="mh-index tm-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="mh-name">{product.name}</span>
                      <span className="mh-note">{product.note}</span>
                    </span>
                    <span className="mh-arrow" aria-hidden="true">
                      <FiArrowUpRight />
                    </span>
                  </>
                );

                return (
                  <motion.li className="mh-cell" key={product.id} variants={cell}>
                    {product.external ? (
                      <a
                        className="mh-link"
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {body}
                        <span className="mh-external tm-num">maxhub.com</span>
                      </a>
                    ) : (
                      <Link className="mh-link" to={product.href}>
                        {body}
                      </Link>
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>

            <div className="mh-cta">
              <MagneticButton strength={0.25}>
                <Link to="/maxhub/products" className="tm-btn tm-btn-solid">
                  View the full catalogue
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MaxHub;
