import * as React from 'react';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Formik, Form } from 'formik';
import { action } from '@storybook/addon-actions';

import Wrapper from './Wrapper';
import FormValues from './FormValues';

import {
  Switch,
  Checkbox,
  CheckboxWithLabel,
} from '../packages/formik-material-ui/src/main';

interface Values {
  switch: {
    on: boolean;
    off: boolean;
  };
  checkbox: {
    on: boolean;
    off: boolean;
    null: null;
  };
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
        checkbox: {
          on: true,
          off: false,
          null: null,
        },
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
        <Form>
          <Switch name="switch.on" />
          <br />
          <Switch name="switch.off" />
          <br />
          <FormControlLabel
            label="Switch With Label"
            control={<Switch name="switchWithLabel" />}
          />
          <br />
          <Checkbox name="checkbox.on" />
          <Checkbox name="checkbox.off" />
          <Checkbox name="checkbox.null" />
          <br />
          <CheckboxWithLabel
            Label={{ label: 'Checkbox With Label' }}
            name="checkboxWithLabel"
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
