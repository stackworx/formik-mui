import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import renderer from 'react-test-renderer';

import { TextField, TextFieldProps } from '../TextField';

test('TextField Renders Correctly', () => {
  const component = renderer.create(
    <Formik initialValues={{}} onSubmit={() => null}>
      <Form>
        <Field name="test" label="Text" as={TextField} />
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Wrapped TextField', () => {
  const TextFieldComponent = (p: TextFieldProps) => (
    <TextField variant="standard" {...p} />
  );

  const component = renderer.create(
    <Formik initialValues={{}} onSubmit={() => null}>
      <Form>
        <Field name="test" label="Text" as={TextFieldComponent} />
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
