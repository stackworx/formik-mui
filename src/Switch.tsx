// @ts-ignore
import * as React from 'react';
import Switch from '@material-ui/core/Switch';

import createComponent from './createComponent';

export default createComponent(
  Switch,
  ({ field, form: { isSubmitting }, disabled = false, ...props }) => ({
    disabled: isSubmitting || disabled,
    ...props,
    ...field,
    // TODO: is this the correct way?
    value: field.value ? 'checked' : '',
  })
);
