import * as React from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';
import { FieldProps } from 'formik';
import { Omit } from './types';
export interface TextFieldProps extends FieldProps, Omit<MuiTextFieldProps, 'error' | 'name' | 'onChange' | 'value'> {
}
export declare const fieldToTextField: ({ field, form, disabled, ...props }: TextFieldProps) => MuiTextFieldProps;
export declare const TextField: React.ComponentType<TextFieldProps>;
