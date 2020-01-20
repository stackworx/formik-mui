---
id: material-ui
title: Material-UI
---

The following props are always excluded: `name, onChange, onBlur, value, error`, and additional ones where it makes sense

# Checkbox

## Example

```jsx
import { Checkbox } from 'formik-material-ui';

<Checkbox name="checked" />;
```

## [Material-UI Documentation](https://material-ui.com/api/checkbox/)

# CheckboxWithLabel

Convenience Wrapper that adds label to Checkbox, Supports all the same properties as Checkbox and accepts an Additional `Label` prop

## Example

```jsx
import { CheckboxWithLabel } from 'formik-material-ui';

<CheckboxWithLabel name="checked" label="Checkbox" />;
```

# InputBase

## Example

```jsx
import { InputBase } from 'formik-material-ui';

<InputBase name="inputBase" />;
```

## [Material-UI Documentation](https://material-ui.com/api/input-base/)

# RadioGroup

## Example

```jsx
import { FormControlLabel, Radio, LinearProgress } from '@material-ui/core';
import { Formik } from 'formik';
import { RadioGroup } from 'formik-material-ui';

<Formik {...otherProps}>
  {({ isSubmitting }) => (
    <RadioGroup name="activity">
      <FormControlLabel
        value="painting"
        control={<Radio disabled={isSubmitting} />}
        label="Painting"
        disabled={isSubmitting}
      />
      <FormControlLabel
        value="drawing"
        control={<Radio disabled={isSubmitting} />}
        label="Drawing"
        disabled={isSubmitting}
      />
      <FormControlLabel
        value="none"
        control={<Radio disabled={isSubmitting} />}
        label="None"
        disabled
      />
    </RadioGroup>
  )}
</Formik>;
```

## [Material-UI Documentation](https://material-ui.com/api/radio-group/#radiogroup-api)

# Select

## Example

```jsx
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { Select } from 'formik-material-ui';

<FormControl>
  <InputLabel htmlFor="age-simple">Age</InputLabel>
  <Select
    name="age"
    inputProps={{
      id: 'age-simple',
    }}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>;
```

## [Material-UI Documentation](https://material-ui.com/api/select/)

# SimpleFileUpload

## Example

```jsx
import { SimpleFileUpload } from 'formik-material-ui';

<SimpleFileUpload name="file" label="Simple File Upload" />;
```

## API

```jsx
interface SimpleFileUploadProps {
  name: string; // Field Name
  label: string; // Field Label
  disabled?: boolean;
  // Customize the Input Component
  InputProps?: Omit<InputProps, 'name' | 'type' | 'onChange'>;
  // Customize the Input Label Component
  InputLabelProps?: InputLabelProps;
}
```

# Switch

```jsx
import { Switch } from 'formik-material-ui';

<Switch name="switch" />;
```

## [Material-UI Documentation](https://material-ui.com/api/select/)

# TextField

## Example

```jsx
import { TextField } from 'formik-material-ui';

<TextField
  label="Outlined"
  name="outlined"
  variant="outlined"
  InputProps={{ notched: true }}
/>;
```

## [Material-UI Documentation](https://material-ui.com/api/text-field/#textfield-api)
