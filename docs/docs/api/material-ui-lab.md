---
id: mui-lab
title: Mui Lab
---

The following props are always excluded: `name, value, error`, and additional ones where it makes sense.

`TextField` props may be specified inside the `textField` prop. If no `renderInput` function is provided, the `textField` props are forwarded to the `TextField` input.

When using picker components initialize the starting value to `new Date()` and not the empty string

## DatePicker

#### Example

```jsx
import { DatePicker } from 'formik-mui-lab';

<Field
  component={DatePicker}
  label="label"
  name="name"
  textField={{ helperText: 'Helper text' }}
  inputFormat="MM/dd/yyyy"
/>;
```

#### [MUI DatePicker Documentation](https://mui.com/api/date-picker/)

## DateTimePicker

#### Example

```jsx
import { DateTimePicker } from 'formik-mui-lab';

<Field component={DateTimePicker} label="label" name="name" />;
```

#### [MUI DateTimePicker Documentation](https://mui.com/api/date-time-picker/)

## DesktopDatePicker

#### Example

```jsx
import { DesktopDatePicker } from 'formik-mui-lab';

<Field component={DesktopDatePicker} label="label" name="name" />;
```

#### [MUI DesktopDatePicker Documentation](https://mui.com/api/desktop-date-picker/)

## DesktopDateTimePicker

#### Example

```jsx
import { DesktopDateTimePicker } from 'formik-mui-lab';

<Field component={DesktopDateTimePicker} label="label" name="name" />;
```

#### [MUI DesktopDateTimePicker Documentation](https://mui.com/api/desktop-date-time-picker/)

## DesktopTimePicker

#### Example

```jsx
import { DesktopTimePicker } from 'formik-mui-lab';

<Field component={DesktopTimePicker} label="label" name="name" />;
```

#### [MUI DesktopTimePicker Documentation](https://mui.com/api/desktop-time-picker/)

## MobileDatePicker

#### Example

```jsx
import { MobileDatePicker } from 'formik-mui-lab';

<Field component={MobileDatePicker} label="label" name="name" />;
```

#### [MUI MobileDatePicker Documentation](https://mui.com/api/mobile-date-picker/)

## MobileDateTimePicker

#### Example

```jsx
import { MobileDateTimePicker } from 'formik-mui-lab';

<Field component={MobileDateTimePicker} label="label" name="name" />;
```

#### [MUI MobileDateTimePicker Documentation](https://mui.com/api/mobile-date-time-picker/)

## MobileTimePicker

#### Example

```jsx
import { MobileTimePicker } from 'formik-mui-lab';

<Field component={MobileTimePicker} label="label" name="name" />;
```

#### [MUI MobileTimePicker Documentation](https://mui.com/api/mobile-time-picker/)

## StaticDatePicker

#### Example

```jsx
import { StaticDatePicker } from 'formik-mui-lab';

<Field component={StaticDatePicker} label="label" name="name" />;
```

#### [MUI StaticDatePicker Documentation](https://mui.com/api/static-date-picker/)

## StaticDateTimePicker

#### Example

```jsx
import { StaticDateTimePicker } from 'formik-mui-lab';

<Field component={StaticDateTimePicker} label="label" name="name" />;
```

#### [MUI StaticDateTimePicker Documentation](https://mui.com/api/static-date-time-picker/)

## StaticTimePicker

#### Example

```jsx
import { StaticTimePicker } from 'formik-mui-lab';

<Field component={StaticTimePicker} label="label" name="name" />;
```

#### [MUI StaticTimePicker Documentation](https://mui.com/api/static-time-picker/)

## TimePicker

#### Example

```jsx
import { TimePicker } from 'formik-mui-lab';

<Field component={TimePicker} label="label" name="name" />;
```

#### [MUI TimePicker Documentation](https://mui.com/api/time-picker/)
