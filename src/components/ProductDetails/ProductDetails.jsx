import React, {useState} from 'react';
import styles from './productDetails.module.css';

const ProductDetails = ({item}) => {
  const {description, reviews} = item;
  const isDescription = Boolean(description);
  console.log(isDescription);
  const isReviews = Boolean(reviews?.length);
  console.log(isReviews);
  const [activeTab, setActiveTab] = useState('tabDescription');
  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
   <div className={styles.wrap}>
      <div className={styles.wrapTab}>
        <button
          autoFocus
          // className={`${styles.tab} ${
          //   activeTab === 'tabFavorite' ? styles.activeTab : ''
          // }`}
          onClick={() => handleTabClick('tabDescription')}
        >
          Description
        </button>
        <button
          className={styles.tab}
          onClick={() => handleTabClick('tabReviews')}
        >
          Reviews
        </button>
      </div>
       {activeTab === 'tabDescription' && (isDescription ?  description : <p>Description of this product not found</p>)} 
      {activeTab === 'tabReviews' && (isReviews ? reviews : <p>No reviews found for this product</p>)} 
      
    </div>
  )
}

export default ProductDetails