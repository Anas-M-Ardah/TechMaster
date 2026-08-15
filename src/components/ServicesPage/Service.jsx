// Service.jsx
import Footer from '../Footer';
import Header from '../Header';
import PageHeader from '../Common/PageHeader';
import Services from './Services';
import SolutionsHero from './SolutionsHero';

function Service() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Services"
          eyebrow="Nine service lines"
          lede="From the containment in the data center to the panel on the meeting room wall — planned, deployed and supported under a single scope of work."
        />
        <Services />
        <SolutionsHero />
      </main>
      <Footer />
    </>
  );
}

export default Service;
