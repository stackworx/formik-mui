import MuiStaticDatePicker, {
  StaticDatePickerProps as MuiStaticDatePickerProps,
} from '@mui/lab/StaticDatePicker';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FieldProps, getIn } from 'formik';
import * as React from 'react';
import { createErrorHandler } from './errorHandler';

export interface StaticDatePickerProps
  extends FieldProps,
    Omit<MuiStaticDatePickerProps, 'name' | 'value' | 'error'> {
  textField: TextFieldProps;
}

export function fieldToStaticDatePicker({
  field: { onChange: _onChange, ...field },
  form: { isSubmitting, touched, errors, setFieldValue, setFieldError },
  textField: { helperText, ...textField } = {},
  disabled,
  label,
  onChange,
  onError,
  renderInput,
  ...props
}: StaticDatePickerProps): MuiStaticDatePickerProps {
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

export function StaticDatePicker(props: StaticDatePickerProps) {
  return <MuiStaticDatePicker {...fieldToStaticDatePicker(props)} />;
}

StaticDatePicker.displayName = 'FormikMUIStaticDatePicker';
