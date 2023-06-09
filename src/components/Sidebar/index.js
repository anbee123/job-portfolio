import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import LogoMe from '../../assets/images/me_1.png'
import LogoText from '../../assets/images/logo_text.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faSalesforce, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='nav-bar'>
      <Link className="logo" to="/">
        <img className='logo-img' src={LogoMe} alt="Logo" />
        <img className='logo-text' src={LogoText} alt="Logo" />
      </Link>

      <nav className={showNav ? 'mobile-show' : ''}>
        <div className='container'>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faHome} color="#827397" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="about-link"
            to="/about"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faUser} color="#827397" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faSuitcase} color="#827397" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faEnvelope} color="#827397" />
          </NavLink>
          <FontAwesomeIcon
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#827397"
            size="3x"
            className='close-icon'
          />
        </div>
      </nav>
      <ul>
        <li>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#827397"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#827397"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faSalesforce}
              color="#827397"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#827397"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#E9D5DA"
        size="3x"
        className='hamburger-icon'
      />
    </div>
  )
}
export default Sidebar;