import * as React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Formik, Form, Field } from 'formik';
import { action } from '@storybook/addon-actions';

import Wrapper from './Wrapper';
import FormValues from './FormValues';

import {
  Checkbox,
  CheckboxWithLabel,
} from '../packages/formik-material-ui/src/main';
import { Typography } from '@material-ui/core';

export default () => (
  <Wrapper title="Checkboxes">
    <Formik
      initialValues={{
        on: true,
        off: false,
        null: null,
        multiple: [],
        withLabel: false,
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
          <Typography>
            On
            <Field component={Checkbox} name="on" type="checkbox" />
            Off
            <Field component={Checkbox} name="off" type="checkbox" />
            Null
            <Field component={Checkbox} name="null" type="checkbox" />
          </Typography>
          <Box>
            <Field
              component={CheckboxWithLabel}
              Label={{ label: 'Checkbox With Label' }}
              name="withLabel"
              type="checkbox"
            />
          </Box>
          <Box>
            <Field
              component={CheckboxWithLabel}
              Label={{ label: 'Designer?' }}
              name="multiple"
              value="designer"
              type="checkbox"
            />
            <Field
              component={CheckboxWithLabel}
              Label={{ label: 'Developer?' }}
              name="multiple"
              value="developer"
              type="checkbox"
            />
            <Field
              component={CheckboxWithLabel}
              Label={{ label: 'Product Manager?' }}
              name="multiple"
              value="product"
              type="checkbox"
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
