import * as React from 'react';
import { SelectProps as MuiSelectProps } from '@material-ui/core/Select';
import { FieldProps } from 'formik';
export interface SelectProps extends FieldProps, MuiSelectProps {
}
declare const Select: React.ComponentType<SelectProps>;
export default Select;
