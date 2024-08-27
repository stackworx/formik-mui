import Button from '@mui/material/Button';
import { StoryFn, Meta } from '@storybook/react';
import MenuItem from '@mui/material/MenuItem';
import { SxProps } from '@mui/system';
import { action } from '@storybook/addon-actions';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { Select } from '../../packages/formik-mui/src/Select';
import FormValues from './FormValues';
import Wrapper from './Wrapper';

interface Values {
  age: string;
  pets: string[];
}

const sxFormControl: SxProps = {
  m: 1,
  minWidth: 140,
};

export default {
  title: 'Core/Select',
  component: Select,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: { onSubmit: { action: 'submit' } },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = () => (
  <Wrapper>
    <Formik<Values>
      initialValues={{ age: '', pets: [] }}
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
            component={Select}
            formControl={{ sx: sxFormControl }}
            id="age"
            name="age"
            labelId="age-simple"
            label="Age"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Field>
          <br />
          <Field
            component={Select}
            formControl={{ sx: sxFormControl }}
            formHelperText={{ children: 'How old are you?' }}
            id="age"
            name="age"
            labelId="age-simple"
            label="Age helper"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Field>
          <br />
          <Field
            component={Select}
            formControl={{ sx: sxFormControl }}
            formHelperText={{ children: 'How old are you?' }}
            id="age-validator"
            name="age-validator"
            labelId="age-validator"
            label="Age validator"
            validate={(age: number) =>
              !age
                ? 'Please enter your age'
                : age < 21
                  ? 'You must be 21 or older'
                  : undefined
            }
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Field>
          <br />
          <Field
            component={Select}
            formControl={{ sx: sxFormControl }}
            id="age"
            name="age"
            labelId="age-simple-empty"
            label="Age (Empty)"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Field>
          <br />
          <Field
            component={Select}
            formControl={{ sx: sxFormControl, variant: 'standard' }}
            inputLabel={{
              shrink: true,
              variant: 'standard',
              htmlFor: 'age-native',
            }}
            id="age"
            name="age"
            native
            labelId="age-native"
            label="Native Age"
            inputProps={{
              name: 'age',
              id: 'age-native',
            }}
          >
            <option value="">None</option>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Field>
          <br />
          <Field
            component={Select}
            formControl={{ sx: sxFormControl }}
            id="pets"
            name="pets"
            multiple
            labelId="pets"
            label="Pets"
          >
            <MenuItem value="dogs">Dogs</MenuItem>
            <MenuItem value="cats">Cats</MenuItem>
            <MenuItem value="rats">Rats</MenuItem>
            <MenuItem value="snakes">Snakes</MenuItem>
          </Field>
          <br />

          <Field
            component={Select}
            formControl={{ sx: sxFormControl }}
            inputLabel={{ shrink: true }}
            id="pets"
            name="pets"
            native
            multiple
            labelId="native-pets"
            label="Native Pets"
            inputProps={{
              id: 'native-pets',
            }}
          >
            <option value="dogs">Dogs</option>
            <option value="cats">Cats</option>
            <option value="rats">Rats</option>
            <option value="snakes">Snakes</option>
          </Field>
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
