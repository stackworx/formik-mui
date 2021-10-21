import * as React from 'react';
import { test, expect } from '@jest/globals';
import { Formik, Form, Field } from 'formik';
import renderer from 'react-test-renderer';

import { SimpleFileUpload } from '../SimpleFileUpload';

test('SimpleFileUpload Renders Correctly', () => {
  const component = renderer.create(
    <Formik onSubmit={() => {}} initialValues={{ test: '' }}>
      <Form>
        <Field component={SimpleFileUpload} name="test" label="Select" />
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
