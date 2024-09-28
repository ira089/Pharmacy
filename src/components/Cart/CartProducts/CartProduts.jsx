import React from 'react';
import { selectOrderItem } from '../../../redux/ordertItem/selectorOrdertItem';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import styles from './cartProduts.module.css';

const CartProduts = ({ idOrder, totalQuantity, total }) => {
  const { cart, isLoading, error } = useSelector(selectOrderItem);
  const isCartProducts = Boolean(cart.length);
  console.log(cart);

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      {isCartProducts ? (
        <ul className={styles.list}>
          {cart.map(item => (
            <CartItem
              key={item._id}
              idProduct={item.idProduct}
              _id={item._id}
              quantity={item.quantity}
              idOrder={idOrder}
              total={total}
              totalQuantity={totalQuantity}
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
