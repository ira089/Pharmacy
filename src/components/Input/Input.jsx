import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './input.module.css';


const Input = ({ name, placeholder,type, textLabel, handleChange, valueInput}) => {
  
  return (
    <div className={styles.inputWrap}>
      <label  htmlFor={name}>{textLabel}</label>
        <Field onChange={handleChange} value={valueInput} id={name} name={name} placeholder={placeholder} type={type} />
        <ErrorMessage name={name}>{error => <span>{error}</span>}</ErrorMessage>
      
    </div>
  );
};

export default Input;