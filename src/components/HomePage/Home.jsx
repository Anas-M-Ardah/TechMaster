// Home.jsx
import Welcome from './Welcome';
import Clients from './Clients';
import About from './About';
import Partners from './Partners';
import Services from './Services';
import MoreSection from './MoreSection';
import Footer from '../Footer';
import Header from '../Header';

function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <Clients />
      <About />
      <Partners />
      <Services />
      <MoreSection />
      <Footer />
    </>
  );
}

export default Home;