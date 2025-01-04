// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import Home from './components/HomePage/Home';
import AboutUs from './components/AboutUsPage/AboutUs';
import Service from './components/ServicesPage/Service';
import Client from './components/ClientsPage/Client';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoadingSpinner from './components/Common/LoadingSpinner';
import DataCenter from './components/ServicesPage/DataCenter';

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
        <Route path="/services/data-center" element={<DataCenter />} />
      </Routes>
    </Router>
  );
}

export default App;