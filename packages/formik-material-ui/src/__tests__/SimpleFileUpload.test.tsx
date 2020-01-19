import * as React from 'react';
import { Formik, Form } from 'formik';
import renderer from 'react-test-renderer';

import { SimpleFileUpload } from '../SimpleFileUpload';

test('SimpleFileUpload Renders Correctly', () => {
  const component = renderer.create(
    <Formik onSubmit={() => {}} initialValues={{ test: '' }}>
      <Form >
        <SimpleFileUpload name="test" label="Select" />
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
