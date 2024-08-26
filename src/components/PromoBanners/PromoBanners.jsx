import React from 'react';
import PromoBannersItem from './PromoBannersItem';
import styles from './promoBanners.module.css';

const PromoBanners = () => {
  
  const handel = () => {
    console.log('first');
  };

  return (
    <section className={styles.wrapBanner}>
      <PromoBannersItem
        number="1"
        title="Huge Sale"
        btn="Shop now"
        pct="70%"
        onClick={handel}
      />
      <PromoBannersItem
        number="2"
        title="Secure delivery"
        btn="Read more"
        pct="100%"
        onClick={handel}
      />
      <PromoBannersItem
        number="3"
        title="Off"
        btn="Shop now"
        pct="35%"
        onClick={handel}
      />
    </section>
  );
};

export default PromoBanners;
