import React from 'react';
import styles from './button.module.css';

 const Button = ({ type = 'submit', children, onClick, style}) => {
  return (
    <button className={styles.btn} type={type} onClick={onClick} style={style}> 
      {children}
    </button>
  );
};
export default Button