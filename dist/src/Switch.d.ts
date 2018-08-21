import * as React from 'react';
import { SwitchProps as MuiSwitchProps } from '@material-ui/core/Switch';
import { FieldProps } from 'formik';
import { Omit } from './types';
export interface SwitchProps extends FieldProps, Omit<MuiSwitchProps, 'form'> {
}
declare const Switch: React.ComponentType<SwitchProps>;
export default Switch;
