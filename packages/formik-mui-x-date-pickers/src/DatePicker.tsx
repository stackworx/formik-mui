import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from '@mui/x-date-pickers/DatePicker';
import type { TextFieldProps } from '@mui/material/TextField';
import { FieldProps, getIn } from 'formik';
import * as React from 'react';
import { createErrorHandler } from './errorHandler';

export interface DatePickerProps
  extends FieldProps,
    Omit<MuiDatePickerProps<Date>, 'name' | 'value' | 'error'> {
  textField?: TextFieldProps;
}

export function fieldToDatePicker({
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
}: DatePickerProps): MuiDatePickerProps<Date> {
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

export function DatePicker(props: DatePickerProps) {
  return <MuiDatePicker {...fieldToDatePicker(props)} />;
}

DatePicker.displayName = 'FormikMUIDatePicker';
