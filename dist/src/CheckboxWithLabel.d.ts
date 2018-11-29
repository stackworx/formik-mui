import * as React from 'react';
import { FormControlLabelProps as MuiFormControlLabelProps } from '@material-ui/core/FormControlLabel';
import { CheckboxProps } from './Checkbox';
import { Omit } from './types';
export interface CheckboxWithLabelProps extends CheckboxProps {
    Label: Omit<MuiFormControlLabelProps, 'checked' | 'name' | 'onChange' | 'value' | 'inputRef'>;
}
export declare const CheckboxWithLabel: React.ComponentType<CheckboxWithLabelProps>;
