import * as React from 'react';
import {
  KeyboardDateTimePicker as MuiKeyboardDateTimePicker,
  KeyboardDateTimePickerProps as MuiKeyboardDateTimePickerProps,
} from '@material-ui/pickers';
import {
  FieldInputProps,
  FieldMetaProps,
  FieldHelperProps,
  useField,
  useFormikContext,
} from 'formik';

export interface KeyboardDateTimePickerProps
  extends Omit<
    MuiKeyboardDateTimePickerProps,
    'name' | 'value' | 'error' | 'onChange'
  > {
  name: string;
  onChange?: MuiKeyboardDateTimePickerProps['onChange'];
}

export function useFieldToKeyboardDateTimePicker<Val = unknown>(
  { disabled, name, ...props }: KeyboardDateTimePickerProps,
  customize?: (
    props: [FieldInputProps<Val>, FieldMetaProps<Val>, FieldHelperProps<Val>]
  ) => Partial<Omit<KeyboardDateTimePickerProps, 'name'>>
): MuiKeyboardDateTimePickerProps {
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

export function KeyboardDateTimePicker({
  children,
  ...props
}: KeyboardDateTimePickerProps) {
  return (
    <MuiKeyboardDateTimePicker {...useFieldToKeyboardDateTimePicker(props)}>
      {children}
    </MuiKeyboardDateTimePicker>
  );
}

KeyboardDateTimePicker.displayName = 'FormikMaterialUIKeyboardDateTimePicker';
