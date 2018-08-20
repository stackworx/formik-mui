// @ts-ignore
import * as React from 'react';
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core/TextField';
import { FieldProps } from 'formik';

export interface TextFieldProps extends FieldProps, MuiTextFieldProps {}

const TextField: React.SFC<TextFieldProps> = ({
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
      error={touched[name] && !!errors[name]}
      helperText={
        touched[name] && errors[name] ? errors[name] : props.helperText
      }
      disabled={isSubmitting || disabled}
    />
  );
};

TextField.displayName = 'FormikMaterialUITextField';

export default TextField;
