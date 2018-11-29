import * as React from 'react';
import { CheckboxProps as MuiCheckboxProps } from '@material-ui/core/Checkbox';
import { FieldProps } from 'formik';
import { Omit } from './types';
export interface CheckboxProps extends FieldProps, Omit<MuiCheckboxProps, 'form' | 'checked' | 'defaultChecked' | 'name' | 'onChange' | 'value'> {
}
export declare const fieldToCheckbox: ({ field, form: { isSubmitting }, disabled, ...props }: CheckboxProps) => MuiCheckboxProps;
export declare const Checkbox: React.ComponentType<CheckboxProps>;
