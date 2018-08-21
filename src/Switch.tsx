// @ts-ignore
import * as React from 'react';
import MuiSwitch, {
  SwitchProps as MuiSwitchProps,
} from '@material-ui/core/Switch';
import { FieldProps } from 'formik';
import { Omit } from './types';

export interface SwitchProps extends FieldProps, Omit<MuiSwitchProps, 'form'> {}

const Switch: React.ComponentType<SwitchProps> = ({
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

Switch.displayName = 'FormikMaterialUISwitch';

export default Switch;
