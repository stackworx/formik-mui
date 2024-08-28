---
id: getting-started
title: Getting Started
---

## Installation

```
npm add formik formik-mui @mui/material @emotion/react @emotion/styled
```

### MUI X Date and Time Pickers (Optional)

```
npm add formik-mui-x-date-pickers @mui/x-date-pickers @mui/system
```

Note: You also need to install a date-library of your choice. Visit [MUI documentation](https://mui.com/x/react-date-pickers/getting-started/) for more information.

## Quick Start

```jsx {3,39,46}
import { Button, LinearProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
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
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from 'formik-mui';

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

## Quick Start (MUI X Date and Time Pickers)

See [MUI X Date and Time Pickers _Getting started_](https://mui.com/x/react-date-pickers/getting-started/) for more information.

```jsx {1-2,6-10,15,32,39,43}
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; // Depending on the library you picked
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import { Formik, Form, Field } from 'formik';
import {
  DatePicker,
  DateTimePicker,
  TimePicker,
} from 'formik-mui-x-date-pickers';
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
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from 'formik-mui';

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
