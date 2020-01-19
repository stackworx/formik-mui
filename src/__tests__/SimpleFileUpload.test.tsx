import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import renderer from 'react-test-renderer';

import { SimpleFileUpload } from '../SimpleFileUpload';

test('SimpleFileUpload Renders Correctly', () => {
  const component = renderer.create(
    <Formik onSubmit={() => {}} initialValues={{ test: '' }}>
      <Form>
        <Field name="test" label="Select" component={SimpleFileUpload} />
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
