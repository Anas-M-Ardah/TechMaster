// HomePage/About.jsx
// The positioning statement, kept to one paragraph, followed by the four verbs
// the company already uses to describe itself — plan, design, optimise, support
// — laid out as a numbered process row instead of feature cards.
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import BlurText from '../Common/BlurText';
import '../../css/HomePage/About.css';

const PHASES = [
  { index: '01', name: 'Plan', detail: 'Site survey, requirements and budget.' },
  { index: '02', name: 'Design', detail: 'System architecture and drawings.' },
  { index: '03', name: 'Optimise', detail: 'Integration, commissioning and tuning.' },
  { index: '04', name: 'Support', detail: 'Maintenance and on-call response.' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const About = () => {
  return (
    <section className="about tm-section">
      <div className="tm-shell">
        <div className="about-head">
          <div>
            <span className="tm-eyebrow">Who we are</span>
            <BlurText
              as="h2"
              className="tm-h2 about-title"
              segments={[
                { text: 'One team, from first drawing', breakAfter: true },
                { text: 'to final handover.' },
              ]}
            />
          </div>

          <div className="about-aside">
            <p className="tm-lede">
              Technology Master is an ICT solutions and services provider based in Amman. Our own
              engineers carry a project from site survey through to long-term support, so there is
              one team accountable for the result.
            </p>

            <Link to="/about" className="tm-link">
              More about us
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <motion.ol
          className="about-phases"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {PHASES.map((phase) => (
            <motion.li className="about-phase" key={phase.index} variants={item}>
              <span className="about-phase-index tm-num">{phase.index}</span>
              <h3 className="tm-h3 about-phase-name">{phase.name}</h3>
              <p className="about-phase-detail">{phase.detail}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
};

export default About;
