import React, { useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import PageHeader from '../Common/PageHeader';
import ServiceDetails from '../Common/ServiceDetails';
import data_center from '../../assets/images/services/data-center/data-center.webp';

//Partner Logos
import schneider from '../../assets/images/partners/schneider.png';
import huawei from '../../assets/images/partners/huawei.png';
import gtec from '../../assets/images/partners/gtech.png';
import conteg from '../../assets/images/partners/Conteg-logo.png';
import fireban from '../../assets/images/partners/FireBan.webp';
import onis from '../../assets/images/partners/Onis-Visa-Logo.webp';

const serviceData = {
    title: "Data Center Engineering",
    description: "Our comprehensive data center engineering solutions ensure optimal performance, reliability, and scalability for your infrastructure needs.",
    mainImage: data_center,
    quickLinks: [
        { title: "Smart Building Solution", url: "/services/smart-building" },
        { title: "Structure Cabling BCS", url: "/services/structure-cabling" }
    ],
    contactNumber: "+962-79-909-4176",
    serviceCategories: [
        {
            title: "Data Center Engineering",
            items: [
                "Site Selection",
                "Assessment",
                "Plan & Design",
                "Implementation Testing & Commissioning",
                "Capacity Planning"
            ]
        },
        {
            title: "Fire Alarm & Extinguishing System",
            items: [
                "Fire Alarm System",
                "FM200",
                "Novec 1230",
                "Aerosol Fire Extinguishing System"
            ]
        },
        {
            title: "Air Conditioning",
            items: [
                "Air Cooled Units",
                "Chilled Water"
            ]
        },
        {
            title: "Data Center Maintenance",
            items: [
                "Data Center Systems Service Plan",
                "Data Center Cleaning"
            ]
        },
        {
            title: "Rack Solution",
            items: [
                "Cold Aisle Containment",
                "Hot Aisle Containment"
            ]
        }
    ],
    partners: [
        { name: "Schneider", logo: schneider },
        { name: "Huawei", logo: huawei },
        { name: "GTEC", logo: gtec },
        { name: "Conteg", logo: conteg },
        { name: "FireBan", logo: fireban },
        { name: "Onis", logo: onis },
        // Add more partners as needed
    ]
};

function DataCenter() {
    useEffect(() => {
        document.title = "Data Center Engineering Services";
    }, []);

    return (
        <>
            <Header />
            <PageHeader 
                title="Data Center" 
                breadcrumb={[
                    { title: "Home", url: "/" },
                    { title: "Services", url: "/services" },
                    { title: "Data Center", url: "/services/data-center" }
                ]}
            />
            <ServiceDetails {...serviceData} />
            <Footer />
        </>
    );
}

export default DataCenter;