import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {productsIdThunk} from '../../redux/products/operationsProducts'

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    dispatch(productsIdThunk(id));
  }, [dispatch, id]);
  

  return (
    <div>ProductPage</div>
  )
}

export default ProductPage