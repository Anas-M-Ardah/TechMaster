// components/AboutUsPage/AboutContent.jsx
// Mission and vision were behind a tab toggle, which hid half the section's
// substance behind a click. They now sit side by side as two ruled columns —
// the company's own wording, just no longer competing for one slot.
import { motion } from 'framer-motion';
import BlurText from '../Common/BlurText';
import '../../css/AboutUsPage/AboutContent.css';

import aboutImage from '/images/banner1.jpg';

const MISSION =
  'To empower our clients with an intelligent and excellent IT infrastructure equipped with smart technology for their homes and business that makes their life easier while enabling them to optimize the efficiency of their business operations in an always-on-line and controlled network.';

const VISION =
  'To be the world leader in providing flexible, end-to-end solutions for the design, deployment, and management of effective, efficient and consistent on-premises and Data Centers, Low Current and Cloud IT Infrastructure solutions — implementation and support services that let customers consume technology in their business roles.';

const AboutContent = () => {
  return (
    <section className="ab tm-section">
      <div className="tm-shell">
        <div className="ab-grid">
          <div className="ab-text">
            <span className="tm-eyebrow">The company</span>

            <BlurText
              as="h2"
              className="tm-h2 ab-title"
              segments={[{ text: 'Enterprise solutions, across', breakAfter: true }, { text: 'every segment in the Kingdom.' }]}
            />

            <p className="tm-lede ab-lede">
              We are an ICT (Information &amp; Communication Technology) solutions and services
              provider. We help clients plan, design, optimise and support the mission of IT
              infrastructure, data centers and smart solutions.
            </p>

            <p className="ab-body">
              Technology Master develops and customises solutions targeting state-of-the-art
              delivery. Its capability as a total solutions provider is enhanced by a portfolio of
              services in networking, systems integration, consultation and implementation,
              business recovery and operations support.
            </p>
          </div>

          <motion.figure
            className="ab-plate"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="ab-plate-frame">
              <img src={aboutImage} alt="Technology Master project work" loading="lazy" />
              <span className="ab-tick ab-tick-tl" aria-hidden="true" />
              <span className="ab-tick ab-tick-tr" aria-hidden="true" />
              <span className="ab-tick ab-tick-bl" aria-hidden="true" />
              <span className="ab-tick ab-tick-br" aria-hidden="true" />
            </div>
            <figcaption className="ab-plate-caption">
              <span className="tm-num">15+</span>
              <span>years delivering infrastructure across Jordan</span>
            </figcaption>
          </motion.figure>
        </div>

        <div className="ab-statements">
          <article className="ab-statement">
            <span className="ab-statement-index tm-num">01 — Mission</span>
            <p>{MISSION}</p>
          </article>

          <article className="ab-statement">
            <span className="ab-statement-index tm-num">02 — Vision</span>
            <p>{VISION}</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
