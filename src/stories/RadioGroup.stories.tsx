import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Button from '@mui/material/Button';
import { Formik, Form, Field } from 'formik';
import Wrapper from './Wrapper';
import { action } from '@storybook/addon-actions';

import { RadioGroup } from '../../packages/formik-mui/src/RadioGroup';
import LinearProgress from '@mui/material/LinearProgress';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormValues from './FormValues';

interface Values {
  activity: string;
}

export default {
  title: 'Core/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: { onSubmit: { action: 'submit' } },
} as Meta<typeof RadioGroup>;

const Template: StoryFn<typeof RadioGroup> = () => (
  <Wrapper>
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

export const Default = {
  render: Template,
};
