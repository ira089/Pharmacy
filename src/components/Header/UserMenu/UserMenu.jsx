import Icon from 'components/Icon/Icon';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUser } from '../../../redux/auth/selectorsAuth';
import styles from './userMenu.module.css';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const nameUser = user.name;
  const firstLetterName = nameUser[0].toUpperCase()
  return (
    <>
      <div className={styles.cart}>
        <div className={styles.cartSum}>0</div>
        <NavLink className={styles.link} to="/cart">
          <Icon width={16} height={16} name={'icon-cart'} />
        </NavLink>
      </div>
      <div className={styles.user}>{firstLetterName}</div>
    </>
  );
};

export default UserMenu;
