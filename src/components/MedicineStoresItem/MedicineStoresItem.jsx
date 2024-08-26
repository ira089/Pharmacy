import React from 'react';
import styles from './medicineStoresItem.module.css';
import { NavLink } from 'react-router-dom';
import Icon from 'components/Icon/Icon';

const MedicineStoresItem = () => {
  return (
    <NavLink>
<div className={styles.wrapItem}>
      
      <div>
        <div>
          <h5>Baumbach LLC</h5>
          <div>
            <Icon />
            <div>
              <span>open</span>
            </div>
          </div>
        </div>
      </div>
    
  </div>
    </NavLink>
    
  );
};

export default MedicineStoresItem;
