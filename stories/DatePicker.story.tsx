import * as React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Field, Form } from 'formik';
import { LinearProgress } from '@material-ui/core';
import { action } from '@storybook/addon-actions';
import * as yup from 'yup';

import Wrapper from './Wrapper';

import { DatePicker } from '../src/DatePicker';
import { KeyboardDatePicker } from '../src/KeyboardDatePicker';
import FormValues from './FormValues';

interface Values {
  date: Date | null;
}

const schema = yup.object().shape({
  date: yup.date().required(),
});

export default () => (
  <Wrapper title="Date Picker">
    <Formik<Values>
      initialValues={{
        date: new Date(),
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          action('submit')(values);
        }, 2000);
      }}
      render={({ submitForm, isSubmitting, values }) => (
        <Form>
          <Field label="Date" name="date" component={DatePicker} />
          <br />
          <Field
            label="Date inline"
            name="date"
            component={DatePicker}
            variant="inline"
          />
          <br />
          <Field
            label="Keyboard date picker"
            name="date"
            format="MM/dd/yyyy"
            component={KeyboardDatePicker}
          />
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
    />
  </Wrapper>
);
