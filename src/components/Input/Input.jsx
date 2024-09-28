import React from 'react';
import { useLocation } from 'react-router-dom';
import { Field, ErrorMessage } from 'formik';
import styles from './input.module.css';

const Input = ({ name, placeholder, type, textLabel }) => {
  const location = useLocation();

  return (
    <div className={styles.inputWrap}>
      <label htmlFor={name}>{textLabel}</label>
      {location.pathname === '/cart' ? (
        <Field id={name} name={name} placeholder={placeholder} type={type} />
      ) : (
        <Field id={name} name={name} placeholder={placeholder} type={type} />
      )}
      <ErrorMessage name={name}>{error => <span>{error}</span>}</ErrorMessage>
    </div>
  );
};

export default Input;
