import * as React from 'react';
import { test, expect } from 'vitest';
import { Formik, Form, Field } from 'formik';
import { render } from '@testing-library/react';

import { SimpleFileUpload } from '../SimpleFileUpload';

test('SimpleFileUpload Renders Correctly', () => {
  const { asFragment } = render(
    <Formik onSubmit={() => {}} initialValues={{ test: '' }}>
      <Form>
        <Field component={SimpleFileUpload} name="test" label="Select" />
      </Form>
    </Formik>
  );

  expect(asFragment()).toMatchSnapshot();
});
