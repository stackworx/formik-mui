import React from 'react';
import { test, expect } from '@jest/globals';
import { Field } from 'formik';

import { render } from './utils';

import { Autocomplete } from '../Autocomplete';

const options = [
  { value: 'blues', label: 'Blues' },
  { value: 'rock', label: 'Rock' },
  { value: 'jazz', label: 'Jazz' },
  { value: 'orchestra', label: 'Orchestra' },
];

test('renders', async () => {
  const onSubmit = jest.fn();
  const { asFragment } = render(
    <Field
      component={Autocomplete}
      id="autocomplete"
      name="autocomplete"
      options={options}
      getOptionLabel={(option: { value: string; label: string }) =>
        option.label
      }
      slotProps={{
        textField: {
          label: 'Single',
          variant: 'outlined',
        },
      }}
    />,
    {
      initialValues: {
        autocomplete: null,
      },
      onSubmit,
    }
  );

  expect(asFragment()).toMatchSnapshot();
});
