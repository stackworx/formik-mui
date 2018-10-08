import * as React from 'react';
import MuiSelect, {
  SelectProps as MuiSelectProps,
} from '@material-ui/core/Select';
import { FieldProps } from 'formik';
import { Omit } from './types';

export interface SelectProps
  extends FieldProps,
    Omit<MuiSelectProps, 'value'> {}

export const fieldToSelect = ({
  field,
  form: { isSubmitting },
  disabled = false,
  ...props
}: SelectProps): MuiSelectProps => {
  return {
    disabled: isSubmitting || disabled,
    ...props,
    ...field,
  };
};

const Select: React.ComponentType<SelectProps> = (props: SelectProps) => (
  <MuiSelect {...fieldToSelect(props)} />
);

Select.displayName = 'FormikMaterialUISelect';

export default Select;
