import MuiDesktopDatePicker, {
  DesktopDatePickerProps as MuiDesktopDatePickerProps,
} from '@mui/lab/DesktopDatePicker';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FieldProps, getIn } from 'formik';
import * as React from 'react';
import { createErrorHandler } from './errorHandler';

export interface DesktopDatePickerProps
  extends FieldProps,
    Omit<MuiDesktopDatePickerProps, 'name' | 'value' | 'error'> {
  textField: TextFieldProps;
}

export function fieldToDesktopDatePicker({
  field: { onChange: _onChange, ...field },
  form: { isSubmitting, touched, errors, setFieldValue, setFieldError },
  textField: { helperText, ...textField } = {},
  disabled,
  label,
  onChange,
  onError,
  renderInput,
  ...props
}: DesktopDatePickerProps): MuiDesktopDatePickerProps {
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

export function DesktopDatePicker({
  children,
  ...props
}: DesktopDatePickerProps) {
  return (
    <MuiDesktopDatePicker {...fieldToDesktopDatePicker(props)}>
      {children}
    </MuiDesktopDatePicker>
  );
}

DesktopDatePicker.displayName = 'FormikMUIDesktopDatePicker';
