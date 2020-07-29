import * as React from 'react';
import { test, expect } from '@jest/globals';
import { Formik, Form, Field } from 'formik';
import renderer from 'react-test-renderer';

import { NativeSelect } from '../NativeSelect';

test('NativeSelect Renders Correctly', () => {
  const component = renderer.create(
    <Formik onSubmit={() => {}} initialValues={{ test: '' }}>
      <Form>
        <Field component={NativeSelect} name="test">
          <option value="">
            <em>None</em>
          </option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Field>
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
