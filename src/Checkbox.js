/* @flow */
import Checkbox from '@material-ui/core/Checkbox';

import createComponent from './createComponent';

export default createComponent(
  Checkbox,
  ({ field, form: { isSubmitting }, ...props }) => ({
    disabled: isSubmitting,
    ...props,
    ...field,
    // TODO: is this the correct way?
    value: field.value ? 'checked' : '',
  })
);
