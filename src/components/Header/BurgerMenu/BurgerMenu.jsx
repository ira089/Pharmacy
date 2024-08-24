import React from 'react';
import classNames from 'classnames';
import styles from './burgerMenu.module.css';
import Icon from 'components/Icon/Icon';
import NavLinks from '../NavLinks/NavLinks';
import AuthLinks from '../AuthLinks/AuthLinks';

const BurgerMenu = ({isOpen, open}) => {
  return (
    <div  className={classNames(styles.burger, { [styles.active]: open })}>
<button className={styles.btnClose} onClick={isOpen}>
<Icon width={32} height={32} name={'icon-close'} />
</button>
<NavLinks/>
<AuthLinks/>
    </div>
  )
}

export default BurgerMenu