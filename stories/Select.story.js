import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Field, Form } from 'formik';
import { action } from '@storybook/addon-actions';
import { withStyles } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import * as Yup from 'yup';

import Wrapper from './Wrapper';
import { Select } from '../src/main';

const schema = Yup.object().shape({
  age: Yup.string().required(),
});

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

export default withStyles(styles)(({ classes }) => (
  <Wrapper title="Select">
    <Formik
      validationSchema={schema}
      initialValues={{ age: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          action('submit')(values);
        }, 2000);
      }}
      render={({ handleSubmit, errors }) => (
        <Form>
          <FormControl className={classes.formControl}>
            {/* <Field name="age" htmlFor="age-simple" component={InputLabel}>
              Age
            </Field> */}
            <InputLabel htmlFor="age-simple">Age</InputLabel>
            <Field
              name="age"
              component={Select}
              inputProps={{
                name: 'age',
                id: 'age-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Field>
          </FormControl>
          <br />
          <Button variant="raised" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      )}
    />
  </Wrapper>
));
