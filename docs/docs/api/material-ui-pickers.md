---
id: material-ui-pickers
title: Material-UI Pickers
---

The following props are always excluded: `name, value, error`, and additional ones where it makes sense.

`TextField` props may be specified inside the `textField` prop. If no `renderInput` function is provided, the `textField` props are forwarded to the `TextField` input.

When using picker components initialize the starting value to `new Date()` and not the empty string

## DatePicker

#### Example

```jsx
import { DatePicker } from 'formik-material-ui-pickers';

<Field
  component={DatePicker}
  label="label"
  name="name"
  textField={{ helperText: 'Helper text' }}
  inputFormat="MM/dd/yyyy"
/>;
```

#### [Material-UI DatePicker Documentation](https://mui.com/api/date-picker/)

## DateTimePicker

#### Example

```jsx
import { DateTimePicker } from 'formik-material-ui-pickers';

<Field component={DateTimePicker} label="label" name="name" />;
```

#### [Material-UI DateTimePicker Documentation](https://mui.com/api/date-time-picker/)

## DesktopDatePicker

#### Example

```jsx
import { DesktopDatePicker } from 'formik-material-ui-pickers';

<Field component={DesktopDatePicker} label="label" name="name" />;
```

#### [Material-UI DesktopDatePicker Documentation](https://mui.com/api/desktop-date-picker/)

## DesktopDateTimePicker

#### Example

```jsx
import { DesktopDateTimePicker } from 'formik-material-ui-pickers';

<Field component={DesktopDateTimePicker} label="label" name="name" />;
```

#### [Material-UI DesktopDateTimePicker Documentation](https://mui.com/api/desktop-date-time-picker/)

## DesktopTimePicker

#### Example

```jsx
import { DesktopTimePicker } from 'formik-material-ui-pickers';

<Field component={DesktopTimePicker} label="label" name="name" />;
```

#### [Material-UI DesktopTimePicker Documentation](https://mui.com/api/desktop-time-picker/)

## MobileDatePicker

#### Example

```jsx
import { MobileDatePicker } from 'formik-material-ui-pickers';

<Field component={MobileDatePicker} label="label" name="name" />;
```

#### [Material-UI MobileDatePicker Documentation](https://mui.com/api/mobile-date-picker/)

## MobileDateTimePicker

#### Example

```jsx
import { MobileDateTimePicker } from 'formik-material-ui-pickers';

<Field component={MobileDateTimePicker} label="label" name="name" />;
```

#### [Material-UI MobileDateTimePicker Documentation](https://mui.com/api/mobile-date-time-picker/)

## MobileTimePicker

#### Example

```jsx
import { MobileTimePicker } from 'formik-material-ui-pickers';

<Field component={MobileTimePicker} label="label" name="name" />;
```

#### [Material-UI MobileTimePicker Documentation](https://mui.com/api/mobile-time-picker/)

## StaticDatePicker

#### Example

```jsx
import { StaticDatePicker } from 'formik-material-ui-pickers';

<Field component={StaticDatePicker} label="label" name="name" />;
```

#### [Material-UI StaticDatePicker Documentation](https://mui.com/api/static-date-picker/)

## StaticDateTimePicker

#### Example

```jsx
import { StaticDateTimePicker } from 'formik-material-ui-pickers';

<Field component={StaticDateTimePicker} label="label" name="name" />;
```

#### [Material-UI StaticDateTimePicker Documentation](https://mui.com/api/static-date-time-picker/)

## StaticTimePicker

#### Example

```jsx
import { StaticTimePicker } from 'formik-material-ui-pickers';

<Field component={StaticTimePicker} label="label" name="name" />;
```

#### [Material-UI StaticTimePicker Documentation](https://mui.com/api/static-time-picker/)

## TimePicker

#### Example

```jsx
import { TimePicker } from 'formik-material-ui-pickers';

<Field component={TimePicker} label="label" name="name" />;
```

#### [Material-UI TimePicker Documentation](https://mui.com/api/time-picker/)
