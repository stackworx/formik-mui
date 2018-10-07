import React from 'react';
import { FieldProps, getIn } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

type Props = {
  label: string;
  disabled?: boolean;
} & FieldProps;

export default ({
  label,
  field,
  form: { touched, errors, isSubmitting, setFieldValue },
  disabled = false,
}: Props) => {
  const error = getIn(touched, field.name) && getIn(errors, field.name);

  return (
    <div>
      <FormControl>
        {label && (
          <InputLabel shrink error={!!error}>
            {label}
          </InputLabel>
        )}
        <Input
          error={!!error}
          inputProps={{
            type: 'file',
            disabled: disabled || isSubmitting,
            name: field.name,
            onChange: (event: any) => {
              const file = event.currentTarget.files[0];
              setFieldValue(field.name, file);
            },
          }}
        />
        {error && <FormHelperText error>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};
