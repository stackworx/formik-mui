---
id: mui-x-date-pickers
title: MUI X Date and Time Pickers
---

The following props are always excluded: `name`, `value`, `error`, and additional ones where it makes sense.

`TextField` props may be specified inside the `textField` prop. If no `renderInput` function is provided, the `textField` props are forwarded to the `TextField` input.

When using picker components initialize the starting value to `new Date()` and not the empty string.

## DatePicker

#### Example

```jsx
import { DatePicker } from 'formik-mui-x-date-pickers';

<Field
  component={DatePicker}
  label="label"
  name="name"
  textField={{ helperText: 'Helper text' }}
  inputFormat="MM/dd/yyyy"
/>;
```

#### [MUI DatePicker Documentation](https://mui.com/x/api/date-pickers/date-picker/)

## DateTimePicker

#### Example

```jsx
import { DateTimePicker } from 'formik-mui-x-date-pickers';

<Field component={DateTimePicker} label="label" name="name" />;
```

#### [MUI DateTimePicker Documentation](https://mui.com/x/api/date-pickers/date-time-picker/)

## DesktopDatePicker

#### Example

```jsx
import { DesktopDatePicker } from 'formik-mui-x-date-pickers';

<Field component={DesktopDatePicker} label="label" name="name" />;
```

#### [MUI DesktopDatePicker Documentation](https://mui.com/x/api/date-pickers/desktop-date-picker/)

## DesktopDateTimePicker

#### Example

```jsx
import { DesktopDateTimePicker } from 'formik-mui-x-date-pickers';

<Field component={DesktopDateTimePicker} label="label" name="name" />;
```

#### [MUI DesktopDateTimePicker Documentation](https://mui.com/x/api/date-pickers/desktop-date-time-picker/)

## DesktopTimePicker

#### Example

```jsx
import { DesktopTimePicker } from 'formik-mui-x-date-pickers';

<Field component={DesktopTimePicker} label="label" name="name" />;
```

#### [MUI DesktopTimePicker Documentation](https://mui.com/x/api/date-pickers/desktop-time-picker/)

## MobileDatePicker

#### Example

```jsx
import { MobileDatePicker } from 'formik-mui-x-date-pickers';

<Field component={MobileDatePicker} label="label" name="name" />;
```

#### [MUI MobileDatePicker Documentation](https://mui.com/x/api/date-pickers/mobile-date-picker/)

## MobileDateTimePicker

#### Example

```jsx
import { MobileDateTimePicker } from 'formik-mui-x-date-pickers';

<Field component={MobileDateTimePicker} label="label" name="name" />;
```

#### [MUI MobileDateTimePicker Documentation](https://mui.com/x/api/date-pickers/mobile-date-time-picker/)

## MobileTimePicker

#### Example

```jsx
import { MobileTimePicker } from 'formik-mui-x-date-pickers';

<Field component={MobileTimePicker} label="label" name="name" />;
```

#### [MUI MobileTimePicker Documentation](https://mui.com/x/api/date-pickers/mobile-time-picker/)

## StaticDatePicker

#### Example

```jsx
import { StaticDatePicker } from 'formik-mui-x-date-pickers';

<Field component={StaticDatePicker} label="label" name="name" />;
```

#### [MUI StaticDatePicker Documentation](https://mui.com/x/api/date-pickers/static-date-picker/)

## StaticDateTimePicker

#### Example

```jsx
import { StaticDateTimePicker } from 'formik-mui-x-date-pickers';

<Field component={StaticDateTimePicker} label="label" name="name" />;
```

#### [MUI StaticDateTimePicker Documentation](https://mui.com/x/api/date-pickers/static-date-time-picker/)

## StaticTimePicker

#### Example

```jsx
import { StaticTimePicker } from 'formik-mui-x-date-pickers';

<Field component={StaticTimePicker} label="label" name="name" />;
```

#### [MUI StaticTimePicker Documentation](https://mui.com/x/api/date-pickers/static-time-picker/)

## TimePicker

#### Example

```jsx
import { TimePicker } from 'formik-mui-x-date-pickers';

<Field component={TimePicker} label="label" name="name" />;
```

#### [MUI TimePicker Documentation](https://mui.com/x/api/date-pickers/time-picker/)
