import React from 'react';
import { useSelector} from 'react-redux';
import {selectMedStore} from '../../redux/medStore/selectorsMedStore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import theme from '../../assets/theme';
import { ThemeProvider } from '@mui/material/styles';
import MedicineStoresItem from '../MedicineStoresItem/MedicineStoresItem';
import styles from './medicineStores.module.css';

const MedicineStores = () => {

  const {  pharmaciesSix } = useSelector(selectMedStore)
  
  const elements = pharmaciesSix.map(item => (
    <Grid item mobile={12} tablet={6} desktop={4}>
      <MedicineStoresItem key={item._id} item={item} />
    </Grid>
  ));

  return (
    <section className={styles.wrapBanner}>
      <h3 className={styles.title}>Your Nearest Medicine Store</h3>
      <p className={styles.text}>Search for Medicine, Filter by your location</p>
      <div className={styles.containerItem}>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%' }}>
          <Grid
            container
            rowSpacing={{ mobile: 2.5, tablet: 4, desktop: 4.75 }}
            columnSpacing={{ tablet: 2, desktop: 4 }}
          >
            {elements}
          </Grid>
        </Box>
      </ThemeProvider>
      </div>
    </section>
  )
}

export default MedicineStores