import MuiMobileTimePicker, {
  MobileTimePickerProps as MuiMobileTimePickerProps,
} from '@mui/lab/MobileTimePicker';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FieldProps, getIn } from 'formik';
import * as React from 'react';
import { createErrorHandler } from './errorHandler';

export interface MobileTimePickerProps
  extends FieldProps,
    Omit<MuiMobileTimePickerProps, 'name' | 'value' | 'error'> {
  textField: TextFieldProps;
}

export function fieldToMobileTimePicker({
  field: { onChange: _onChange, ...field },
  form: { isSubmitting, touched, errors, setFieldValue, setFieldError },
  textField: { helperText, ...textField } = {},
  disabled,
  label,
  onChange,
  onError,
  renderInput,
  ...props
}: MobileTimePickerProps): MuiMobileTimePickerProps {
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

export function MobileTimePicker({
  children,
  ...props
}: MobileTimePickerProps) {
  return (
    <MuiMobileTimePicker {...fieldToMobileTimePicker(props)}>
      {children}
    </MuiMobileTimePicker>
  );
}

MobileTimePicker.displayName = 'FormikMUIMobileTimePicker';
