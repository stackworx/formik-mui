import * as React from 'react';
import MuiRadioGroup, {
  RadioGroupProps as MuiRadioGroupProps,
} from '@material-ui/core/RadioGroup';
import { FieldProps } from 'formik';

export interface RadioGroupProps
  extends FieldProps,
    Omit<MuiRadioGroupProps, 'name' | 'value'> {}

export function fieldToRadioGroup({
  field,
  // Exclude Form
  form,
  ...props
}: RadioGroupProps): MuiRadioGroupProps {
  return {
    ...props,
    ...field,
  };
}

export function RadioGroup(props: RadioGroupProps) {
  return <MuiRadioGroup {...fieldToRadioGroup(props)} />;
}

RadioGroup.displayName = 'FormikMaterialUIRadioGroup';
