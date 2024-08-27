import * as React from 'react';
import { test, expect } from 'vitest';
import { Formik, Form, Field } from 'formik';
import { render } from '@testing-library/react';

import { Switch } from '../Switch';

test('Switch Renders Correctly', () => {
  const { asFragment } = render(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <Field component={Switch} name="test" type="checkbox" />
      </Form>
    </Formik>
  );

  expect(asFragment()).toMatchSnapshot();
});
