import React from 'react';
import { selectOrderItem } from '../../../redux/ordertItem/selectorOrdertItem';
import { useSelector } from 'react-redux';
// import {selectCart} from '../../../redux/cart/selectorCart';
import CartItem from '../CartItem/CartItem';
import styles from './cartProduts.module.css';

const CartProduts = ({ idOrder }) => {
  const { cart, isLoading, error } = useSelector(selectOrderItem);
  // const productsUser = [];
  const isCartProducts = Boolean(cart.length);

  // const elements = isCartProducts && cartProducts.map(item => (
  //  <CartItem key={item._id} id={item._id}/>
  // ));

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      {isCartProducts ? (
        <ul className={styles.list}>
          {cart.map(item => (
            <CartItem
              key={item.idProduct}
              id={item.idProduct}
              quantity={item.quantity}
              idOrder={idOrder}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.text}>Sorry, there are no items in your cart.</p>
      )}
    </>
  );
};

export default CartProduts;
