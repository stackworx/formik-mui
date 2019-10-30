import * as React from 'react';
import {
  KeyboardDateTimePicker as MuiKeyboardDateTimePicker,
  KeyboardDateTimePickerProps as MuiKeyboardDateTimePickerProps,
} from '@material-ui/pickers';
import { FieldProps, getIn } from 'formik';

export type KeyboardDateTimePickerProps = FieldProps &
  Omit<MuiKeyboardDateTimePickerProps, 'error' | 'name' | 'onChange' | 'value'>;

export const fieldToKeyboardDateTimePicker = ({
  field,
  form,
  disabled,
  ...props
}: KeyboardDateTimePickerProps): MuiKeyboardDateTimePickerProps => {
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

export const KeyboardDateTimePicker: React.ComponentType<KeyboardDateTimePickerProps> = ({
  children,
  ...props
}: KeyboardDateTimePickerProps) => (
  <MuiKeyboardDateTimePicker {...fieldToKeyboardDateTimePicker(props)}>
    {children}
  </MuiKeyboardDateTimePicker>
);

KeyboardDateTimePicker.displayName = 'FormikMaterialUIKeyboardDateTimePicker';
