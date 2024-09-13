import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutThunk } from '../../../redux/auth/operationsAuth';
import Button from 'components/Button/Button';
import styles from './userNav.module.css';

const UserNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handeleLogOut = () => {
    navigate('/');
    dispatch(logOutThunk());
  };

  return (
    <div className={styles.userNav}>
      <Button
        onClick={handeleLogOut}
        style={{ borderColor: 'rgba(241, 241, 241, 0.5)' }}
        type="buttun"
      >
        Log Out
      </Button>
    </div>
  );
};

export default UserNav;
