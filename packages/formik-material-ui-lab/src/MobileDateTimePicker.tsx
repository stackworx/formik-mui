import MuiMobileDateTimePicker, {
  MobileDateTimePickerProps as MuiMobileDateTimePickerProps,
} from '@mui/lab/MobileDateTimePicker';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FieldProps, getIn } from 'formik';
import * as React from 'react';
import { createErrorHandler } from './errorHandler';

export interface MobileDateTimePickerProps
  extends FieldProps,
    Omit<MuiMobileDateTimePickerProps, 'name' | 'value' | 'error'> {
  textField: TextFieldProps;
}

export function fieldToMobileDateTimePicker({
  field: { onChange: _onChange, ...field },
  form: { isSubmitting, touched, errors, setFieldValue, setFieldError },
  textField: { helperText, ...textField } = {},
  disabled,
  label,
  onChange,
  onError,
  renderInput,
  ...props
}: MobileDateTimePickerProps): MuiMobileDateTimePickerProps {
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

export function MobileDateTimePicker({
  children,
  ...props
}: MobileDateTimePickerProps) {
  return (
    <MuiMobileDateTimePicker {...fieldToMobileDateTimePicker(props)}>
      {children}
    </MuiMobileDateTimePicker>
  );
}

MobileDateTimePicker.displayName = 'FormikMUIMobileDateTimePicker';
