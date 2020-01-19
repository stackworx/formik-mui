import * as React from 'react';
import { Formik, Form } from 'formik';
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { InputBase } from '../InputBase';

test('InputBase Renders Correctly', () => {
  const { asFragment } = render(
    <Formik onSubmit={() => {}} initialValues={{ test: 'Input' }}>
      <Form >
        <InputBase name="test" />
      </Form>
    </Formik>
  );

  expect(asFragment()).toMatchSnapshot();
  // component.root.findByProps({ type: "text" }).props.onClick();
});

test('InputBase Renders Correctly disabled', () => {
  const { asFragment, getByTestId } = render(
    <Formik onSubmit={() => {}} initialValues={{ test: 'Input' }}>
      <Form >
        <InputBase name="test" inputProps={{ 'data-testid': 'input' }} />
      </Form>
    </Formik>
  );

  waitForElementToBeRemoved;

  fireEvent.change(getByTestId('input'), { target: { value: 'a' } });
  expect(asFragment()).toMatchSnapshot();
  // component.root.findByProps({ type: "text" }).props.onClick();
});
