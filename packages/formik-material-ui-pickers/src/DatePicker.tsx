import * as React from 'react';
import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from '@material-ui/pickers';
import { FieldProps, getIn } from 'formik';

export interface DatePickerProps
  extends FieldProps,
    Omit<MuiDatePickerProps, 'name' | 'value' | 'error' | 'onChange'> {}

export function fieldToDatePicker({
  field,
  form: { isSubmitting, touched, errors, status = {}, setFieldValue, setFieldError },
  disabled,
  ...props
}: DatePickerProps): MuiDatePickerProps {
  const fieldError =
    getIn(errors, field.name) || getIn(status.errors, field.name);;
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

export function DatePicker({ children, ...props }: DatePickerProps) {
  return (
    <MuiDatePicker {...fieldToDatePicker(props)}>{children}</MuiDatePicker>
  );
}

DatePicker.displayName = 'FormikMaterialUIDatePicker';
