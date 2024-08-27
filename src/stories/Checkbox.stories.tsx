import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Formik, Form, Field } from 'formik';
import { action } from '@storybook/addon-actions';

import Wrapper from './Wrapper';
import FormValues from './FormValues';

import { Checkbox } from '../../packages/formik-mui/src/Checkbox';
import { CheckboxWithLabel } from '../../packages/formik-mui/src/CheckboxWithLabel';
import Typography from '@mui/material/Typography';

export default {
  title: 'Core/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: { onSubmit: { action: 'submit' } },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof CheckboxWithLabel> = () => (
  <Wrapper>
    <Formik
      initialValues={{
        on: true,
        off: false,
        null: null,
        multiple: [],
        withLabel: false,
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          action('submit')(values);
        }, 2000);
      }}
    >
      {({ submitForm, values }) => (
        <Form>
          <Typography>
            On
            <Field component={Checkbox} name="on" type="checkbox" />
            Off
            <Field component={Checkbox} name="off" type="checkbox" />
            Null
            <Field component={Checkbox} name="null" type="checkbox" />
          </Typography>
          <Box>
            <Field
              component={CheckboxWithLabel}
              Label={{ label: 'Checkbox With Label' }}
              name="withLabel"
              type="checkbox"
            />
          </Box>
          <Box>
            <Field
              component={CheckboxWithLabel}
              Label={{ label: 'Designer?' }}
              name="multiple"
              value="designer"
              type="checkbox"
            />
            <Field
              component={CheckboxWithLabel}
              Label={{ label: 'Developer?' }}
              name="multiple"
              value="developer"
              type="checkbox"
            />
            <Field
              component={CheckboxWithLabel}
              Label={{ label: 'Product Manager?' }}
              name="multiple"
              value="product"
              type="checkbox"
            />
          </Box>
          <Button variant="contained" color="primary" onClick={submitForm}>
            Submit
          </Button>
          <br />
          <FormValues values={values} />
        </Form>
      )}
    </Formik>
  </Wrapper>
);

export const Default = {
  render: Template,
};
