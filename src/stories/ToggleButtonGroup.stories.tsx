import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import { StoryFn, Meta } from '@storybook/react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import Typography from '@mui/material/Typography';
import { action } from '@storybook/addon-actions';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { ToggleButtonGroup } from '../../packages/formik-mui/src/ToggleButtonGroup';
import FormValues from './FormValues';
import Wrapper from './Wrapper';

export default {
  title: 'Core/ToggleButtonGroup',
  component: ToggleButtonGroup,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: { onSubmit: { action: 'submit' } },
} as Meta<typeof ToggleButtonGroup>;

const Template: StoryFn<typeof ToggleButtonGroup> = () => (
  <Wrapper>
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

export const Default = {
  render: Template,
};
