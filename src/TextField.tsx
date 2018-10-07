import * as React from 'react';
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core/TextField';
import { FieldProps, getIn } from 'formik';
import { Omit } from './types';

export interface TextFieldProps
  extends FieldProps,
    Omit<MuiTextFieldProps, 'error' | 'name' | 'onChange' | 'value'> {}

export const fieldToTextField = ({
  field,
  form,
  disabled = false,
  ...props
}: TextFieldProps) => {
  const { name } = field;
  const { touched, errors, isSubmitting } = form;

  return {
    ...props,
    ...field,
    error: getIn(touched, name) && !!getIn(errors, name),
    helperText:
      getIn(touched, name) && getIn(errors, name)
        ? getIn(errors, name)
        : props.helperText,
    disabled: isSubmitting || disabled,
  };
};

const TextField: React.ComponentType<TextFieldProps> = props => (
  <MuiTextField {...fieldToTextField(props)} />
);

TextField.displayName = 'FormikMaterialUITextField';

export default TextField;
