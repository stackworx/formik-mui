import * as React from 'react';
import MuiSwitch, {
  SwitchProps as MuiSwitchProps,
} from '@material-ui/core/Switch';
import { FieldProps } from 'formik';
import invariant from 'tiny-warning';

export interface SwitchProps
  extends FieldProps,
    Omit<
      MuiSwitchProps,
      | 'checked'
      | 'name'
      | 'value'
      | 'defaultChecked'
      | 'form'
      // Excluded for conflict with Field type
      | 'type'
    > {
  type?: string;
}

export function fieldToSwitch({
  disabled,
  field,
  form: { isSubmitting },
  type,
  ...props
}: SwitchProps): MuiSwitchProps {
  if (process.env.NODE_ENV !== 'production') {
    invariant(
      type === 'checkbox',
      `property type=checkbox is missing from field ${field.name}, this can caused unexpected behaviour`
    );
  }

  return {
    disabled: disabled ?? isSubmitting,
    ...props,
    ...field,
  };
}

export function Switch(props: SwitchProps) {
  return <MuiSwitch {...fieldToSwitch(props)} />;
}

Switch.displayName = 'FormikMaterialUISwitch';
