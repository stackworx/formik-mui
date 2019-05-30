import React, { ReactNode } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {
  withStyles,
  Theme,
  WithStyles,
  createStyles,
} from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
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
    {children}
  </Paper>
);

export default withStyles(styles)(Wrapper);
