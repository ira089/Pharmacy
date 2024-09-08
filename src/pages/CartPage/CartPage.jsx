import React, {useState} from 'react';
import styles from './cartPage.module.css';
import CartInfo from '../../components/Cart/CartInfo/CartInfo';
import CartProduts from '../../components/Cart/CartProducts/CartProduts';

const CartPage = () => {
  const [radio, setRadio] = useState('');
  console.log(radio)
  const handleChangeRadio = (evt) => {
    setRadio(evt.target.value)
  }
  return (
    <section className={styles.wrapCart}>
    <h2 className={styles.title}>Cart</h2>
    <CartInfo handleChange={handleChangeRadio}/>
    <CartProduts />
</section>
  )
}

export default CartPage