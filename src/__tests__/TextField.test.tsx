import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import renderer from 'react-test-renderer';

import { TextField, TextFieldProps } from '../TextField';

test('TextField Renders Correctly', () => {
  const component = renderer.create(
    <Formik initialValues={{}} onSubmit={() => null}>
      <Form>
        <Field name="test" label="Text" component={TextField} />
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Wrapped TextField', () => {
  const TextFieldComponent = (p: TextFieldProps) => (
    <TextField variant="outlined" {...p} />
  );

  const component = renderer.create(
    <Formik initialValues={{}} onSubmit={() => null}>
      <Form>
        <Field name="test" label="Text" component={TextFieldComponent} />
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
