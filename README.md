[![Build Status](https://travis-ci.org/stackworx/formik-material-ui.svg?branch=master)](https://travis-ci.org/stackworx/formik-material-ui)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)
[![Coverage Status](https://coveralls.io/repos/github/stackworx/formik-material-ui/badge.svg?branch=master)](https://coveralls.io/github/stackworx/formik-material-ui?branch=master)

# Formik Material Ui

Bindings for using [Formik](https://github.com/jaredpalmer/formik) with [Material UI](https://material-ui.com/).

- [Code Sandbox](https://codesandbox.io/s/m56kj105n8)
- [Demo](https://stackworx.github.io/formik-material-ui)

## Getting Started

    yarn add formik-material-ui

## Goals

- Convenience: This project containis mostly the tedious wrapper code needed to convert the formik field props
  to Material UI shapes. Which is why certain assumptions are made (See below). The mapping functions are exported so you can build on top of them for more specialized behavior

### Form Behaviour Assumptions

- Errors are only displayed on touched/dirty fields
- Fields are disabled during submission

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

<Field name="name" render={(props) => (<div>
  <Comp1 {...fieldToText(props)}>
  <Comp2 {...fieldToText(props)}>
  ...
</div>)} />
```

## Development

    yarn install
    yarn storybook

### Running tests

    yarn prepublishOnly
