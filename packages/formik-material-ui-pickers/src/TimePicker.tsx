import * as React from 'react';
import {
  TimePicker as MuiTimePicker,
  TimePickerProps as MuiTimePickerProps,
} from '@material-ui/pickers';
import {
  FieldInputProps,
  FieldMetaProps,
  FieldHelperProps,
  useField,
  useFormikContext,
} from 'formik';

export interface TimePickerProps
  extends Omit<MuiTimePickerProps, 'name' | 'value' | 'error' | 'onChange'> {
  name: string;
  onChange?: MuiTimePickerProps['onChange'];
}

export function useFieldToTimePicker<Val = unknown>(
  { disabled, name, ...props }: TimePickerProps,
  customize?: (
    props: [FieldInputProps<Val>, FieldMetaProps<Val>, FieldHelperProps<Val>]
  ) => Partial<Omit<TimePickerProps, 'name'>>
): MuiTimePickerProps {
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

export function TimePicker({ children, ...props }: TimePickerProps) {
  return (
    <MuiTimePicker {...useFieldToTimePicker(props)}>{children}</MuiTimePicker>
  );
}

TimePicker.displayName = 'FormikMaterialUITimePicker';
