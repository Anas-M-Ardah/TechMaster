// HomePage/Stats.jsx
// A measured band directly under the hero: four figures, hairline-separated,
// set in mono so they read as specification rather than marketing.
import { motion } from 'framer-motion';
import CountUp from '../Common/CountUp';
import '../../css/HomePage/Stats.css';

const STATS = [
  { end: 15, suffix: '+', label: 'Years in operation' },
  { end: 150, suffix: '+', label: 'Clients served' },
  { end: 9, suffix: '', label: 'Service lines' },
  { end: 20, suffix: '+', label: 'Technology partners' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

const Stats = () => {
  return (
    <section className="stats">
      <div className="tm-shell">
        <motion.dl
          className="stats-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {STATS.map((stat) => (
            <motion.div className="stat" key={stat.label} variants={item}>
              <dt className="stat-value tm-num">
                <CountUp end={stat.end} />
                <span className="stat-suffix">{stat.suffix}</span>
              </dt>
              <dd className="stat-label">{stat.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default Stats;
