import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navLinks.module.css';

const NavLinks = () => {
  return (
    <>
      <NavLink className={styles.navLink} to="/">
        Home
      </NavLink>
      <NavLink className={styles.navLink} to="/medicine-store">
        Medicine store
      </NavLink>
      <NavLink className={styles.navLink} to="/medicine">
        Medicine
      </NavLink>
    </>
  );
};

export default NavLinks;
