import * as React from 'react';
import {
  KeyboardDatePicker as MuiKeyboardDatePicker,
  KeyboardDatePickerProps as MuiKeyboardDatePickerProps,
} from '@material-ui/pickers';
import {
  FieldInputProps,
  FieldMetaProps,
  FieldHelperProps,
  useField,
  useFormikContext,
} from 'formik';

export interface KeyboardDatePickerProps
  extends Omit<
    MuiKeyboardDatePickerProps,
    'name' | 'value' | 'error' | 'onChange'
  > {
  name: string;
  onChange?: MuiKeyboardDatePickerProps['onChange'];
}

export function useFieldToKeyboardDatePicker<Val = unknown>(
  { disabled, name, ...props }: KeyboardDatePickerProps,
  customize?: (
    props: [FieldInputProps<Val>, FieldMetaProps<Val>, FieldHelperProps<Val>]
  ) => Partial<Omit<KeyboardDatePickerProps, 'name'>>
): MuiKeyboardDatePickerProps {
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

export function KeyboardDatePicker({
  children,
  ...props
}: KeyboardDatePickerProps) {
  return (
    <MuiKeyboardDatePicker {...useFieldToKeyboardDatePicker(props)}>
      {children}
    </MuiKeyboardDatePicker>
  );
}

KeyboardDatePicker.displayName = 'FormikMaterialUIKeyboardDatePicker';
