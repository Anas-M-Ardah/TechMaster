// components/Clients/Clients.jsx
import React from 'react';
import '../../css/ClientsPage/Clients.css';

// Import all client logos
// Import your client logos
import client1 from '/images/clients/client-1.png';
import client2 from '/images/clients/client-2.png';
import client3 from '/images/clients/client3.png';
import client4 from '/images/clients/client-4.jpg';
import client5 from '/images/clients/client-5.png';
import client6 from '/images/clients/client-6.png';
import client7 from '/images/clients/client-7.png';
import client8 from '/images/clients/client-8.png';
import client9 from '/images/clients/client-9.png';
import client10 from '/images/clients/client-10.png';
import client11 from '/images/clients/client-11.png';
import client12 from '/images/clients/client-12.png';
import civil_protection from '/images/clients/civil_protection.png';
import kettaneh_grp from '/images/clients/kettaneh_grp.png';
import middle_east_insurance from '/images/clients/middle_east_insurance.png';
import national_microfinance from '/images/clients/national-microfinance.jpg';
import safwa from '/images/clients/safwa-logo.webp';
import omareyah from '/images/clients/omareyah.png';
import tazkia from '/images/clients/tazkia.png';
import abdali_views from '/images/clients/abdali-views.png';
import royal_marine from '/images/clients/royal_marine.png';
import JIS from '/images/clients/JIS.png';
import xzc from '/images/clients/xzc.png';
import baynouna from '/images/clients/baynouna.png';
import customs from '/images/clients/customs.png';
import JDF from '/images/clients/JDF.png';
import JEPCO from '/images/clients/JEPCO.png';
import orthodox from '/images/clients/orthodox.png';
import EHS_Jordan from '/images/clients/EHS_jordan.png';

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
        { id: 13, name: "Client 13", image: civil_protection },
        { id: 14, name: "Client 14", image: kettaneh_grp },
        { id: 15, name: "Client 15", image: middle_east_insurance },
        { id: 16, name: "Client 16", image: national_microfinance },
        { id: 17, name: "Client 17", image: safwa },
        { id: 18, name: "Client 18", image: omareyah },
        { id: 19, name: "Client 19", image: tazkia },
        { id: 20, name: "Client 20", image: abdali_views },
        { id: 21, name: "Client 21", image: royal_marine },
        { id: 22, name: "Client 22", image: JIS },
        { id: 23, name: "Client 23", image: xzc },
        { id: 24, name: "Client 24", image: baynouna },
        { id: 25, name: "Client 25", image: customs },
        { id: 26, name: "Client 26", image: JDF },
        { id: 27, name: "Client 27", image: JEPCO },
        { id: 28, name: "Client 28", image: orthodox },
        { id: 29, name: "Client 29", image: EHS_Jordan },
        
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
                                style={{ filter: 'none' }}
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