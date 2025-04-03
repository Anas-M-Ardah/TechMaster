// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import Home from './components/HomePage/Home';
import AboutUs from './components/AboutUsPage/AboutUs';
import Service from './components/ServicesPage/Service';
import Client from './components/ClientsPage/Client';
import BusinessPartners from './components/BusinessPartnersPage/BusinessPartners';
import ContactUs from './components/ContactUsPage/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoadingSpinner from './components/Common/LoadingSpinner';
import DataCenter from './components/ServicesPage/DataCenter';
import StructureCabling from './components/ServicesPage/StructureCabling';
import SmartBuildingSolutions from './components/ServicesPage/SmartBuildingSolution';
import MaxHub from './components/BusinessPartners/MaxHub/MaxHub';
import MaxHubProducts from './components/BusinessPartners/MaxHub/MaxHubProducts/MaxHubProducts';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  // Initialize AOS and handle loading
  useEffect(() => {
    // Show loader for 1 second
    setTimeout(() => {
      setLoading(false);
    }, 1000);


    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/partners" element={<BusinessPartners />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services/data-center" element={<DataCenter />} />
        <Route path="/services/structure-cabling" element={<StructureCabling />} />
        <Route path="/services/smart-building" element={<SmartBuildingSolutions />} />
        <Route path="/maxhub" element={<MaxHub />} />
        <Route path="maxhub/products" element={<MaxHubProducts />} />
      </Routes>
    </Router>
  );
}

export default App;