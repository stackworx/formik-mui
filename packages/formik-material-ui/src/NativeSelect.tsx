import * as React from 'react';
import MuiNativeSelect, {
  NativeSelectProps as MuiNativeSelectProps,
} from '@material-ui/core/NativeSelect';
import { FieldProps } from 'formik';

export interface NativeSelectProps
  extends FieldProps,
    Omit<MuiNativeSelectProps, 'name' | 'value'> {}

export function fieldToSelect({
  disabled,
  field: { onBlur: fieldOnBlur, ...field },
  form: { isSubmitting },
  onBlur,
  ...props
}: NativeSelectProps): MuiNativeSelectProps {
  return {
    disabled: disabled ?? isSubmitting,
    onBlur:
      onBlur ??
      function (e) {
        fieldOnBlur(e ?? field.name);
      },
    ...field,
    ...props,
  };
}

export function Select(props: NativeSelectProps) {
  return <MuiNativeSelect {...fieldToSelect(props)} />;
}

Select.displayName = 'FormikMaterialUISelect';
