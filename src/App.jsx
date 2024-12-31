// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/HomePage/Home';
import AboutUs from './components/AboutUsPage/AboutUs';
import Service from './components/ServicesPage/Service';
import Client from './components/ClientsPage/Client';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

//services
// import DataCenter from './components/ServicesPage/DataCenter';

// ScrollToTop component to handle scroll and AOS refresh on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, [pathname]);

  return null;
}

// Main App wrapper to handle AOS initialization
function AppWrapper() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
      disable: window.innerWidth < 768, // Disable on mobile
      mirror: false,
      anchorPlacement: 'top-bottom',
      disableMutationObserver: false,
    });

    // Handle window resize
    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);

    // Refresh AOS after everything is loaded
    window.addEventListener('load', () => {
      AOS.refresh();
    });

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', AOS.refresh);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/clients" element={<Client />} />
        {/* <Route path="/services/data-center" element={<DataCenter />} /> */}
      </Routes>
    </Router>
  );
}

// Export the wrapped App
function App() {
  return <AppWrapper />;
}

export default App;