// @ts-ignore
import * as React from 'react';
import MuiRadioGroup, {
  RadioGroupProps as MuiRadioGroupProps,
} from '@material-ui/core/RadioGroup';
import { FieldProps } from 'formik';

export interface RadioGroupProps extends MuiRadioGroupProps, FieldProps {}

const RadioGroup: React.ComponentType<RadioGroupProps> = ({
  field,
  ...props
}) => {
  return <MuiRadioGroup {...props} {...field} />;
};

RadioGroup.displayName = 'FormikMaterialUIRadioGroup';

export default RadioGroup;
