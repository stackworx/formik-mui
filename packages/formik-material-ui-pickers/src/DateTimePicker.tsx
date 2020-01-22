import * as React from 'react';
import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps as MuiDateTimePickerProps,
} from '@material-ui/pickers';
import {
  FieldInputProps,
  FieldMetaProps,
  FieldHelperProps,
  useField,
  useFormikContext,
} from 'formik';

export interface DateTimePickerProps
  extends Omit<
    MuiDateTimePickerProps,
    'name' | 'value' | 'error' | 'onChange'
  > {
  name: string;
  onChange?: MuiDateTimePickerProps['onChange'];
}

export function useFieldToDateTimePicker<Val = unknown>(
  { disabled, name, ...props }: DateTimePickerProps,
  customize?: (
    props: [FieldInputProps<Val>, FieldMetaProps<Val>, FieldHelperProps<Val>]
  ) => Partial<Omit<DateTimePickerProps, 'name'>>
): MuiDateTimePickerProps {
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

export function DateTimePicker({ children, ...props }: DateTimePickerProps) {
  return (
    <MuiDateTimePicker {...useFieldToDateTimePicker(props)}>
      {children}
    </MuiDateTimePicker>
  );
}

DateTimePicker.displayName = 'FormikMaterialUIDateTimePicker';
