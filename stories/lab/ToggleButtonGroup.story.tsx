import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Formik, Form, Field } from 'formik';
import { action } from '@storybook/addon-actions';
import ToggleButton from '@mui/material/ToggleButton';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

import Wrapper from '../Wrapper';
import FormValues from '../FormValues';

import { ToggleButtonGroup } from '../../packages/formik-material-ui-lab/src/main';
import Typography from '@mui/material/Typography';

export default () => (
  <Wrapper title="Toggle Button Group">
    <Formik
      initialValues={{
        multiple: [],
        exclusive: '',
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
          <Typography>Multiple</Typography>
          <Box margin={1}>
            <Field
              component={ToggleButtonGroup}
              name="multiple"
              type="checkbox"
            >
              <ToggleButton value="left" aria-label="left aligned">
                <FormatAlignLeftIcon />
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered">
                <FormatAlignCenterIcon />
              </ToggleButton>
              <ToggleButton value="right" aria-label="right aligned">
                <FormatAlignRightIcon />
              </ToggleButton>
              <ToggleButton value="justify" aria-label="justified" disabled>
                <FormatAlignJustifyIcon />
              </ToggleButton>
            </Field>
          </Box>
          <Typography>Exclusive</Typography>
          <Box margin={1}>
            <Field
              component={ToggleButtonGroup}
              name="exclusive"
              exclusive={true}
              type="checkbox"
            >
              <ToggleButton value="left" aria-label="left aligned">
                <FormatAlignLeftIcon />
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered">
                <FormatAlignCenterIcon />
              </ToggleButton>
              <ToggleButton value="right" aria-label="right aligned">
                <FormatAlignRightIcon />
              </ToggleButton>
              <ToggleButton value="justify" aria-label="justified" disabled>
                <FormatAlignJustifyIcon />
              </ToggleButton>
            </Field>
          </Box>
          <Box margin={1}>
            <Button variant="contained" color="primary" onClick={submitForm}>
              Submit
            </Button>
          </Box>
          <FormValues values={values} />
        </Form>
      )}
    </Formik>
  </Wrapper>
);
