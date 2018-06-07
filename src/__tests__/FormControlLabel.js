/* @flow */
import React from 'react';
import { Formik, Field, Form } from 'formik';
import renderer from 'react-test-renderer';
import Switch from '@material-ui/core/Switch';

import FormControlLabel from '../FormControlLabel';

test('FormControlLabel Renders Correctly', () => {
  const component = renderer.create(
    <Formik onSubmit={() => null}>
      <Form>
        <Field
          name="test"
          label="Text"
          component={FormControlLabel}
          control={<Switch />}
        />
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
