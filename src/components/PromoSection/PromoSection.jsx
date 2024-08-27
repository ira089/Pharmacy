import React from 'react';
import PromoSectionImg from './PromoSectionImg';
import PromoSectionMenu from './PromoSectionMenu';
import styles from './promoSection.module.css';

const PromoSection = () => {
  return (
    <section className={styles.wrapPromo}>
      <PromoSectionImg/>
      <PromoSectionMenu/>

    </section>
  )
}

export default PromoSection