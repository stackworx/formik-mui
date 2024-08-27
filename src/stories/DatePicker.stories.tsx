import Button from '@mui/material/Button';
import { StoryFn, Meta } from '@storybook/react';
import LinearProgress from '@mui/material/LinearProgress';
import { action } from '@storybook/addon-actions';
import { subDays } from 'date-fns';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';
import { DatePicker } from '../../packages/formik-mui-x-date-pickers/src/DatePicker';
import { DesktopDatePicker } from '../../packages/formik-mui-x-date-pickers/src/DesktopDatePicker';
import { MobileDatePicker } from '../../packages/formik-mui-x-date-pickers/src/MobileDatePicker';
import { StaticDatePicker } from '../../packages/formik-mui-x-date-pickers/src/StaticDatePicker';
import FormValues from './FormValues';
import Wrapper from './Wrapper';

interface Values {
  date: Date | null;
}

const schema = yup.object().shape({
  date: yup.date().required(),
  futureDate: yup.date().required().min(subDays(new Date(), 1)),
});

export default {
  title: 'X-Mui/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: { onSubmit: { action: 'submit' } },
} as Meta<typeof DatePicker>;

const Template: StoryFn<typeof DatePicker> = () => (
  <Wrapper>
    <Formik<Values>
      initialValues={{
        date: new Date(),
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
            component={DatePicker}
            label="Date"
            name="date"
            textField={{ helperText: 'Helper text' }}
          />
          <br />
          <br />
          <Field
            component={DatePicker}
            label="Date filled"
            name="dateFilled"
            textField={{ variant: 'filled' }}
          />
          <br />
          <br />
          <Field
            component={DesktopDatePicker}
            label="Desktop date picker"
            name="desktopDate"
            format="MM/dd/yyyy"
          />
          <br />
          <br />
          <Field
            component={DesktopDatePicker}
            label="Future Desktop date picker"
            name="futureDate"
            format="MM/dd/yyyy"
          />
          <br />
          <br />
          <Field
            component={MobileDatePicker}
            label="Mobile date picker"
            name="mobileDate"
            format="MM/dd/yyyy"
          />
          <br />
          <br />
          <Field
            component={StaticDatePicker}
            label="Static date picker"
            name="staticDate"
            format="MM/dd/yyyy"
          />
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

export const Default = {
  render: Template,
};
