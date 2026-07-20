// src/data/maxhubProducts.js
// MAXHUB product catalog.
//
// Each product carries a `sku` that is unique across the whole catalog. This
// matters because `id` only counts up within a category (every category
// restarts at 1), so it cannot be used to identify a product on its own.
//
// A handful of UC products are deliberately listed in two categories
// (unified-communication and microsoft-teams-rooms). Those share a single sku
// so adding one from either page lands on the same quote line.

//INTERACTIVE FLAT PANEL
import v6 from "/images/partners/maxhub/interactive-flat-panel/v6.jpg";
import v7 from "/images/partners/maxhub/interactive-flat-panel/v7.webp";
import v6_classic from "/images/partners/maxhub/interactive-flat-panel/v6-classic.jpg";
import v6_trancend from "/images/partners/maxhub/interactive-flat-panel/v6-trancend.jpg";
import v5_classic from "/images/partners/maxhub/interactive-flat-panel/v5-classic.jpg";
import v5_vogue from "/images/partners/maxhub/interactive-flat-panel/v5-vogue.jpg";
import v5_transcend from "/images/partners/maxhub/interactive-flat-panel/v5-transcend.jpg";
import blackboard from "/images/partners/maxhub/interactive-flat-panel/blackboard.webp";
import u3 from "/images/partners/maxhub/interactive-flat-panel/u3.jpg";
import e2 from "/images/partners/maxhub/interactive-flat-panel/e2.jpg";
import e3 from "/images/partners/maxhub/interactive-flat-panel/e3.jpg";

//COMMERCIAL DISPLAY
import cma_series from "/images/partners/maxhub/commercial-display/cma-series.jpg";
import cma_t_series from "/images/partners/maxhub/commercial-display/cma-t-series.jpg"
import cmd_series from "/images/partners/maxhub/commercial-display/cmd-series.jpg";
import uw_series_92 from "/images/partners/maxhub/commercial-display/UW-Series-92.jpg";
import uw_series_105 from "/images/partners/maxhub/commercial-display/UW-Series-105.jpg";

//LED
import raptor_series_v3 from "/images/partners/maxhub/led/Raptor-Series-V3.jpg";
import raptor from "/images/partners/maxhub/led/raptor.jpg";
import gh31_series from "/images/partners/maxhub/led/GH31-Series.jpg";
import gv27_series from "/images/partners/maxhub/led/GV27-Series.webp";

//UNIFIED COMMUNICATION
import uc_s07 from "/images/partners/maxhub/unified/uc-s07.png";
import uc_p30 from "/images/partners/maxhub/unified/UC_P30.png";
import uc_w31 from "/images/partners/maxhub/unified/uc_w31.jpg";
import uc_bm35 from "/images/partners/maxhub/unified/uc-bm35.png";
import uc_bm45 from "/images/partners/maxhub/unified/uc-bm45.png";
import uc_s15 from "/images/partners/maxhub/unified/uc-s15.jpg";

//MICROSOFT TEAMS ROOMS
import xcore_pro from "/images/partners/maxhub/ms-teams/xcore-kit-pro.png";
import xcore from "/images/partners/maxhub/ms-teams/xcore-kit.jpg";
import xt10_vb from "/images/partners/maxhub/ms-teams/xt10-vb-kit.jpg";
import xt10_ws from "/images/partners/maxhub/ms-teams/xt10-ws-kit.jpg";
import xt20_ps from "/images/partners/maxhub/ms-teams/xt20-ps-kit.png";
import xBoard from "/images/partners/maxhub/ms-teams/Xboard.png";

//CAPTURE SYSTEMS
import capture_system_v3 from "/images/partners/maxhub/capture-system/capture_system_v3.png";
import capture_system from "/images/partners/maxhub/capture-system/capture_system.png";

//ACCESSORIES
import wireless_box from "/images/partners/maxhub/accessories/wireless-box.jpg";
import stylus from "/images/partners/maxhub/accessories/stylus.jpg";
import wireless_dongle from "/images/partners/maxhub/accessories/wireless-dongle.jpg";
import smart_lectern from "/images/partners/maxhub/accessories/smart-lectern.png";

