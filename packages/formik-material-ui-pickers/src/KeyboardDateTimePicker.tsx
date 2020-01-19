import * as React from 'react';
import {
  KeyboardDateTimePicker as MuiKeyboardDateTimePicker,
  KeyboardDateTimePickerProps as MuiKeyboardDateTimePickerProps,
} from '@material-ui/pickers';
import { useField, useFormikContext } from 'formik';

export interface KeyboardDateTimePickerProps
  extends Omit<
    MuiKeyboardDateTimePickerProps,
    'error' | 'name' | 'onChange' | 'value'
  > {
  name: string;
}

export const useFieldToKeyboardDateTimePicker = ({
  disabled,
  name,
  ...props
}: KeyboardDateTimePickerProps): MuiKeyboardDateTimePickerProps => {
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

export const KeyboardDateTimePicker: React.ComponentType<KeyboardDateTimePickerProps> = ({
  children,
  ...props
}: KeyboardDateTimePickerProps) => (
  <MuiKeyboardDateTimePicker {...useFieldToKeyboardDateTimePicker(props)}>
    {children}
  </MuiKeyboardDateTimePicker>
);

KeyboardDateTimePicker.displayName = 'FormikMaterialUIKeyboardDateTimePicker';
