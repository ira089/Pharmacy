import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navLinks.module.css';

const NavLinks = () => {
  return (
    <nav className={styles.navList}>
      <NavLink className={styles.navLink} to="/">
        Home
      </NavLink>
      <NavLink className={styles.navLink} to="/medicine-store">
        Medicine store
      </NavLink>
      <NavLink className={styles.navLink} to="/medicine">
        Medicine
      </NavLink>
    </nav>
  );
};

export default NavLinks;
