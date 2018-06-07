/* @flow */
import Select from '@material-ui/core/Select';

import createComponent from './createComponent';

export default createComponent(
  Select,
  ({ field, form: { isSubmitting }, ...props }) => ({
    disabled: isSubmitting,
    ...props,
    ...field,
  })
);
