import * as React from 'react';
import { test, expect } from '@jest/globals';
import { Formik, Form, Field } from 'formik';
import renderer from 'react-test-renderer';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

import { RadioGroup } from '../RadioGroup';

test('Radio Group Renders Correctly', () => {
  const component = renderer.create(
    <Formik onSubmit={() => {}} initialValues={{ test: '' }}>
      <Form>
        <Field component={RadioGroup} name="radio-group">
          <FormControlLabel
            value="painting"
            control={<Radio />}
            label="Painting"
          />
          <FormControlLabel
            value="drawing"
            control={<Radio />}
            label="Drawing"
          />
          <FormControlLabel
            value="none"
            control={<Radio disabled />}
            label="None"
          />
        </Field>
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
