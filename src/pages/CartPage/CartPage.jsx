import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/cart/selectorCart';
import { calculateTotals } from '../../helpers/functions';
import CartInfo from '../../components/Cart/CartInfo/CartInfo';
import CartProduts from '../../components/Cart/CartProducts/CartProduts';
import styles from './cartPage.module.css';

const CartPage = () => {
  const { productsUser } = useSelector(selectCart);
  const cart = productsUser?.map(({ idProduct, quantity }) => ({
    idProduct,
    quantity,
  }));
  console.log(cart);
  // const {idProduct, quantity, price} = productsUser;
  const totals = calculateTotals(productsUser);
  const { total, totalQuantity } = totals;

  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  // console.log(radio)
  console.log(formData);
  const handleChangeRadio = evt => {
    setPaymentMethod(evt.target.value);
  };

  const handleChangeForm = values => {
    console.log('Form values:', values);
    setFormData(values);
  };

  const placeOrder = {
    ...formData,
    paymentMethod,
    total,
    totalQuantity,
    ...cart,
  };
  console.log(placeOrder);
  return (
    <section className={styles.wrapCart}>
      <h2 className={styles.title}>Cart</h2>
      <CartInfo
        total={total}
        handleChange={handleChangeRadio}
        handleChangeForm={handleChangeForm}
      />
      <CartProduts />
    </section>
  );
};

export default CartPage;
