import * as React from 'react';
import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps as MuiDateTimePickerProps,
} from '@material-ui/pickers';
import { FieldProps, getIn } from 'formik';

export type DateTimePickerProps = FieldProps &
  Omit<MuiDateTimePickerProps, 'error' | 'name' | 'onChange' | 'value'>;

export const fieldToDateTimePicker = ({
  field,
  form,
  disabled,
  ...props
}: DateTimePickerProps): MuiDateTimePickerProps => {
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

export const DateTimePicker: React.ComponentType<DateTimePickerProps> = ({
  children,
  ...props
}: DateTimePickerProps) => (
  <MuiDateTimePicker {...fieldToDateTimePicker(props)}>
    {children}
  </MuiDateTimePicker>
);

DateTimePicker.displayName = 'FormikMaterialUIDateTimePicker';
