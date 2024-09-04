import React from 'react';
// import { useDispatch } from 'react-redux';
import styles from './medicinePage.module.css';
import MedicineList from 'components/MedicineList/MedicineList';
import Filter from 'components/Filter/Filter';


const MedicinePage = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(medStoreThunk());
  // }, [dispatch]);

  return (
    <section className={styles.wrapMed}>
        <h2 className={styles.title}>Medicine store</h2>
        <Filter/>
        <MedicineList />
    </section>
  )
}

export default MedicinePage