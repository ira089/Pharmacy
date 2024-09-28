import React from 'react';
import { Formik, Form } from 'formik';
import { cartFormSchema } from '../../../../schemas/schemas';
import Input from '../../../Input/Input';
import styles from './cartForm.module.css';

const CartForm = ({ handleChangeForm }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        address: '',
      }}
      validationSchema={cartFormSchema}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={values => {
        handleChangeForm(values);
      }}
    >
      {({ handleSubmit }) => (
        <Form className={styles.form} onBlur={handleSubmit}>
          <Input
            name="name"
            placeholder="Enter text"
            type="text"
            textLabel="Name"
          />
          <Input
            name="email"
            placeholder="Enter text"
            type="email"
            textLabel="Email"
          />
          <Input
            name="phone"
            placeholder="Enter text"
            type="text"
            textLabel="Phone"
          />
          <Input
            name="address"
            placeholder="Enter text"
            type="text"
            textLabel="Address"
          />
        </Form>
      )}
    </Formik>
  );
};

export default CartForm;
