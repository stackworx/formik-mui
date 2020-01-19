import * as React from 'react';
import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from '@material-ui/pickers';
import { useField, useFormikContext } from 'formik';

export interface DatePickerProps
  extends Omit<MuiDatePickerProps, 'error' | 'name' | 'onChange' | 'value'> {
  name: string;
}

export const useFieldToDatePicker = ({
  name,
  disabled,
  ...props
}: DatePickerProps): MuiDatePickerProps => {
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

export const DatePicker: React.ComponentType<DatePickerProps> = ({
  children,
  ...props
}: DatePickerProps) => (
  <MuiDatePicker {...useFieldToDatePicker(props)}>{children}</MuiDatePicker>
);

DatePicker.displayName = 'FormikMaterialUIDatePicker';
