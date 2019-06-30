import * as React from 'react';
import MuiInputBase, {
  InputBaseProps as MuiInputBaseProps,
} from '@material-ui/core/InputBase';
import { FieldProps } from 'formik';
import { Omit } from './types';

export interface InputBaseProps
  extends FieldProps,
    Omit<MuiInputBaseProps, 'name' | 'onChange' | 'value'> {}

export const fieldToInputBase = ({
  field,
  form: { isSubmitting },
  disabled = false,
  ...props
}: InputBaseProps): MuiInputBaseProps => {
  return {
    disabled: isSubmitting || disabled,
    ...props,
    ...field,
    value: field.name,
  };
};

export const InputBase: React.ComponentType<InputBaseProps> = (
  props: InputBaseProps
) => <MuiInputBase {...fieldToInputBase(props)} />;

InputBase.displayName = 'FormikMaterialUIInputBase';
