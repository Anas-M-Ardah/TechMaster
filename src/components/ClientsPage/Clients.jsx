// components/Clients/Clients.jsx
import React from 'react';
import '../../css/ClientsPage/Clients.css';

// Import all client logos
// Import your client logos
import client1 from '../../assets/images/clients/client-1.png';
import client2 from '../../assets/images/clients/client-2.png';
import client3 from '../../assets/images/clients/client3.jpg';
import client4 from '../../assets/images/clients/client-4.jpg';
import client5 from '../../assets/images/clients/client-5.webp';
import client6 from '../../assets/images/clients/client-6.webp';
import client7 from '../../assets/images/clients/client-7.webp';
import client8 from '../../assets/images/clients/client-8.png';
import client9 from '../../assets/images/clients/client-9.png';
import client10 from '../../assets/images/clients/client-10.png';
import client11 from '../../assets/images/clients/client-11.png';
import client12 from '../../assets/images/clients/client-12.png';

// ... import all other client images

const Clients = () => {
    const clientsList = [
        { id: 1, name: "Client 1", image: client1 },
        { id: 2, name: "Client 2", image: client2 },
        { id: 3, name: "Client 3", image: client3 },
        { id: 4, name: "Client 4", image: client4 },
        { id: 5, name: "Client 5", image: client5 },
        { id: 6, name: "Client 6", image: client6 },
        { id: 7, name: "Client 7", image: client7 },
        { id: 8, name: "Client 8", image: client8 },
        { id: 9, name: "Client 9", image: client9 },
        { id: 10, name: "Client 10", image: client10 },
        { id: 11, name: "Client 11", image: client11 },
        { id: 12, name: "Client 12", image: client12 },
        // ... add all clients
    ];

    return (
        <section className="tm-clients-section">
        <div className="tm-clients-container">
            <h2 className="tm-clients-title" data-aos="fade-up">OUR DEAR CLIENTS</h2>
            
            <div className="tm-clients-grid" data-aos="fade-up">
                {clientsList.map((client) => (
                    <div 
                        key={client.id} 
                        className="tm-clients-item"
                        data-aos="fade-up"
                        data-aos-delay={(client.id - 1) * 100}
                    >
                        <div className="tm-clients-logo">
                            <img 
                                src={client.image} 
                                alt={client.name}
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};

export default Clients;