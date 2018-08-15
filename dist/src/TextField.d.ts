import * as React from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';
export interface TextFieldProps extends MuiTextFieldProps {
    disabled?: boolean;
}
declare const _default: React.ComponentType<TextFieldProps & import("formik/dist/Field").FieldProps<any>>;
export default _default;
