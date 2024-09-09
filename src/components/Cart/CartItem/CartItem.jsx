import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addProduct, removeProduct} from '../../../redux/cart/cartSlice'
import { productsIdThunk } from '../../../redux/products/operationsProducts';
import { selectProducts } from '../../../redux/products/selectorProducts';
import Icon from 'components/Icon/Icon';
import styles from './cartItem.module.css';

const CartItem = ({ item , key}) => {
    const {idProduct, quantity } = item
//   console.log(quantity);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsIdThunk(idProduct));
  }, [dispatch, idProduct]);

  const { products } = useSelector(selectProducts);

  const productId = products?.find(el => el._id === idProduct);

//   console.log(productId);
  const { name, photo, price, category, _id } = productId;

  const [counter, setCounter] = useState(quantity);
  console.log(counter)
  const counterPlus = (id, number) => {
    console.log(id)
    console.log(number)
    setCounter(prevCounter => prevCounter + 1);
     dispatch(
        addProduct({
          idProduct: id,
          quantity: number,
        })
      );
  };
  const counterMinus = (id, number) => {
    if (counter === 1) {
      return;
    }
    setCounter(prevCounter => prevCounter - 1);
    // dispatch(
    //     addProduct({
    //       idProduct: id,
    //       quantity: number,
    //     })
    //   );
  };

  const delToCart = (id) => {
dispatch(removeProduct(id))
  }

  

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
            <button type='submit' onClick={() => counterPlus(_id, counter)}>
              <Icon width={18} height={18} name={'icon-plus-green'} />
            </button>
            <span>{counter}</span>
            <button type='submit'  onClick={() => counterMinus(_id, counter)}>
              <Icon width={18} height={18} name={'icon-minus-green'} />
            </button>
          </div>
          <button
            className={styles.btnRemore}
              onClick={() => delToCart(_id)}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
