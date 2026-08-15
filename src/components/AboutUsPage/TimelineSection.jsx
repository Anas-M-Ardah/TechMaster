// components/AboutUsPage/TimelineSection.jsx
// The four stages, drawn as a scale with a node per stage. The previous
// version gave each stage its own colour and auto-advanced a carousel on
// mobile; both are gone — all four stages are readable at once, and the only
// colour is the accent marking where the company is now.
import { motion } from 'framer-motion';
import BlurText from '../Common/BlurText';
import '../../css/AboutUsPage/TimelineSection.css';

const STAGES = [
  {
    name: 'Dream',
    subtitle: 'Started from a dream',
    description: 'It began as an idea, and the idea grew.',
  },
  {
    name: 'Implement',
    subtitle: 'Then we began',
    description: 'Technology Master was founded to deliver those solutions.',
  },
  {
    name: 'Present',
    subtitle: 'Here we are',
    description: 'Delivering for major organisations across the Kingdom.',
    current: true,
  },
  {
    name: 'Future',
    subtitle: 'What we aim for',
    description: 'To become a world leader in flexible, end-to-end solutions.',
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const TimelineSection = () => {
  return (
    <section className="tl tm-section tm-band-alt">
      <div className="tm-shell">
        <header className="tm-section-head">
          <div>
            <span className="tm-eyebrow">Trajectory</span>
            <BlurText as="h2" className="tm-h2" text="From an idea to the Kingdom's institutions." />
          </div>
        </header>

        <motion.ol
          className="tl-track"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {STAGES.map((stage, i) => (
            <motion.li
              className={`tl-stage${stage.current ? ' is-current' : ''}`}
              key={stage.name}
              variants={item}
            >
              <span className="tl-node" aria-hidden="true" />
              <span className="tl-index tm-num">
                {String(i + 1).padStart(2, '0')}
                {stage.current && <span className="tl-now"> — now</span>}
              </span>
              <h3 className="tm-h3 tl-name">{stage.name}</h3>
              <p className="tl-subtitle">{stage.subtitle}</p>
              <p className="tl-description">{stage.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
};

export default TimelineSection;
