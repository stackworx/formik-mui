// @ts-ignore
import * as React from 'react';
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@material-ui/core/Checkbox';
import { FieldProps } from 'formik';
import { Omit } from './types';

export interface CheckboxProps extends FieldProps, Omit<MuiCheckboxProps, 'form'> {}

const Checkbox: React.ComponentType<CheckboxProps> = ({
  field,
  form: { isSubmitting },
  disabled = false,
  ...props
}) => (
  <MuiCheckbox
    disabled={isSubmitting || disabled}
    {...props}
    {...field}
    // TODO: is this the correct way?
    value={field.value ? 'checked' : ''}
  />
);

Checkbox.displayName = 'FormikMaterialUICheckbox';

export default Checkbox;
