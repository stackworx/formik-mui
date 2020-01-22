import * as React from 'react';
import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from '@material-ui/pickers';
import {
  FieldInputProps,
  FieldMetaProps,
  FieldHelperProps,
  useField,
  useFormikContext,
} from 'formik';

export interface DatePickerProps
  extends Omit<MuiDatePickerProps, 'name' | 'value' | 'error' | 'onChange'> {
  name: string;
  onChange?: MuiDatePickerProps['onChange'];
}

export function useFieldToDatePicker<Val = unknown>(
  { name, disabled, ...props }: DatePickerProps,
  customize?: (
    props: [FieldInputProps<Val>, FieldMetaProps<Val>, FieldHelperProps<Val>]
  ) => Partial<Omit<DatePickerProps, 'name'>>
): MuiDatePickerProps {
  const { isSubmitting } = useFormikContext();
  const fieldProps = useField(name);
  const [field, meta, helpers] = fieldProps;

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
    ...customize?.(fieldProps),
  };
}

export function DatePicker({ children, ...props }: DatePickerProps) {
  return (
    <MuiDatePicker {...useFieldToDatePicker(props)}>{children}</MuiDatePicker>
  );
}

DatePicker.displayName = 'FormikMaterialUIDatePicker';
