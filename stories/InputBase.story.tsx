import * as React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import { LinearProgress } from '@material-ui/core';
import { action } from '@storybook/addon-actions';

import Wrapper from './Wrapper';

import { InputBase } from '../packages/formik-material-ui/src/InputBase';
import FormValues from './FormValues';

interface Values {
  inputBase: string;
}

export default () => (
  <Wrapper title="Input Base">
    <Formik<Values>
      initialValues={{
        inputBase: 'Naked input',
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
          <Field component={InputBase} name="inputBase" />
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
