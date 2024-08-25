import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navLinks.module.css';


const NavLinks = () => {
  

  return (
    // <Icon width={134} height={142}  name={'icon-menu-border'}>
 <nav className={styles.navList}>
      <NavLink className={styles.navLink} to='/home'>
      Home
      </NavLink>
      <NavLink className={styles.navLink} to='/medicine-store'>
      Medicine store
      </NavLink>
      <NavLink className={styles.navLink} to='/medicine'>
      Medicine
      </NavLink>
    </nav>
    // </Icon>
   
  );
};

export default NavLinks;