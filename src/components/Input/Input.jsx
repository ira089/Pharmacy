import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './input.module.css';

const Input = ({ name, placeholder, type, textLabel }) => {
  return (
    <div className={styles.inputWrap}>
      <label htmlFor={name}>{textLabel}</label>

      <Field id={name} name={name} placeholder={placeholder} type={type} />

      <ErrorMessage name={name}>{error => <span>{error}</span>}</ErrorMessage>
    </div>
  );
};

export default Input;
