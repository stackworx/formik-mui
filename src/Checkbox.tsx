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
}: CheckboxProps) => {
  return {
    disabled: isSubmitting || disabled,
    ...props,
    ...field,
    // TODO handle indeterminate
    checked: field.value ? 'checked' : '',
    value: field.value ? 'checked' : '',
  };
};

const Checkbox: React.ComponentType<CheckboxProps> = props => (
  <MuiCheckbox {...fieldToCheckbox(props)} />
);

Checkbox.displayName = 'FormikMaterialUICheckbox';

export default Checkbox;
