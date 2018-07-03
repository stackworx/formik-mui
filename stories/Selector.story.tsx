import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Field, Form } from 'formik';
import { action } from '@storybook/addon-actions';

import Wrapper from './Wrapper';
import FormValues from './FormValues';

import { Switch, Checkbox } from '../src/main';

export default () => (
  <Wrapper title="Selectors">
    <Formik
      initialValues={{ switch: false, checkbox: false }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          action('submit')(values);
        }, 2000);
      }}
      render={({ submitForm, values }) => (
        <Form>
          <Field name="switch" component={Switch} />
          <br />
          <Field name="checkbox" component={Checkbox} />
          <br />
          <Button variant="raised" color="primary" onClick={submitForm}>
            Submit
          </Button>
          <br />
          <FormValues values={values} />
        </Form>
      )}
    />
  </Wrapper>
);
