import * as React from 'react';
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@material-ui/core/Checkbox';
import { FieldProps } from 'formik';
import { Omit } from './types';

export interface CheckboxProps
  extends FieldProps,
    Omit<
      MuiCheckboxProps,
      'form' | 'checked' | 'defaultChecked' | 'name' | 'onChange' | 'value'
    > {}

export const fieldToCheckbox = ({
  field,
  form: { isSubmitting },
  disabled = false,
  ...props
}: CheckboxProps): MuiCheckboxProps => {
  return {
    disabled: isSubmitting || disabled,
    ...props,
    ...field,
    // TODO handle indeterminate
    checked: field.value,
    value: field.value ? 'checked' : '',
  };
};

export const Checkbox: React.ComponentType<CheckboxProps> = (
  props: CheckboxProps
) => <MuiCheckbox {...fieldToCheckbox(props)} />;

Checkbox.displayName = 'FormikMaterialUICheckbox';
