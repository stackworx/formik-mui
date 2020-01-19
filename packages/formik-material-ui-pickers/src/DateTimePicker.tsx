import * as React from 'react';
import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps as MuiDateTimePickerProps,
} from '@material-ui/pickers';
import { useField, useFormikContext } from 'formik';

export interface DateTimePickerProps
  extends Omit<
    MuiDateTimePickerProps,
    'error' | 'name' | 'onChange' | 'value'
  > {
  name: string;
}

export const useFieldToDateTimePicker = ({
  disabled,
  name,
  ...props
}: DateTimePickerProps): MuiDateTimePickerProps => {
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

export const DateTimePicker: React.ComponentType<DateTimePickerProps> = ({
  children,
  ...props
}: DateTimePickerProps) => (
  <MuiDateTimePicker {...useFieldToDateTimePicker(props)}>
    {children}
  </MuiDateTimePicker>
);

DateTimePicker.displayName = 'FormikMaterialUIDateTimePicker';
