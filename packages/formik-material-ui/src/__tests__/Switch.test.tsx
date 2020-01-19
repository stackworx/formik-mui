import * as React from 'react';
import { Formik, Form } from 'formik';
import renderer from 'react-test-renderer';

import { Switch } from '../Switch';

test('Switch Renders Correctly', () => {
  const component = renderer.create(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form >
        <Switch name="test" />
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
