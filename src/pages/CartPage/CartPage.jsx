import React, {useState} from 'react';
import styles from './cartPage.module.css';
import CartInfo from '../../components/Cart/CartInfo/CartInfo';
import CartProduts from '../../components/Cart/CartProducts/CartProduts';

const CartPage = () => {
  const [radio, setRadio] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  console.log(radio)
  console.log(formData)
  const handleChangeRadio = (evt) => {
    setRadio(evt.target.value)
  }
  
  const handleChangeForm = (values) => {
    console.log('Form values:', values);
    setFormData(values)
    
  };
  
  return (
    <section className={styles.wrapCart}>
    <h2 className={styles.title}>Cart</h2>
    <CartInfo handleChange={handleChangeRadio} handleChangeForm={handleChangeForm}/>
    <CartProduts />
</section>
  )
}

export default CartPage