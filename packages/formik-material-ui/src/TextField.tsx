import * as React from 'react';
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core/TextField';
import {
  FieldInputProps,
  FieldMetaProps,
  FieldHelperProps,
  useField,
  useFormikContext,
} from 'formik';

export type TextFieldProps = Omit<
  MuiTextFieldProps,
  'name' | 'value' | 'error'
> & {
  name: string;
};

export function useFieldToTextField<Val = unknown>(
  { disabled, name, ...props }: TextFieldProps,
  customize?: (
    props: [FieldInputProps<Val>, FieldMetaProps<Val>, FieldHelperProps<Val>]
  ) => Partial<Omit<TextFieldProps, 'name'>>
): MuiTextFieldProps {
  const { isSubmitting } = useFormikContext();
  const fieldProps = useField(name);

  const [field, meta] = fieldProps;

  const fieldError = meta.error;
  const showError = meta.touched && !!fieldError;

  return {
    ...props,
    ...field,
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: disabled ?? isSubmitting,
    variant: props.variant ?? 'standard',
    ...customize?.(fieldProps),
  };
}

export function TextField({ children, ...props }: TextFieldProps) {
  return (
    <MuiTextField {...useFieldToTextField(props)}>{children}</MuiTextField>
  );
}

TextField.displayName = 'FormikMaterialUITextField';
