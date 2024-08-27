import * as React from 'react';
import { test, expect } from 'vitest';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Field, Form, Formik } from 'formik';
import { render } from '@testing-library/react';
import { TimePicker } from '../TimePicker';

test('TimePicker Renders Correctly', () => {
  const { asFragment } = render(
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Formik
        initialValues={{ test: new Date('2020-01-01') }}
        onSubmit={() => {}}
      >
        <Form>
          <Field
            component={TimePicker}
            name="test"
            label="Time"
            textField={{ helperText: 'Helper text' }}
          />
        </Form>
      </Formik>
    </LocalizationProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
