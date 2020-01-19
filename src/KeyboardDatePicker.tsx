import * as React from 'react';
import {
  KeyboardDatePicker as MuiKeyboardDatePicker,
  KeyboardDatePickerProps as MuiKeyboardDatePickerProps,
} from '@material-ui/pickers';
import { FieldProps, getIn } from 'formik';

export type KeyboardDatePickerProps = FieldProps &
  Omit<MuiKeyboardDatePickerProps, 'error' | 'name' | 'onChange' | 'value'>;

export const fieldToKeyboardDatePicker = ({
  field,
  form,
  disabled,
  ...props
}: KeyboardDatePickerProps): MuiKeyboardDatePickerProps => {
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

export const KeyboardDatePicker: React.ComponentType<KeyboardDatePickerProps> = ({
  children,
  ...props
}: KeyboardDatePickerProps) => (
  <MuiKeyboardDatePicker {...fieldToKeyboardDatePicker(props)}>
    {children}
  </MuiKeyboardDatePicker>
);

KeyboardDatePicker.displayName = 'FormikMaterialUIKeyboardDatePicker';
