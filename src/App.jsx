// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { checkConnectionSpeed } from './utils/connectionSpeed';
import LoadingSpinner from './components/Common/LoadingSpinner';
import Home from './components/HomePage/Home';
import AboutUs from './components/AboutUsPage/AboutUs';
import Service from './components/ServicesPage/Service';
import Client from './components/ClientsPage/Client';
import BusinessPartners from './components/BusinessPartnersPage/BusinessPartners';
import ContactUs from './components/ContactUsPage/ContactUs';
import DataCenter from './components/ServicesPage/DataCenter';
import StructureCabling from './components/ServicesPage/StructureCabling';
import SmartBuildingSolutions from './components/ServicesPage/SmartBuildingSolution';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [error, setError] = useState(null);
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    let timeoutId;
    let progressInterval;

    const startLoading = () => {
      let progress = 0;
      progressInterval = setInterval(() => {
        progress += 1;
        if (progress <= 90) {
          setLoadingProgress(progress);
        }
      }, 100);
    };

    const initializeAOS = () => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out',
      });
    };

    const checkResources = async () => {
      try {
        // Check connection speed
        const { isSlow } = await checkConnectionSpeed();
        setIsSlowConnection(isSlow);

        // Start loading animation
        startLoading();

        // Check if document is loaded
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', checkResources);
          return;
        }

        // Function to check if an image is loaded
        const imageLoaded = (imgElement) => {
          return new Promise((resolve) => {
            if (imgElement.complete) {
              resolve();
            } else {
              imgElement.addEventListener('load', resolve);
              imgElement.addEventListener('error', resolve);
            }
          });
        };

        // Get all images on the page
        const images = Array.from(document.getElementsByTagName('img'));
        await Promise.all(images.map(img => imageLoaded(img)));

        // Initialize AOS
        initializeAOS();

        // Add minimum loading time
        await new Promise(resolve => {
          timeoutId = setTimeout(resolve, 2000);
        });

        setContentLoaded(true);
        setLoadingProgress(100);

        // Clear loading after a short delay
        setTimeout(() => {
          setIsLoading(false);
        }, 500);

      } catch (err) {
        setError('Failed to load content. Please refresh the page.');
        console.error('Loading error:', err);
      } finally {
        clearInterval(progressInterval);
      }
    };

    checkResources();

    return () => {
      clearTimeout(timeoutId);
      clearInterval(progressInterval);
      document.removeEventListener('DOMContentLoaded', checkResources);
    };
  }, []);

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
        <button 
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Retry Loading
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <LoadingSpinner 
        progress={loadingProgress}
        isSlowConnection={isSlowConnection}
      />
    );
  }

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner progress={loadingProgress} isSlowConnection={isSlowConnection} />}>
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
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;