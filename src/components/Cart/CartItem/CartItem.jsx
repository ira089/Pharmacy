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
import {
  funTotalQuantity,
  funTotal,
  funSubTotalQuantity,
  funSubTotal,
  funDelTotalQuantity,
  funDelTotal,
} from '../../../helpers/functions';
import styles from './cartItem.module.css';

const CartItem = ({
  idProduct,
  quantity,
  idOrder,
  _id,
  totalQuantity,
  total,
}) => {
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(quantity);
  const [newTotal, setNewTotal] = useState(total);
  const [newTotalQuantity, setNewTotalQuantity] = useState(totalQuantity);

  console.log(typeof newTotal);

  useEffect(() => {
    dispatch(productsIdThunk(idProduct));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idProduct]);

  const { products } = useSelector(selectProducts);
  const isProducts = Boolean(products.length);
  const productCart = isProducts && products.find(el => el._id === idProduct);
  const { name, photo, price, category } = productCart;

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      dispatch(
        updOrderItemThunk({
          idProduct: idProduct,
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
  }, [newTotal, newTotalQuantity]);

  const counterPlus = () => {
    setCounter(prevCounter => Number(prevCounter) + 1);
    setNewTotalQuantity(funTotalQuantity(totalQuantity));
    setNewTotal(funTotal(price, total));
  };
  console.log(newTotal);
  console.log(newTotalQuantity);

  const counterMinus = () => {
    if (counter === 1) {
      return;
    }
    setCounter(prevCounter => prevCounter - 1);
    setNewTotalQuantity(funSubTotalQuantity(totalQuantity));
    setNewTotal(funSubTotal(price, total));
  };

  const delToCart = id => {
    dispatch(delOrderItemThunk(id));
    setNewTotalQuantity(funDelTotalQuantity(totalQuantity, counter));
    setNewTotal(funDelTotal(price, total, counter));
  };

  return (
    <li className={styles.wrapItem}>
      <div>
        <img className={styles.img} src={photo} alt="product" />
      </div>
      <div className={styles.wrapText}>
        <div className={styles.wrapTitle}>
          <div className={styles.title}>
            <h4>{name}</h4>
            <p className={styles.text}>{category}</p>
          </div>
          <p className={styles.price}>৳{price}</p>
        </div>

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
