import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { allFieldsFilled } from '../../../../helpers/functions';
import { cartFormSchema } from '../../../../schemas/schemas';
import Input from '../../../Input/Input';
import styles from './cartForm.module.css';

const CartForm = ({ handleChangeForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChangeData = evt => {
    const { name, value } = evt.target;

    setFormData(prevData => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };

      if (allFieldsFilled(updatedData)) {
        console.log('first');
        // handleChangeForm(updatedData);
      }
      return updatedData;
    });
  };

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
      validateOnChange={false}
      validateOnMount={false}
      // validateOnSubmit={false}
      // validateOnHandlerSubmit={false}
    >
      <Form className={styles.form}>
        <Input
          handleChange={handleChangeData}
          valueInput={formData.name}
          name="name"
          placeholder="Enter text"
          type="text"
          textLabel="Name"
        />
        <Input
          handleChange={handleChangeData}
          valueInput={formData.email}
          name="email"
          placeholder="Enter text"
          type="email"
          textLabel="Email"
        />
        <Input
          handleChange={handleChangeData}
          valueInput={formData.phone}
          name="phone"
          placeholder="Enter text"
          type="text"
          textLabel="Phone"
        />
        <Input
          handleChange={handleChangeData}
          valueInput={formData.address}
          name="address"
          placeholder="Enter text"
          type="text"
          textLabel="Address"
        />
      </Form>
    </Formik>
  );
};

export default CartForm;
