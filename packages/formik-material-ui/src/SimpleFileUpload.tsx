import * as React from 'react';
import { useField, useFormikContext } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import InputLabel, { InputLabelProps } from '@material-ui/core/InputLabel';
import Input, { InputProps } from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

export interface SimpleFileUploadProps {
  name: string;
  label: string;
  disabled?: boolean;
  InputProps?: Omit<InputProps, 'name' | 'type' | 'onChange'>;
  InputLabelProps?: InputLabelProps;
}

export const SimpleFileUpload = ({
  name,
  label,
  disabled = false,
  InputProps: inputProps,
  InputLabelProps: inputLabelProps,
}: SimpleFileUploadProps) => {
  const { isSubmitting } = useFormikContext();
  const [field, meta, helpers] = useField(name);
  const error = meta.touched && meta.error;

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
              const file = event.currentTarget.files[0];
              helpers.setValue(file);
            },
          }}
          {...inputProps}
        />
        {error && <FormHelperText error>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};
