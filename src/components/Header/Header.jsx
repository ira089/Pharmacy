import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectOrder } from '../../redux/auth/selectorsAuth';
import Logo from './Logo/Logo';
import NavLinks from './NavLinks/NavLinks';
import AuthLinks from './AuthLinks/AuthLinks';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Icon from 'components/Icon/Icon';
import ImgLogoM from '../../assets/img/MaskGroupD.png';
import ImgLogoWhiteM from '../../assets/img/MaskWhiteM.png';
import UserNav from './UserNav/UserNav';
import UserMenu from './UserMenu/UserMenu';
import styles from './header.module.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const isOpen = () => setOpen(!open);
  const location = useLocation();
  const isLogin = useSelector(selectIsLoggedIn);
  const order = useSelector(selectOrder);
  const isOrden = Boolean(order.length);
  const { totalQuantity } =
    isOrden && order.find(el => el.status === 'Pending');

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
        background: location.pathname === '/' ? '#59b17a' : '#f7f8fa',
      }}
      className={styles.wrapHeader}
    >
      <NavLink className={styles.link} to="/">
        {location.pathname === '/' ? (
          <Logo color="#fff" logoImg={ImgLogoWhiteM} />
        ) : (
          <Logo color="#1d1e21" logoImg={ImgLogoM} />
        )}
      </NavLink>

      {location.pathname !== '/register' && location.pathname !== '/login' && (
        <>
          <div className={styles.wrapNav}>
            <NavLinks />
          </div>

          <BurgerMenu isOpen={isOpen} open={open} />
          <div className={styles.rightMenu}>
            {isLogin && location.pathname !== '/' && (
              <UserMenu totalQuantity={totalQuantity} />
            )}
            <div className={styles.wrapNav}>
              {isLogin ? <UserNav /> : <AuthLinks />}
            </div>
            <button className={styles.burgerBtn} onClick={isOpen}>
              {location.pathname === '/' ? (
                <Icon width={32} height={26} name={'icon-burger-btn-white'} />
              ) : (
                <Icon width={32} height={26} name={'icon-burger-btn-green'} />
              )}
            </button>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
