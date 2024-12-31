// Services.jsx
import Footer from '../Footer';
import Header from '../Header';
import PageHeader from '../Common/PageHeader';
import Services from './Services';
import SolutionsHero from './SolutionsHero';

function Service() {
  return (
    <>
      <Header />
      <PageHeader title="Services" />
      <Services />
      <SolutionsHero />
      <Footer />
    </>
  );
}

export default Service;