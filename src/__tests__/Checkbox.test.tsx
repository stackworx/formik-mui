/* @flow */
import React from 'react';
import { Formik, Field, Form } from 'formik';
import renderer from 'react-test-renderer';

import Checkbox from '../Checkbox';

test('Checkbox Renders Correctly', () => {
  const component = renderer.create(
    <Formik initialValues={{ test: true }} onSubmit={() => null}>
      <Form>
        <Field name="test" label="Checkbox Label" component={Checkbox} />
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
