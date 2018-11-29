import * as React from 'react';
import { RadioGroupProps as MuiRadioGroupProps } from '@material-ui/core/RadioGroup';
import { FieldProps } from 'formik';
import { Omit } from './types';
export interface RadioGroupProps extends Omit<MuiRadioGroupProps, 'name' | 'onChange' | 'value'>, FieldProps {
}
export declare const fieldToRadioGroup: ({ field, form, ...props }: RadioGroupProps) => MuiRadioGroupProps;
export declare const RadioGroup: React.ComponentType<RadioGroupProps>;
