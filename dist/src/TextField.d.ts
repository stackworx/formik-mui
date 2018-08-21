import * as React from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';
import { FieldProps } from 'formik';
export interface TextFieldProps extends FieldProps, MuiTextFieldProps {
}
declare const TextField: React.ComponentType<TextFieldProps>;
export default TextField;
