// components/Common/PageHeader.jsx
// Interior-page masthead. theme.css reserves the dark palette for the home
// hero and the footer, so this stays light: a mono breadcrumb, a large title,
// and a hairline closing the band. No background image, no third typeface.
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BlurText from './BlurText';
import '../../css/Common/PageHeader.css';

const PageHeader = ({ title, eyebrow, lede, crumbs = [] }) => {
  return (
    <header className="masthead">
      <div className="tm-shell">
        <nav className="masthead-crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((crumb) => (
            <span key={crumb.to} className="masthead-crumb">
              <span className="masthead-sep" aria-hidden="true">
                /
              </span>
              <Link to={crumb.to}>{crumb.label}</Link>
            </span>
          ))}
          <span className="masthead-crumb">
            <span className="masthead-sep" aria-hidden="true">
              /
            </span>
            <span aria-current="page">{title}</span>
          </span>
        </nav>

        <div className="masthead-body">
          <div>
            {eyebrow && <span className="tm-eyebrow masthead-eyebrow">{eyebrow}</span>}
            <BlurText as="h1" className="tm-display masthead-title" text={title} amount={0.1} />
          </div>

          {lede && <p className="tm-lede masthead-lede">{lede}</p>}
        </div>
      </div>
    </header>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  eyebrow: PropTypes.string,
  lede: PropTypes.string,
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default PageHeader;
