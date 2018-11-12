import * as React from 'react';
import MuiSwitch, {
  SwitchProps as MuiSwitchProps,
} from '@material-ui/core/Switch';
import { FieldProps } from 'formik';
import { Omit } from './types';

export interface SwitchProps
  extends FieldProps,
    Omit<
      MuiSwitchProps,
      'form' | 'name' | 'onChange' | 'value' | 'defaultChecked'
    > {}

export const fieldToSwitch = ({
  field,
  form: { isSubmitting },
  disabled = false,
  ...props
}: SwitchProps): MuiSwitchProps => {
  return {
    disabled: isSubmitting || disabled,
    ...props,
    ...field,
    value: field.name,
    checked: field.value,
  };
};

export const Switch: React.ComponentType<SwitchProps> = (
  props: SwitchProps
) => <MuiSwitch {...fieldToSwitch(props)} />;

Switch.displayName = 'FormikMaterialUISwitch';
