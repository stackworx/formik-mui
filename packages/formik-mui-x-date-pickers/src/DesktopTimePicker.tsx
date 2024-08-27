import {
  DesktopTimePicker as MuiDesktopTimePicker,
  DesktopTimePickerProps as MuiDesktopTimePickerProps,
} from '@mui/x-date-pickers/DesktopTimePicker';
import type { TextFieldProps } from '@mui/material/TextField';
import { FieldProps, getIn } from 'formik';
import * as React from 'react';
import { createErrorHandler } from './errorHandler';

export interface DesktopTimePickerProps
  extends FieldProps,
    Omit<MuiDesktopTimePickerProps<Date>, 'name' | 'value' | 'error'> {
  textField?: TextFieldProps;
}

export function fieldToDesktopTimePicker({
  field: { onChange: _onChange, ...field },
  form: {
    isSubmitting,
    touched,
    errors,
    setFieldValue,
    setFieldError,
    setFieldTouched,
  },
  textField: { helperText, onBlur, ...textField } = {},
  disabled,
  label,
  onChange,
  onError,
  ...props
}: DesktopTimePickerProps): MuiDesktopTimePickerProps<Date> {
  const fieldError = getIn(errors, field.name);
  const showError = getIn(touched, field.name) && !!fieldError;
  const onBlurDefault = () => {
    setFieldTouched(field.name, true, true);
  };
  const onChangeDefault = (date: Date | null) => {
    // Do not switch this order, otherwise you might cause a race condition
    // See https://github.com/formium/formik/issues/2083#issuecomment-884831583
    setFieldTouched(field.name, true, false);
    setFieldValue(field.name, date, true);
  };

  return {
    disabled: disabled ?? isSubmitting,
    onChange: onChange ?? onChangeDefault,
    onError:
      onError ?? createErrorHandler(fieldError, field.name, setFieldError),
    slotProps: {
      textField: {
        error: showError,
        helperText: showError ? fieldError : helperText,
        label,
        onBlur: onBlur ?? onBlurDefault,
        ...textField,
      },
    },
    ...field,
    ...props,
  };
}

export function DesktopTimePicker(props: DesktopTimePickerProps) {
  return <MuiDesktopTimePicker {...fieldToDesktopTimePicker(props)} />;
}

DesktopTimePicker.displayName = 'FormikMUIDesktopTimePicker';
