import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPage } from '../../redux/search/searchSlice';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import theme from '../../assets/theme';
import { ThemeProvider } from '@mui/material/styles';
import PaginationMy from 'components/Pagination/PaginationMy';
import { selectProducts } from '../../redux/products/selectorProducts';
import MedicineItem from 'components/MedicineItem/MedicineItem';
import styles from './medicineList.module.css';

const MedicineList = () => {
  const { isLoading, error, products, totalPages, page } =
    useSelector(selectProducts);
  const totalPagesPagination = totalPages / 12;

  const dispatch = useDispatch();
  const isVariant = { variant: false };
  const isNotices = Boolean(products.length);

  const selectPage = num => {
    dispatch(addPage(num));
  };

  const elements = products.map(item => (
    <Grid item mobile={12} tablet={4} desktop={3}>
      <MedicineItem key={item._id} item={item} isVariant={isVariant} />
    </Grid>
  ));
  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      {isNotices ? (
        <ThemeProvider theme={theme}>
          <Box sx={{ width: '100%' }}>
            <Grid
              container
              rowSpacing={{ mobile: 2.5, tablet: 4, desktop: 5 }}
              columnSpacing={{ tablet: 1.625, desktop: 2.625 }}
            >
              {elements}
            </Grid>
          </Box>
        </ThemeProvider>
      ) : (
        <p className={styles.sorry}>Nothing was found for your request</p>
      )}

      {/* условие если количество продуктов больше 12 */}
      {!!totalPages && !products.length < 12 && (
        <PaginationMy
          page={page}
          totalPages={totalPagesPagination}
          selectPage={selectPage}
        />
      )}
    </>
  );
};

export default MedicineList;
