import * as React from 'react';
import MuiInputBase, {
  InputBaseProps as MuiInputBaseProps,
} from '@material-ui/core/InputBase';
import {
  FieldInputProps,
  FieldMetaProps,
  FieldHelperProps,
  useField,
  useFormikContext,
} from 'formik';

export interface InputBaseProps
  extends Omit<MuiInputBaseProps, 'name' | 'value' | 'error'> {
  name: string;
}

export function useFieldToInputBase<Val = unknown>(
  { disabled, name, ...props }: InputBaseProps,
  customize?: (
    props: [FieldInputProps<Val>, FieldMetaProps<Val>, FieldHelperProps<Val>]
  ) => Partial<Omit<InputBaseProps, 'name'>>
): MuiInputBaseProps {
  const { isSubmitting } = useFormikContext();
  const fieldProps = useField(name);

  const [field] = fieldProps;

  return {
    disabled: disabled ?? isSubmitting,
    ...props,
    ...field,
    ...customize?.(fieldProps),
  };
}

export function InputBase(props: InputBaseProps) {
  return <MuiInputBase {...useFieldToInputBase(props)} />;
}

InputBase.displayName = 'FormikMaterialUIInputBase';
