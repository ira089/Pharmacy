import React from 'react';
import CartForm from './CartForm/CartForm';
import RadioGroup from '@mui/material/RadioGroup';
import { CustomFormControlLabel, CustomRadio } from './radioStyles';
import Button from 'components/Button/Button';
import styles from './cartInfo.module.css';

const CartInfo = ({ handleChange, handleChangeForm, total, onClick }) => {
  return (
    <div className={styles.wrapText}>
      <h4 className={styles.title}>Enter shipping info </h4>
      <p className={styles.text}>
        Enter your delivery address where you get the product. You can also send
        any other location where you send the products.
      </p>
      <CartForm handleChangeForm={handleChangeForm} />
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
      <h4 className={styles.title}>Order details </h4>
      <p className={styles.text}>
        Shipping and additionnal costs are calculated based on values you have
        entered.
      </p>
      <div className={styles.wrapTotal}>
        <h4 className={styles.title}>Total:</h4>
        <h4 className={styles.title}>৳ {total}</h4>
      </div>
      <Button
        onClick={onClick}
        style={{ color: '#fff', width: '141px', height: '44px' }}
      >
        Place order
      </Button>
    </div>
  );
};

export default CartInfo;
