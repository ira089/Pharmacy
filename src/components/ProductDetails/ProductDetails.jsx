import React, {useState} from 'react';
import styles from './productDetails.module.css';

const ProductDetails = ({item}) => {
  const {description, reviews} = item;
  const isDescription = Boolean(description);
  // console.log(isDescription);
  const isReviews = Boolean(reviews?.length);
  // console.log(isReviews);
  const [activeTab, setActiveTab] = useState('tabDescription');
  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
   <div className={styles.wrap}>
      <div className={styles.wrapTab}>
        <button 
        //  className={styles.tabDescription}
          autoFocus
          className={`${styles.tabDescription} ${
            activeTab === 'tabDescription' ? styles.activeTab : ''
          }`}
          onClick={() => handleTabClick('tabDescription')}
        >
          Description
        </button>
        <button
          className={styles.tabReviews}
          onClick={() => handleTabClick('tabReviews')}
        >
          Reviews
        </button>
      </div>
       {activeTab === 'tabDescription' && (isDescription ?  <p>{description}</p> : <p>Description of this product not found</p>)} 
      {activeTab === 'tabReviews' && (isReviews ? <p>{reviews}</p> : <p>No reviews found for this product</p>)} 
      
    </div>
  )
}

export default ProductDetails