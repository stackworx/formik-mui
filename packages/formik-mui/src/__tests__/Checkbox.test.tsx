import React from 'react';
import '@testing-library/jest-dom/vitest';
import { test, expect, vi } from 'vitest';
import { Field } from 'formik';

import { render, fireEvent } from './utils';
import { Checkbox } from '../Checkbox';

test('renders', async () => {
  const onSubmit = vi.fn();
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
  const onSubmit = vi.fn();
  const { getByTestId, findByText } = render(
    <Field
      component={Checkbox}
      name="checked"
      label="Checkbox"
      type="checkbox"
      inputProps={{
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
