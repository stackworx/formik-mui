import * as React from 'react';
import MuiRadioGroup, {
  RadioGroupProps as MuiRadioGroupProps,
} from '@material-ui/core/RadioGroup';
import { useField } from 'formik';

export interface RadioGroupProps
  extends Omit<MuiRadioGroupProps, 'name' | 'onChange' | 'value'> {
  name: string;
}

export const useFieldToRadioGroup = ({
  name,
  ...props
}: RadioGroupProps): MuiRadioGroupProps => {
  const [field] = useField(name);
  return {
    ...props,
    ...field,
  };
};

export const RadioGroup: React.ComponentType<RadioGroupProps> = (
  props: RadioGroupProps
) => {
  return <MuiRadioGroup {...useFieldToRadioGroup(props)} />;
};

RadioGroup.displayName = 'FormikMaterialUIRadioGroup';
