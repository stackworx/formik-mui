import * as React from 'react';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Formik, Form, Field } from 'formik';
import { action } from '@storybook/addon-actions';

import Wrapper from './Wrapper';
import FormValues from './FormValues';

import { Switch } from '../packages/formik-material-ui/src/main';
import { Box } from '@material-ui/core';

export default () => (
  <Wrapper title="Switches">
    <Formik
      initialValues={{
        on: true,
        off: false,
        withLabel: false,
        multiple: [],
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          action('submit')(values);
        }, 2000);
      }}
    >
      {({ submitForm, values }) => (
        <Form>
          <Field component={Switch} name="on" type="checkbox" />
          <br />
          <Field component={Switch} name="off" type="checkbox" />
          <br />
          <FormControlLabel
            label="Switch With Label"
            control={
              <Field component={Switch} name="withLabel" type="checkbox" />
            }
          />
          <br />
          <Box>
            <FormControlLabel
              label="Designer?"
              control={
                <Field
                  component={Switch}
                  name="multiple"
                  value="designer"
                  type="checkbox"
                />
              }
            />
            <FormControlLabel
              label="Developer?"
              control={
                <Field
                  component={Switch}
                  name="multiple"
                  value="developer"
                  type="checkbox"
                />
              }
            />
            <FormControlLabel
              label="Product Manager?"
              control={
                <Field
                  component={Switch}
                  name="multiple"
                  value="product"
                  type="checkbox"
                />
              }
            />
          </Box>
          <Button variant="contained" color="primary" onClick={submitForm}>
            Submit
          </Button>
          <br />
          <FormValues values={values} />
        </Form>
      )}
    </Formik>
  </Wrapper>
);
