import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Field, Form } from 'formik';
import { LinearProgress } from '@material-ui/core/LinearProgress';
import { action } from '@storybook/addon-actions';
import Wrapper from './Wrapper';

import TextField from '../src/TextField';
import FormValues from './FormValues';

export default () => (
  <Wrapper title="Text Field">
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
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
      render={({ handleSubmit, isSubmitting, values }) => (
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
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="raised"
            color="primary"
            disabled={isSubmitting}
            onClick={handleSubmit}
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
