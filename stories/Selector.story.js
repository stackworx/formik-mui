import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Field, Form } from 'formik';
import { action } from '@storybook/addon-actions';
import Wrapper from './Wrapper';

import { Switch, Checkbox } from '../src/main';

export default () => (
  <Wrapper title="Selectors">
    <Formik
      initialValues={{ switch: false }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          action('submit')(values);
        }, 2000);
      }}
      render={({ handleSubmit }) => (
        <Form>
          <Field name="switch" component={Switch} />
          <br />
          <Field name="checkbox" component={Checkbox} />
          <br />
          <Button variant="raised" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      )}
    />
  </Wrapper>
);
