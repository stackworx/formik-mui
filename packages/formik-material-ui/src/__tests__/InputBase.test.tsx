import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { InputBase } from '../InputBase';

test('InputBase Renders Correctly', () => {
  const { asFragment } = render(
    <Formik onSubmit={() => null} initialValues={{ test: 'Input' }}>
      <Form>
        <Field name="test" label="InputBase" component={InputBase} />
      </Form>
    </Formik>
  );

  expect(asFragment()).toMatchSnapshot();
  // component.root.findByProps({ type: "text" }).props.onClick();
});

test('InputBase Renders Correctly disabled', () => {
  const { asFragment, getByTestId } = render(
    <Formik onSubmit={() => null} initialValues={{ test: 'Input' }}>
      <Form>
        <Field
          name="test"
          inputProps={{ 'data-testid': 'input' }}
          label="InputBase"
          component={InputBase}
        />
      </Form>
    </Formik>
  );

  waitForElementToBeRemoved;

  fireEvent.change(getByTestId('input'), { target: { value: 'a' } });
  expect(asFragment()).toMatchSnapshot();
  // component.root.findByProps({ type: "text" }).props.onClick();
});
