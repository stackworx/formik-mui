import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import renderer from 'react-test-renderer';

import { Switch } from '../Switch';

test('Switch Renders Correctly', () => {
  const component = renderer.create(
    <Formik initialValues={{}} onSubmit={() => null}>
      <Form>
        <Field name="test" label="Text" component={Switch} />
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
