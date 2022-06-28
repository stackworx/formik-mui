import React from 'react';
import Button from '@mui/material/Button';
import { Formik, Form, Field } from 'formik';
import LinearProgress from '@mui/material/LinearProgress';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { action } from '@storybook/addon-actions';
import MenuItem from '@mui/material/MenuItem';
import { SxProps } from '@mui/system';

import Wrapper from './Wrapper';
import FormValues from './FormValues';
import {
  CheckboxWithLabel,
  TextField,
  Select,
  RadioGroup,
} from '../packages/formik-mui/src/main';

interface Values {
  email: string;
  password: string;
  dateTime: string;
  date: string;
  rememberMe: boolean;
  age: string;
}

const initialValues: Values = {
  email: '',
  password: '',
  dateTime: '',
  date: '',
  rememberMe: false,
  age: '',
};

const sxFormControl: SxProps = {
  minWidth: 140,
};

export default () => (
  <Wrapper title="Kitchen Sink">
    <Formik<Values>
      initialValues={initialValues}
      validate={(values) => {
        const errors: Partial<Values> = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          action('submit')(values);
        }, 2000);
      }}
    >
      {({ submitForm, isSubmitting, values }) => (
        <Form>
          <Field
            component={TextField}
            type="email"
            label="Email"
            name="email"
          />
          <br />
          <Field
            component={TextField}
            type="password"
            label="Password"
            name="password"
          />
          <br />
          <Field
            component={CheckboxWithLabel}
            Label={{ label: 'Remember me' }}
            name="rememberMe"
            type="checkbox"
          />
          <br />
          <Field
            component={Select}
            formControl={{ sx: sxFormControl, margin: 'normal' }}
            id="age"
            name="age"
            labelId="age-simple"
            label="Age"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Field>
          <br />
          <Field
            component={TextField}
            InputLabelProps={{ shrink: true }}
            type="datetime-local"
            label="Date Time"
            name="dateTime"
          />
          <br />
          <Field
            component={TextField}
            InputLabelProps={{ shrink: true }}
            type="date"
            label="Date"
            name="date"
          />
          <br />
          <Field component={RadioGroup} name="activity">
            <FormControlLabel
              value="painting"
              control={<Radio disabled={isSubmitting} />}
              label="Painting"
              disabled={isSubmitting}
            />
            <FormControlLabel
              value="drawing"
              control={<Radio disabled={isSubmitting} />}
              label="Drawing"
              disabled={isSubmitting}
            />
          </Field>
          <br />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
          <br />
          <FormValues values={values} />
        </Form>
      )}
    </Formik>
  </Wrapper>
);
