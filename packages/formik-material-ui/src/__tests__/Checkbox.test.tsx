import React from 'react';
import { test, expect } from '@jest/globals';
import { Field } from 'formik';

import { render, fireEvent } from './utils';

import { Checkbox } from '../Checkbox';

test('renders', async () => {
  // @ts-ignore
  const onSubmit = jest.fn();
  const { asFragment } = render(
    <Field component={Checkbox} name="checked" type="checkbox" />,
    {
      initialValues: {
        checked: false,
      },
      onSubmit,
    }
  );

  expect(asFragment()).toMatchSnapshot();
});

test('checked', async () => {
  // given
  const onSubmit = jest.fn();
  const { getByTestId, findByText } = render(
    <Field
      component={Checkbox}
      name="checked"
      label="Checkbox"
      type="checkbox"
      inputProps={{
        // @ts-ignore
        'data-testid': 'checkbox',
      }}
    />,
    {
      onSubmit,
      initialValues: {
        checked: false,
      },
    }
  );

  const input = getByTestId('checkbox');
  const submit = getByTestId('submit');

  // when
  fireEvent.change(input, { target: { value: 'checked' } });
  fireEvent.click(submit);

  await findByText('submitted');

  // then
  expect(onSubmit).toBeCalledWith(
    {
      checked: false,
    },
    expect.anything()
  );
});
