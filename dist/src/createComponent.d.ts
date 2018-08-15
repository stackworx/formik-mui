import { ComponentType, ReactNode } from 'react';
import { FieldProps } from 'formik';
export default function createComponent<P>(MaterialUIComponent: ComponentType<P>, mapProps: (props: Readonly<{
    children?: ReactNode;
}> & Readonly<P> & FieldProps) => P): ComponentType<P & FieldProps>;
