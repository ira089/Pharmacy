import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import MedStoreList from 'components/MedStore/MedStoreList';
import styles from './medicineStorePage.module.css';
import { medStoreThunk } from '../../redux/medStore/operationsMedStore';

const MedicineStorePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(medStoreThunk());
  }, [dispatch]);
  return (
    <section className={styles.wrapStore}>
        <h2 className={styles.title}>Medicine store</h2>
        <MedStoreList />
    </section>
  )
}

export default MedicineStorePage