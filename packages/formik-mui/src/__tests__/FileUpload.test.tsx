import * as React from 'react';
import { test, expect } from '@jest/globals';
import { Formik, Form, Field } from 'formik';
import renderer from 'react-test-renderer';

import { FileUpload } from '../FileUpload';

test('FileUpload Renders Correctly', () => {
  const component = renderer.create(
    <Formik onSubmit={() => {}} initialValues={{ test: '' }}>
      <Form>
        <Field component={FileUpload} name="test" label="Select" />
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
