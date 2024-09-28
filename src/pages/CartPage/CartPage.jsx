import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { selectOrder } from '../../redux/auth/selectorsAuth';
import { allOrderItemThunk } from '../../redux/ordertItem/operationsOrdertItem';
import {
  orderUpdThunk,
  currentFullThunk,
} from '../../redux/auth/operationsAuth';
import CartInfo from '../../components/Cart/CartInfo/CartInfo';
import CartProduts from '../../components/Cart/CartProducts/CartProduts';
import { toast } from 'react-toastify';
import styles from './cartPage.module.css';

const CartPage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const order = useSelector(selectOrder);
  const isOrden = Boolean(order.length);

  const { totalQuantity, total, _id } =
    isOrden && order.find(el => el.status === 'Pending');

  useEffect(() => {
    dispatch(allOrderItemThunk(_id));
  }, [_id, dispatch]);

  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  console.log(formData);
  const handleChangeRadio = evt => {
    setPaymentMethod(evt.target.value);
  };

  const handleChangeForm = values => {
    setFormData(values);
  };

  const placeOrder = {
    ...formData,
    paymentMethod,
    total,
    totalQuantity,
    status: 'Confirmed',
    id: _id,
  };

  const submitPlaceOrder = () => {
    console.log('чао какоо');
    dispatch(orderUpdThunk(placeOrder));
    dispatch(currentFullThunk());
    toast.success('Your order has been accepted for processing');
    // navigate('/');
  };

  return (
    <section className={styles.wrapCart}>
      <h2 className={styles.title}>Cart</h2>
      <div className={styles.wrap}>
        <CartInfo
          total={total}
          handleChange={handleChangeRadio}
          handleChangeForm={handleChangeForm}
          onClick={submitPlaceOrder}
        />
        <CartProduts
          idOrder={_id}
          totalQuantity={totalQuantity}
          total={total}
        />
      </div>
    </section>
  );
};

export default CartPage;
