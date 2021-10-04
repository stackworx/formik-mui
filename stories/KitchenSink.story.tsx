import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import { LinearProgress, FormControlLabel, Radio } from '@material-ui/core';
import { action } from '@storybook/addon-actions';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import Wrapper from './Wrapper';
import FormValues from './FormValues';
import {
  // CheckboxWithLabel,
  TextField,
  Select,
  RadioGroup,
} from '../packages/formik-material-ui/src/main';

interface Values {
  email: string;
  password: string;
  dateTime: string;
  date: string;
  rememberMe: boolean;
  age: string;
}

const initialValues: Values = {
  email: '',
  password: '',
  dateTime: '',
  date: '',
  rememberMe: false,
  age: '',
};

export default () => (
  <Wrapper title="Kitchen Sink">
    <Formik<Values>
      initialValues={initialValues}
      validate={(values) => {
        const errors: Partial<Values> = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          action('submit')(values);
        }, 2000);
      }}
    >
      {({ submitForm, isSubmitting, values }) => (
        <Form>
          <Field
            component={TextField}
            type="email"
            label="Email"
            name="email"
          />
          <br />
          <Field
            component={TextField}
            type="password"
            label="Password"
            name="password"
          />
          {/* <br />
          <CheckboxWithLabel
            Label={{ label: 'Remember Me' }}
            name="rememberMe"
          /> */}
          <br />
          <FormControl>
            <InputLabel htmlFor="age-simple">Age</InputLabel>
            <Field
              component={Select}
              name="age"
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
          <Field
            component={TextField}
            InputLabelProps={{ shrink: true }}
            type="datetime-local"
            label="Date Time"
            name="dateTime"
          />
          <br />
          <Field
            component={TextField}
            InputLabelProps={{ shrink: true }}
            type="date"
            label="Date"
            name="date"
          />
          <br />
          <Field component={RadioGroup} name="activity">
            <FormControlLabel
              value="painting"
              control={<Radio disabled={isSubmitting} />}
              label="Painting"
              disabled={isSubmitting}
            />
            <FormControlLabel
              value="drawing"
              control={<Radio disabled={isSubmitting} />}
              label="Drawing"
              disabled={isSubmitting}
            />
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
    </Formik>
  </Wrapper>
);
