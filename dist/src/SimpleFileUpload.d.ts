/// <reference types="react" />
import { FieldProps } from 'formik';
export interface SimpleFileUploadProps extends FieldProps {
    label: string;
    disabled?: boolean;
}
export declare const SimpleFileUpload: ({ label, field, form: { touched, errors, isSubmitting, setFieldValue }, disabled, }: SimpleFileUploadProps) => JSX.Element;
