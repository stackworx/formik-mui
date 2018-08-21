import * as React from 'react';
import { CheckboxProps as MuiCheckboxProps } from '@material-ui/core/Checkbox';
import { FieldProps } from 'formik';
import { Omit } from './types';
export interface CheckboxProps extends FieldProps, Omit<MuiCheckboxProps, 'form'> {
}
declare const Checkbox: React.ComponentType<CheckboxProps>;
export default Checkbox;
