import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './authLinks.module.css';
import Button from 'components/Button/Button';

const AuthLinks = () => {
  return (
    <div className={styles.authNav}>
      <NavLink className={styles.linkReg} to="/register">
        <Button style={{borderColor: 'rgba(241, 241, 241, 0.5)' }} type='buttun'>Registration</Button>
      </NavLink>
      <NavLink className={styles.linkLogin} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthLinks;
