import * as React from 'react';
import MuiRadioGroup, {
  RadioGroupProps as MuiRadioGroupProps,
} from '@material-ui/core/RadioGroup';
import {
  FieldInputProps,
  FieldMetaProps,
  FieldHelperProps,
  useField,
} from 'formik';

export interface RadioGroupProps
  extends Omit<MuiRadioGroupProps, 'name' | 'value'> {
  name: string;
}

export function useFieldToRadioGroup<Val = unknown>(
  { name, ...props }: RadioGroupProps,
  customize?: (
    props: [FieldInputProps<Val>, FieldMetaProps<Val>, FieldHelperProps<Val>]
  ) => Partial<Omit<RadioGroupProps, 'name'>>
): MuiRadioGroupProps {
  const fieldProps = useField(name);

  const [field] = fieldProps;

  return {
    ...props,
    ...field,
    ...customize?.(fieldProps),
  };
}

export function RadioGroup(props: RadioGroupProps) {
  return <MuiRadioGroup {...useFieldToRadioGroup(props)} />;
}

RadioGroup.displayName = 'FormikMaterialUIRadioGroup';
