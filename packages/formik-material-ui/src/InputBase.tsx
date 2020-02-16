import * as React from 'react';
import MuiInputBase, {
  InputBaseProps as MuiInputBaseProps,
} from '@material-ui/core/InputBase';
import { FieldProps } from 'formik';

export interface InputBaseProps
  extends FieldProps,
    Omit<MuiInputBaseProps, 'name' | 'value' | 'error'> {}

export function fieldToInputBase({
  disabled,
  field,
  form: { isSubmitting },
  ...props
}: InputBaseProps): MuiInputBaseProps {
  return {
    disabled: disabled ?? isSubmitting,
    ...props,
    ...field,
  };
}

export function InputBase(props: InputBaseProps) {
  return <MuiInputBase {...fieldToInputBase(props)} />;
}

InputBase.displayName = 'FormikMaterialUIInputBase';
