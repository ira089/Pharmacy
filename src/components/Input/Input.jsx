import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './input.module.css';


const Input = ({ name, placeholder,type}) => {
  
  return (
    <div className={styles.inputWrap}>
      <label>
        <Field name={name} placeholder={placeholder} type={type} />
        <ErrorMessage name={name}>{error => <span>{error}</span>}</ErrorMessage>
      </label>
    </div>
  );
};

export default Input;