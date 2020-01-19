import * as React from 'react';
import {
  KeyboardTimePicker as MuiKeyboardTimePicker,
  KeyboardTimePickerProps as MuiKeyboardTimePickerProps,
} from '@material-ui/pickers';
import { FieldProps, getIn } from 'formik';

export type KeyboardTimePickerProps = FieldProps &
  Omit<MuiKeyboardTimePickerProps, 'error' | 'name' | 'onChange' | 'value'>;

export const fieldToKeyboardTimePicker = ({
  field,
  form,
  disabled,
  ...props
}: KeyboardTimePickerProps): MuiKeyboardTimePickerProps => {
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

export const KeyboardTimePicker: React.ComponentType<KeyboardTimePickerProps> = ({
  children,
  ...props
}: KeyboardTimePickerProps) => (
  <MuiKeyboardTimePicker {...fieldToKeyboardTimePicker(props)}>
    {children}
  </MuiKeyboardTimePicker>
);

KeyboardTimePicker.displayName = 'FormikMaterialUIKeyboardTimePicker';
