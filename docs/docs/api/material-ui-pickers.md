---
id: material-ui-pickers
title: Material-UI Pickers
---

The following props are always excluded: `name, value, error`, and additional ones where it makes sense

When using picker components initialize the starting value to `new Date()` and not the empty string

## DatePicker

#### Example

```jsx
import { DatePicker } from 'formik-material-ui-pickers';

<Field component={DatePicker} label="label" name="name" />;
```

#### [Material-UI Pickers Documentation](https://material-ui-pickers.dev/api/DatePicker)

## DateTimePicker

#### Example

```jsx
import { DateTimePicker } from 'formik-material-ui-pickers';

<Field component={DateTimePicker} label="label" name="name" />;
```

#### [Material-UI Pickers Documentation](https://material-ui-pickers.dev/api/DateTimePicker)

## KeyboardDatePicker

#### Example

```jsx
import { KeyboardDatePicker } from 'formik-material-ui-pickers';

<Field component={KeyboardDatePicker} label="label" name="name" />;
```

#### [Material-UI Pickers Documentation](https://material-ui-pickers.dev/api/KeyboardDatePicker)

## KeyboardDateTimePicker

#### Example

```jsx
import { KeyboardDateTimePicker } from 'formik-material-ui-pickers';

<Field component={KeyboardDateTimePicker} label="label" name="name" />;
```

#### [Material-UI Pickers Documentation](https://material-ui-pickers.dev/api/KeyboardDateTimePicker)

## KeyboardTimePicker

#### Example

```jsx
import { KeyboardTimePicker } from 'formik-material-ui-pickers';

<Field component={KeyboardTimePicker} label="label" name="name" />;
```

#### [Material-UI Pickers Documentation](https://material-ui-pickers.dev/api/KeyboardTimePicker)

## TimePicker

#### Example

```jsx
import { TimePicker } from 'formik-material-ui-pickers';

<Field component={TimePicker} label="label" name="name" />;
```

#### [Material-UI Pickers Documentation](https://material-ui-pickers.dev/api/TimePicker)
