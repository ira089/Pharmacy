import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from 'components/Icon/Icon';
import styles from './medicineStoresItem.module.css';

const MedicineStoresItem = ({ item }) => {
  const { name, address, city, phone, rating } = item;
  return (
    <NavLink className={styles.wrapItem} to="/medicine-store">
      {/* <div className={styles.wrapItem}> */}
      <div className={styles.titleStar}>
        <h5 className={styles.title}>{name}</h5>
        <div className={styles.star}>
          <Icon width={16} height={16} name={'icon-star'} />
          <span>{rating}</span>
          <div className={styles.open}>open</div>
        </div>
      </div>
      <div className={styles.addresPhone}>
        <Icon
          width={16}
          fillColor={'none'}
          strokeColor={'#59B17A'}
          height={16}
          name={'icon-map'}
        />
        <p>
          {address} <br />
          {city}
        </p>
      </div>
      <div className={styles.addresPhone}>
        <Icon
          width={16}
          height={16}
          fillColor={'none'}
          strokeColor={'#59B17A'}
          name={'icon-phone'}
        />
        <p>{phone}</p>
      </div>
      <div className={styles.decor1}></div>
      <div className={styles.decor2}></div>
      <div className={styles.decor3}></div>
      {/* </div> */}
    </NavLink>
  );
};

export default MedicineStoresItem;
