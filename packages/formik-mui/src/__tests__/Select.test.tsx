import * as React from 'react';
import { test, expect } from 'vitest';
import { Formik, Form, Field } from 'formik';
import { render } from '@testing-library/react';
import MenuItem from '@mui/material/MenuItem';

import { Select } from '../Select';

test('Select Renders Correctly', () => {
  const { asFragment } = render(
    <Formik onSubmit={() => {}} initialValues={{ test: '' }}>
      <Form>
        <Field component={Select} name="test">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Field>
      </Form>
    </Formik>
  );

  expect(asFragment()).toMatchSnapshot();
});
