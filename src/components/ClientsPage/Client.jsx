// Client.jsx
import Footer from '../Footer';
import Header from '../Header';
import PageHeader from '../Common/PageHeader';
import Clients from './Clients';

function Client() {
  return (
    <>
      <Header />
      <PageHeader title="Clients" />
      <Clients />
      <Footer />
    </>
  );
}

export default Client;