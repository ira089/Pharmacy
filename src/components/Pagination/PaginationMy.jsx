import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationMy = ({ page, totalPages, selectPage }) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={(_, num) => selectPage(num)}
        sx={{ marginY: 3, marginX: 'auto' }}
        showFirstButton
        showLastButton
      />
    </Stack>
  );
};

export default PaginationMy;
