// components/BusinessPartners/MaxHub/MaxHubProducts/MaxHubProducts.jsx
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../../../Header";
import Footer from "../../../Footer";
import PageHeader from "../../../Common/PageHeader";
import CategoryNav from "./CategoryNav";
import CategorySection from "./CategorySection";
import "./MaxhubProducts.css";

// ***** Import your product images ******

//INTERACTIVE FLAT PANEL
import v6 from "../../../../assets/images/partners/Maxhub/INTERACTIVE-FLAT-PANEL/v6.jpg";
import v7 from "../../../../assets/images/partners/Maxhub/INTERACTIVE-FLAT-PANEL/v7.webp";
import v6_classic from "../../../../assets/images/partners/Maxhub/INTERACTIVE-FLAT-PANEL/v6-classic.jpg";
import v6_trancend from "../../../../assets/images/partners/Maxhub/INTERACTIVE-FLAT-PANEL/v6-trancend.jpg";
import v5_classic from "../../../../assets/images/partners/Maxhub/INTERACTIVE-FLAT-PANEL/v5-classic.jpg";
import v5_vogue from "../../../../assets/images/partners/Maxhub/INTERACTIVE-FLAT-PANEL/v5-vogue.jpg";
import v5_transcend from "../../../../assets/images/partners/Maxhub/INTERACTIVE-FLAT-PANEL/v5-transcend.jpg";
import blackboard from "../../../../assets/images/partners/Maxhub/INTERACTIVE-FLAT-PANEL/blackboard.webp";
import u3 from "../../../../assets/images/partners/Maxhub/INTERACTIVE-FLAT-PANEL/u3.jpg";
import e2 from "../../../../assets/images/partners/Maxhub/INTERACTIVE-FLAT-PANEL/e2.jpg";
import e3 from "../../../../assets/images/partners/Maxhub/INTERACTIVE-FLAT-PANEL/e3.jpg";

//COMMERCIAL DISPLAY
import cma_series from "../../../../assets/images/partners/Maxhub/COMMERCIAL-DISPLAY/cma-series.jpg";
import cma_t_series from "../../../../assets/images/partners/Maxhub/COMMERCIAL-DISPLAY/cma-t-series.jpg"
import cmd_series from "../../../../assets/images/partners/Maxhub/COMMERCIAL-DISPLAY/cmd-series.jpg";
import uw_series_92 from "../../../../assets/images/partners/Maxhub/COMMERCIAL-DISPLAY/UW-Series-92.jpg";
import uw_series_105 from "../../../../assets/images/partners/Maxhub/COMMERCIAL-DISPLAY/UW-Series-105.jpg";

//LED 
import raptor_series_v3 from "../../../../assets/images/partners/Maxhub/LED/Raptor-Series-V3.jpg";
import raptor from "../../../../assets/images/partners/Maxhub/LED/raptor.jpg";
import gh31_series from "../../../../assets/images/partners/Maxhub/LED/GH31-Series.jpg";
import gv27_series from "../../../../assets/images/partners/Maxhub/LED/GV27-Series.webp";

//UNIFIED COMMUNICATION
import uc_s07 from "../../../../assets/images/partners/Maxhub/UNIFIED-COMMUNICATION/uc-s07.png";
import uc_p30 from "../../../../assets/images/partners/Maxhub/UNIFIED-COMMUNICATION/UC_P30.png";
import uc_w31 from "../../../../assets/images/partners/Maxhub/UNIFIED-COMMUNICATION/uc_w31.jpg";
import uc_bm35 from "../../../../assets/images/partners/Maxhub/UNIFIED-COMMUNICATION/uc-bm35.png";
import uc_bm45 from "../../../../assets/images/partners/Maxhub/UNIFIED-COMMUNICATION/uc-bm45.png";
import uc_s15 from "../../../../assets/images/partners/Maxhub/UNIFIED-COMMUNICATION/uc-s15.jpg";

