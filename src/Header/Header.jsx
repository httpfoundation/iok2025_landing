import BrandImg from '../assets/img/http-iok-logo-2025.png';
import './Header.scss';
//import BrandImgSmall from '../assets/img/http-iok-logo-small.png'
import useScrollPosition from '@react-hook/window-scroll';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button/Button';
import Ticket from '../icons/Ticket';

const HamburgerMenu = (props) => {
  const items = [
    { name: 'Információk', href: '/#' },
    { name: 'Előadóink', href: '/#eloadok' },
    { name: 'Program', href: '/#program' },
    { name: 'Helyszín', href: '/#helyszin' },
    { name: 'Támogatók', href: '/#tamogatok' },
  ];

  return (
    <>
      <div className={`backdrop ${props.open ? 'open' : ''}`} onClick={props.onClose}></div>
      <div className={`hamburger-menu ${props.open ? 'open' : ''}`}>
        <div className="hamburger-toggle close" onClick={props.onClose}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="hamburger-menu-items">
          {items.map((item, key) => (
            <a key={key} href={item.href} onClick={props.onClose}>
              {item.name}
            </a>
          ))}
        </div>
        <Button href="#regisztracio" bold onClick={props.onClose}>
          <Ticket />
          Regisztráció
        </Button>
      </div>
    </>
  );
};

const Header = () => {
  const scrollY = useScrollPosition(30 /*fps*/);
  const limit = 100;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${scrollY < limit ? 'transparent' : ''} header`}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="container"
      >
        {/* <img src={BrandImgSmall} alt="HTTP Alapítvány" className="brand-image brand-image-small" /> */}
        <img src={BrandImg} alt="HTTP Alapítvány - IOK 2025" className="brand-image" />
        <h1></h1>
        <Button href="#regisztracio" bold>
          <Ticket />
          Regisztráció
        </Button>
        <div className="hamburger-toggle" onClick={() => setMenuOpen(true)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </motion.div>
      <HamburgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Header;
