import * as React from 'react';
import { test, expect } from '@jest/globals';
import { Formik, Form, Field } from 'formik';
import renderer from 'react-test-renderer';

import { Switch } from '../Switch';

test('Switch Renders Correctly', () => {
  const component = renderer.create(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <Field component={Switch} name="test" type="checkbox" />
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
