import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import renderer from 'react-test-renderer';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { KeyboardDateTimePicker } from '../KeyboardDateTimePicker';

test('KeyboardDateTimePicker Renders Correctly', () => {
  const component = renderer.create(
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik initialValues={{test: new Date('2020-01-01')}} onSubmit={() => null}>
        <Form>
          <Field
            name="test"
            label="Datetime"
            component={KeyboardDateTimePicker}
          />
        </Form>
      </Formik>
    </MuiPickersUtilsProvider>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
