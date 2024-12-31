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
      <PageHeader title="About Us" />
      <AboutContent />
      <TimelineSection />
      <Footer />
    </>
  );
}

export default AboutUs;