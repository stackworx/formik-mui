import * as React from 'react';
import { SwitchProps as MuiSwitchProps } from '@material-ui/core/Switch';
import { FieldProps } from 'formik';
import { Omit } from './types';
export interface SwitchProps extends FieldProps, Omit<MuiSwitchProps, 'form' | 'name' | 'onChange' | 'value' | 'defaultChecked'> {
}
export declare const fieldToSwitch: ({ field, form: { isSubmitting }, disabled, ...props }: SwitchProps) => MuiSwitchProps;
export declare const Switch: React.ComponentType<SwitchProps>;
