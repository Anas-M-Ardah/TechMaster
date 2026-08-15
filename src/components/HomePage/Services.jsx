// HomePage/Services.jsx
// The capability index. Replaces the auto-rotating card carousel: every service
// is visible at once as a numbered row, and hovering one brings its plate up in
// the sticky frame alongside. Nothing moves unless the visitor moves it.
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import BlurText from '../Common/BlurText';
import '../../css/HomePage/Services.css';

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
    blurb: 'Networks, servers and day-to-day IT.',
    image: itServices,
    link: '/services',
  },
  {
    id: 'data-center',
    title: 'Data Center Solutions',
    blurb: 'Racks, power, cooling and containment.',
    image: dataCenter,
    link: '/services/data-center',
  },
  {
    id: 'structure-cabling',
    title: 'Structure Cabling',
    blurb: 'Copper and fibre backbone, certified.',
    image: structureCabling,
    link: '/services/structure-cabling',
  },
  {
    id: 'smart-building',
    title: 'Smart Building Solutions',
    blurb: 'Management, access control and automation.',
    image: smartBuilding,
    link: '/services/smart-building',
  },
  {
    id: 'smart-classroom',
    title: 'Smart Classroom Solutions',
    blurb: 'Interactive panels and classroom audio.',
    image: smartClassroom,
    link: '/services',
  },
  {
    id: 'smart-meeting',
    title: 'Smart Meeting Rooms A/V',
    blurb: 'Conferencing, displays and room control.',
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
    blurb: 'Indoor and outdoor LED, plus signage.',
    image: ledPanel,
    link: '/services',
  },
  {
    id: 'fire-aerosol',
    title: 'Fire Extinguishing Aerosol Systems',
    blurb: 'Aerosol suppression for rooms and racks.',
    image: fireSystem,
    link: '/services',
  },
];

const Services = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="cap tm-section tm-band-alt" id="capabilities">
      <div className="tm-shell">
        <header className="tm-section-head">
          <div>
            <span className="tm-eyebrow">Capabilities</span>
            <BlurText as="h2" className="tm-h2" text="Nine service lines, one contractor." />
          </div>

          <div className="tm-section-head-aside">
            <p className="tm-lede">
              From the containment in the data center to the panel on the meeting room wall — under
              a single scope of work.
            </p>
            <Link to="/services" className="tm-link">
              All services
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </header>

        <div className="cap-body">
          <ol className="cap-index" onMouseLeave={() => setActive(null)}>
            {SERVICES.map((service, i) => (
              <li className="cap-item" key={service.id}>
                <Link
                  to={service.link}
                  className={`cap-row${active === i ? ' is-active' : ''}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                >
                  <span className="cap-num tm-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="cap-name">{service.title}</span>
                  <span className="cap-blurb">{service.blurb}</span>
                  <span className="cap-arrow" aria-hidden="true">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <div className="cap-preview" aria-hidden="true">
            <div className="cap-preview-frame">
              {SERVICES.map((service, i) => (
                <img
                  key={service.id}
                  src={service.image}
                  alt=""
                  loading="lazy"
                  className={`cap-preview-img${active === i ? ' is-visible' : ''}`}
                />
              ))}

              <span className="cap-preview-idle tm-num">
                {active === null ? 'Select a capability' : String(active + 1).padStart(2, '0')}
              </span>

              <span className="cap-tick cap-tick-tl" />
              <span className="cap-tick cap-tick-tr" />
              <span className="cap-tick cap-tick-bl" />
              <span className="cap-tick cap-tick-br" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
