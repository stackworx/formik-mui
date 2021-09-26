---
id: material-ui-lab
title: Material-UI Lab
---

The following props are always excluded: `name, value, error`, and additional ones where it makes sense

## Autocomplete

#### Example

```jsx
import { Autocomplete } from 'formik-material-ui-lab';

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

#### [Material-UI Lab Documentation](https://mui.com/api/autocomplete/)

## ToggleButtonGroup

#### Example

```tsx
import { ToggleButtonGroup } from 'formik-material-ui-lab';
import ToggleButton from '@mui/material/ToggleButton';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

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

#### [Material-UI Lab Documentation](https://mui.com/api/toggle-button-group/)
