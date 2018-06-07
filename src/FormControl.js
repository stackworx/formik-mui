/* @flow */
import FormControl from '@material-ui/core/FormControl';

import createComponent from './createComponent';

export default createComponent(
  FormControl,
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
