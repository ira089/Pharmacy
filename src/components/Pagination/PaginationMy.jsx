import React from 'react';
import Pagination from '@mui/material/Pagination';
import theme from '../../assets/theme';
import { ThemeProvider } from '@mui/material/styles';

const PaginationMy = ({ page, totalPages, selectPage }) => {
  console.log(theme.palette);
  return (
    <ThemeProvider theme={theme}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={(_, num) => selectPage(num)}
        sx={{
          marginTop: 5,
          marginX: 'auto',
          '& .MuiPaginationItem-root': {
            '&.Mui-selected': {
              backgroundColor: '#59b17a',
              color: '#fff', // Цвет текста внутри кружочка
              borderRadius: '50%', // Сделать кружочек
            },
            '&:hover': {
              backgroundColor: '#59b17a', // Цвет фона при наведении
              color: '#fff', // Цвет текста при наведении
            },
          },
        }}
        showFirstButton
        showLastButton
        color="secondary"
      />
    </ThemeProvider>
  );
};

export default PaginationMy;
