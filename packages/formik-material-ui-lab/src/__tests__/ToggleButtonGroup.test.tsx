import React from 'react';
import { test, expect } from '@jest/globals';
import { Field } from 'formik';

import { render } from './utils';

import { ToggleButtonGroup } from '../ToggleButtonGroup';

test('renders', async () => {
  // @ts-ignore
  const onSubmit = jest.fn();
  const { asFragment } = render(
    <Field component={ToggleButtonGroup} name="toggle" type="checkbox" />,
    {
      initialValues: {
        toggle: [],
      },
      onSubmit,
    }
  );

  expect(asFragment()).toMatchSnapshot();
});
