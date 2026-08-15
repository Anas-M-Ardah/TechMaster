import { useState } from 'react';
import axios from 'axios';
import { FiArrowRight } from 'react-icons/fi';
import Footer from '../Footer';
import Header from '../Header';
import PageHeader from '../Common/PageHeader';
import BlurText from '../Common/BlurText';
import '../../css/ContactUsPage/ContactUs.css';

const ENDPOINT = 'https://techmaster-emailservice.onrender.com/api/contact';

const DETAILS = [
  { label: 'Office', value: 'Building 219, Wasfi Tal St, Khalda, Amman, Jordan' },
  { label: 'Call', value: '+962 79 909 4176', href: 'tel:+962799094176' },
  { label: 'Email', value: 'malardah@technology-master.com', href: 'mailto:malardah@technology-master.com' },
];

const EMPTY = { name: '', email: '', phone: '', message: '' };

function ContactUs() {
  const [formData, setFormData] = useState(EMPTY);
  // 'idle' | 'sending' | 'sent' | 'error' — replaces the previous hand-rolled
  // setInterval that animated dots into the response string.
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    setFeedback('');

    try {
      const response = await axios.post(ENDPOINT, formData);
      setStatus('sent');
      setFeedback(response?.data?.message || 'Thanks — your message is on its way.');
      setFormData(EMPTY);
    } catch {
      setStatus('error');
      setFeedback('That did not go through. Please try again, or call us directly.');
    }
  };

  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Contact"
          eyebrow="Amman, Jordan"
          lede="Tell us what you are building and we will scope it against your site."
        />

        <section className="ct tm-section">
          <div className="tm-shell">
            <div className="ct-grid">
              <div className="ct-aside">
                <BlurText
                  as="h2"
                  className="tm-h2 ct-title"
                  segments={[{ text: 'Start with a', breakAfter: true }, { text: 'site survey.' }]}
                />

                <p className="ct-note">
                  Technology Master provides its customers with professional technical support
                  services, making sure clients get the assistance they need.
                </p>

                <dl className="ct-details">
                  {DETAILS.map((detail) => (
                    <div className="ct-detail" key={detail.label}>
                      <dt className="tm-num">{detail.label}</dt>
                      <dd>
                        {detail.href ? <a href={detail.href}>{detail.value}</a> : detail.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <form className="ct-form" onSubmit={handleSubmit}>
                <div className="ct-fields">
                  <label className="ct-field">
                    <span className="ct-label">
                      Name <em>required</em>
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label className="ct-field">
                    <span className="ct-label">
                      Email <em>required</em>
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />
                  </label>

                  <label className="ct-field">
                    <span className="ct-label">
                      Phone <em>optional</em>
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </label>

                  <label className="ct-field is-wide">
                    <span className="ct-label">
                      Message <em>required</em>
                    </span>
                    <textarea
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>

                <div className="ct-submit">
                  <button type="submit" className="tm-btn tm-btn-solid" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                    {status !== 'sending' && <FiArrowRight aria-hidden="true" />}
                  </button>

                  <p
                    className={`ct-feedback${status === 'error' ? ' is-error' : ''}${
                      status === 'sent' ? ' is-sent' : ''
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {feedback}
                  </p>
                </div>
              </form>
            </div>

            <figure className="ct-map">
              <figcaption className="ct-map-caption">
                <span className="tm-num">Location</span>
                <span>Building 219, Wasfi Tal St, Khalda, Amman</span>
              </figcaption>
              <iframe
                title="Technology Master office location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3383.809706026183!2d35.85956907508888!3d31.993173673631727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBuilding%20219%2C%20Wasfi%20Tal%20St%2C%20Khalda%2C%20Amman%2C%20Jordan!5e0!3m2!1sen!2sjo!4v1736099352663!5m2!1sen!2sjo"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </figure>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ContactUs;
