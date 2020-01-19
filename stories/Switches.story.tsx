import * as React from 'react';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Formik, Form } from 'formik';
import { action } from '@storybook/addon-actions';

import Wrapper from './Wrapper';
import FormValues from './FormValues';

import { Switch, Checkbox } from '../packages/formik-material-ui/src/main';

interface Values {
  switch: {
    on: boolean;
    off: boolean;
  };
  checkbox: boolean;
  checkboxWithLabel: boolean;
  custom: boolean;
}

export default () => (
  <Wrapper title="Switches">
    <Formik<Values>
      initialValues={{
        switch: {
          on: true,
          off: false,
        },
        checkbox: false,
        checkboxWithLabel: false,
        custom: true,
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          action('submit')(values);
        }, 2000);
      }}
      render={({ submitForm, values }) => (
        <Form >
          <Switch name="switch.on" />
          <br />
          <Switch name="switch.off" />
          <br />
          <FormControlLabel
            label="Switch With Label"
            control={<Switch name="switchWithLabel" />}
          />
          <br />
          <Checkbox name="checkbox" />
          <br />
          <FormControlLabel
            label="Checkbox With Label"
            control={<Checkbox name="checkboxWithLabel" />}
          />
          <br />
          <Button variant="contained" color="primary" onClick={submitForm}>
            Submit
          </Button>
          <br />
          <FormValues values={values} />
        </Form>
      )}
    />
  </Wrapper>
);
