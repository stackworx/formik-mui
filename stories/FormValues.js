import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  root: {
    padding: 5,
    marginTop: 20,
  },
});

function replacer(key, value) {
  // Filtering out properties
  if (value instanceof File) {
    return {
      size: value.size,
      name: value.name,
      type: value.type,
    };
  }
  return value;
}

const FormValues = ({ values, classes }) => (
  <div className={classes.root}>
    <Typography variant="headline" component="h5">
      State
    </Typography>
    <Typography component="p">
      {JSON.stringify(values, replacer, 2).replace()}
    </Typography>
  </div>
);

export default withStyles(styles)(FormValues);
