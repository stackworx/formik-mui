[![Actions Status](https://github.com/stackworx/formik-material-ui/workflows/formik-material-ui/badge.svg)](https://github.com/stackworx/formik-material-ui/actions)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)
[![Coverage Status](https://coveralls.io/repos/github/stackworx/formik-material-ui/badge.svg?branch=master)](https://coveralls.io/github/stackworx/formik-material-ui?branch=master)

# Formik Material-UI

Bindings for using [Formik](https://github.com/jaredpalmer/formik) with [Material-UI](https://material-ui.com/).

- [Code Sandbox](https://codesandbox.io/s/915qlr56rp)
- [Demo](https://stackworx.github.io/formik-material-ui)

## Getting Started

Install the package as a dependency to your project (`yarn` or `npm`).

    yarn add formik-material-ui
    yarn add formik-material-ui-pickers

Then, import the components you need to use with Formik in the file you have your form component set up. The components avaliable are:

- Checkbox & CheckboxWithLabel
- RadioGroup
- Select
- SimpleFileUpload
- Switch
- TextField

Available with [@material-ui/pickers](https://github.com/mui-org/material-ui-pickers) peer dep

- DatePicker
- KeyboardDatePicker
- TimePicker
- KeyboardTimePicker
- DateTimePicker
- KeyboardDateTimePicker

In this case we will use `<TextField />`.

```diff
import { Formik, Form } from 'formik';
+ import { TextField } from 'formik-material-ui';
```

Next, in your Formik form component, render the `<TextField />` component:

```diff
<TextField
  name="email"
  label="Email"
  type="email"
/>
```

Now you can add any of the Material UI props to the `<TextField />` proprs that are managed by Formik are excluded. E.g. (`name, value, onChange` etc).

```diff
<TextField
  name="email"
  label="Email"
  type="email"
+ margin="normal"
+ fullWidth
/>
```

## Goals

- Convenience: This project contains mostly the tedious wrapper code needed to convert the formik field props
  to Material UI shapes. Which is why certain assumptions are made (See below). The mapping functions are exported so you can build on top of them for more specialized behavior

### Form Behavior Assumptions

- Errors are only displayed on touched/dirty fields
- Fields are disabled during submission
- All form state is managed to Formik, so props such as `name`, `onChange` and `value` are excluded from the typescript types. Note: if you are using js this does not prevent you from providing these props but here be dragons.

## Non Goals

- Negate the need to import Material UI directly or create custom components

## FAQ

### Custom `onChange`

```
import MuiTextField from '@material-ui/core/TextField';
import {useFieldToTextField, TextField, TextFieldProps} from 'formik-material-ui';
...
const UppercasingTextField = (props: TextFieldProps) => {
  const fieldProps = useFieldToTextField(props);
  return (<MuiTextField
    {...fieldProps}
    onChange={event => {
      const {value} = event.target;
      props.form.setFieldValue(
        props.field.name,
        value ? value.toUpperCase() : ''
      );
    }}
  />
);
...
```

## Development

    yarn install
    yarn storybook
