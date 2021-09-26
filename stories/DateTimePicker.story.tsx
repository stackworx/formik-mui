import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import { action } from '@storybook/addon-actions';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';
import { DateTimePicker } from '../packages/formik-material-ui-pickers/src/DateTimePicker';
import { DesktopDateTimePicker } from '../packages/formik-material-ui-pickers/src/DesktopDateTimePicker';
import { MobileDateTimePicker } from '../packages/formik-material-ui-pickers/src/MobileDateTimePicker';
import FormValues from './FormValues';
import Wrapper from './Wrapper';

interface Values {
  date: Date | null;
}

const schema = yup.object().shape({
  date: yup.date().required(),
});

const DateTimePickerStory = () => (
  <Wrapper title="Date &amp; Time Picker">
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
            component={DateTimePicker}
            label="Date &amp; time"
            name="date"
            textField={{ helperText: 'Helper text' }}
          />
          <br />
          <br />
          <Field
            component={DateTimePicker}
            label="Date &amp; time standard"
            name="dateStandard"
            textField={{ variant: 'standard' }}
          />
          <br />
          <br />
          <Field
            component={DesktopDateTimePicker}
            label="Desktop date &amp; time picker"
            name="desktopDate"
            inputFormat="yyyy/MM/dd HH:mm"
          />
          <br />
          <br />
          <Field
            component={MobileDateTimePicker}
            label="Mobile date &amp; time picker"
            name="mobileDate"
            inputFormat="yyyy/MM/dd HH:mm"
          />
          {/* TODO: This static date-time picker is not contained within its section like the other pickers.
              The "edit" pen icon appears at the very top right of the wrapper.
              The `StaticDatePicker` and `StaticTimePicker` both do not have this issue.
          <br />
          <br />
          <Field
            component={StaticDateTimePicker}
            label="Static date &amp; time picker"
            name="date"
            inputFormat="yyyy/MM/dd HH:mm"
          /> */}
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

export default DateTimePickerStory;
