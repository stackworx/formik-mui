import { expect, test } from '@jest/globals';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import renderer from 'react-test-renderer';
import { DesktopDatePicker } from '../DesktopDatePicker';

test('DesktopDatePicker Renders Correctly', () => {
  const component = renderer.create(
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Formik
        initialValues={{ test: new Date('2020-01-01') }}
        onSubmit={() => {}}
      >
        <Form>
          <Field
            component={DesktopDatePicker}
            name="test"
            label="Date"
            textField={{ helperText: 'Helper text' }}
          />
        </Form>
      </Formik>
    </LocalizationProvider>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
