// @ts-ignore
import * as React from 'react';
import MuiSwitch, {
  SwitchProps as MuiSwitchProps,
} from '@material-ui/core/Switch';
import { FieldProps } from 'formik';

const Switch: React.ComponentType<MuiSwitchProps & FieldProps> = ({
  field,
  form: { isSubmitting },
  disabled = false,
  ...props
}) => (
  <MuiSwitch
    disabled={isSubmitting || disabled}
    {...props}
    {...field}
    // TODO: is this the correct way?
    value={field.value ? 'checked' : ''}
  />
);

export default Switch;
