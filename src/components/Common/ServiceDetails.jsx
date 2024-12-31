// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import '../../css/Common/ServiceDetails.css';

// const SDQuickLinks = ({ links }) => (
//     <div className="sd-quick-links">
//         <h3>Quick Services Links:</h3>
//         <ul>
//             {links.map((link, index) => (
//                 <li key={`sd-quick-link-${index}`}>
//                     <Link to={link.url}>{link.title}</Link>
//                 </li>
//             ))}
//         </ul>
//     </div>
// );

// const SDContactBox = ({ number }) => (
//     <div className="sd-contact-box">
//         <h4>Contact us now</h4>
//         <div className="sd-contact-title">For Help</div>
//         <div className="sd-contact-number">
//             <a href={`tel:${number}`}>{number}</a>
//         </div>
//     </div>
// );

// const SDCategory = ({ category }) => (
//     <div className="sd-category">
//         <h3>{category.title}</h3>
//         <ul>
//             {category.items.map((item, idx) => (
//                 <li key={`sd-category-item-${idx}`}>{item}</li>
//             ))}
//         </ul>
//     </div>
// );

// const SDPartners = ({ partners }) => (
//     <div className="sd-partners">
//         <h3>Brought to you by:</h3>
//         <div className="sd-partners-grid">
//             {partners.map((partner, index) => (
//                 <div key={`sd-partner-${index}`} className="sd-partner-logo">
//                     <img 
//                         src={partner.logo} 
//                         alt={partner.name}
//                         loading="lazy"
//                     />
//                 </div>
//             ))}
//         </div>
//     </div>
// );

// const ServiceDetailsView = ({ 
//     title,
//     mainImage,
//     quickLinks,
//     contactNumber,
//     serviceCategories,
//     partners,
//     description
// }) => {
//     return (
//         <section className="sd-wrapper">
//             <div className="sd-container">
//                 <aside className="sd-sidebar">
//                     <SDQuickLinks links={quickLinks} />
//                     <SDContactBox number={contactNumber} />
//                 </aside>

//                 <main className="sd-main-content">
//                     <h1>{title}</h1>
//                     {description && <p className="sd-description">{description}</p>}
                    
//                     <div className="sd-main-image">
//                         <img 
//                             src={mainImage} 
//                             alt={title}
//                             loading="lazy"
//                         />
//                     </div>

//                     {serviceCategories.map((category, index) => (
//                         <SDCategory 
//                             key={`sd-category-${index}`} 
//                             category={category} 
//                         />
//                     ))}
//                 </main>
//             </div>

//             <SDPartners partners={partners} />
//         </section>
//     );
// };

// ServiceDetailsView.propTypes = {
//     title: PropTypes.string.isRequired,
//     mainImage: PropTypes.string.isRequired,
//     quickLinks: PropTypes.arrayOf(
//         PropTypes.shape({
//             title: PropTypes.string.isRequired,
//             url: PropTypes.string.isRequired,
//         })
//     ).isRequired,
//     contactNumber: PropTypes.string.isRequired,
//     serviceCategories: PropTypes.arrayOf(
//         PropTypes.shape({
//             title: PropTypes.string.isRequired,
//             items: PropTypes.arrayOf(PropTypes.string).isRequired,
//         })
//     ).isRequired,
//     partners: PropTypes.arrayOf(
//         PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             logo: PropTypes.string.isRequired,
//         })
//     ).isRequired,
//     description: PropTypes.string,
// };

// export default ServiceDetailsView;