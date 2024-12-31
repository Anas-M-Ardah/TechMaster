// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <Router>
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

export default App;