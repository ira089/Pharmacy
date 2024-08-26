import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo/Logo';
import NavLinks from './NavLinks/NavLinks';
import AuthLinks from './AuthLinks/AuthLinks';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Icon from 'components/Icon/Icon';
import ImgLogoM from '../../assets/img/MaskGroupD.png';
import ImgLogoWhiteM from '../../assets/img/MaskWhiteM.png';
import styles from './header.module.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const isOpen = () => setOpen(!open);
  const location = useLocation();

  const handleResize = () => {
    if (window.innerWidth >= 1440) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      style={{
        background: location.pathname === '/home' ? '#59b17a' : '#f7f8fa',
      }}
      className={styles.wrapHeader}
    >
      <NavLink className={styles.link} to="/home">
        {location.pathname === '/home' ? (
          <Logo color="#fff" logoImg={ImgLogoWhiteM} />
        ) : (
          <Logo color="#1d1e21" logoImg={ImgLogoM} />
        )}
      </NavLink>

      <div className={styles.wrapNav}>
        <NavLinks />
      </div>
      <div className={styles.wrapNav}>
        <AuthLinks />
      </div>
      <BurgerMenu isOpen={isOpen} open={open} />
      <button className={styles.burgerBtn} onClick={isOpen}>
        {location.pathname === '/home' ? (
          <Icon width={32} height={26} name={'icon-burger-btn-white'} />
        ) : (
          <Icon width={32} height={26} name={'icon-burger-btn-green'} />
        )}
      </button>
    </header>
  );
};

export default Header;
