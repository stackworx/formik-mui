import React from 'react';
import { test, expect } from '@jest/globals';
import { Field } from 'formik';
import TextField from '@mui/material/TextField';

import { render } from './utils';

import { Autocomplete, AutocompleteRenderInputParams } from '../Autocomplete';

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
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField {...params} label="Single" variant="outlined" />
      )}
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
