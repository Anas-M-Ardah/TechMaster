// Client.jsx
import Footer from '../Footer';
import Header from '../Header';
import PageHeader from '../Common/PageHeader';
import Clients from './Clients';

function Client() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Clients"
          eyebrow="150+ organisations"
          lede="Government bodies, universities, banks, hotels and schools across the Kingdom."
        />
        <Clients />
      </main>
      <Footer />
    </>
  );
}

export default Client;
