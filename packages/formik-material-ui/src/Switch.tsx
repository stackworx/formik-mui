import * as React from 'react';
import MuiSwitch, {
  SwitchProps as MuiSwitchProps,
} from '@material-ui/core/Switch';
import { useField, useFormikContext } from 'formik';

export interface SwitchProps
  extends Omit<
    MuiSwitchProps,
    | 'checked'
    | 'name'
    | 'onChange'
    | 'onBlur'
    | 'value'
    | 'defaultChecked'
    | 'inputRef'
  > {
  name: string;
}

export const useFieldToSwitch = ({
  disabled,
  name,
  ...props
}: SwitchProps): MuiSwitchProps => {
  const { isSubmitting } = useFormikContext();
  const [field] = useField(name);

  return {
    disabled: disabled ?? isSubmitting,
    ...props,
    ...field,
    value: field.name,
    checked: field.value,
  };
};

export const Switch: React.ComponentType<SwitchProps> = (
  props: SwitchProps
) => <MuiSwitch {...useFieldToSwitch(props)} />;

Switch.displayName = 'FormikMaterialUISwitch';
