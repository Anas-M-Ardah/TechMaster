// Home.jsx
// Narrative order: who we are → what we build → what we carry → what we've
// delivered → who trusts us → how to reach us. Dark bands bookend the page and
// mark the one product moment in the middle; everything else stays light.
import Header from '../Header';
import Hero from './Hero';
import Stats from './Stats';
import About from './About';
import Services from './Services';
import MaxHubSpotlight from './MaxHubSpotlight';
import Projects from './Projects';
import Partners from './Partners';
import MoreSection from './MoreSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <MaxHubSpotlight />
        <Projects />
        <Partners />
        <MoreSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
