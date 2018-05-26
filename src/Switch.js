/* @flow */
import Switch from '@material-ui/core/Switch';

import createComponent from './createComponent';

export default createComponent(Switch, ({ field, ...props }) => ({
  ...props,
  ...field,
}));
