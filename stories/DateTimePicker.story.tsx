import * as React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import { LinearProgress } from '@material-ui/core';
import { action } from '@storybook/addon-actions';
import * as yup from 'yup';

import Wrapper from './Wrapper';

import { DateTimePicker } from '../packages/formik-material-ui-pickers/src/DateTimePicker';
import { KeyboardDateTimePicker } from '../packages/formik-material-ui-pickers/src/KeyboardDateTimePicker';
import FormValues from './FormValues';

interface Values {
  date: Date | null;
}

const schema = yup.object().shape({
  date: yup.date().required(),
});

export default () => (
  <Wrapper title="Date &amp; Time Picker">
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
    >
      {({ submitForm, isSubmitting, values }) => (
        <Form>
          <Field
            component={DateTimePicker}
            label="Date &amp; time"
            name="date"
          />
          <br />
          <Field
            component={DateTimePicker}
            label="Date &amp; time inline"
            name="date"
            variant="inline"
          />
          <br />
          <Field
            component={KeyboardDateTimePicker}
            label="Keyboard date &amp; time picker"
            name="date"
            format="yyyy/MM/dd HH:mm"
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
    </Formik>
  </Wrapper>
);
