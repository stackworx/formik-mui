import * as React from 'react';
import { Formik, Form } from 'formik';
import renderer from 'react-test-renderer';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { DateTimePicker } from '../DateTimePicker';

test('DateTimePicker Renders Correctly', () => {
  const component = renderer.create(
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={{ test: new Date('2020-01-01') }}
        onSubmit={() => {}}
      >
        <Form translate="">
          <DateTimePicker name="test" label="Datetime" />
        </Form>
      </Formik>
    </MuiPickersUtilsProvider>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
