import React from 'react';
import MedicineStoresItem from '../MedicineStoresItem/MedicineStoresItem';
import styles from './medicineStores.module.css';

const MedicineStores = () => {
  return (
    <section className={styles.wrapBanner}>
      <h3 className={styles.title}>Your Nearest Medicine Store</h3>
      <p className={styles.text}>Search for Medicine, Filter by your location</p>
      <div className={styles.containerItem}>
        <MedicineStoresItem/>
        <MedicineStoresItem/>
        <MedicineStoresItem/>
        <MedicineStoresItem/>
        <MedicineStoresItem/>
        <MedicineStoresItem/>
      </div>
    </section>
  )
}

export default MedicineStores