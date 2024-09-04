import React from 'react';
import Rev from '../../assets/svg/photo.svg';
import styles from './reviewsItem.module.css';

const ReviewsItem = ({item}) => {
  const {name,testimonial} = item
  return (
    <div className={styles.itemReview}>
      <img className={styles.img} src={Rev} alt="avatar" />
      <h3>{name}</h3>
      <p>{testimonial}</p>
    </div>
  );
};

export default ReviewsItem;
