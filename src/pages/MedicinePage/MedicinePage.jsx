import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from '../../redux/search/selectorSearch';
import { selectOrder } from '../../redux/order/selectorOrder';
import { addOrderThunk } from '../../redux/order/operationsOrder';
import { productsThunk } from '../../redux/products/operationsProducts';
import MedicineList from 'components/MedicineList/MedicineList';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth';
import Filter from 'components/Filter/Filter';
import styles from './medicinePage.module.css';

const MedicinePage = () => {
  const { query, category, page } = useSelector(selectSearch);
  const { id } = useSelector(selectOrder);
  const isLogin = useSelector(selectIsLoggedIn);
  console.log(id);
  // console.log(category)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsThunk({ query, category, page }));
  }, [category, dispatch, page, query]);

  useEffect(() => {
    if (!id && isLogin) {
      dispatch(
        addOrderThunk({
          total: '0.00',
          totalQuantity: '0',
          status: 'Pending',
        })
      );
    }
  }, [dispatch, id, isLogin]);

  return (
    <section className={styles.wrapMed}>
      <h2 className={styles.title}>Medicine store</h2>
      <Filter />
      <MedicineList />
    </section>
  );
};

export default MedicinePage;
