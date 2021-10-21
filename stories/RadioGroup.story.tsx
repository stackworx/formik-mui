import React from 'react';
import Button from '@mui/material/Button';
import { Formik, Form, Field } from 'formik';
import Wrapper from './Wrapper';
import { action } from '@storybook/addon-actions';

import { RadioGroup } from '../packages/formik-material-ui/src/RadioGroup';
import LinearProgress from '@mui/material/LinearProgress';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormValues from './FormValues';

interface Values {
  activity: string;
}

export default () => (
  <Wrapper title="Radio Group">
    <Formik<Values>
      initialValues={{
        activity: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          action('submit')(values);
        }, 2000);
      }}
    >
      {({ submitForm, values, isSubmitting, isValid }) => {
        return (
          <Form>
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
              <FormControlLabel
                value="none"
                control={<Radio disabled={isSubmitting} />}
                label="None"
                disabled
              />
            </Field>
            <br />
            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              disabled={!isValid}
              variant="contained"
              color="primary"
              onClick={submitForm}
            >
              Submit
            </Button>
            <FormValues values={values} />
          </Form>
        );
      }}
    </Formik>
  </Wrapper>
);
