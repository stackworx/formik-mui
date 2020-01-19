import * as React from 'react';
import {
  KeyboardTimePicker as MuiKeyboardTimePicker,
  KeyboardTimePickerProps as MuiKeyboardTimePickerProps,
} from '@material-ui/pickers';
import { useField, useFormikContext } from 'formik';

export interface KeyboardTimePickerProps
  extends Omit<
    MuiKeyboardTimePickerProps,
    'error' | 'name' | 'onChange' | 'value'
  > {
  name: string;
}

export const useFieldToKeyboardTimePicker = ({
  disabled,
  name,
  ...props
}: KeyboardTimePickerProps): MuiKeyboardTimePickerProps => {
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

export const KeyboardTimePicker: React.ComponentType<KeyboardTimePickerProps> = ({
  children,
  ...props
}: KeyboardTimePickerProps) => (
  <MuiKeyboardTimePicker {...useFieldToKeyboardTimePicker(props)}>
    {children}
  </MuiKeyboardTimePicker>
);

KeyboardTimePicker.displayName = 'FormikMaterialUIKeyboardTimePicker';
