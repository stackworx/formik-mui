import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React, { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

const Wrapper = ({ title, children }: Props) => (
  <Paper elevation={4} style={{ padding: 10 }}>
    <Typography variant="h4" component="h3">
      {title}
    </Typography>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {children}
    </LocalizationProvider>
  </Paper>
);

export default Wrapper;
