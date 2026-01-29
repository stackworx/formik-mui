import {
  StaticDatePicker as MuiStaticDatePicker,
  StaticDatePickerProps as MuiStaticDatePickerProps,
} from '@mui/x-date-pickers/StaticDatePicker';
import type { TextFieldProps } from '@mui/material/TextField';
import { FieldProps, getIn } from 'formik';
import * as React from 'react';
import { createErrorHandler } from './errorHandler';

export interface StaticDatePickerProps
  extends FieldProps,
    Omit<MuiStaticDatePickerProps<Date>, 'name' | 'value' | 'error'> {
  textField?: TextFieldProps;
}

export function fieldToStaticDatePicker({
  field: { onChange: _onChange, ...field },
  form: { isSubmitting, errors, setFieldValue, setFieldError, setFieldTouched },
  disabled,
  onChange,
  onError,
  ...props
}: StaticDatePickerProps): MuiStaticDatePickerProps<Date> {
  const fieldError = getIn(errors, field.name);
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
    ...field,
    ...props,
  };
}

export function StaticDatePicker(props: StaticDatePickerProps) {
  return <MuiStaticDatePicker {...fieldToStaticDatePicker(props)} />;
}

StaticDatePicker.displayName = 'FormikMUIStaticDatePicker';
