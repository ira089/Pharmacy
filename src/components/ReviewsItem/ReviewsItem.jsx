import React from 'react';
import Rev from '../../assets/svg/photo.svg';
import styles from './reviewsItem.module.css';

const ReviewsItem = () => {
  return (
    <div className={styles.itemReview}>
      <img className={styles.img} src={Rev} alt="avatar" />
      <h3>Maria Tkachuk</h3>
      <p>
        I recently used this medical platform to book an appointment with a
        specialist, and I was impressed by how easy and user-friendly the
        process was. Highly recommended!
      </p>
    </div>
  );
};

export default ReviewsItem;
