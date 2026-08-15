// AboutUs.jsx
import Footer from '../Footer';
import Header from '../Header';
import PageHeader from '../Common/PageHeader';
import AboutContent from './AboutContent';
import TimelineSection from './TimelineSection';

function AboutUs() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="About us"
          eyebrow="Est. Amman, Jordan"
          lede="An ICT solutions and services provider that plans, designs, optimises and supports IT infrastructure, data centers and smart solutions."
        />
        <AboutContent />
        <TimelineSection />
      </main>
      <Footer />
    </>
  );
}

export default AboutUs;
