import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Field, Form } from 'formik';
import { LinearProgress } from '@material-ui/core';
import { action } from '@storybook/addon-actions';
import Wrapper from './Wrapper';

import TextField from '../src/TextField';
import FormValues from './FormValues';

interface Values {
  user: { email: string };
  password: string;
}

export default () => (
  <Wrapper title="Text Field">
    <Formik<Values>
      initialValues={{ user: { email: '' }, password: '' }}
      validate={values => {
        const errors: Partial<Values> = {};
        if (!values.user.email) {
          errors.user = { email: 'Required' };
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user.email)
        ) {
          errors.user = { email: 'Invalid email address' };
        }

        if (!values.password) {
          errors.password = 'Required';
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
