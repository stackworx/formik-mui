/* @flow */
import Switch from '@material-ui/core/Switch';

import createComponent from './createComponent';

export default createComponent(
  Switch,
  ({ field, form: { isSubmitting }, ...props }) => ({
    disabled: isSubmitting,
    ...props,
    ...field,
    // TODO: is this the correct way?
    value: field.value ? 'checked' : '',
  })
);
