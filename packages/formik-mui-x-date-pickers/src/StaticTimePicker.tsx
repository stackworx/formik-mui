import {
  StaticTimePicker as MuiStaticTimePicker,
  StaticTimePickerProps as MuiStaticTimePickerProps,
} from '@mui/x-date-pickers/StaticTimePicker';
import type { TextFieldProps } from '@mui/material/TextField';
import { FieldProps, getIn } from 'formik';
import * as React from 'react';
import { createErrorHandler } from './errorHandler';

export interface StaticTimePickerProps
  extends FieldProps,
    Omit<MuiStaticTimePickerProps<Date>, 'name' | 'value' | 'error'> {
  textField?: TextFieldProps;
}

export function fieldToStaticTimePicker({
  field: { onChange: _onChange, ...field },
  form: { isSubmitting, errors, setFieldValue, setFieldError, setFieldTouched },
  disabled,
  onChange,
  onError,
  ...props
}: StaticTimePickerProps): MuiStaticTimePickerProps<Date> {
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

export function StaticTimePicker(props: StaticTimePickerProps) {
  return <MuiStaticTimePicker {...fieldToStaticTimePicker(props)} />;
}

StaticTimePicker.displayName = 'FormikMUIStaticTimePicker';
