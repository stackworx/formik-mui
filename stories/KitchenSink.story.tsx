import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Field, Form } from 'formik';
import { LinearProgress } from '@material-ui/core';
import { action } from '@storybook/addon-actions';
import Wrapper from './Wrapper';

import TextField from '../src/TextField';
import FormValues from './FormValues';

interface Values {
  email: string;
  password: string;
  dateTime: string;
  date: string;
}

const initialValues: Values = {
  email: '',
  password: '',
  dateTime: '',
  date: '',
};

export default () => (
  <Wrapper title="Kitchen Sink">
    <Formik
      initialValues={initialValues}
      validate={values => {
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
      render={({ submitForm, isSubmitting, values }) => (
        <Form>
          <Field
            type="email"
            label="Email"
            name="email"
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
          <Field
            InputLabelProps={{ shrink: true }}
            type="datetime-local"
            label="Date Time"
            name="dateTime"
            component={TextField}
          />
          <br />
          <Field
            InputLabelProps={{ shrink: true }}
            type="date"
            label="Date"
            name="date"
            component={TextField}
          />
          <br />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="raised"
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
);
