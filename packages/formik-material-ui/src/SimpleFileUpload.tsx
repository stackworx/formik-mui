import * as React from 'react';
import { FieldProps, getIn } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import InputLabel, { InputLabelProps } from '@material-ui/core/InputLabel';
import Input, { InputProps } from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

export interface SimpleFileUploadProps extends FieldProps {
  label: string;
  disabled?: boolean;
  InputProps?: Omit<InputProps, 'name' | 'type' | 'label'>;
  InputLabelProps?: InputLabelProps;
}

export const SimpleFileUpload = ({
  field,
  form: { isSubmitting, touched, errors, setFieldValue },
  label,
  disabled = false,
  InputProps: inputProps,
  InputLabelProps: inputLabelProps,
}: SimpleFileUploadProps) => {
  const error = getIn(touched, field.name) && getIn(errors, field.name);

  return (
    <div>
      <FormControl>
        {label && (
          <InputLabel shrink error={!!error} {...inputLabelProps}>
            {label}
          </InputLabel>
        )}
        <Input
          error={!!error}
          inputProps={{
            type: 'file',
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
    </div>
  );
};
