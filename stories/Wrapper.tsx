import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import type { WithStyles } from '@mui/styles';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import React, { ReactNode } from 'react';

const styles = () =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: 8,
      marginRight: 8,
      width: 200,
    },
    menu: {
      width: 200,
    },
  });

interface Props extends WithStyles<typeof styles> {
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

export default withStyles(styles)(Wrapper);
