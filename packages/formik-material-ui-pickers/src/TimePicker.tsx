import * as React from 'react';
import {
  TimePicker as MuiTimePicker,
  TimePickerProps as MuiTimePickerProps,
} from '@material-ui/pickers';
import { FieldProps, getIn } from 'formik';

export interface TimePickerProps
  extends FieldProps,
    Omit<MuiTimePickerProps, 'name' | 'value' | 'error' | 'onChange'> {}

export function fieldToTimePicker({
  disabled,
  field,
  form: { isSubmitting, touched, errors, setFieldValue, setFieldError },
  ...props
}: TimePickerProps): MuiTimePickerProps {
  const fieldError = getIn(errors, field.name);
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
      if (error !== fieldError) {
        // @ts-ignore - https://github.com/jaredpalmer/formik/pull/2286
        setFieldError(field.name, error ?? String(error));
      }
    },
  };
}

export function TimePicker({ children, ...props }: TimePickerProps) {
  return (
    <MuiTimePicker {...fieldToTimePicker(props)}>{children}</MuiTimePicker>
  );
}

TimePicker.displayName = 'FormikMaterialUITimePicker';
