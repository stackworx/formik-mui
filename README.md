[![Build Status](https://travis-ci.org/stackworx/formik-material-ui.svg?branch=master)](https://travis-ci.org/stackworx/formik-material-ui)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)
[![Coverage Status](https://coveralls.io/repos/github/stackworx/formik-material-ui/badge.svg?branch=master)](https://coveralls.io/github/stackworx/formik-material-ui?branch=master)

# Formik Material-UI

Bindings for using [Formik](https://github.com/jaredpalmer/formik) with [Material-UI](https://material-ui.com/).

- [Code Sandbox](https://codesandbox.io/s/915qlr56rp)
- [Demo](https://stackworx.github.io/formik-material-ui)

## Getting Started

Install the package as a dependency to your project (`yarn` or `npm`).

    yarn add formik-material-ui

Then, import the components you need to use with Formik in the file you have your form component set up. The components avaliable are:

- Checkbox & CheckboxWithLabel
- RadioGroup
- Select
- SimpleFileUpload
- Switch
- TextField

In this case we will use `<TextField />`.

```diff
import { Formik, Field, Form } from 'formik';
+ import { TextField } from 'formik-material-ui';
```

Next, in your Formik form component, pass this `<TextField />` component as the `component` prop of the Formik `<Field />` component:

```diff
<Field
  name="email"
  label="Email"
  type="email"
+ component={TextField}
/>
```

Now you can add any of the Material UI props to the `<Field />` component and `<TextField />` will be able to accept them.

```diff
<Field
  name="email"
  label="Email"
  type="email"
  component={TextField}
+ margin="normal"
+ fullWidth
/>
```

## Goals

- Convenience: This project containis mostly the tedious wrapper code needed to convert the formik field props
  to Material UI shapes. Which is why certain assumptions are made (See below). The mapping functions are exported so you can build on top of them for more specialized behavior

### Form Behaviour Assumptions

- Errors are only displayed on touched/dirty fields
- Fields are disabled during submission
- All form state is managed to Formik, so props such as `name`, `onChange` and `value` are excluded from the typescript types. Note: if you are using js this does not prevent you from providing these props but here be dragons.

## Non Goals

- Negate the need to import Material UI directly or create custom components

## FAQ

### Custom `onChange`

```
import MuiTextField from '@material-ui/core/TextField';
import {fieldToTextField, TextField, TextFieldProps} from 'formik-material-ui';
...
const UppercasingTextField = (props: TextFieldProps) => (
  <MuiTextField
    {...fieldToTextField(props)}
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

### Composing mappers

```
import {fieldToTextField} from 'formik-material-ui';

<Field name="name" render={(props) => (
  <div>
    <Comp1 {...fieldToTextField(props)} />
    <Comp2 {...fieldToTextField(props)} />
    ...
  </div>
)} />
```

## Development

    yarn install
    yarn storybook

### Running tests

    yarn prepublishOnly
