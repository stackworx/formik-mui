/* @flow */
import TextField from 'material-ui/TextField';

import createComponent from './createComponent';

export default createComponent(
  TextField,
  ({ field, form: { touched, errors }, ...props }) => {
    const { name } = field;

    return {
      ...props,
      ...field,
      error: touched[name] && !!errors[name],
      helperText: errors[name],
    };
  }
);
