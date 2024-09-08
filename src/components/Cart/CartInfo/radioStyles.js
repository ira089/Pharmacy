import { styled } from '@mui/material/styles';
import { Radio, FormControlLabel } from '@mui/material';

export const CustomRadio = styled(Radio)({
  color: 'rgba(18, 20, 23, 0.2)',
  '&.Mui-checked': {
    color: '#59B17A',
  },
});

export const CustomFormControlLabel = styled(FormControlLabel)({
  '& .MuiFormControlLabel-label': {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: '14px',
    color: '#1d1e21',
    lineHeight: '129%',
  },
});
