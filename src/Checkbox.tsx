// @ts-ignore
import * as React from 'react';
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FieldProps } from 'formik';
import { Omit } from './types';

export interface CheckboxProps
  extends FieldProps,
    Omit<MuiCheckboxProps, 'form'> {
  label: string;
}

const Checkbox: React.ComponentType<CheckboxProps> = ({
  field,
  form: { isSubmitting },
  disabled = false,
  label,
  ...props
}) => (
  <FormControlLabel
    control={
      <MuiCheckbox
        disabled={isSubmitting || disabled}
        value={field.name}
        checked={field.value}
        {...props}
        {...field}
      />
    }
    label={label}
  />
);

Checkbox.displayName = 'FormikMaterialUICheckbox';

export default Checkbox;
