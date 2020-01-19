import * as React from 'react';
import MuiInputBase, {
  InputBaseProps as MuiInputBaseProps,
} from '@material-ui/core/InputBase';
import { FieldProps } from 'formik';

export interface InputBaseProps
  extends FieldProps,
    Omit<MuiInputBaseProps, 'name' | 'onChange' | 'value'> {}

export const fieldToInputBase = ({
  field,
  form: { isSubmitting },
  disabled,
  ...props
}: InputBaseProps): MuiInputBaseProps => {
  return {
    disabled: disabled ?? isSubmitting,
    ...props,
    ...field,
  };
};

export const InputBase: React.ComponentType<InputBaseProps> = (
  props: InputBaseProps
) => <MuiInputBase {...fieldToInputBase(props)} />;

InputBase.displayName = 'FormikMaterialUIInputBase';
