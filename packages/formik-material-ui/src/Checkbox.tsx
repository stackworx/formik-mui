import * as React from 'react';
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@material-ui/core/Checkbox';
import {
  FieldInputProps,
  FieldMetaProps,
  FieldHelperProps,
  useField,
  useFormikContext,
} from 'formik';

export interface CheckboxProps
  extends Omit<
    MuiCheckboxProps,
    'name' | 'value' | 'error' | 'form' | 'checked' | 'defaultChecked'
  > {
  name: string;
}

export function useFieldToCheckbox<Val = unknown>(
  { disabled, name, ...props }: CheckboxProps,
  customize?: (
    props: [FieldInputProps<Val>, FieldMetaProps<Val>, FieldHelperProps<Val>]
  ) => Partial<Omit<CheckboxProps, 'name'>>
): MuiCheckboxProps {
  const { isSubmitting } = useFormikContext();
  const fieldProps = useField(name);

  const [field] = fieldProps;

  return {
    disabled: disabled ?? isSubmitting,
    ...props,
    ...field,
    // TODO handle indeterminate
    checked: field.value,
    value: field.value ? 'checked' : '',
    ...customize?.(fieldProps),
  };
}

export function Checkbox(props: CheckboxProps) {
  return <MuiCheckbox {...useFieldToCheckbox(props)} />;
}

Checkbox.displayName = 'FormikMaterialUICheckbox';
