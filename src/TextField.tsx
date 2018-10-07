// @ts-ignore
import * as React from 'react';
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core/TextField';
import { FieldProps, getIn } from 'formik';

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
      error={getIn(touched, name) && !!getIn(errors, name)}
      helperText={
        getIn(touched, name) && getIn(errors, name)
          ? getIn(errors, name)
          : props.helperText
      }
      disabled={isSubmitting || disabled}
    />
  );
};

TextField.displayName = 'FormikMaterialUITextField';

export default TextField;
