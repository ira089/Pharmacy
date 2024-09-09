import React, { useState } from 'react';
import { Formik, Form } from 'formik';
// import * as schema from '../../../../schemas/schemas';
import { allFieldsFilled } from '../../../../helpers/functions';
import Input from '../../../Input/Input';
import styles from './cartForm.module.css';

const CartForm = ({ handleChangeForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  // console.log(formData);

  const handleChangeData = evt => {
    const { name, value } = evt.target;
    // console.log(name);

    // Обновляем состояние
    setFormData(prevData => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };

      // Если все поля заполнены, вызываем handleFormSubmit
      if (allFieldsFilled(updatedData)) {
        handleChangeForm(updatedData);
        setFormData({ name: '', email: '', phone: '', address: '' });
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
      // validationSchema={schema.cartFormSchema}
      // onSubmit={(values, { resetForm }) => {
      //   console.log(values);

      //   resetForm();
      // }}
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
