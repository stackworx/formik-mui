import Button from '@mui/material/Button';
import { action } from '@storybook/addon-actions';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { SimpleFileUpload } from '../packages/formik-material-ui/src/main';
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
      (value) => value == null || value.size < MAX_FILE_SIZE
    ),
});

interface Values {
  file: '' | File;
}

const SimpleFileUploadStory = () => (
  <Wrapper title="File Upload">
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

export default SimpleFileUploadStory;
