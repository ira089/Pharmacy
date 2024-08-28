import React from 'react';
import styles from './registerForm.module.css';
import FormaRegicter from './FormaRegicter';
import { NavLink } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <div className={styles.wrapRegister}>
      <h2 className={styles.title}>
        Your medication, delivered Say goodbye to all <span>your healthcare </span>  worries
        with us
      </h2>
      <FormaRegicter/>
      <NavLink className={styles.link} to="/login">
      Already have an account?
      </NavLink>
      <div></div>
    </div>
  );
};

export default RegisterForm;
