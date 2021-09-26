import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { StaticDatePicker } from '../StaticDatePicker';

test('StaticDatePicker Renders Correctly', () => {
  const { getByText } = render(
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Formik
        initialValues={{ test: new Date('2020-01-01') }}
        onSubmit={() => {}}
      >
        <Form>
          <Field component={StaticDatePicker} name="test" label="Date" />
        </Form>
      </Formik>
    </LocalizationProvider>
  );

  expect(getByText('January')).toBeInTheDocument();
});
