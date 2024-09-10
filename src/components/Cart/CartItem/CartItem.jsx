import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from '../../../redux/cart/cartSlice';
import { productsIdThunk } from '../../../redux/products/operationsProducts';
import { selectProducts } from '../../../redux/products/selectorProducts';
import Icon from 'components/Icon/Icon';
import styles from './cartItem.module.css';

const CartItem = ({ id, key, quantity }) => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(quantity);
  // console.log(id);
  // console.log(quantity)
  // console.log(counter)

  useEffect(() => {
    dispatch(productsIdThunk(id));
  }, [dispatch, id]);

  const { products } = useSelector(selectProducts);
  const productCart = products?.find(el => el._id === id);
  const { name, photo, price, category } = productCart;

  useEffect(() => {
    dispatch(
      addProduct({
        idProduct: id,
        quantity: counter,
        price: price,
      })
    );
  }, [counter, dispatch, id, price]);

  const counterPlus = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const counterMinus = () => {
    if (counter === 1) {
      return;
    }
    setCounter(prevCounter => prevCounter - 1);
  };

  const delToCart = id => {
    dispatch(removeProduct(id));
  };

  return (
    <li className={styles.wrapItem} key={key}>
      <div>
        <img className={styles.img} src={photo} alt="product" />
      </div>
      <div className={styles.wrapText}>
        <h4>{name}</h4>
        <p className={styles.text}>{category}</p>
        <p className={styles.price}>৳{price}</p>
        <div className={styles.wrapBtn}>
          <div className={styles.wrapCounter}>
            <button type="submit" onClick={counterPlus}>
              <Icon width={18} height={18} name={'icon-plus-green'} />
            </button>
            <span>{counter}</span>
            <button type="submit" onClick={counterMinus}>
              <Icon width={18} height={18} name={'icon-minus-green'} />
            </button>
          </div>
          <button className={styles.btnRemore} onClick={() => delToCart(id)}>
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
