import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

const Wrapper = ({ title, children }) => (
  <Paper elevation={4} style={{ padding: 10 }}>
    <Typography variant="headline" component="h3">
      {title}
    </Typography>
    {children}
  </Paper>
);

export default withStyles(styles)(Wrapper);
