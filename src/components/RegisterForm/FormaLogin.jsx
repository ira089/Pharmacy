import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operationsAuth';
import { Formik, Form } from 'formik';
import * as schema from '../../schemas/schemas';
import Input from '../Input/Input';
import Button from 'components/Button/Button';
import styles from './registerForm.module.css';

const FormaLogin = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema.loginSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(loginThunk(values));
        resetForm();
      }}
    >
      <Form className={styles.formLogin}>
        <Input name="email" placeholder="Email address" type="email" />
        <Input name="password" placeholder="Password" type="password" />

        <div className={styles.btn}>
          <Button style={{ color: '#fff', width: '100%', height: '44px' }}>
            Log in
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormaLogin;
