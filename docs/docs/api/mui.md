---
id: mui
title: MUI
---

The following props are always excluded: `name`, `value`, `error`, and additional ones where it makes sense.

## Autocomplete

#### Example

```jsx
import { Autocomplete } from 'formik-mui';

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
      // We have to manually set the corresponding fields on the input component
      name="name"
      error={touched['name'] && !!errors['name']}
      helperText={errors['name']}
      label="Autocomplete"
      variant="outlined"
    />
  )}
/>;
```

_Note the manual inclusion of the error._

#### [MUI Autocomplete Documentation](https://mui.com/api/autocomplete/)

## Checkbox

#### Example

```jsx
import { Checkbox } from 'formik-mui';

<Field component={Checkbox} type="checkbox" name="checked" />;
```

#### [MUI Checkbox Documentation](https://mui.com/api/checkbox/)

## CheckboxWithLabel

A convenience wrapper that adds label to `Checkbox` using `FormControlLabel`. Supports all the same properties as `Checkbox` and accepts an additional `Label` prop, which are props applied to `FormControlLabel`.

#### Example

```jsx
import { CheckboxWithLabel } from 'formik-mui';

<Field
  component={CheckboxWithLabel}
  type="checkbox"
  name="checked"
  Label={{ label: 'Checkbox' }}
/>;
```

#### [MUI Documentation](https://mui.com/api/form-control-label/)

## InputBase

#### Example

```jsx
import { InputBase } from 'formik-mui';

<Field component={InputBase} name="inputBase" />;
```

#### [MUI InputBase Documentation](https://mui.com/api/input-base/)

## RadioGroup

#### Example

```jsx
import { FormControlLabel, Radio, LinearProgress } from '@mui/material/core';
import { Formik, Field } from 'formik';
import { RadioGroup } from 'formik-mui';

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

#### [MUI RadioGroup Documentation](https://mui.com/api/radio-group/)

## Select

#### Example

```jsx
import { Field } from 'formik';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Select } from 'formik-mui';

<Field
  component={Select}
  formControl={{ sx: sxFormControl }}
  formHelperText={{ children: 'How old are you?' }}
  id="age"
  name="age"
  labelId="age-simple"
  label="Age"
  validate={(age: number) =>
    !age
      ? 'Please enter your age'
      : age < 21
      ? 'You must be 21 or older'
      : undefined
  }
>
  <MenuItem value={10}>Ten</MenuItem>
  <MenuItem value={20}>Twenty</MenuItem>
  <MenuItem value={30}>Thirty</MenuItem>
</Field>;
```

#### [MUI Select Documentation](https://mui.com/api/select/)

## SimpleFileUpload

#### Example

```jsx
import { SimpleFileUpload } from 'formik-mui';

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
import { Switch } from 'formik-mui';

<Field component={Switch} type="checkbox" name="switch" />;
```

#### [MUI Switch Documentation](https://mui.com/api/switch/)

## TextField

#### Example

```jsx
import { TextField } from 'formik-mui';

<Field
  component={TextField}
  label="Outlined"
  name="outlined"
  variant="outlined"
  InputProps={{ notched: true }}
/>;
```

#### [MUI TextField Documentation](https://mui.com/api/text-field/)

## ToggleButtonGroup

#### Example

```jsx
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ToggleButton from '@mui/material/ToggleButton';
import { ToggleButtonGroup } from 'formik-mui';

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

_Note the `type=checkbox` attribute._

#### [MUI ToggleButtonGroup Documentation](https://mui.com/api/toggle-button-group/)
