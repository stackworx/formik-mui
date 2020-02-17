---
id: custom-component
title: Creating Custom Components
---

# Notes

Add Wrappers have a corresponding function export (`fieldToTextField`, `fieldToCheckbox` etc.) that encapsulate the logic used to map formik props into the Material-UI shapes

# Examples

## Upper Casing Field

A simple test input that always uppercases the input

```jsx
import MuiTextField from '@material-ui/core/TextField';
import { fieldToTextField, TextFieldProps } from 'formik-material-ui';

function UpperCasingTextField(props: TextFieldProps) {
  const {
    form: { setFieldValue },
    field: { name },
  } = props;
  const onChange = React.useCallback(
    event => {
      const { value } = event.target;
      setFieldValue(name, value ? value.toUpperCase() : '');
    },
    [setFieldValue, name]
  );
  return <MuiTextField {...fieldToTextField(props)} onChange={onChange} />;
}
```
