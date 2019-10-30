import * as React from 'react';
import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from '@material-ui/pickers';

import { FieldProps, getIn } from 'formik';

export type DatePickerProps = FieldProps &
  Omit<MuiDatePickerProps, 'error' | 'name' | 'onChange' | 'value'>;

export const fieldToDatePicker = ({
  field,
  form,
  disabled,
  ...props
}: DatePickerProps): MuiDatePickerProps => {
  const { name } = field;
  const { touched, errors, isSubmitting, setFieldValue, setFieldError } = form;

  const fieldError = getIn(errors, name);
  const showError = getIn(touched, name) && !!fieldError;

  return {
    ...props,
    ...field,
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: disabled != undefined ? disabled : isSubmitting,
    onChange(date) {
      setFieldValue(name, date);
    },
    onError(error) {
      if (error !== fieldError) {
        setFieldError(name, String(error));
      }
    },
  };
};

export const DatePicker: React.ComponentType<DatePickerProps> = ({
  children,
  ...props
}: DatePickerProps) => (
  <MuiDatePicker {...fieldToDatePicker(props)}>{children}</MuiDatePicker>
);

DatePicker.displayName = 'FormikMaterialUIDatePicker';
