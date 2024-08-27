import React from 'react';
import ReviewsItem from 'components/ReviewsItem/ReviewsItem';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import theme from '../../assets/theme';
// import { ThemeProvider } from '@mui/material/styles';
import styles from './reviewsSection.module.css';

const ReviewsSection = () => {
  // const elements = news.map(item => (
  //   <Grid item mobile={12} tablet={6} desktop={4}>
  //     <NewsItem key={item._id} item={item} />
  //   </Grid>
  // ));


  return (
    <section className={styles.wrapReview}>
      <h3 className={styles.title}>Reviews</h3>
      <p className={styles.text}>Search for Medicine, Filter by your location</p>
      <ReviewsItem/>
    </section>
  )
}

export default ReviewsSection