import React from 'react';
import Pagination from '@mui/material/Pagination';
import theme from '../../assets/theme';
import { ThemeProvider } from '@mui/material/styles';

const PaginationMy = ({ page, totalPages, selectPage }) => {
  return (
    <ThemeProvider theme={theme}>
      <Pagination
        count={totalPages}
        defaultPage={3}
        siblingCount={0}
        page={Number(page)}
        onChange={(_, num) => selectPage(num)}
        sx={{
          marginTop: 5,
          marginX: 'auto',
          '& .MuiPaginationItem-root': {
            '&.Mui-selected': {
              backgroundColor: '#59b17a',
              color: '#fff',
            },
            '&:hover': {
              backgroundColor: '#59b17a',
              color: '#fff',
            },
          },
        }}
        showFirstButton
        showLastButton
      />
    </ThemeProvider>
  );
};

export default PaginationMy;
