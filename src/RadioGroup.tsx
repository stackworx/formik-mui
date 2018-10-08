import * as React from 'react';
import MuiRadioGroup, {
  RadioGroupProps as MuiRadioGroupProps,
} from '@material-ui/core/RadioGroup';
import { FieldProps } from 'formik';

import { Omit } from './types';

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

const RadioGroup: React.ComponentType<RadioGroupProps> = (
  props: RadioGroupProps
) => {
  return <MuiRadioGroup {...fieldToRadioGroup(props)} />;
};

RadioGroup.displayName = 'FormikMaterialUIRadioGroup';

export default RadioGroup;
