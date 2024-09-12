import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addOrderThunk } from '../../redux/order/operationsOrder';
import {selectOrder} from '../../redux/order/selectorOrder'
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import styles from './medicineItem.module.css';

const MedicineItem = ({ item, isVariant }) => {
  const dispatch = useDispatch();
  const  {total, totalQuantity, id} = useSelector(selectOrder);
  console.log(total)
  const { variant } = isVariant;
  const { photo, name, price, _id, suppliers } = item;
  const priceRound = Math.round(price);

  const [counter, setCounter] = useState(1);
  // console.log(counter)
  const counterPlus = () => {
    setCounter(prevCounter => prevCounter + 1);
  };
  const counterMinus = () => {
    if (counter === 1) {
      return;
    }
    setCounter(prevCounter => prevCounter - 1);
  };

  const addToCart = ( counter) => {
    const newTotalQuantity = String(totalQuantity + counter);
    const newTotal = String((counter * price + Number(total)));
   
  //  console.log('first');
  //   console.log(_id); 
    console.log(newTotal);
    if(id) {
      console.log('first')
    return
    }
    dispatch(
      addOrderThunk({
        total: newTotal,
        totalQuantity: newTotalQuantity,
        status: "Pending",
      })
    );
  };

  return (
    <div className={styles.wrapProdukt}>
      {/* <div className={styles.wrapImg}> */}
      <img className={styles.img} src={photo} alt="medicine" />
      {/* </div> */}
      <div className={styles.wrapText}>
        <div className={styles.wrapName}>
          <div>
            <h5>{name}</h5>
            {variant && <p>{suppliers}</p>}
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
              onClick={() => addToCart( counter)}
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