//MICROSOFT TEAMS ROOMS
import xcore_pro from "../../../../assets/images/partners/Maxhub/MICROSOFT-TEAMS-ROOMS/xcore-kit-pro.png";
import xcore from "../../../../assets/images/partners/Maxhub/MICROSOFT-TEAMS-ROOMS/xcore-kit.jpg";
import xt10_vb from "../../../../assets/images/partners/Maxhub/MICROSOFT-TEAMS-ROOMS/xt10-vb-kit.jpg";
import xt10_ws from "../../../../assets/images/partners/Maxhub/MICROSOFT-TEAMS-ROOMS/xt10-ws-kit.jpg";
import xt20_ps from "../../../../assets/images/partners/Maxhub/MICROSOFT-TEAMS-ROOMS/xt20-ps-kit.png";
import xBoard from "../../../../assets/images/partners/Maxhub/MICROSOFT-TEAMS-ROOMS/Xboard.png";

//CAPTURE SYSTEMS
import capture_system_v3 from "../../../../assets/images/partners/Maxhub/CAPTURE-SYSTEM/capture_system_v3.png";
import capture_system from "../../../../assets/images/partners/Maxhub/CAPTURE-SYSTEM/capture_system.png";

//ACCESSORIES
import wireless_box from "../../../../assets/images/partners/MaxHub/ACCESSORIES/wireless-box.jpg";
import stylus from "../../../../assets/images/partners/MaxHub/ACCESSORIES/stylus.jpg";
import wireless_dongle from "../../../../assets/images/partners/MaxHub/ACCESSORIES/wireless-dongle.jpg";
import smart_lectern from "../../../../assets/images/partners/MaxHub/ACCESSORIES/smart-lectern.png";

//SOFTWARE
import maxhub_os from "../../../../assets/images/partners/MaxHub/SOFTWARE/maxhub-os.jpg";
import maxhub_share from "../../../../assets/images/partners/MaxHub/SOFTWARE/maxhub-share.png";
import maxhub_whiteboard from "../../../../assets/images/partners/MaxHub/SOFTWARE/maxhub-whiteboard.png";
import maxhub_edu_os_v4 from "../../../../assets/images/partners/MaxHub/SOFTWARE/MAXHUB_EDU_OS_V4.png";
import maxhub_edu_os_v3 from "../../../../assets/images/partners/MaxHub/SOFTWARE/edu_os_V3.png";
import maxhub_class from "../../../../assets/images/partners/MaxHub/SOFTWARE/maxhub-class.png";
import maxhub_class_pro from "../../../../assets/images/partners/MaxHub/SOFTWARE/maxhub-class-pro.png";
import maxhub_pivot from "../../../../assets/images/partners/MaxHub/SOFTWARE/maxhub-pivot.png";
import maxhub_connect from "../../../../assets/images/partners/MaxHub/SOFTWARE/maxhub-connect.png";
import { image } from "framer-motion/client";

