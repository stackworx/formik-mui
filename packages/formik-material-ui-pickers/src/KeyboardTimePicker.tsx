import * as React from 'react';
import {
  KeyboardTimePicker as MuiKeyboardTimePicker,
  KeyboardTimePickerProps as MuiKeyboardTimePickerProps,
} from '@material-ui/pickers';
import {
  FieldInputProps,
  FieldMetaProps,
  FieldHelperProps,
  useField,
  useFormikContext,
} from 'formik';

export interface KeyboardTimePickerProps
  extends Omit<
    MuiKeyboardTimePickerProps,
    'name' | 'value' | 'error' | 'onChange'
  > {
  name: string;
  onChange?: MuiKeyboardTimePickerProps['onChange'];
}

export function useFieldToKeyboardTimePicker<Val = unknown>(
  { disabled, name, ...props }: KeyboardTimePickerProps,
  customize?: (
    props: [FieldInputProps<Val>, FieldMetaProps<Val>, FieldHelperProps<Val>]
  ) => Partial<Omit<KeyboardTimePickerProps, 'name'>>
): MuiKeyboardTimePickerProps {
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

export function KeyboardTimePicker({
  children,
  ...props
}: KeyboardTimePickerProps) {
  return (
    <MuiKeyboardTimePicker {...useFieldToKeyboardTimePicker(props)}>
      {children}
    </MuiKeyboardTimePicker>
  );
}

KeyboardTimePicker.displayName = 'FormikMaterialUIKeyboardTimePicker';
