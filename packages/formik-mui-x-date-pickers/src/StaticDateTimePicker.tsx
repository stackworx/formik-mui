import {
  StaticDateTimePicker as MuiStaticDateTimePicker,
  StaticDateTimePickerProps as MuiStaticDateTimePickerProps,
} from '@mui/x-date-pickers/StaticDateTimePicker';
import type { TextFieldProps } from '@mui/material/TextField';
import { FieldProps, getIn } from 'formik';
import * as React from 'react';
import { createErrorHandler } from './errorHandler';

export interface StaticDateTimePickerProps
  extends FieldProps,
    Omit<MuiStaticDateTimePickerProps<Date>, 'name' | 'value' | 'error'> {
  textField?: TextFieldProps;
}

export function fieldToStaticDateTimePicker({
  field: { onChange: _onChange, ...field },
  form: { isSubmitting, errors, setFieldValue, setFieldError, setFieldTouched },
  disabled,
  onChange,
  onError,
  ...props
}: StaticDateTimePickerProps): MuiStaticDateTimePickerProps<Date> {
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

export function StaticDateTimePicker(props: StaticDateTimePickerProps) {
  return <MuiStaticDateTimePicker {...fieldToStaticDateTimePicker(props)} />;
}

StaticDateTimePicker.displayName = 'FormikMUIStaticDateTimePicker';
