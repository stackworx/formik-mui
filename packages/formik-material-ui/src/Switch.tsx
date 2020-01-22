import * as React from 'react';
import MuiSwitch, {
  SwitchProps as MuiSwitchProps,
} from '@material-ui/core/Switch';
import {
  FieldInputProps,
  FieldMetaProps,
  FieldHelperProps,
  useField,
  useFormikContext,
} from 'formik';

export interface SwitchProps
  extends Omit<
    MuiSwitchProps,
    'checked' | 'name' | 'value' | 'defaultChecked'
  > {
  name: string;
}

export function useFieldToSwitch<Val = unknown>(
  { disabled, name, ...props }: SwitchProps,
  customize?: (
    props: [FieldInputProps<Val>, FieldMetaProps<Val>, FieldHelperProps<Val>]
  ) => Partial<Omit<SwitchProps, 'name'>>
): MuiSwitchProps {
  const { isSubmitting } = useFormikContext();
  const fieldProps = useField(name);

  const [field] = fieldProps;

  return {
    disabled: disabled ?? isSubmitting,
    ...props,
    ...field,
    value: field.name,
    checked: field.value,
    ...customize?.(fieldProps),
  };
}

export function Switch(props: SwitchProps) {
  return <MuiSwitch {...useFieldToSwitch(props)} />;
}

Switch.displayName = 'FormikMaterialUISwitch';
