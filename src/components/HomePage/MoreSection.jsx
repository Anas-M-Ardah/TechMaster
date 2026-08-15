// HomePage/MoreSection.jsx
// The closing bookend. Same dark ground and signal grid as the hero, so the
// page opens and shuts on the same note, with the contact details stated
// plainly instead of hidden behind a form.
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import BlurText from '../Common/BlurText';
import MagneticButton from '../Common/MagneticButton';
import SchematicGrid from '../Common/SchematicGrid';
import '../../css/HomePage/MoreSection.css';

const CONTACTS = [
  { label: 'Call', value: '+962 79 909 4176', href: 'tel:+962799094176' },
  { label: 'Email', value: 'malardah@technology-master.com', href: 'mailto:malardah@technology-master.com' },
  { label: 'Office', value: 'Building 219, Wasfi Tal St, Khalda, Amman' },
];

const MoreSection = () => {
  return (
    <section className="cta tm-on-dark tm-grain">
      <SchematicGrid spacing={92} pulseCount={4} />

      <div className="tm-shell cta-shell">
        <div className="cta-grid">
          <motion.div
            className="cta-lead"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="tm-eyebrow">Next step</span>

            <BlurText
              as="h2"
              className="tm-display cta-title"
              segments={[{ text: "Let's plan your", breakAfter: true }, { text: 'next deployment.' }]}
            />

            <MagneticButton strength={0.25}>
              <Link to="/contact" className="tm-btn tm-btn-solid cta-button">
                Start a conversation
                <FiArrowRight aria-hidden="true" />
              </Link>
            </MagneticButton>
          </motion.div>

          <motion.dl
            className="cta-contacts"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {CONTACTS.map((contact) => (
              <div className="cta-contact" key={contact.label}>
                <dt className="cta-contact-label tm-num">{contact.label}</dt>
                <dd className="cta-contact-value">
                  {contact.href ? <a href={contact.href}>{contact.value}</a> : contact.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
};

export default MoreSection;
