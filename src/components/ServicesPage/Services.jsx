// components/ServicesPage/Services.jsx
// The full catalogue. Cells are matted rather than full-bleed: the source
// photography is only 265x300, so the plate is held at its native width and
// the surrounding space is used as deliberate margin instead of upscaling.
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import BlurText from '../Common/BlurText';
import '../../css/ServicePage/Services.css';

import itServices from '/images/services/service5.webp';
import dataCenter from '/images/services/service1.webp';
import structureCabling from '/images/services/service2.webp';
import smartBuilding from '/images/services/service3.webp';
import smartClassroom from '/images/services/service7.webp';
import smartMeeting from '/images/services/service8.webp';
import lowCurrent from '/images/services/service6.webp';
import ledPanel from '/images/services/service4.webp';
import fireSystem from '/images/services/service9.webp';

const SERVICES = [
  {
    id: 'it-network',
    title: 'IT Services & Network',
    blurb: 'Networks, servers and the day-to-day IT that keeps an office running.',
    image: itServices,
    link: '/services',
  },
  {
    id: 'data-center',
    title: 'Data Center Solutions',
    blurb: 'Racks, power, cooling and containment, designed as one system.',
    image: dataCenter,
    link: '/services/data-center',
    detail: true,
  },
  {
    id: 'structure-cabling',
    title: 'Structure Cabling',
    blurb: 'Copper and fibre backbone, installed and certified to standard.',
    image: structureCabling,
    link: '/services/structure-cabling',
    detail: true,
  },
  {
    id: 'smart-building',
    title: 'Smart Building Solutions',
    blurb: 'Building management, access control and automation.',
    image: smartBuilding,
    link: '/services/smart-building',
    detail: true,
  },
  {
    id: 'smart-classroom',
    title: 'Smart Classroom Solutions',
    blurb: 'Interactive panels, classroom audio and teaching software.',
    image: smartClassroom,
    link: '/services',
  },
  {
    id: 'smart-meeting',
    title: 'Smart Meeting Rooms A/V',
    blurb: 'Conferencing, displays and room control that work on the day.',
    image: smartMeeting,
    link: '/services',
  },
  {
    id: 'low-current',
    title: 'Low Current Solutions',
    blurb: 'CCTV, alarms, public address and intercom.',
    image: lowCurrent,
    link: '/services',
  },
  {
    id: 'led-signage',
    title: 'LED Panel & Digital Signage',
    blurb: 'Indoor and outdoor LED walls, plus the signage that drives them.',
    image: ledPanel,
    link: '/services',
  },
  {
    id: 'fire-aerosol',
    title: 'Fire Extinguishing Aerosol Systems',
    blurb: 'Aerosol suppression sized for server rooms and racks.',
    image: fireSystem,
    link: '/services',
  },
];

const cell = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const Services = () => {
  return (
    <section className="sv tm-section">
      <div className="tm-shell">
        <header className="tm-section-head">
          <div>
            <span className="tm-eyebrow">Catalogue</span>
            <BlurText as="h2" className="tm-h2" text="Everything from the rack to the room." />
          </div>

          <div className="tm-section-head-aside">
            <p className="tm-lede">
              Three of these are documented in depth. For the rest, talk to us and we&apos;ll scope
              it against your site.
            </p>
          </div>
        </header>

        <motion.ul
          className="sv-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.07 }}
        >
          {SERVICES.map((service, i) => (
            <motion.li className="sv-cell" key={service.id} variants={cell}>
              <Link to={service.link} className="sv-link">
                <span className="sv-plate">
                  <img src={service.image} alt="" loading="lazy" />
                </span>

                <span className="sv-meta">
                  <span className="sv-index tm-num">
                    {String(i + 1).padStart(2, '0')}
                    {service.detail && <span className="sv-flag"> · detail</span>}
                  </span>
                  <span className="sv-title">{service.title}</span>
                  <span className="sv-blurb">{service.blurb}</span>
                </span>

                <span className="sv-arrow" aria-hidden="true">
                  <FiArrowUpRight />
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Services;
