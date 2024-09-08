import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/selectorsAuth';
import Icon from 'components/Icon/Icon';
import NavLinks from '../NavLinks/NavLinks';
import AuthLinks from '../AuthLinks/AuthLinks';
import classNames from 'classnames';
import styles from './burgerMenu.module.css';
import UserNav from '../UserNav/UserNav';

const BurgerMenu = ({ isOpen, open }) => {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <div className={classNames(styles.burger, { [styles.active]: open })}>
      <button className={styles.btnClose} onClick={isOpen}>
        <Icon width={32} height={32} name={'icon-close'} />
      </button>
      <NavLinks />
      {isLogin ? <UserNav /> : <AuthLinks />}
    </div>
  );
};

export default BurgerMenu;
