import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Footer from '../Footer';
import Header from '../Header';
import PageHeader from '../Common/PageHeader';
import LogoWall from '../Common/LogoWall';
import '../../css/BusinessPartnersPage/BusinessPartners.css';

import maxhub from '/images/partners/MAXHUB.png';
import huawei from '/images/partners/huawei.png';
import schneider from '/images/partners/schneider.png';
import conteg from '/images/partners/Conteg-logo.png';
import hp from '/images/partners/hp.png';
import minrray from '/images/partners/logo-minrray.png';
import hikvision from '/images/partners/hik.png';
import leyard from '/images/partners/LEYARD.png';
import howen from '/images/partners/howen.png';
import vissonic from '/images/partners/vissonic.png';
import navori from '/images/partners/navori-labs.png';
import honeywell from '/images/partners/honeyw.png';
import comm from '/images/partners/comm.png';
import nexans from '/images/partners/nexans.png';
import techline from '/images/partners/techline.png';
import fireban from '/images/partners/FireBan.webp';

const PARTNERS = [
  { name: 'MAXHUB', src: maxhub, to: '/maxhub' },
  { name: 'Huawei', src: huawei },
  { name: 'Schneider Electric', src: schneider },
  { name: 'Conteg', src: conteg },
  { name: 'HP', src: hp },
  { name: 'Minrray', src: minrray },
  { name: 'Hikvision', src: hikvision },
  { name: 'Leyard', src: leyard },
  { name: 'Howen', src: howen },
  { name: 'Vissonic', src: vissonic },
  { name: 'Navori Labs', src: navori },
  { name: 'Honeywell', src: honeywell },
  { name: 'Comm', src: comm },
  { name: 'Nexans', src: nexans },
  { name: 'Techline', src: techline },
  { name: 'FireBan', src: fireban },
];

function BusinessPartners() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Business partners"
          eyebrow="Direct manufacturer relationships"
          lede="Specification, warranty and support all run through one line, because we hold the partnership with the manufacturer whose equipment we install."
          crumbs={[]}
        />

        <section className="bp tm-section">
          <div className="tm-shell">
            <LogoWall items={PARTNERS} captions />

            <div className="bp-note">
              <p>
                MAXHUB is our flagship partnership — interactive flat panels, LED walls and
                conferencing systems, carried and supported in country.
              </p>
              <Link to="/maxhub" className="tm-link">
                Go to MAXHUB
                <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default BusinessPartners;
