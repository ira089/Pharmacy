import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoadin } from '../../redux/auth/selectorsAuth';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const Login = () => {
  const { isLoading } = useSelector(selectIsLoadin);
  return (
    <>
      {isLoading && <p>...Loading</p>}
      <RegisterForm />
    </>
  );
};

export default Login;
