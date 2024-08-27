import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from 'components/Icon/Icon';
import styles from './medicineStoresItem.module.css';

const MedicineStoresItem = () => {
  return (
    <NavLink className= {styles.wrapItem}>
      {/* <div className={styles.wrapItem}> */}
        <div className={styles.titleStar}>
          <h5 className={styles.title}>Baumbachjjsiwjwnx LLC</h5>
          <div className={styles.star}>
            <Icon width={16} height={16} name={'icon-star'} />
            <spav>3</spav>
            <div className={styles.open}>
              open
            </div>
          </div>
        </div>
        <div className= {styles.addresPhone}>
        <Icon width={16} fillColor={'none'} strokeColor={'#59B17A'}  height={16} name={'icon-map'} /> 
        <p>Kretoria 11007 <br />Champerico</p> 
        </div>
        <div className= {styles.addresPhone}>
        <Icon width={16} height={16} fillColor={'none'} strokeColor={'#59B17A'}  name={'icon-phone'} />
        <p>506-84-9725</p>
        </div>
        <div className= {styles.decor1}></div>
        <div className= {styles.decor2}></div>
        <div className= {styles.decor3}></div>
      {/* </div> */}
    </NavLink>
  );
};

export default MedicineStoresItem;
