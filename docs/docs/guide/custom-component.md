---
id: custom-component
title: Creating Custom Components
---

# Notes

Wrappers have a corresponding function export (`fieldToTextField`, `fieldToCheckbox` etc.) that encapsulates the logic used to map Formik props into the MUI shapes.

# Examples

## Upper Casing Field

A simple test input that always uppercases the input:

```jsx
import TextField from '@mui/material/TextField';
import { fieldToTextField, TextFieldProps } from 'formik-mui';

function UpperCasingTextField(props: TextFieldProps) {
  const {
    form: { setFieldValue },
    field: { name },
  } = props;
  const onChange = React.useCallback(
    (event) => {
      const { value } = event.target;
      setFieldValue(name, value ? value.toUpperCase() : '');
    },
    [setFieldValue, name]
  );
  return <TextField {...fieldToTextField(props)} onChange={onChange} />;
}
```
