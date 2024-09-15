import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addOrderItemThunk } from '../../redux/ordertItem/operationsOrdertItem';
import { orderUpdThunk } from '../../redux/auth/operationsAuth';
import { selectOrder, selectIsLoggedIn } from '../../redux/auth/selectorsAuth';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import { toast } from 'react-toastify';
import styles from './medicineItem.module.css';

const MedicineItem = ({ item, isVariant }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLoggedIn);
  const order = useSelector(selectOrder);
  const {
    total,
    totalQuantity,
    _id: id,
  } = isLogin && order.find(el => el.status === 'Pending');

  const { variant } = isVariant;
  const { photo, name, price, _id, suppliers } = item;
  console.log(suppliers);
  const priceRound = Math.round(price);

  const [counter, setCounter] = useState(1);

  const counterPlus = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const counterMinus = () => {
    if (counter === 1) {
      return;
    }
    setCounter(prevCounter => prevCounter - 1);
  };

  const addToCart = counter => {
    if (!isLogin) {
      toast.error('The service is available only to authorized users');
      return;
    }
    const newTotalQuantity = String(Number(totalQuantity) + Number(counter));
    const numberTotal = String(counter * price + Number(total));
    const newTotal = String(Math.round(numberTotal * 100) / 100);

    dispatch(
      addOrderItemThunk({
        idOrder: id,
        idProduct: _id,
        quantity: String(counter),
      })
    );
    dispatch(
      orderUpdThunk({
        id: id,
        total: newTotal,
        totalQuantity: newTotalQuantity,
        status: 'Pending',
      })
    );
  };

  return (
    <div
      className={`${styles.wrapProdukt} ${
        variant ? styles.horizontal : styles.vertical
      }`}
    >
      <img className={styles.img} src={photo} alt="medicine" />
      <div className={styles.wrapText}>
        <div className={styles.wrapName}>
          <div>
            <h5>{name}</h5>
            <p>{suppliers}</p>
          </div>
          <h5>৳{priceRound}</h5>
        </div>
        {variant ? (
          <div className={styles.wrapBtn}>
            <div className={styles.wrapCounter}>
              <button onClick={counterPlus}>
                <Icon
                  className={styles.icon}
                  width={20}
                  height={20}
                  name={'icon-plus-green'}
                />
              </button>
              <span>{counter}</span>
              <button onClick={counterMinus}>
                <Icon width={20} height={20} name={'icon-minus-green'} />
              </button>
            </div>
            <Button
              onClick={() => addToCart(counter)}
              style={{ color: '#fff', width: '140px', height: '44px' }}
            >
              Add to cart
            </Button>
          </div>
        ) : (
          <div className={styles.wrapBtn}>
            <Button
              onClick={() => addToCart(counter)}
              style={{ color: '#fff', width: '108px', height: '34px' }}
            >
              Add to cart
            </Button>
            <NavLink className={styles.link} to={`/produst/${_id}`}>
              Details
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicineItem;
