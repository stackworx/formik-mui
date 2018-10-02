// @ts-ignore
import * as React from 'react';
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core/TextField';
import { FieldProps } from 'formik';
import get from 'lodash.get';

export interface TextFieldProps extends FieldProps, MuiTextFieldProps {}

const TextField: React.ComponentType<TextFieldProps> = ({
  field,
  form,
  disabled = false,
  ...props
}) => {
  const { name } = field;
  const { touched, errors, isSubmitting } = form;
  return (
    <MuiTextField
      {...props}
      {...field}
      error={get(touched, name) && !!get(errors, name)}
      helperText={
        get(touched, name) && get(errors, name) ? get(errors, name) : props.helperText
      }
      disabled={isSubmitting || disabled}
    />
  );
};

TextField.displayName = 'FormikMaterialUITextField';

export default TextField;
