---
id: migrating
title: Migrating
---

## Migrating from formik-material-ui 1.0.0

### Changes

- All fieldToX have been renamed to useFieldX which are hooks
- Field wrapper no longer needed (useField is used internally)

### Before

```jsx {1}
- import { Field } from 'formik';

<Field name="email" type="email" label="Email" component={TextField} />;
```

- Remove the Field import
- Replace field with component
- Delete component prop

### After

```jsx
<TextField name="email" type="email" label="Email" />
```

## Migrating Custom Components

### Before

```jsx
import MuiTextField from '@material-ui/core/TextField';
import {
  fieldToTextField,
  TextField,
  TextFieldProps,
} from 'formik-material-ui';

const UppercasingTextField = (props: TextFieldProps) => (
  <MuiTextField
    {...fieldToTextField(props)}
    onChange={event => {
      const { value } = event.target;
      props.form.setFieldValue(
        props.field.name,
        value ? value.toUpperCase() : ''
      );
    }}
  />
);
```

- Rename fieldToTextField to useFieldToTextField
- Add `import {useField} from 'formik'` is you need access to field helpers
- Add `import {useForm} from 'formik'` is you need access to form helpers

### After

```jsx
import MuiTextField from '@material-ui/core/TextField';
import {useFieldToTextField, TextField, TextFieldProps} from 'formik-material-ui';

const UppercasingTextField = (props: TextFieldProps) => {
  const fieldProps = useFieldToTextField(props);
  const [,,helpers] = useField(props.name);
  return (<MuiTextField
    {...fieldProps}
    onChange={event => {
      const {value} = event.target;
      helpers.setValue(value ? value.toUpperCase() : '')
    }}
  />
);
```
