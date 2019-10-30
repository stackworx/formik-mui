import React from 'react';
import { Field } from 'formik';

import { render, fireEvent } from './utils';

import { Checkbox } from '../Checkbox';

test('renders', async () => {
  const onSubmit = jest.fn();
  const { asFragment } = render(
    <Field name="checked" label="Checkbox" component={Checkbox} />,
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
      name="checked"
      label="Checkbox"
      inputProps={{
        'data-testid': 'checkbox',
      }}
      component={Checkbox}
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
