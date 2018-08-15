/// <reference types="react" />
import { FieldProps } from 'formik';
declare type Props = {
    label: string;
    disabled?: boolean;
} & FieldProps;
declare const _default: ({ label, field, form: { touched, errors, isSubmitting, setFieldValue }, disabled, }: Props) => JSX.Element;
export default _default;
