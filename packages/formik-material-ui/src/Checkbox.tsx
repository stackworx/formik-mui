import * as React from 'react';
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@material-ui/core/Checkbox';
import { FieldProps } from 'formik';
import invariant from 'tiny-warning';

export interface CheckboxProps
  extends FieldProps,
    Omit<
      MuiCheckboxProps,
      | 'name'
      | 'value'
      | 'error'
      | 'form'
      | 'checked'
      | 'defaultChecked'
      // Excluded for conflict with Field type
      | 'type'
    > {
  type?: string;
}

export function fieldToCheckbox({
  disabled,
  field,
  form: { isSubmitting },
  type,
  ...props
}: CheckboxProps): MuiCheckboxProps {
  const indeterminate = !Array.isArray(field.value) && field.value == null;

  if (process.env.NODE_ENV !== 'production') {
    invariant(
      type === 'checkbox',
      `property type=checkbox is missing from field ${field.name}, this can caused unexpected behaviour`
    );
  }

  return {
    disabled: disabled ?? isSubmitting,
    indeterminate,
    ...props,
    ...field,
  };
}

export function Checkbox(props: CheckboxProps) {
  return <MuiCheckbox {...fieldToCheckbox(props)} />;
}

Checkbox.displayName = 'FormikMaterialUICheckbox';
