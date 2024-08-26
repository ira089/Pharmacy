import React from 'react';
import styles from './mainBanner.module.css';

const MainBanner = () => {
  return (
    <div className={styles.wrapMainBanner}>
      <div className={styles.wrapImg}>
        <h1 className={styles.title}>Your medication delivered</h1>
        <p className={styles.text}>
          Say goodbye to all your healthcare worries with us
        </p>
      </div>
    </div>
  );
};

export default MainBanner;
