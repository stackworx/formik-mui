import * as React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Field, Form } from 'formik';
import {
  LinearProgress,
  MenuItem,
  withStyles,
  Theme,
  createStyles,
  WithStyles,
} from '@material-ui/core';
import { action } from '@storybook/addon-actions';
import * as yup from 'yup';

import Wrapper from './Wrapper';

import { TextField } from '../src/TextField';
import FormValues from './FormValues';

interface Values {
  user: { email: string };
  password: string;
  select: string;
  outlined: string;
}

const schema = yup.object().shape({
  user: yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
  }),
  password: yup.string().required(),
  select: yup.mixed().required(),
});

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

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
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });

export default withStyles(styles)(({ classes }: WithStyles<typeof styles>) => (
  <Wrapper title="Text Field">
    <Formik<Values>
      initialValues={{
        user: { email: '' },
        password: '',
        select: '',
        outlined: '',
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          action('submit')(values);
        }, 2000);
      }}
      render={({ submitForm, isSubmitting, values }) => (
        <Form>
          <Field
            type="email"
            label="Email"
            name="user.email"
            component={TextField}
          />
          <br />
          <Field
            type="password"
            label="Password"
            name="password"
            component={TextField}
          />
          <br />
          <br />
          <Field
            label="Outlined"
            name="outlined"
            variant="outlined"
            notched
            component={TextField}
          />
          <br />
          <Field
            label="Outlined"
            name="outlined"
            variant="standard"
            notched
            component={TextField}
          />
          <br />
          <Field
            type="text"
            name="select"
            label="With Select"
            select
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select Range"
            margin="normal"
            component={TextField}
          >
            {ranges.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Field>
          <br />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
          <br />
          <FormValues values={values} />
        </Form>
      )}
    />
  </Wrapper>
));
