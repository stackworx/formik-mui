import * as React from 'react';
import MuiInputBase, {
  InputBaseProps as MuiInputBaseProps,
} from '@material-ui/core/InputBase';
import { useField, useFormikContext } from 'formik';

export interface InputBaseProps
  extends Omit<MuiInputBaseProps, 'name' | 'onChange' | 'onBlur' | 'value'> {
  name: string;
}

export const useFieldToInputBase = ({
  disabled,
  name,
  ...props
}: InputBaseProps): MuiInputBaseProps => {
  const { isSubmitting } = useFormikContext();
  const [field] = useField(name);

  return {
    disabled: disabled ?? isSubmitting,
    ...props,
    ...field,
  };
};

export const InputBase: React.ComponentType<InputBaseProps> = (
  props: InputBaseProps
) => <MuiInputBase {...useFieldToInputBase(props)} />;

InputBase.displayName = 'FormikMaterialUIInputBase';
