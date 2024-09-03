import React, {useEffect, useState} from 'react';
// import { useDispatch } from 'react-redux';
import {fetchMedStoreSix} from '../../api/medStoreApi'
// import MedicineStoresItem from '../MedicineStoresItem/MedicineStoresItem';
import styles from './medicineStores.module.css';

const MedicineStores = () => {
  const [medStoreSix, setMedStoreSix] = useState([]);
  console.log(medStoreSix)
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await(fetchMedStoreSix);
        setMedStoreSix(data);
      } catch (error) {
        return error.message;
      }
    };
    getData();
  }, []);
  return (
    <section className={styles.wrapBanner}>
      <h3 className={styles.title}>Your Nearest Medicine Store</h3>
      <p className={styles.text}>Search for Medicine, Filter by your location</p>
      <div className={styles.containerItem}>
        {/* <MedicineStoresItem/> */}
        
      </div>
    </section>
  )
}

export default MedicineStores