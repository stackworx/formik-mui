import * as React from 'react';
import {
  TimePicker as MuiTimePicker,
  TimePickerProps as MuiTimePickerProps,
} from '@material-ui/pickers';
import { useField, useFormikContext } from 'formik';

export interface TimePickerProps
  extends Omit<MuiTimePickerProps, 'error' | 'name' | 'onChange' | 'value'> {
  name: string;
}

export const useFieldToTimePicker = ({
  disabled,
  name,
  ...props
}: TimePickerProps): MuiTimePickerProps => {
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

export const TimePicker: React.ComponentType<TimePickerProps> = ({
  children,
  ...props
}: TimePickerProps) => (
  <MuiTimePicker {...useFieldToTimePicker(props)}>{children}</MuiTimePicker>
);

TimePicker.displayName = 'FormikMaterialUITimePicker';
