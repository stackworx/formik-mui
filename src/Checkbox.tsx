// @ts-ignore
import * as React from 'react';
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@material-ui/core/Checkbox';
import { FieldProps } from 'formik';

const Checkbox: React.ComponentType<FieldProps & MuiCheckboxProps> = ({
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