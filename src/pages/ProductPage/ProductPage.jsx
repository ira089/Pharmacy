import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productsIdThunk } from '../../redux/products/operationsProducts';
import { selectProducts } from '../../redux/products/selectorProducts';
import MedicineItem from 'components/MedicineItem/MedicineItem';
import styles from './productPage.module.css';
import ProductDetails from 'components/ProductDetails/ProductDetails';

const ProductPage = () => {
  const dispatch = useDispatch();
  const isVariant = { variant: true };
  const { id } = useParams();

  useEffect(() => {
    dispatch(productsIdThunk(id));
  }, [dispatch, id]);

  const { products } = useSelector(selectProducts);
  const productId = products?.find(el => el._id === id);
  console.log(productId);
  const isDescription = Boolean(productId.description);
  console.log(isDescription);
  const isReviews = Boolean(productId.reviews.length);
  console.log(isReviews);
  return (
    <section className={styles.wrapProduct}>
      <MedicineItem item={productId} isVariant={isVariant} />
      <ProductDetails />
    </section>
  );
};

export default ProductPage;
