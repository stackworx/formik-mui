// @ts-ignore
import * as React from 'react';
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@material-ui/core/Checkbox';
import FormControlLabel, {
  FormControlLabelProps as MuiFormControlLabelProps,
} from '@material-ui/core/FormControlLabel';
import { FieldProps } from 'formik';
import { Omit } from './types';

export interface CheckboxProps
  extends FieldProps,
    Omit<MuiCheckboxProps, 'form'> {
  LabelProps: MuiFormControlLabelProps;
}

const Checkbox: React.ComponentType<CheckboxProps> = ({
  field,
  form: { isSubmitting },
  disabled = false,
  LabelProps,
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
    {...LabelProps}
  />
);

Checkbox.displayName = 'FormikMaterialUICheckbox';

export default Checkbox;
