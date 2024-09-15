import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Button from 'components/Button/Button';
import styles from './authLinks.module.css';

const AuthLinks = () => {
  const location = useLocation();
  return (
    <div className={styles.authNav}>
      <NavLink className={styles.linkReg} to="/register">
        <Button
          style={{ borderColor: 'rgba(241, 241, 241, 0.5)' }}
          type="buttun"
        >
          Registration
        </Button>
      </NavLink>
      <NavLink
        className={`${styles.linkLogin} ${
          location.pathname !== '/' && styles.linkLoginDes
        }`}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};

export default AuthLinks;
