import React from 'react';
import styles from './promoBanners.module.css';

const PromoBannersItem = ({ number, title, btn, pct }) => {
  return (
    <div className={styles.wrapItem}>
      <div className={styles.wrapTitle}>
        <div className={styles.wrapNumber}>
          <span>{number}</span>
        </div>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.wrapTitle}>
        <p className={styles.pct}>{pct}</p>
        <button className={styles.btn}>{btn}</button>
      </div>
    </div>
  );
};

export default PromoBannersItem;
