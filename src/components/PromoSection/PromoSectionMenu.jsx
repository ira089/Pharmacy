import React from 'react';
import styles from './promoSection.module.css';
import  Icon  from '../Icon/Icon';

const PromoSectionMenu = () => {
  return (
    <div className={styles.wrapMenu}>
        <div className={styles.menu}>
            <Icon  height={21} width={20} name={"icon-menu"}/>
            <p>Take user orders form online</p>
        </div>
        <div className={styles.menu}>
            <Icon  height={21} width={20} name={"icon-menu"}/>
            <p>Create your shop profile</p>
        </div>
        
        <div className={styles.menu}>
            <Icon  height={21} width={20} name={"icon-menu"}/>
            <p>Manage your store</p>
        </div>
        <div className={styles.menu}>
            <Icon  height={21} width={20} name={"icon-menu"}/>
            <p>Get more orders</p>
        </div>
        <div className={styles.menu}>
            <Icon  height={21} width={20} name={"icon-menu"}/>
            <p>Storage shed</p>
        </div>

    </div>
  )
}

export default PromoSectionMenu