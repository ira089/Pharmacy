import React from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { loginThunk } from '../../redux/auth/operationsAuth';
import { Formik, Form } from 'formik';
import * as schema from '../../schemas/schemas';
import Input from '../Input/Input';
import Button from 'components/Button/Button';
// import { currentFullThunk } from '../../redux/auth/operationsAuth';
import styles from './registerForm.module.css';
// import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth';

const FormaLogin = () => {
  const dispatch = useDispatch();
  // const isLogin = useSelector(selectIsLoggedIn);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (isLogin) {
  //     dispatch(currentFullThunk());
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dispatch]);

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
        // dispatch(currentFullThunk());

        // navigate('/cart');
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
