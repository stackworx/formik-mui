import React from 'react';
import { test, expect, vi } from 'vitest';
import { Field } from 'formik';

import { render } from './utils';

import { ToggleButtonGroup } from '../ToggleButtonGroup';

test('renders', async () => {
  const onSubmit = vi.fn();
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
