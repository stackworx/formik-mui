/* @flow */
import TextField from '@material-ui/core/TextField';

import createComponent from './createComponent';

export default createComponent(
  TextField,
  ({ field, form: { touched, errors, isSubmitting }, disabled, ...props }) => {
    const { name } = field;

    return {
      ...props,
      ...field,
      error: touched[name] && !!errors[name],
      helperText: errors[name] ? errors[name] : props.helperText,
      disabled: isSubmitting || disabled,
    };
  }
);
