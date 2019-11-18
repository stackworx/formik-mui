import * as React from 'react';
import {
  TimePicker as MuiTimePicker,
  TimePickerProps as MuiTimePickerProps,
} from '@material-ui/pickers';
import { FieldProps, getIn } from 'formik';

export type TimePickerProps = FieldProps &
  Omit<MuiTimePickerProps, 'error' | 'name' | 'onChange' | 'value'>;

export const fieldToTimePicker = ({
  field,
  form,
  disabled,
  ...props
}: TimePickerProps): MuiTimePickerProps => {
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

export const TimePicker: React.ComponentType<TimePickerProps> = ({
  children,
  ...props
}: TimePickerProps) => (
  <MuiTimePicker {...fieldToTimePicker(props)}>{children}</MuiTimePicker>
);

TimePicker.displayName = 'FormikMaterialUITimePicker';
