import Button from '@mui/material/Button';
import { StoryFn, Meta } from '@storybook/react';
import LinearProgress from '@mui/material/LinearProgress';
import { action } from '@storybook/addon-actions';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';
import { DesktopTimePicker } from '../../packages/formik-mui-x-date-pickers/src/DesktopTimePicker';
import { MobileTimePicker } from '../../packages/formik-mui-x-date-pickers/src/MobileTimePicker';
import { StaticTimePicker } from '../../packages/formik-mui-x-date-pickers/src/StaticTimePicker';
import { TimePicker } from '../../packages/formik-mui-x-date-pickers/src/TimePicker';
import FormValues from './FormValues';
import Wrapper from './Wrapper';

interface Values {
  time: Date | null;
}

const schema = yup.object().shape({
  time: yup.date().required(),
});

export default {
  title: 'X-Mui/TimePicker',
  component: TimePicker,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: { onSubmit: { action: 'submit' } },
} as Meta<typeof TimePicker>;

const Template: StoryFn<typeof TimePicker> = () => (
  <Wrapper>
    <Formik<Values>
      initialValues={{
        time: new Date(),
      }}
      validationSchema={schema}
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
            component={TimePicker}
            label="Time"
            name="time"
            textField={{ helperText: 'Helper text' }}
          />
          <br />
          <br />
          <Field
            component={DesktopTimePicker}
            label="Desktop time picker"
            name="desktopTime"
            mask="__:__ _M"
          />
          <br />
          <br />
          <Field
            component={MobileTimePicker}
            label="Mobile time picker"
            name="mobileTime"
          />
          <br />
          <br />
          <Field
            component={StaticTimePicker}
            label="Static time picker"
            name="staticTime"
          />
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

export const Default = {
  render: Template,
};
