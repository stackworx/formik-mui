---
id: material-ui
title: Material-UI
---

The following props are always excluded: `name, value, error`, and additional ones where it makes sense

## Autocomplete

#### Example

```jsx
import { Autocomplete } from 'formik-material-ui';

const options = [{ title: 'The Shawshank Redemption', year: 1994 }, ...]

<Field
  name="name"
  component={Autocomplete}
  options={options}
  getOptionLabel={(option: Movie) => option.title}
  style={{ width: 300 }}
  renderInput={(params: AutocompleteRenderInputParams) => (
    <TextField
      {...params}
      error={touched['name'] && !!errors['name']}
      helperText={errors['name']}
      label="Autocomplete"
      variant="outlined"
    />
  )}
/>;
```

_Note the manual inclusion of the error_

#### [Material-UI Autocomplete Documentation](https://mui.com/api/autocomplete/)

## Checkbox

#### Example

```jsx
import { Checkbox } from 'formik-material-ui';

<Field component={Checkbox} type="checkbox" name="checked" />;
```

#### [Material-UI Checkbox Documentation](https://mui.com/api/checkbox/)

## CheckboxWithLabel

A convenience wrapper that adds label to Checkbox using FormControlLabel. Supports all the same properties as Checkbox and accepts an additional `Label` prop, which are props applied to FormControlLabel.

#### Example

```jsx
import { CheckboxWithLabel } from 'formik-material-ui';

<Field
  component={CheckboxWithLabel}
  type="checkbox"
  name="checked"
  Label={{ label: 'Checkbox' }}
/>;
```

#### [Material-UI Documentation](https://mui.com/api/form-control-label/)

## InputBase

#### Example

```jsx
import { InputBase } from 'formik-material-ui';

<Field component={InputBase} name="inputBase" />;
```

#### [Material-UI InputBase Documentation](https://mui.com/api/input-base/)

## RadioGroup

#### Example

```jsx
import { FormControlLabel, Radio, LinearProgress } from '@mui/material/core';
import { Formik, Field } from 'formik';
import { RadioGroup } from 'formik-material-ui';

<Formik {...otherProps}>
  {({ isSubmitting }) => (
    <Field component={RadioGroup} name="activity">
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
    </Field>
  )}
</Formik>;
```

#### [Material-UI RadioGroup Documentation](https://mui.com/api/radio-group/)

## Select

#### Example

```jsx
import { Field } from 'formik';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Select } from 'formik-material-ui';

<FormControl>
  <InputLabel htmlFor="age-simple">Age</InputLabel>
  <Field
    component={Select}
    name="age"
    inputProps={{
      id: 'age-simple',
    }}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Field>
</FormControl>;
```

#### [Material-UI Select Documentation](https://mui.com/api/select/)

## SimpleFileUpload

#### Example

```jsx
import { SimpleFileUpload } from 'formik-material-ui';

<Field component={SimpleFileUpload} name="file" label="Simple File Upload" />;
```

#### API

```jsx
interface SimpleFileUploadProps {
  name: string; // Field Name
  label: string; // Field Label
  disabled?: boolean;
  // Customize the Input Component
  InputProps?: Omit<InputProps, 'name' | 'type' | 'label'>;
  // Customize the Input Label Component
  InputLabelProps?: InputLabelProps;
}
```

## Switch

```jsx
import { Switch } from 'formik-material-ui';

<Field component={Switch} type="checkbox" name="switch" />;
```

#### [Material-UI Switch Documentation](https://mui.com/api/switch/)

## TextField

#### Example

```jsx
import { TextField } from 'formik-material-ui';

<Field
  component={TextField}
  label="Outlined"
  name="outlined"
  variant="outlined"
  InputProps={{ notched: true }}
/>;
```

#### [Material-UI TextField Documentation](https://mui.com/api/text-field/)

## ToggleButtonGroup

#### Example

```tsx
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ToggleButton from '@mui/material/ToggleButton';
import { ToggleButtonGroup } from 'formik-material-ui';

<Field component={ToggleButtonGroup} name="name" type="checkbox">
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
</Field>;
```

_Note the `type=checkbox` attribute_

#### [Material-UI ToggleButtonGroup Documentation](https://mui.com/api/toggle-button-group/)
