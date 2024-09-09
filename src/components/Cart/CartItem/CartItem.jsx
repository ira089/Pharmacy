import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsIdThunk } from '../../../redux/products/operationsProducts';
import { selectProducts } from '../../../redux/products/selectorProducts';
import Icon from 'components/Icon/Icon'
import styles from './cartItem.module.css';

const CartItem = ({item}) => {
    console.log(item.idProduct )
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productsIdThunk(item.idProduct));
      }, [dispatch, item.idProduct]);

      const { products } = useSelector(selectProducts);
      
      const productId = products?.find(el => el._id === item.idProduct);

      console.log(productId);
      const {name, photo, price, category } = productId

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
  return (
    <li className={styles.wrapItem}>
<div>
    <img className={styles.img} src={photo} alt='product'/>
</div>
<div className={styles.wrapText}>
    <h4>{name}</h4>
    <p className={styles.text}>{category}</p>
    <p className={styles.price}>৳{price}</p>
    <div className={styles.wrapBtn}>
            <div className={styles.wrapCounter}>
              <button onClick={counterPlus}>
                <Icon
                  
                  width={18}
                  height={18}
                  name={'icon-plus-green'}
                />
              </button>
              <span>{counter}</span>
              <button onClick={counterMinus}>
                <Icon width={18} height={18} name={'icon-minus-green'} />
              </button>
            </div>
            <button className={styles.btnRemore}
            //   onClick={() => addToCart(_id, counter)}
              
            >
              Remove
            </button>
          </div>
</div>
    </li>
  )
}

export default CartItem