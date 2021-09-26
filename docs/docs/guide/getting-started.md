---
id: getting-started
title: Getting Started
---

## Installation

```
yarn add formik formik-material-ui @mui/material @emotion/react @emotion/styled
```

### Material-UI Lab (Optional)

```
yarn add @date-io/date-fns @mui/lab formik-material-ui-lab
```

## Quick Start

```jsx {4,39,46}
import { Button, LinearProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as React from 'react';

interface Values {
  email: string;
  password: string;
}

function App() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={(values) => {
        const errors: Partial<Values> = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            name="email"
            type="email"
            label="Email"
          />
          <br />
          <Field
            component={TextField}
            type="password"
            label="Password"
            name="password"
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
        </Form>
      )}
    </Formik>
  );
}
```

Note: that the `Field` wrapper is not used, for more details on why see the [FAQ](guide/faq.md).

## Configuring Components

Several properties are purposefully excluded, please see the [FAQ](guide/faq.md) for details.

```jsx
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { TextField } from 'formik-material-ui';

<TextField
  name="customized"
  label="Outlined"
  variant="outlined"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <AccountCircle />
      </InputAdornment>
    ),
  }}
/>;
```

## Quick Start (Lab)

See [Material-UI Lab Info](https://mui.com/components/about-the-lab/) for more information

```jsx {4,31,52}
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import ToggleButton from '@mui/material/ToggleButton;
import { Formik, Form, Field } from 'formik';
import { Autocomplete, ToggleButtonGroup } from 'formik-material-ui-lab';
import * as React from 'react';

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={{
          toggle: null,
          autocomplete: null,
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting, errors, touched }) => (
          <Form>
            <Box margin={1}>
              <Field
                component={ToggleButtonGroup}
                name="toggle"
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
              <Field
                name="autocomplete"
                component={Autocomplete}
                options={top100Films}
                getOptionLabel={(option: Movie) => option.title}
                style={{ width: 300 }}
                renderInput={(params: AutocompleteRenderInputParams) => (
                  <TextField
                    {...params}
                    error={touched['autocomplete'] && !!errors['autocomplete']}
                    helperText={
                      touched['autocomplete'] && errors['autocomplete']
                    }
                    label="Autocomplete"
                    variant="outlined"
                  />
                )}
              />
            </Box>
            <Box margin={1}>
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </MuiPickersUtilsProvider>
  );
}
```

## Quick Start (Picker)

See [Material-UI Pickers getting started](https://mui.com/components/pickers/) for more information

```jsx {4-8,9,12,16,32,34,36}
import AdapterDateFns from '@mui/lab/AdapterDateFns'; // Depending on the library you picked
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import { Formik, Form, Field } from 'formik';
import { DatePicker, DateTimePicker, TimePicker } from 'formik-material-ui-lab';
import * as React from 'react';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Formik
        initialValues={{
          date: new Date(),
          time: new Date(),
          dateTime: new Date(),
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Field
              component={DatePicker}
              name="date"
              label="Date"
              textField={{ helperText: 'Helper text', variant: 'filled' }}
            />
            <br />
            <Field
              component={DateTimePicker}
              name="dateTime"
              label="Date Time"
            />
            <Field component={TimePicker} name="time" label="Time" />
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
          </Form>
        )}
      </Formik>
    </LocalizationProvider>
  );
}
```

## Configuring Components

Several properties are purposefully excluded, please see the [FAQ](guide/faq.md) for details.

```jsx
import { TextField } from 'formik-material-ui';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';

<TextField
  name="customized"
  label="Outlined"
  variant="outlined"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <AccountCircle />
      </InputAdornment>
    ),
  }}
/>;
```
