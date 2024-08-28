import React from 'react';
// import { useDispatch } from 'react-redux';
// import { registerThunk } from '../../redux/auth/operationsAuth';
import { Formik, Form } from 'formik';
import * as schema from '../../schemas/schemas';
import Input from '../Input/Input';
import Button from 'components/Button/Button';
import styles from './registerForm.module.css';

const FormaRegicter = () => {
  // const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        password: '',
      }}
      validationSchema={schema.registerSchema}
      onSubmit={(values, { resetForm }) => {
        //   const { confirmPassword, confirmpassword, ...dataThunk } = values;
        //   dispatch(registerThunk(values));
        console.log(values);
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <Input name="name" placeholder="User Name" type="name" />
        <Input name="email" placeholder="Email address" type="email" />
        <Input name="phone" placeholder="Phone number" type="phone" />
        <Input name="password" placeholder="Password" type="password" />

        <div className={styles.btn}>
          <Button style={{ color: '#fff', width: '100%', height: '44px' }}>
            Register
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormaRegicter;
