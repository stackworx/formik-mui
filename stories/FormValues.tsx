import React from 'react';
import { WithStyles } from '@mui/styles';
import withStyles from '@mui/styles/withStyles';
import createStyles from '@mui/styles/createStyles';
import Typography from '@mui/material/Typography';

const styles = () =>
  createStyles({
    root: {
      padding: 5,
      marginTop: 20,
    },
  });

function replacer(_: string, value: unknown) {
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

interface Props extends WithStyles<typeof styles> {
  values: unknown;
}

const FormValues = ({ values, classes }: Props) => (
  <div className={classes.root}>
    <Typography variant="h4" component="h5">
      State
    </Typography>
    <Typography component="pre">
      {JSON.stringify(values, replacer, 2)}
    </Typography>
  </div>
);

export default withStyles(styles)(FormValues);
