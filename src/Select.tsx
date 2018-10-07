import * as React from 'react';
import MuiSelect, {
  SelectProps as MuiSelectProps,
} from '@material-ui/core/Select';
import { FieldProps } from 'formik';

export interface SelectProps extends FieldProps, MuiSelectProps {}

const Select: React.ComponentType<SelectProps> = ({
  field,
  form: { isSubmitting },
  disabled = false,
  ...props
}) => <MuiSelect disabled={isSubmitting || disabled} {...props} {...field} />;

Select.displayName = 'FormikMaterialUISelect';

export default Select;
