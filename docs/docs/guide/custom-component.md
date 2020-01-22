---
id: custom-component
title: Creating Custom Components
---

## Notes

All of the exported hooks (E.g. `useFieldToTextField`) has an optional second parameter called `customize`

```jsx
import {
  FieldInputProps,
  FieldMetaProps,
  FieldHelperProps,
} from 'formik';


customize?: (
    props: [FieldInputProps<Val>, FieldMetaProps<Val>, FieldHelperProps<Val>]
  ) => Partial<Omit<TextFieldProps, 'name'>>
```

This will allow you to override any of the properties normally passed in by `formik-material-ui` or `formik-material-ui-pickers`.

# Examples

## Upper Casing Field

A simple test input that always uppercases the input

```jsx
import MuiTextField from '@material-ui/core/TextField';
import {
  useFieldToTextField,
  TextField,
  TextFieldProps,
} from 'formik-material-ui';

const UpperCasingTextField = (props: TextFieldProps) => {
  const customize = React.useCallback(([, , helpers]) => {
    return {
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        helpers.setValue(value ? value.toUpperCase() : '');
      },
    };
  }, []);

  return <MuiTextField {...useFieldToTextField(props, customize)} />;
};
```
