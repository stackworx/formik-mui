import { test, expect } from 'vitest';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
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
          <Field
            component={StaticDatePicker}
            name="test"
            textField={{ label: 'Date' }}
          />
        </Form>
      </Formik>
    </LocalizationProvider>
  );

  expect(getByText('Wed, Jan 1')).toBeInTheDocument();
});
