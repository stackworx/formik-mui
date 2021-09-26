import MuiMobileDatePicker, {
  MobileDatePickerProps as MuiMobileDatePickerProps,
} from '@mui/lab/MobileDatePicker';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FieldProps, getIn } from 'formik';
import * as React from 'react';
import { createErrorHandler } from './errorHandler';

export interface MobileDatePickerProps
  extends FieldProps,
    Omit<MuiMobileDatePickerProps, 'name' | 'value' | 'error'> {
  textField: TextFieldProps;
}

export function fieldToMobileDatePicker({
  field: { onChange: _onChange, ...field },
  form: { isSubmitting, touched, errors, setFieldValue, setFieldError },
  textField: { helperText, ...textField } = {},
  disabled,
  label,
  onChange,
  onError,
  renderInput,
  ...props
}: MobileDatePickerProps): MuiMobileDatePickerProps {
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

export function MobileDatePicker({
  children,
  ...props
}: MobileDatePickerProps) {
  return (
    <MuiMobileDatePicker {...fieldToMobileDatePicker(props)}>
      {children}
    </MuiMobileDatePicker>
  );
}

MobileDatePicker.displayName = 'FormikMUIMobileDatePicker';
