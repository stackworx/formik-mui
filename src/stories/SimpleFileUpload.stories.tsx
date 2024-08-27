import Button from '@mui/material/Button';
import { StoryFn, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { SimpleFileUpload } from '../../packages/formik-mui/src/SimpleFileUpload';
import FormValues from './FormValues';
import Wrapper from './Wrapper';

// 10 Megs
const MAX_FILE_SIZE = 10485760;

const schema = Yup.object().shape({
  file: Yup.mixed()
    .required('Required')
    .test(
      'file',
      'File must be less than 10MB',
      (value: File) => value == null || value.size < MAX_FILE_SIZE
    ),
});

interface Values {
  file: '' | File;
}

export default {
  title: 'Core/SimpleFileUpload',
  component: SimpleFileUpload,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: { onSubmit: { action: 'submit' } },
} as Meta<typeof SimpleFileUpload>;

const Template: StoryFn<typeof SimpleFileUpload> = () => (
  <Wrapper>
    <Formik<Values>
      validationSchema={schema}
      initialValues={{ file: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          action('submit')(values);
        }, 2000);
      }}
    >
      {({ submitForm, values }) => (
        <Form>
          <Field
            component={SimpleFileUpload}
            name="file"
            label="Simple File Upload"
          />
          <br />
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
