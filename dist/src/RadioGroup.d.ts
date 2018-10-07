import * as React from 'react';
import { RadioGroupProps as MuiRadioGroupProps } from '@material-ui/core/RadioGroup';
import { FieldProps } from 'formik';
export interface RadioGroupProps extends MuiRadioGroupProps, FieldProps {
}
declare const RadioGroup: React.ComponentType<RadioGroupProps>;
export default RadioGroup;
