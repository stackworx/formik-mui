import * as React from 'react';
import { FieldProps, getIn } from 'formik';
import FormControl, { FormControlProps } from '@mui/material/FormControl';
import InputLabel, { InputLabelProps } from '@mui/material/InputLabel';
import Input, { InputProps } from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';

export interface SimpleFileUploadProps extends FieldProps {
  label: string;
  accept: string;
  disabled?: boolean;
  InputProps?: Omit<InputProps, 'name' | 'type' | 'label'>;
  InputLabelProps?: InputLabelProps;
  FormControlProps?: FormControlProps;
}

export const SimpleFileUpload = ({
  field,
  form: { isSubmitting, touched, errors, setFieldValue },
  label,
  accept,
  disabled = false,
  InputProps: inputProps,
  InputLabelProps: inputLabelProps,
  FormControlProps: formControlProps,
}: SimpleFileUploadProps) => {
  const error = getIn(touched, field.name) && getIn(errors, field.name);

  return (
    <FormControl {...formControlProps}>
      {label && (
        <InputLabel shrink error={!!error} {...inputLabelProps}>
          {label}
        </InputLabel>
      )}
      <Input
        error={!!error}
        inputProps={{
          type: 'file',
          accept,
          disabled: disabled || isSubmitting,
          name: field.name,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange: (event: React.ChangeEvent<any>) => {
            if (inputProps?.onChange) {
              inputProps.onChange(event);
            } else {
              const file = event.currentTarget.files[0];
              setFieldValue(field.name, file);
            }
          },
        }}
        {...inputProps}
      />
      {error && <FormHelperText error>{error}</FormHelperText>}
    </FormControl>
  );
};
