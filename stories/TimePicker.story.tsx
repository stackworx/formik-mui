import * as React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import { LinearProgress } from '@material-ui/core';
import { action } from '@storybook/addon-actions';
import * as yup from 'yup';

import Wrapper from './Wrapper';

import { TimePicker } from '../packages/formik-material-ui-pickers/src/TimePicker';
import { KeyboardTimePicker } from '../packages/formik-material-ui-pickers/src/KeyboardTimePicker';
import FormValues from './FormValues';

interface Values {
  time: Date | null;
}

const schema = yup.object().shape({
  time: yup.date().required(),
});

export default () => (
  <Wrapper title="Time Picker">
    <Formik<Values>
      initialValues={{
        time: new Date(),
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
          <Field component={TimePicker} label="Time" name="time" />
          <br />
          <Field
            component={KeyboardTimePicker}
            label="Keyboard time picker"
            name="time"
            mask="__:__ _M"
          />
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
