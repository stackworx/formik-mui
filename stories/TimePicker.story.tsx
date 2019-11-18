import * as React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Field, Form } from 'formik';
import { LinearProgress } from '@material-ui/core';
import { action } from '@storybook/addon-actions';
import * as yup from 'yup';

import Wrapper from './Wrapper';

import { TimePicker } from '../src/TimePicker';
import { KeyboardTimePicker } from '../src/KeyboardTimePicker';
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
      render={({ submitForm, isSubmitting, values }) => (
        <Form>
          <Field label="Time" name="time" component={TimePicker} />
          <br />
          <Field
            label="Keyboard time picker"
            name="time"
            mask="__:__ _M"
            component={KeyboardTimePicker}
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
    />
  </Wrapper>
);
