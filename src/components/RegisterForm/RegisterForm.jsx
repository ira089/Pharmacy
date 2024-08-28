import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import FormaRegicter from './FormaRegicter';
import Icon from 'components/Icon/Icon';
import FormaLogin from './FormaLogin';
import styles from './registerForm.module.css';

const RegisterForm = () => {
    const location = useLocation();

  return (
    <div className={styles.wrapRegister}>
      <h2 className={styles.title}>
        Your medication, delivered Say goodbye to all{' '}
        <span>your healthcare </span> worries with us
      </h2>
      {location.pathname === '/register' ? <FormaRegicter /> : <FormaLogin/>}
      {location.pathname === '/register' ? (<NavLink className={styles.link} to="/login">
        Already have an account?
      </NavLink>) : (<NavLink className={styles.link} to="/register">
        Don't have an account?
      </NavLink>)}
      
      <div className={styles.elements}>
        <Icon height={168} width={216} name={'icon-elements'} />
      </div>
    </div>
  );
};

export default RegisterForm;
