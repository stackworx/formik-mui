import * as React from 'react';
import { Formik, Form } from 'formik';
import renderer from 'react-test-renderer';

import { TextField } from '../TextField';

test('TextField Renders Correctly', () => {
  const component = renderer.create(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form >
        <TextField name="test" label="Text" />
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Outlined TextField', () => {
  const component = renderer.create(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form >
        <TextField name="test" label="Text" variant="outlined" />
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
