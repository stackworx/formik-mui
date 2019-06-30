import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import renderer from 'react-test-renderer';

import { InputBase } from '../InputBase';

test('InputBase Renders Correctly', () => {
  const component = renderer.create(
    <Formik onSubmit={() => null} initialValues={{ test: 'Input' }}>
      <Form>
        <Field name="test" label="InputBase" component={InputBase} />
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
