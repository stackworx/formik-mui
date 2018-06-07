/* @flow */
import FormControlLabel from '@material-ui/core/FormControlLabel';

import createComponent from './createComponent';

export default createComponent(
  FormControlLabel,
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
