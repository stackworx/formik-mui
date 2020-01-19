import * as React from 'react';
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@material-ui/core/Checkbox';
import { useField, useFormikContext } from 'formik';

export interface CheckboxProps
  extends Omit<
    MuiCheckboxProps,
    | 'name'
    | 'form'
    | 'checked'
    | 'defaultChecked'
    | 'onChange'
    | 'onBlur'
    | 'value'
  > {
  name: string;
}

export const useFieldToCheckbox = ({
  disabled,
  name,
  ...props
}: CheckboxProps): MuiCheckboxProps => {
  const { isSubmitting } = useFormikContext();
  const [field] = useField(name);

  return {
    disabled: disabled ?? isSubmitting,
    ...props,
    ...field,
    // TODO handle indeterminate
    checked: field.value,
    value: field.value ? 'checked' : '',
  };
};

export const Checkbox: React.ComponentType<CheckboxProps> = (
  props: CheckboxProps
) => {
  return <MuiCheckbox {...useFieldToCheckbox(props)} />;
};

Checkbox.displayName = 'FormikMaterialUICheckbox';
