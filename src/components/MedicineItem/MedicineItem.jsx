import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'components/Button/Button';
import styles from './medicineItem.module.css';

const MedicineItem = ({item}) => {
  const {photo, name, price, _id} = item;
  const priceRound = Math.round(price)
  return (
    <div className={styles.wrapProdukt}>
      {/* <div className={styles.wrapImg}> */}
        <img className={styles.img} src={photo} alt='medicine'/>
      {/* </div> */}
      <div className={styles.wrapText}>
        <div className={styles.wrapName}>
          <h5>{name}</h5>
          <h5>৳{priceRound}</h5>
        </div>
        <div className={styles.wrapBtn}>
          <Button style={{ color: '#fff', width: '108px', height: '34px' }}>Add to cart</Button>
          <NavLink className={styles.link} to={`/produst/${_id}`}>Details</NavLink>
        </div>

      </div>
    </div>
  )
}

export default MedicineItem