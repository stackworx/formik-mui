/* @flow */
import Checkbox from '@material-ui/core/Checkbox';

import createComponent from './createComponent';

export default createComponent(
  Checkbox,
  ({ field, form: { isSubmitting }, disabled = false, ...props }) => ({
    disabled: isSubmitting || disabled,
    ...props,
    ...field,
    // TODO: is this the correct way?
    value: field.value ? 'checked' : '',
  })
);
