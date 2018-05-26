/* @flow */
import Checkbox from '@material-ui/core/Checkbox';

import createComponent from './createComponent';

export default createComponent(Checkbox, ({ field, ...props }) => ({
  ...props,
  ...field,
}));
