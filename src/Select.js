/* @flow */
import Select from '@material-ui/core/Select';

import createComponent from './createComponent';

export default createComponent(Select, ({ field, ...props }) => ({
  ...props,
  ...field,
}));
