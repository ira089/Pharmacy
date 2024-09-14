import React from 'react';
import PromoBannersItem from './PromoBannersItem';
import styles from './promoBanners.module.css';

const PromoBanners = () => {
  return (
    <section className={styles.wrapBanner}>
      <PromoBannersItem number="1" title="Huge Sale" btn="Shop now" pct="70%" />
      <PromoBannersItem
        number="2"
        title="Secure delivery"
        btn="Read more"
        pct="100%"
      />
      <PromoBannersItem number="3" title="Off" btn="Shop now" pct="35%" />
    </section>
  );
};

export default PromoBanners;
