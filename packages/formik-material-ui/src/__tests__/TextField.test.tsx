import * as React from 'react';
import { test, expect } from '@jest/globals';
import { Formik, Form, Field } from 'formik';
import renderer from 'react-test-renderer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import { TextField } from '../TextField';

test('TextField Renders Correctly', () => {
  const component = renderer.create(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <Field component={TextField} name="test" label="Text" />
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Outlined TextField', () => {
  const component = renderer.create(
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

  expect(component.toJSON()).toMatchSnapshot();
});

test('Override TextField Theme Variant', () => {
  const theme = createMuiTheme({
    props: {
      MuiTextField: {
        variant: 'outlined',
      },
    },
  });

  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <Field component={TextField} name="test" label="Text" />
        </Form>
      </Formik>
    </ThemeProvider>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
