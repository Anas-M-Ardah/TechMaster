import { useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import PageHeader from '../Common/PageHeader';
import ServiceDetails from '../Common/ServiceDetails';
import structureCablingImage from '/images/services/structure-cabling/structured-cabling-solution-bg.webp';

// Partner Logos
import commoscope from '/images/partners/comm.png';
import techline from '/images/partners/techline.png';
import excel from '/images/partners/excel.png';
import fluke from '/images/partners/fluke.png';
import nexans from '/images/partners/nexans.png';

const serviceData = {
    title: "Structure Cabling",
    description: "Our structured cabling solutions provide a comprehensive approach to designing and implementing robust cabling infrastructure.",
    mainImage: structureCablingImage,
    quickLinks: [
        { title: "Data Center Engineering", url: "/services/data-center" },
        { title: "Smart Building Solution", url: "/services/smart-building" }
    ],
    contactNumber: "+962-79-909-4176",
    serviceCategories: [
        {
            title: "Testing & Commission",
            items: [
                "Fluke Networks"
            ]
        },
        {
            title: "Cabling Infrastructure",
            items: [
                "Design, Supply and Implement",
                "Copper",
                "Fiber-Optic",
                "FTTH",
                "Pre-Terminated"
            ]
        },
        {
            title: "Rack Solution",
            items: [
                "DC, Floor-Standing & Wall-Mount",
                "Cabinets Accessories"
            ]
        }
    ],
    partners: [
        { name: "CommoScope", logo: commoscope },
        { name: "Techline", logo: techline },
        { name: "Excel", logo: excel },
        { name: "Fluke Networks", logo: fluke },
        { name: "Nexans", logo: nexans },

        // Add more partners as needed
    ]
};

function StructureCabling() {
    useEffect(() => {
        document.title = "Structure Cabling Services";
    }, []);

    return (
        <>
            <Header />
            <main>
                <PageHeader
                    title="Structure Cabling"
                    eyebrow="Service line 03"
                    lede="The copper and fibre backbone a building runs on — installed, tested and certified to standard."
                    crumbs={[{ to: '/services', label: 'Services' }]}
                />
                <ServiceDetails {...serviceData} />
            </main>
            <Footer />
        </>
    );
}

export default StructureCabling;