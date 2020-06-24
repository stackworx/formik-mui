import * as React from 'react';
import { test, expect } from '@jest/globals';
import { Formik, Form, Field } from 'formik';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { InputBase } from '../InputBase';
import { act } from 'react-dom/test-utils';

test('InputBase Renders Correctly', () => {
  const { asFragment } = render(
    <Formik onSubmit={() => {}} initialValues={{ test: 'Input' }}>
      <Form>
        <Field component={InputBase} name="test" />
      </Form>
    </Formik>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('InputBase Renders Correctly disabled', async () => {
  const { asFragment, getByTestId } = render(
    <Formik onSubmit={() => {}} initialValues={{ test: 'Input' }}>
      <Form>
        <Field
          component={InputBase}
          name="test"
          inputProps={{ 'data-testid': 'input' }}
        />
      </Form>
    </Formik>
  );

  await act(async () => {
    fireEvent.change(getByTestId('input'), { target: { value: 'a' } });
  });
  expect(asFragment()).toMatchSnapshot();
});
