import * as React from 'react';
import MuiRadioGroup, {
  RadioGroupProps as MuiRadioGroupProps,
} from '@material-ui/core/RadioGroup';
import { FieldProps } from 'formik';

export interface RadioGroupProps
  extends Omit<MuiRadioGroupProps, 'name' | 'onChange' | 'value'>,
    FieldProps {}

export const fieldToRadioGroup = ({
  field,
  // Exclude Form
  form,
  ...props
}: RadioGroupProps): MuiRadioGroupProps => ({
  ...props,
  ...field,
});

export const RadioGroup: React.ComponentType<RadioGroupProps> = (
  props: RadioGroupProps
) => {
  return <MuiRadioGroup {...fieldToRadioGroup(props)} />;
};

RadioGroup.displayName = 'FormikMaterialUIRadioGroup';
