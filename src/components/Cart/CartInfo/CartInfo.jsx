import React from 'react';
import CartForm from './CartForm/CartForm';
import CartOrder from './CartOrder/CartOrder';
import RadioGroup from '@mui/material/RadioGroup';
import { CustomFormControlLabel, CustomRadio } from './radioStyles';
import styles from './cartInfo.module.css';

const CartInfo = ({ handleChange, handleFormSubmit }) => {
  return (
    <div className={styles.wrapText}>
      <h4 className={styles.title}>Enter shipping info </h4>
      <p className={styles.text}>
        Enter your delivery address where you get the product. You can also send
        any other location where you send the products.
      </p>
      <CartForm handleFormSubmit={handleFormSubmit}/>
      <div className={styles.wrapPayment}>
        <h4 className={styles.title}>Payment method</h4>
        <p className={styles.text}>
          You can pay us in a multiple way in our payment gateway system.
        </p>
        <RadioGroup name="payment" onChange={handleChange}>
          <CustomFormControlLabel
            control={<CustomRadio />}
            value="cash"
            label="Cash On Delivery"
          />
          <CustomFormControlLabel
            value="bank"
            control={<CustomRadio />}
            label="Bank"
          />
        </RadioGroup>
      </div>

      <CartOrder />
    </div>
  );
};

export default CartInfo;
