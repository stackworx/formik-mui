import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import renderer from 'react-test-renderer';
import { FormControlLabel, Radio } from '@material-ui/core';

import { RadioGroup } from '../RadioGroup';

test('Radio Group Renders Correctly', () => {
  const component = renderer.create(
    <Formik onSubmit={() => null} initialValues={{ test: '' }}>
      <Form>
        <Field name="radio-group" label="Radio Group" component={RadioGroup}>
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