const MaxHubProducts = () => {
    const [activeCategory, setActiveCategory] = useState("interactive-flat-panel");

    const categories = [
        {
            id: "interactive-flat-panel",
            name: "Interactive Flat Panel",
            description: "By integrating the functions of projector, whiteboard, advertising signage, computer, microphone, audio, etc, MAXHUB interactive displays could satisfy the needs of local meetings and remote collaborations.",
            products: [
                {
                    id: 1,
                    name: "V6 ViewPro Series",
                    image: v6,
                    description: "Professional Video Conferencing Panel",
                    url: "https://www.maxhub.com/en/viewpro_series_v6/"
                },
                {
                    id: 2,
                    name: "XBoard V7 Series",
                    image: v7,
                    description: "",
                    url: "https://www.maxhub.com/en/xboard_v7_series/"
                },
                {
                    id: 3,
                    name: "V6 Classic Series",
                    image: v6_classic,
                    description: "Interactive Flat Panel Display",
                    url: "https://www.maxhub.com/en/classic_series_v6/"
                },
                {
                    id: 4,
                    name: "V6 Trancend Series",
                    image: v6_trancend,
                    description: "PCAP High-end Interactive Flat Panel",
                    url: "https://www.maxhub.com/en/v6-transcend/"
                },
                {
                    id: 5,
                    name: "V5 Classic Series",
                    image: v5_classic,
                    description: "",
                    url: "https://www.maxhub.com/en/classic_series/"
                },
                {
                    id: 6,
                    name: "V5 Vogue Series",
                    image: v5_vogue,
                    description: "",
                    url: "https://www.maxhub.com/en/vogue_series/"
                },
                {
                    id: 7,
                    name: "V5 Transcend Series",
                    image: v5_transcend,
                    description: "",
                    url: "https://www.maxhub.com/en/transcend_series/"
                },
                {
                    id: 8,
                    name: "Smart Blackboard",
                    image: blackboard,
                    description: "",
                    url: "https://www.maxhub.com/en/smart_blackboard/"
                },
                {
                    id: 9,
                    name: "U3 Series",
                    image: u3,
                    description: "",
                    url: "https://www.maxhub.com/en/u3_series/"
                },
                {
                    id: 10,
                    name: "E2 Series",
                    image: e2,
                    description: "",
                    url: "https://www.maxhub.com/en/e2_Series/"
                },
                {
                    id: 11,
                    name: "E3 Series",
                    image: e3,
                    description: "",
                    url: "https://www.maxhub.com/en/e3_Series/"
                }
                // Add more products
            ]
        },
        {
            id: "commercial-display",
            name: "Commercial Display",
            description: "Taking simplicity, safety and flexibility to new levels. MAXHUB commercial display solutions make every team more effective, and every meeting more productive.",
            products: [
                {
                    id: 1,
                    name: "CMA Series",
                    image: cma_series,
                    description: "Professional display solutions for various commercial environments.",
                    url: "https://www.maxhub.com/en/cma_series"
                },
                {
                    id: 2,
                    name: "CMA-T Series",
                    image: cma_t_series,
                    description: "Professional display solutions for various commercial environments.",
                    url: "https://www.maxhub.com/en/cma_t_series/"
                },
                {
                    id: 3,
                    name: "CMD Series",
                    image: cmd_series,
                    description: "Professional display solutions for various commercial environments.",
                    url: "https://www.maxhub.com/en/cmd_series"
                },
                {
                    id: 4,
                    name: "UW Series 92",
                    image: uw_series_92,
                    description: "Professional display solutions for various commercial environments.",
                    url: "https://www.maxhub.com/en/uw-series92/"    
                },
                {
                    id: 5,
                    name: "UW Series 105",
                    image: uw_series_105,
                    description: "Professional display solutions for various commercial environments.",
                    url: "https://www.maxhub.com/en/uw-series/"
                }
            ]
        },
        {
            id: "led-display",
            name: "LED Display",
            description: "MAXHUB all-in-one LED supplements the product line-up, offering a complete solution portfolio that covers various kinds of dispaly needs.",
            products: [
                {
                    id: 1,
                    name: "Raptor Series V3",
                    image: raptor_series_v3,
                    description: "High-quality LED display solutions for various applications.",
                    url: "https://www.maxhub.com/en/Raptor_Series_V3"
                },
                {
                    id: 2,
                    name: "Raptor",
                    image: raptor,
                    description: "High-quality LED display solutions for various applications.",
                    url: "https://www.maxhub.com/en/led_wall_raptor_series"
                },
                {
                    id: 3,
                    name: "GH31 Series",
                    image: gh31_series,
                    description: "High-quality LED display solutions for various applications.",
                    url: "https://www.maxhub.com/en/led-gh31"
                },
                {
                    id: 4,
                    name: "GV27 Series",
                    image: gv27_series,
                    description: "High-quality LED display solutions for various applications.",
                    url: "https://www.maxhub.com/en/led-gv27"
                },
            ]
        },
        {
            id: "unified-communication",
            name: "Unified Communication",
            description: "MAXHUB provides UC solutions for different conference spaces, from huddle room to large muti-purpose hall. MAXHUB video conferencing and collaboration is scalable and highly adaptable.",
            products: [
                {
                    id: 1,
                    name: "UC S07",
                    image: uc_s07,
                    description: "",
                    url: "https://www.maxhub.com/en/s07"
                },
                {
                    id: 2,
                    name: "UC P30",
                    image: uc_p30,
                    description: "",
                    url: "https://www.maxhub.com/en/uc-p30",
                },
                {
                    id: 3,
                    name: "UC BM35",
                    image: uc_bm35,
                    description: "",
                    url: "https://www.maxhub.com/en/bm35",
                },
                {
                    id: 4,
                    name: "UC BM45",
                    image: uc_bm45,
                    description: "",
                    url: "https://www.maxhub.com/en/uc_bm45",
                },
                {
                    id: 5,
                    name: "UC S15",
                    image: uc_s15,
                    description: "",
                    url: "https://www.maxhub.com/en/ucs15",
                },
                {
                    id: 6,
                    name: "UC W31",
                    image: uc_w31,
                    description: "",
                    url: "https://www.maxhub.com/en/uc-w31/",
                },
            ]
        },
        {
            id: "microsoft-teams-rooms",
            name: "Microsoft Teams Rooms",
            description: "Do more for less and maximize efficiency with MAXHUB XT series for Microsoft Teams Rooms.",
            products: [
                {
                    id: 1,
                    name: "Xcore Kit Pro",
                    image: xcore_pro,
                    description: "",
                    url: "https://www.maxhub.com/en/xcore-kit-pro",
                },
                {
                    id: 2,
                    name: "Xcore Kit",
                    image: xcore,
                    description: "",
                    url: "https://www.maxhub.com/en/xcore-kit",
                },
                {
                    id: 3,
                    name: "XT10-VB Kit",
                    image: xt10_vb,
                    description: "",
                    url: "https://www.maxhub.com/en/xt10-vb-kit",
                },
                {
                    id: 4,
                    name: "XT10-WS Kit",
                    image: xt10_ws,
                    description: "",
                    url: "https://www.maxhub.com/en/xt10-ws-kit",
                },
                {
                    id: 5,
                    name: "XT20-PS Kit",
                    image: xt20_ps,
                    description: "",
                    url: "https://www.maxhub.com/en/xt20-ps-kit",
                },
                {
                    id: 6,
                    name: "UC-W31",
                    image: uc_w31,
                    description: "",
                    url: "https://www.maxhub.com/en/uc-w31/",
                },
                {
                    id: 7,
                    name: "UC BM35",
                    image: uc_bm35,
                    description: "",
                    url: "https://www.maxhub.com/en/bm35",
                },
                {
                    id: 8,
                    name: "UC S07",
                    image: uc_s07,
                    description: "",
                    url: "https://www.maxhub.com/en/s07",
                },
                {
                    id: 9,
                    name: "UC P30",
                    image: uc_p30,
                    description: "",
                    url: "https://www.maxhub.com/en/uc-p30",
                },
                {
                    id: 10,
                    name: "UC BM45",
                    image: uc_bm45,
                    description: "",
                    url: "https://www.maxhub.com/en/uc_bm45",
                },
                {
                    id: 11,
                    name: "Xboard for MS Teams",
                    image: xBoard,
                    description: "",
                    url: "https://www.maxhub.com/en/xboard-for-mtr",
                }
                
            ]
        },
        {
            id: "capture-system",
            name: "Capture System",
            description: "MAXHUB easy-to-use class capturing solution.",
            products: [
                {
                    id: 1,
                    name: "Capture System V3",
                    image: capture_system_v3,
                    description: "",
                    url: "https://www.maxhub.com/en/capture-system-v3"
                },
                {
                    id: 2,
                    name: "Capture System",
                    image: capture_system,
                    description: "",
                    url: "https://www.maxhub.com/en/capture-system/"
                }
            ]
        },
        {
            id: "accessories",
            name: "Accessories",
            description: "To improve the user experience, MAXHUB provides flexible accessories options.",
            products: [
                {
                    id: 1,
                    name: "Wireless Box",
                    image: wireless_box,
                    description: "",
                    url: "https://www.maxhub.com/en/box",
                },
                {
                    id: 2,
                    name: "Stylus",
                    image: stylus,
                    description: "",
                    url: "https://www.maxhub.com/en/replacement-shuangse-pen",
                },
                {
                    id: 3,
                    name: "Wireless Dongle",
                    image: wireless_dongle,
                    description: "",
                    url: "https://www.maxhub.com/en/wireless-dongle",
                },
                {
                    id: 4,
                    name: "Smart Lectern",
                    image: smart_lectern,
                    description: "",
                    url: "https://www.maxhub.com/en/smart-lectern",
                }
            ]
        },
        {
            id: "software",
            name: "Software",
            description: "MAXHUB software solutions cover critical tools to enable brainstorming, content sharing, instant video calls and device management.",
            products: [
                {
                    id: 1,
                    name: "MAXHUB OS",
                    image: maxhub_os,
                    description: "",
                    url: "https://www.maxhub.com/en/conference_os"
                },
                {
                    id: 2,
                    name: "MAXHUB Whiteboard",
                    image: maxhub_whiteboard,
                    description: "",
                    url: "https://www.maxhub.com/en/maxhub_whiteboard"
                },
                {
                    id: 3,
                    name: "MAXHUB Share",
                    image: maxhub_share,
                    description: "",
                    url: "https://www.maxhub.com/en/maxhub_share"
                },
                {
                    id: 4,
                    name: "EDU OS V4 for Education",
                    image: maxhub_edu_os_v4,
                    description: "",
                    url: "https://www.maxhub.com/en/edu_os_v4"
                },
                {
                    id: 5,
                    name: "EDU OS V3",
                    image: maxhub_edu_os_v3,
                    description: "",
                    url: "https://www.maxhub.com/en/eduos"
                },
                {
                    id: 6,
                    name: "MAXHUB Connect",
                    image: maxhub_connect,
                    description: "",
                    url: "https://www.maxhub.com/en/connect"
                },
                {
                    id: 7,
                    name: "MAXHUB Class",
                    image: maxhub_class,
                    description: "",
                    url: "https://www.maxhub.com/en/class"
                },
                {
                    id: 8,
                    name: "MAXHUB Class Pro",
                    image: maxhub_class_pro,
                    description: "",
                    url: "https://www.maxhub.com/en/class-pro"
                },
                {
                    id: 9,
                    name: "MAXHUB Pivot",
                    image: maxhub_pivot,
                    description: "",
                    url: "https://www.maxhub.com/en/pivot"
                }
            ]
        }
    ];

    return (
        <div className="maxhub-products-page">
            <Header />
            <PageHeader
                title="MAXHUB Products"
                breadcrumb={[
                    { title: "Home", url: "/" },
                    { title: "MAXHUB", url: "/maxhub" },
                    { title: "Products", url: "/maxhub/products" }
                ]}
            />

            <div className="maxhub-products-container">
                {/* Remove Container wrapper here */}
                <CategoryNav
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />

                <div className="maxhub-category-content">
                    <Container>
                        {categories.map((category) => (
                            <CategorySection
                                key={category.id}
                                category={category}
                                isActive={activeCategory === category.id}
                            />
                        ))}
                    </Container>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MaxHubProducts;