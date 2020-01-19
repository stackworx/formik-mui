import * as React from 'react';
import {
  KeyboardDatePicker as MuiKeyboardDatePicker,
  KeyboardDatePickerProps as MuiKeyboardDatePickerProps,
} from '@material-ui/pickers';
import { useField, useFormikContext } from 'formik';

export interface KeyboardDatePickerProps
  extends Omit<
    MuiKeyboardDatePickerProps,
    'error' | 'name' | 'onChange' | 'value'
  > {
  name: string;
}

export const useFieldToKeyboardDatePicker = ({
  disabled,
  name,
  ...props
}: KeyboardDatePickerProps): MuiKeyboardDatePickerProps => {
  const { isSubmitting } = useFormikContext();
  const [field, meta, helpers] = useField(name);

  const fieldError = meta.error;
  const showError = meta.touched && !!fieldError;

  return {
    ...props,
    ...field,
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: disabled != undefined ? disabled : isSubmitting,
    onChange(date) {
      helpers.setValue(date);
    },
    onError(error) {
      if (error !== fieldError) {
        helpers.setError(String(error));
      }
    },
  };
};

export const KeyboardDatePicker: React.ComponentType<KeyboardDatePickerProps> = ({
  children,
  ...props
}: KeyboardDatePickerProps) => (
  <MuiKeyboardDatePicker {...useFieldToKeyboardDatePicker(props)}>
    {children}
  </MuiKeyboardDatePicker>
);

KeyboardDatePicker.displayName = 'FormikMaterialUIKeyboardDatePicker';
