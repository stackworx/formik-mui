import * as React from 'react';
import MuiToggleButtonGroup, {
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@material-ui/lab/ToggleButtonGroup';
// import ToggleButton from '@material-ui/lab/ToggleButton';
import { FieldProps } from 'formik';
import invariant from 'tiny-warning';

export interface ToggleButtonGroupProps
  extends FieldProps,
    Omit<MuiToggleButtonGroupProps, 'name' | 'value' | 'error'> {
  type?: string;
}

export function fieldToToggleButtonGroup({
  field,
  type,
  onChange,
  onBlur,
  form,
  ...props
}: ToggleButtonGroupProps): MuiToggleButtonGroupProps {
  if (process.env.NODE_ENV !== 'production') {
    invariant(
      type === 'checkbox',
      `property type=checkbox is missing from field ${field.name}, this can caused unexpected behaviour`
    );

    if (!props.exclusive) {
      invariant(
        Array.isArray(field.value),
        `value for ${field.name} is not an array, this can caused unexpected behaviour`
      );
    }
  }

  const { onChange: _onChange, onBlur: _onBlur, ...fieldSubselection } = field;

  return {
    onBlur: onBlur
      ? onBlur
      : (event: React.FocusEvent<unknown>) => {
          field.onBlur(event ?? field.name);
        },
    onChange: onChange
      ? onChange
      : (_event: React.MouseEvent<HTMLElement>, newValue: unknown) => {
          form.setFieldValue(field.name, newValue);
        },
    ...fieldSubselection,
    ...props,
  };
}

export function ToggleButtonGroup(props: ToggleButtonGroupProps) {
  return <MuiToggleButtonGroup {...fieldToToggleButtonGroup(props)} />;
}

ToggleButtonGroup.displayName = 'FormikMaterialUIToggleButtonGroup';
