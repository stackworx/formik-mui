/* @flow */
import TextField from '@material-ui/core/TextField';

import createComponent from './createComponent';

export default createComponent(
  TextField,
  ({ field, form: { touched, errors, isSubmitting }, ...props }) => {
    const { name } = field;

    return {
      ...props,
      ...field,
      error: touched[name] && !!errors[name],
      disabled: isSubmitting,
    };
  }
);
