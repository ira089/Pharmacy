import React from 'react';
// import { useSelector} from 'react-redux';
// import {selectCart} from '../../../redux/cart/selectorCart';
import CartItem from '../CartItem/CartItem';
import styles from './cartProduts.module.css';

const CartProduts = () => {
  // const { productsUser, isLoading, error} = useSelector(selectCart);
  const productsUser = []
  const isCartProducts = Boolean(productsUser.length);

  // const elements = isCartProducts && cartProducts.map(item => (
  //  <CartItem key={item._id} id={item._id}/>
  // ));
  
  return (
    <>
    {/* {isLoading && <p>...Loading</p>}
    {error && <p>{error.message}</p>} */}
     {isCartProducts ? <ul className={styles.list}>{productsUser.map(item => (
   <CartItem key={item.idProduct} id={item.idProduct} quantity={item.quantity}/>
  ))}</ul> : <p className={styles.text}>Sorry, there are no items in your cart.</p>}
    </>
  )
}

export default CartProduts