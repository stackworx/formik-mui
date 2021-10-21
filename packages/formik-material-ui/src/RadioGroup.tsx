import * as React from 'react';
import MuiRadioGroup, {
  RadioGroupProps as MuiRadioGroupProps,
} from '@mui/material/RadioGroup';
import { FieldProps } from 'formik';

export interface RadioGroupProps
  extends FieldProps,
    Omit<MuiRadioGroupProps, 'name' | 'value'> {}

export function fieldToRadioGroup({
  field: { onBlur: fieldOnBlur, ...field },
  form,
  onBlur,
  ...props
}: RadioGroupProps): MuiRadioGroupProps {
  return {
    onBlur:
      onBlur ??
      function (e) {
        fieldOnBlur(e ?? field.name);
      },
    ...field,
    ...props,
  };
}

export function RadioGroup(props: RadioGroupProps) {
  return <MuiRadioGroup {...fieldToRadioGroup(props)} />;
}

RadioGroup.displayName = 'FormikMaterialUIRadioGroup';