//SOFTWARE
import maxhub_os from "/images/partners/maxhub/software/maxhub-os.jpg";
import maxhub_share from "/images/partners/maxhub/software/maxhub-share.png";
import maxhub_whiteboard from "/images/partners/maxhub/software/maxhub-whiteboard.png";
import maxhub_edu_os_v4 from "/images/partners/maxhub/software/MAXHUB_EDU_OS_V4.png";
import maxhub_edu_os_v3 from "/images/partners/maxhub/software/edu_os_v3.png";
import maxhub_class from "/images/partners/maxhub/software/maxhub-class.png";
import maxhub_class_pro from "/images/partners/maxhub/software/maxhub-class-pro.png";
import maxhub_pivot from "/images/partners/maxhub/software/maxhub-pivot.png";
import maxhub_connect from "/images/partners/maxhub/software/maxhub-connect.png";

export const categories = [
    {
        id: "interactive-flat-panel",
        name: "Interactive Flat Panel",
        description: "By integrating the functions of projector, whiteboard, advertising signage, computer, microphone, audio, etc, MAXHUB interactive displays could satisfy the needs of local meetings and remote collaborations.",
        products: [
            {
                id: 1,
                sku: "ifp-v6-viewpro",
                name: "V6 ViewPro Series",
                image: v6,
                description: "Professional Video Conferencing Panel",
                url: "https://www.maxhub.com/en/viewpro_series_v6/"
            },
            {
                id: 2,
                sku: "ifp-xboard-v7",
                name: "XBoard V7 Series",
                image: v7,
                description: "",
                url: "https://www.maxhub.com/en/xboard_v7_series/"
            },
            {
                id: 3,
                sku: "ifp-v6-classic",
                name: "V6 Classic Series",
                image: v6_classic,
                description: "Interactive Flat Panel Display",
                url: "https://www.maxhub.com/en/classic_series_v6/"
            },
            {
                id: 4,
                sku: "ifp-v6-transcend",
                name: "V6 Trancend Series",
                image: v6_trancend,
                description: "PCAP High-end Interactive Flat Panel",
                url: "https://www.maxhub.com/en/v6-transcend/"
            },
            {
                id: 5,
                sku: "ifp-v5-classic",
                name: "V5 Classic Series",
                image: v5_classic,
                description: "",
                url: "https://www.maxhub.com/en/classic_series/"
            },
            {
                id: 6,
                sku: "ifp-v5-vogue",
                name: "V5 Vogue Series",
                image: v5_vogue,
                description: "",
                url: "https://www.maxhub.com/en/vogue_series/"
            },
            {
                id: 7,
                sku: "ifp-v5-transcend",
                name: "V5 Transcend Series",
                image: v5_transcend,
                description: "",
                url: "https://www.maxhub.com/en/transcend_series/"
            },
            {
                id: 8,
                sku: "ifp-smart-blackboard",
                name: "Smart Blackboard",
                image: blackboard,
                description: "",
                url: "https://www.maxhub.com/en/smart_blackboard/"
            },
            {
                id: 9,
                sku: "ifp-u3",
                name: "U3 Series",
                image: u3,
                description: "",
                url: "https://www.maxhub.com/en/u3_series/"
            },
            {
                id: 10,
                sku: "ifp-e2",
                name: "E2 Series",
                image: e2,
                description: "",
                url: "https://www.maxhub.com/en/e2_Series/"
            },
            {
                id: 11,
                sku: "ifp-e3",
                name: "E3 Series",
                image: e3,
                description: "",
                url: "https://www.maxhub.com/en/e3_Series/"
            }
        ]
    },
    {
        id: "commercial-display",
        name: "Commercial Display",
        description: "Taking simplicity, safety and flexibility to new levels. MAXHUB commercial display solutions make every team more effective, and every meeting more productive.",
        products: [
            {
                id: 1,
                sku: "cd-cma",
                name: "CMA Series",
                image: cma_series,
                description: "Professional display solutions for various commercial environments.",
                url: "https://www.maxhub.com/en/cma_series"
            },
            {
                id: 2,
                sku: "cd-cma-t",
                name: "CMA-T Series",
                image: cma_t_series,
                description: "Professional display solutions for various commercial environments.",
                url: "https://www.maxhub.com/en/cma_t_series/"
            },
            {
                id: 3,
                sku: "cd-cmd",
                name: "CMD Series",
                image: cmd_series,
                description: "Professional display solutions for various commercial environments.",
                url: "https://www.maxhub.com/en/cmd_series"
            },
            {
                id: 4,
                sku: "cd-uw-92",
                name: "UW Series 92",
                image: uw_series_92,
                description: "Professional display solutions for various commercial environments.",
                url: "https://www.maxhub.com/en/uw-series92/"
            },
            {
                id: 5,
                sku: "cd-uw-105",
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
                sku: "led-raptor-v3",
                name: "Raptor Series V3",
                image: raptor_series_v3,
                description: "High-quality LED display solutions for various applications.",
                url: "https://www.maxhub.com/en/Raptor_Series_V3"
            },
            {
                id: 2,
                sku: "led-raptor",
                name: "Raptor",
                image: raptor,
                description: "High-quality LED display solutions for various applications.",
                url: "https://www.maxhub.com/en/led_wall_raptor_series"
            },
            {
                id: 3,
                sku: "led-gh31",
                name: "GH31 Series",
                image: gh31_series,
                description: "High-quality LED display solutions for various applications.",
                url: "https://www.maxhub.com/en/led-gh31"
            },
            {
                id: 4,
                sku: "led-gv27",
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
                sku: "uc-s07",
                name: "UC S07",
                image: uc_s07,
                description: "",
                url: "https://www.maxhub.com/en/s07"
            },
            {
                id: 2,
                sku: "uc-p30",
                name: "UC P30",
                image: uc_p30,
                description: "",
                url: "https://www.maxhub.com/en/uc-p30",
            },
            {
                id: 3,
                sku: "uc-bm35",
                name: "UC BM35",
                image: uc_bm35,
                description: "",
                url: "https://www.maxhub.com/en/bm35",
            },
            {
                id: 4,
                sku: "uc-bm45",
                name: "UC BM45",
                image: uc_bm45,
                description: "",
                url: "https://www.maxhub.com/en/uc_bm45",
            },
            {
                id: 5,
                sku: "uc-s15",
                name: "UC S15",
                image: uc_s15,
                description: "",
                url: "https://www.maxhub.com/en/ucs15",
            },
            {
                id: 6,
                sku: "uc-w31",
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
                sku: "mtr-xcore-kit-pro",
                name: "Xcore Kit Pro",
                image: xcore_pro,
                description: "",
                url: "https://www.maxhub.com/en/xcore-kit-pro",
            },
            {
                id: 2,
                sku: "mtr-xcore-kit",
                name: "Xcore Kit",
                image: xcore,
                description: "",
                url: "https://www.maxhub.com/en/xcore-kit",
            },
            {
                id: 3,
                sku: "mtr-xt10-vb-kit",
                name: "XT10-VB Kit",
                image: xt10_vb,
                description: "",
                url: "https://www.maxhub.com/en/xt10-vb-kit",
            },
            {
                id: 4,
                sku: "mtr-xt10-ws-kit",
                name: "XT10-WS Kit",
                image: xt10_ws,
                description: "",
                url: "https://www.maxhub.com/en/xt10-ws-kit",
            },
            {
                id: 5,
                sku: "mtr-xt20-ps-kit",
                name: "XT20-PS Kit",
                image: xt20_ps,
                description: "",
                url: "https://www.maxhub.com/en/xt20-ps-kit",
            },
            // The five entries below are the same products as in
            // unified-communication and intentionally reuse their skus.
            {
                id: 6,
                sku: "uc-w31",
                name: "UC-W31",
                image: uc_w31,
                description: "",
                url: "https://www.maxhub.com/en/uc-w31/",
            },
            {
                id: 7,
                sku: "uc-bm35",
                name: "UC BM35",
                image: uc_bm35,
                description: "",
                url: "https://www.maxhub.com/en/bm35",
            },
            {
                id: 8,
                sku: "uc-s07",
                name: "UC S07",
                image: uc_s07,
                description: "",
                url: "https://www.maxhub.com/en/s07",
            },
            {
                id: 9,
                sku: "uc-p30",
                name: "UC P30",
                image: uc_p30,
                description: "",
                url: "https://www.maxhub.com/en/uc-p30",
            },
            {
                id: 10,
                sku: "uc-bm45",
                name: "UC BM45",
                image: uc_bm45,
                description: "",
                url: "https://www.maxhub.com/en/uc_bm45",
            },
            {
                id: 11,
                sku: "mtr-xboard",
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
                sku: "cap-v3",
                name: "Capture System V3",
                image: capture_system_v3,
                description: "",
                url: "https://www.maxhub.com/en/capture-system-v3"
            },
            {
                id: 2,
                sku: "cap-standard",
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
                sku: "acc-wireless-box",
                name: "Wireless Box",
                image: wireless_box,
                description: "",
                url: "https://www.maxhub.com/en/box",
            },
            {
                id: 2,
                sku: "acc-stylus",
                name: "Stylus",
                image: stylus,
                description: "",
                url: "https://www.maxhub.com/en/replacement-shuangse-pen",
            },
            {
                id: 3,
                sku: "acc-wireless-dongle",
                name: "Wireless Dongle",
                image: wireless_dongle,
                description: "",
                url: "https://www.maxhub.com/en/wireless-dongle",
            },
            {
                id: 4,
                sku: "acc-smart-lectern",
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
                sku: "sw-maxhub-os",
                name: "MAXHUB OS",
                image: maxhub_os,
                description: "",
                url: "https://www.maxhub.com/en/conference_os"
            },
            {
                id: 2,
                sku: "sw-whiteboard",
                name: "MAXHUB Whiteboard",
                image: maxhub_whiteboard,
                description: "",
                url: "https://www.maxhub.com/en/maxhub_whiteboard"
            },
            {
                id: 3,
                sku: "sw-share",
                name: "MAXHUB Share",
                image: maxhub_share,
                description: "",
                url: "https://www.maxhub.com/en/maxhub_share"
            },
            {
                id: 4,
                sku: "sw-edu-os-v4",
                name: "EDU OS V4 for Education",
                image: maxhub_edu_os_v4,
                description: "",
                url: "https://www.maxhub.com/en/edu_os_v4"
            },
            {
                id: 5,
                sku: "sw-edu-os-v3",
                name: "EDU OS V3",
                image: maxhub_edu_os_v3,
                description: "",
                url: "https://www.maxhub.com/en/eduos"
            },
            {
                id: 6,
                sku: "sw-connect",
                name: "MAXHUB Connect",
                image: maxhub_connect,
                description: "",
                url: "https://www.maxhub.com/en/connect"
            },
            {
                id: 7,
                sku: "sw-class",
                name: "MAXHUB Class",
                image: maxhub_class,
                description: "",
                url: "https://www.maxhub.com/en/class"
            },
            {
                id: 8,
                sku: "sw-class-pro",
                name: "MAXHUB Class Pro",
                image: maxhub_class_pro,
                description: "",
                url: "https://www.maxhub.com/en/class-pro"
            },
            {
                id: 9,
                sku: "sw-pivot",
                name: "MAXHUB Pivot",
                image: maxhub_pivot,
                description: "",
                url: "https://www.maxhub.com/en/pivot"
            }
        ]
    }
];

// Flat sku -> product lookup. Cross-listed products resolve to their first
// occurrence, and every occurrence is identical apart from `id`, so which one
// wins does not matter. `categoryName` is attached for display on the quote page.
export const productsBySku = categories.reduce((map, category) => {
    category.products.forEach((product) => {
        if (!map.has(product.sku)) {
            map.set(product.sku, { ...product, categoryName: category.name });
        }
    });
    return map;
}, new Map());

export const getProductBySku = (sku) => productsBySku.get(sku);

export default categories;
