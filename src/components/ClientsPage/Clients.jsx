// components/ClientsPage/Clients.jsx
import LogoWall from '../Common/LogoWall';
import '../../css/ClientsPage/Clients.css';

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
import civilProtection from '/images/clients/civil_protection.png';
import kettaneh from '/images/clients/kettaneh_grp.png';
import middleEastInsurance from '/images/clients/middle_east_insurance.png';
import nationalMicrofinance from '/images/clients/national-microfinance.jpg';
import safwa from '/images/clients/safwa-logo.webp';
import omareyah from '/images/clients/omareyah.png';
import tazkia from '/images/clients/tazkia.png';
import abdaliViews from '/images/clients/abdali-views.png';
import royalMarine from '/images/clients/royal_marine.png';
import jis from '/images/clients/JIS.png';
import xzc from '/images/clients/xzc.png';
import baynouna from '/images/clients/baynouna.png';
import customs from '/images/clients/customs.png';
import jdf from '/images/clients/JDF.png';
import jepco from '/images/clients/JEPCO.png';
import orthodox from '/images/clients/orthodox.png';
import ehsJordan from '/images/clients/EHS_jordan.png';

// Named entries first — they are the recognisable ones, and leading with them
// makes the wall read as institutions rather than an anonymous logo dump.
const CLIENTS = [
  { src: civilProtection, name: 'Civil Protection' },
  { src: customs, name: 'Jordan Customs' },
  { src: jdf, name: 'JDF' },
  { src: jepco, name: 'JEPCO' },
  { src: kettaneh, name: 'Kettaneh Group' },
  { src: middleEastInsurance, name: 'Middle East Insurance' },
  { src: nationalMicrofinance, name: 'National Microfinance' },
  { src: safwa, name: 'Safwa' },
  { src: abdaliViews, name: 'Abdali Views' },
  { src: baynouna, name: 'Baynouna' },
  { src: royalMarine, name: 'Royal Marine' },
  { src: jis, name: 'JIS' },
  { src: orthodox, name: 'Orthodox' },
  { src: omareyah, name: 'Omareyah' },
  { src: tazkia, name: 'Tazkia' },
  { src: ehsJordan, name: 'EHS Jordan' },
  { src: xzc, name: 'XZC' },
  { src: client1, name: 'Client 1' },
  { src: client2, name: 'Client 2' },
  { src: client3, name: 'Client 3' },
  { src: client4, name: 'Client 4' },
  { src: client5, name: 'Client 5' },
  { src: client6, name: 'Client 6' },
  { src: client7, name: 'Client 7' },
  { src: client8, name: 'Client 8' },
  { src: client9, name: 'Client 9' },
  { src: client10, name: 'Client 10' },
  { src: client11, name: 'Client 11' },
  { src: client12, name: 'Client 12' },
];

const Clients = () => {
  return (
    <section className="cl tm-section">
      <div className="tm-shell">
        <header className="cl-head">
          <p className="cl-count">
            <span className="tm-num">{CLIENTS.length}</span>
            organisations pictured — part of the 150+ we have delivered for across government,
            education, banking and hospitality.
          </p>
        </header>

        <LogoWall items={CLIENTS} />
      </div>
    </section>
  );
};

export default Clients;
