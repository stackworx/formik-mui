import MuiDatePicker, {
  DatePickerProps as MuiDatePickerProps,
} from '@mui/lab/DatePicker';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FieldProps, getIn } from 'formik';
import * as React from 'react';
import { createErrorHandler } from './errorHandler';

export interface DatePickerProps
  extends FieldProps,
    Omit<MuiDatePickerProps, 'name' | 'value' | 'error'> {
  textField: TextFieldProps;
}

export function fieldToDatePicker({
  field: { onChange: _onChange, ...field },
  form: { isSubmitting, touched, errors, setFieldValue, setFieldError },
  textField: { helperText, ...textField } = {},
  disabled,
  label,
  onChange,
  onError,
  renderInput,
  ...props
}: DatePickerProps): MuiDatePickerProps {
  const fieldError = getIn(errors, field.name);
  const showError = getIn(touched, field.name) && !!fieldError;

  return {
    renderInput:
      renderInput ??
      ((params) => (
        <TextField
          {...params}
          error={showError}
          helperText={showError ? fieldError : helperText}
          label={label}
          {...textField}
        />
      )),
    disabled: disabled ?? isSubmitting,
    onChange:
      onChange ??
      function (date) {
        setFieldValue(field.name, date);
      },
    onError:
      onError ?? createErrorHandler(fieldError, field.name, setFieldError),
    ...field,
    ...props,
  };
}

export function DatePicker({ children, ...props }: DatePickerProps) {
  return (
    <MuiDatePicker {...fieldToDatePicker(props)}>{children}</MuiDatePicker>
  );
}

DatePicker.displayName = 'FormikMUIDatePicker';
