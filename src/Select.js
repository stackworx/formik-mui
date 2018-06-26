/* @flow */
import Select from '@material-ui/core/Select';

import createComponent from './createComponent';

export default createComponent(
  Select,
  ({ field, form: { isSubmitting }, disabled = false, ...props }) => ({
    disabled: isSubmitting || disabled,
    ...props,
    ...field,
  })
);
