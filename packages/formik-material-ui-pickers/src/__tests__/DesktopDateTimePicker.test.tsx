import { expect, test } from '@jest/globals';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import renderer from 'react-test-renderer';
import { DesktopDateTimePicker } from '../DesktopDateTimePicker';

test('DesktopDateTimePicker Renders Correctly', () => {
  const component = renderer.create(
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Formik
        initialValues={{ test: new Date('2020-01-01') }}
        onSubmit={() => {}}
      >
        <Form>
          <Field
            component={DesktopDateTimePicker}
            name="test"
            label="Datetime"
            textField={{ helperText: 'Helper text' }}
          />
        </Form>
      </Formik>
    </LocalizationProvider>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
