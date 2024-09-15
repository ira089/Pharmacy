import React from 'react';
import { useSelector } from 'react-redux';
import { selectMedStore } from '../../redux/medStore/selectorsMedStore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import theme from '../../assets/theme';
import { ThemeProvider } from '@mui/material/styles';
import MedicineStoresItem from 'components/MedicineStoresItem/MedicineStoresItem';

const MedStoreList = () => {
  const { isLoading, error, pharmacies } = useSelector(selectMedStore);

  const elements = pharmacies.map(item => (
    <Grid item mobile={12} tablet={6} desktop={4}>
      <MedicineStoresItem key={item._id} item={item} />
    </Grid>
  ));
  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%' }}>
          <Grid
            container
            rowSpacing={{ mobile: 2.5, tablet: 4, desktop: 5 }}
            columnSpacing={{ tablet: 2, desktop: 2.5 }}
          >
            {elements}
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default MedStoreList;
