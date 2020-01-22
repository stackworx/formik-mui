import * as React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel, {
  FormControlLabelProps as MuiFormControlLabelProps,
} from '@material-ui/core/FormControlLabel';
import { FieldInputProps, FieldMetaProps, FieldHelperProps } from 'formik';

import { CheckboxProps, useFieldToCheckbox } from './Checkbox';

/**
 * Exclude props that are passed directly to the control
 * https://github.com/mui-org/material-ui/blob/v3.1.1/packages/material-ui/src/FormControlLabel/FormControlLabel.js#L71
 */
export interface CheckboxWithLabelProps extends CheckboxProps {
  Label: Omit<
    MuiFormControlLabelProps,
    'checked' | 'name' | 'onChange' | 'value' | 'control'
  >;
}

export function CheckboxWithLabel<Val = unknown>({
  Label,
  customize,
  ...props
}: CheckboxWithLabelProps & {
  customize?: (
    props: [FieldInputProps<Val>, FieldMetaProps<Val>, FieldHelperProps<Val>]
  ) => Partial<Omit<CheckboxProps, 'name'>>;
}) {
  return (
    <FormControlLabel
      control={<MuiCheckbox {...useFieldToCheckbox(props, customize)} />}
      {...Label}
    />
  );
}

CheckboxWithLabel.displayName = 'FormikMaterialUICheckboxWithLabel';
