import * as React from 'react';
import { test, expect } from 'vitest';
import { Formik, Form, Field } from 'formik';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { render } from '@testing-library/react';

import { TextField } from '../TextField';

test('TextField Renders Correctly', () => {
  const { asFragment } = render(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <Field component={TextField} name="test" label="Text" />
      </Form>
    </Formik>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('Outlined TextField', () => {
  const { asFragment } = render(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <Field
          component={TextField}
          name="test"
          label="Text"
          variant="outlined"
        />
      </Form>
    </Formik>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('Override TextField Theme Variant', () => {
  const theme = createTheme({});

  const { asFragment } = render(
    <ThemeProvider theme={theme}>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <Field component={TextField} name="test" label="Text" />
        </Form>
      </Formik>
    </ThemeProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
