import Button from '@mui/material/Button';
import { action } from '@storybook/addon-actions';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { FileUpload } from '../packages/formik-mui/src/main';
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
      {({ values }) => (
        <Form>
          <Field
            component={FileUpload}
            name="file"
            label="File Upload"
            margin="normal"
          />
          <br />
          <Button type="submit" variant="contained" color="primary">
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
