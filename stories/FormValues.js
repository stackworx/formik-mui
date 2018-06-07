import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  root: {
    padding: 5,
    marginTop: 20,
  },
});

const FormValues = ({ values, classes }) => (
  <div className={classes.root}>
    <Typography variant="headline" component="h5">
      State
    </Typography>
    <Typography component="p">{JSON.stringify(values, null, 2)}</Typography>
  </div>
);

export default withStyles(styles)(FormValues);
