import React from 'react';
import { useSelector} from 'react-redux';
import {selectReviews} from '../../redux/review/selectorsReview'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import theme from '../../assets/theme';
import { ThemeProvider } from '@mui/material/styles';
import ReviewsItem from 'components/ReviewsItem/ReviewsItem';
import styles from './reviewsSection.module.css';

const ReviewsSection = () => {
  const {reviews } = useSelector(selectReviews)

  const elements = reviews.map(item => (
    <Grid item mobile={12} tablet={6} desktop={4}>
      <ReviewsItem key={item._id} item={item} />
    </Grid>
  ));


  return (
    <section className={styles.wrapReview}>
      <h3 className={styles.title}>Reviews</h3>
      <p className={styles.text}>Search for Medicine, Filter by your location</p>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%' }}>
          <Grid
            container
            rowSpacing={{ mobile: 2, tablet: 2, desktop: 2 }}
            columnSpacing={{ tablet: 2, desktop: 3.5 }}
          >
            {elements}
          </Grid>
        </Box>
      </ThemeProvider>
    </section>
  )
}

export default ReviewsSection