import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Paper from '@mui/material/Paper';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Wrapper = ({ children }: Props) => (
  <Paper elevation={4} style={{ padding: 10 }}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {children}
    </LocalizationProvider>
  </Paper>
);

export default Wrapper;
