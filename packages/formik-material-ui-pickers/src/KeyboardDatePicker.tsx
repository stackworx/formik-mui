import * as React from 'react';
import {
  KeyboardDatePicker as MuiKeyboardDatePicker,
  KeyboardDatePickerProps as MuiKeyboardDatePickerProps,
} from '@material-ui/pickers';
import { FieldProps, getIn } from 'formik';

export interface KeyboardDatePickerProps
  extends FieldProps,
    Omit<MuiKeyboardDatePickerProps, 'name' | 'value' | 'error' | 'onChange'> {}

export function fieldToKeyboardDatePicker({
  disabled,
  field,
  form: { isSubmitting, touched, errors, status = {}, setFieldValue, setFieldError },
  ...props
}: KeyboardDatePickerProps): MuiKeyboardDatePickerProps {
  const fieldError =
    getIn(errors, field.name) || getIn(status.errors, field.name);
  const showError = getIn(touched, field.name) && !!fieldError;

  return {
    ...props,
    ...field,
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: disabled != undefined ? disabled : isSubmitting,
    onChange(date) {
      setFieldValue(field.name, date);
    },
    onError(error) {
      if (error !== fieldError && !(error == '' && !fieldError)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore - https://github.com/jaredpalmer/formik/pull/2286
        setFieldError(field.name, error ? String(error) : undefined);
      }
    },
  };
}

export function KeyboardDatePicker({
  children,
  ...props
}: KeyboardDatePickerProps) {
  return (
    <MuiKeyboardDatePicker {...fieldToKeyboardDatePicker(props)}>
      {children}
    </MuiKeyboardDatePicker>
  );
}

KeyboardDatePicker.displayName = 'FormikMaterialUIKeyboardDatePicker';
