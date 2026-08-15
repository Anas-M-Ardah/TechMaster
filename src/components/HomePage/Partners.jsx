// HomePage/Partners.jsx
// The ecosystem band: brands we carry, set in a ruled grid like a spec sheet,
// followed by a quiet marquee of the organisations we've delivered for. Both
// proofs live in one section so the page doesn't spend two on logos.
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import BlurText from '../Common/BlurText';
import '../../css/HomePage/Partners.css';

import maxhub from '/images/partners/MAXHUB.png';
import huawei from '/images/partners/huawei.png';
import schneider from '/images/partners/schneider.png';
import hikvision from '/images/partners/hik.png';
import bosch from '/images/partners/bosch.png';
import hp from '/images/partners/hp.png';
import honeywell from '/images/partners/honeyw.png';
import nexans from '/images/partners/nexans.png';
import fluke from '/images/partners/fluke.png';
import leyard from '/images/partners/LEYARD.png';
import absen from '/images/partners/absen.png';
import tyco from '/images/partners/tyco.png';

import civilProtection from '/images/clients/civil_protection.png';
import customs from '/images/clients/customs.png';
import jdf from '/images/clients/JDF.png';
import jepco from '/images/clients/JEPCO.png';
import kettaneh from '/images/clients/kettaneh_grp.png';
import middleEastInsurance from '/images/clients/middle_east_insurance.png';
import safwa from '/images/clients/safwa-logo.webp';
import abdaliViews from '/images/clients/abdali-views.png';
import baynouna from '/images/clients/baynouna.png';
import royalMarine from '/images/clients/royal_marine.png';
import jis from '/images/clients/JIS.png';
import orthodox from '/images/clients/orthodox.png';

const PARTNERS = [
  { src: maxhub, name: 'MAXHUB' },
  { src: huawei, name: 'Huawei' },
  { src: schneider, name: 'Schneider Electric' },
  { src: hikvision, name: 'Hikvision' },
  { src: bosch, name: 'Bosch' },
  { src: hp, name: 'HP' },
  { src: honeywell, name: 'Honeywell' },
  { src: nexans, name: 'Nexans' },
  { src: fluke, name: 'Fluke' },
  { src: leyard, name: 'Leyard' },
  { src: absen, name: 'Absen' },
  { src: tyco, name: 'Tyco' },
];

const CLIENTS = [
  { src: civilProtection, name: 'Civil Protection' },
  { src: customs, name: 'Jordan Customs' },
  { src: jdf, name: 'JDF' },
  { src: jepco, name: 'JEPCO' },
  { src: kettaneh, name: 'Kettaneh Group' },
  { src: middleEastInsurance, name: 'Middle East Insurance' },
  { src: safwa, name: 'Safwa' },
  { src: abdaliViews, name: 'Abdali Views' },
  { src: baynouna, name: 'Baynouna' },
  { src: royalMarine, name: 'Royal Marine' },
  { src: jis, name: 'JIS' },
  { src: orthodox, name: 'Orthodox' },
];

const cell = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Partners = () => {
  return (
    <section className="eco tm-section tm-band-alt">
      <div className="tm-shell">
        <header className="tm-section-head">
          <div>
            <span className="tm-eyebrow">Ecosystem</span>
            <BlurText as="h2" className="tm-h2" text="Built on hardware we stand behind." />
          </div>

          <div className="tm-section-head-aside">
            <p className="tm-lede">
              We hold direct partnerships with the manufacturers whose equipment we install, so
              specification, warranty and support all run through one line.
            </p>
            <Link to="/partners" className="tm-link">
              All business partners
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </header>

        <motion.ul
          className="eco-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.045 }}
        >
          {PARTNERS.map((partner) => (
            <motion.li className="eco-cell" key={partner.name} variants={cell}>
              <img src={partner.src} alt={partner.name} loading="lazy" />
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="eco-clients">
        <div className="tm-shell">
          <p className="eco-clients-label">
            <span className="tm-num">150+</span>
            organisations across Jordan — government, education, banking and hospitality
          </p>
        </div>

        <div className="eco-marquee">
          <ul className="eco-track">
            {CLIENTS.map((client) => (
              <li key={client.name}>
                <img src={client.src} alt={client.name} loading="lazy" />
              </li>
            ))}
            {/* Duplicated purely to make the loop seamless — hidden from AT. */}
            {CLIENTS.map((client) => (
              <li key={`${client.name}-repeat`} aria-hidden="true">
                <img src={client.src} alt="" loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Partners;
