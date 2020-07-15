import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import { action } from '@storybook/addon-actions';
import { withStyles, Theme } from '@material-ui/core';
import * as Yup from 'yup';

import Wrapper from './Wrapper';
import FormValues from './FormValues';
import { SimpleFileUpload } from '../packages/formik-material-ui/src/main';

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

const styles = (theme: Theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
});

interface Values {
  file: '' | File;
}

export default withStyles(styles)(() => (
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
));
