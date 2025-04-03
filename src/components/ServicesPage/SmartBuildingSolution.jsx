import React, { useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import PageHeader from '../Common/PageHeader';
import ServiceDetails from '../Common/ServiceDetails';
import smartBuildingImage from '/images/services/smart-building/smart-city.webp';

// Partner Logos
import huawei from '/images/partners/huawei.png';
import vissonic from '/images/partners/vissonic.png';
import maxhub from '/images/partners/MAXHUB.png';
import absen from '/images/partners/absen.png';
import schneider from '/images/partners/schneider.png';
import ascom from '/images/partners/ascom.png';
import bosch from '/images/partners/bosch.png';
import honeyw from '/images/partners/honeyw.png';
import navori from '/images/partners/navori-labs.png';
import nexans from '/images/partners/nexans.png';
import minarray from '/images/partners/logo-minrray.png';
import jcvision from '/images/partners/jcvision.png';
import tyco from '/images/partners/tyco.png';



const serviceData = {
    title: "Smart Building Solutions",
    description: "Our smart building solutions integrate advanced technologies to enhance building efficiency and user experience.",
    mainImage: smartBuildingImage,
    quickLinks: [
        { title: "Data Center Engineering", url: "/services/data-center" },
        { title: "Structure Cabling", url: "/services/structure-cabling" }
    ],
    contactNumber: "+962-79-909-4176",
    serviceCategories: [
        {
            title: "Smart Building Solutions",
            items: [
                "CCTV",
                "Access Control",
                "Smart Classroom & Meeting Rooms",
                "Fire Alarm",
                "Lighting Control",
                "Energy Management",
                "Tracking System",
                "EMS System",
                "Video Conferencing",
                "IPTV and Digital Signage",
                "Large LED Screen",
                "Nurse Call System"
            ]
        }
    ],
    partners: [
        { name: "Huawei", logo: huawei },
        { name: "Vissonic", logo: vissonic },
        { name: "MAXHUB", logo: maxhub },
        { name: "Absen", logo: absen },
        { name: "Schneider", logo: schneider },
        { name: "Ascom", logo: ascom },
        { name: "Bosch", logo: bosch },
        { name: "Honeywell", logo: honeyw },
        { name: "Navori Labs", logo: navori },
        { name: "Nexans", logo: nexans },
        { name: "Minarray", logo: minarray },
        { name: "JC Vision", logo: jcvision },
        { name: "Tyco", logo: tyco },

        // Add more partners as needed
    ]
};

function SmartBuildingSolutions() {
    useEffect(() => {
        document.title = "Smart Building Solutions";
    }, []);

    return (
        <>
            <Header />
            <PageHeader 
                title="Smart Building Solutions" 
                breadcrumb={[
                    { title: "Home", url: "/" },
                    { title: "Services", url: "/services" },
                    { title: "Smart Building Solutions", url: "/services/smart-building" }
                ]}
            />
            <ServiceDetails {...serviceData} />
            <Footer />
        </>
    );
}

export default SmartBuildingSolutions;