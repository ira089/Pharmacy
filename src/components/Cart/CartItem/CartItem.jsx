import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  delOrderItemThunk,
  updOrderItemThunk,
} from '../../../redux/ordertItem/operationsOrdertItem';
import { orderUpdThunk } from '../../../redux/auth/operationsAuth';
import { productsIdThunk } from '../../../redux/products/operationsProducts';
import { selectProducts } from '../../../redux/products/selectorProducts';
import Icon from 'components/Icon/Icon';
import styles from './cartItem.module.css';

const CartItem = ({ id, quantity, idOrder, _id, totalQuantity, total }) => {
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(quantity);
  // console.log(id);
  // console.log(idOrder);
  // console.log(_id);

  useEffect(() => {
    dispatch(productsIdThunk(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const { products } = useSelector(selectProducts);
  console.log(products);
  const isProducts = Boolean(products.length);
  const productCart = isProducts && products.find(el => el._id === id);
  const { name, photo, price, category } = productCart;
  console.log(typeof price);
  console.log(typeof counter);
  console.log(typeof total);

  const newTotalQuantity = String(Number(totalQuantity) + Number(counter));
  console.log(newTotalQuantity);
  const numberTotal = Number(counter) * Number(price) + Number(total);

  const newTotal = String(Math.round(numberTotal * 100) / 100);

  console.log(newTotal);

  useEffect(() => {
    if (isFirstRender.current) {
      // Пропускаем первое срабатывание
      isFirstRender.current = false;
    } else {
      // Выполняем логику при изменении параметров
      dispatch(
        updOrderItemThunk({
          idProduct: id,
          quantity: String(counter),
          idOrder: idOrder,
          id: _id,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, _id]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      dispatch(
        orderUpdThunk({
          id: idOrder,
          total: newTotal,
          totalQuantity: newTotalQuantity,
          status: 'Pending',
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idOrder, newTotal, newTotalQuantity]);

  const counterPlus = () => {
    setCounter(prevCounter => Number(prevCounter) + 1);
  };

  const counterMinus = () => {
    if (counter === 1) {
      return;
    }
    setCounter(prevCounter => prevCounter - 1);
  };

  const delToCart = id => {
    dispatch(delOrderItemThunk(id));
  };

  return (
    <li className={styles.wrapItem}>
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
          <button className={styles.btnRemore} onClick={() => delToCart(_id)}>
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
