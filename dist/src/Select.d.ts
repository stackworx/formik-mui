import * as React from 'react';
import { SelectProps as MuiSelectProps } from '@material-ui/core/Select';
import { FieldProps } from 'formik';
import { Omit } from './types';
export interface SelectProps extends FieldProps, Omit<MuiSelectProps, 'value'> {
}
export declare const fieldToSelect: ({ field, form: { isSubmitting }, disabled, ...props }: SelectProps) => MuiSelectProps;
export declare const Select: React.ComponentType<SelectProps>;
