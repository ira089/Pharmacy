import React from 'react';
import styles from './logo.module.css';

const Logo = ({ color, logoImg }) => {
  return (
    <div className={styles.wrapLogo}>
      <img className={styles.img} src={logoImg} alt="Logo" />

      <p className={styles.text} style={{ color: color }}>
        E-Pharmacy
      </p>
    </div>
  );
};

export default Logo;
