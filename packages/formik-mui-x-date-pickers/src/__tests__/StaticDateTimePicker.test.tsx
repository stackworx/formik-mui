import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { StaticDateTimePicker } from '../StaticDateTimePicker';

test('StaticDateTimePicker Renders Correctly', () => {
  const { getByText } = render(
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Formik
        initialValues={{ test: new Date('2020-01-01') }}
        onSubmit={() => {}}
      >
        <Form>
          <Field component={StaticDateTimePicker} name="test" label="Date" />
        </Form>
      </Formik>
    </LocalizationProvider>
  );

  expect(getByText('January')).toBeInTheDocument();
});
