import * as React from 'react';
import { ErrorMessage, FieldProps, getIn } from 'formik';
import Button, { ButtonProps } from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { InputProps } from '@mui/material/Input';

export interface FileUploadProps extends FieldProps {
  label: string;
  accept: string;
  disabled?: boolean;
  fullWidth?: boolean;
  margin?: 'dense' | 'normal' | 'none';
  uploadButtonText?: string;
  noFileChosenText?: string;
  InputProps?: Omit<
    InputProps,
    'name' | 'type' | 'label' | 'readOnly' | 'endAdornment' | 'onClick'
  >;
  ButtonProps?: Omit<ButtonProps, 'onClick'>;
}

export const FileUpload = ({
  field,
  form: { isSubmitting, touched, errors, setFieldValue },
  label,
  accept,
  disabled = false,
  fullWidth,
  margin = 'none',
  uploadButtonText = 'Choose file',
  noFileChosenText = 'No file chosen',
  InputProps: inputProps,
  ButtonProps: buttonProps,
  ...props
}: FileUploadProps) => {
  const hiddenFileInputRef = React.useRef<HTMLInputElement>(null);

  const error = getIn(touched, field.name) && getIn(errors, field.name);

  const handleUploadClick = () => {
    hiddenFileInputRef.current?.click();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileUpload = (event: React.ChangeEvent<any>) => {
    if (inputProps?.onChange) {
      inputProps.onChange(event);
    } else {
      const file = event.currentTarget.files[0];
      setFieldValue(field.name, file);
    }
  };

  return (
    <FormControl fullWidth={fullWidth} margin={margin}>
      <input
        ref={hiddenFileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileUpload}
        type="file"
        accept={accept}
      />
      <TextField
        error={!!error}
        type="text"
        value={field.value ? field.value.name : noFileChosenText}
        label={label}
        InputProps={{
          disabled: disabled || isSubmitting,
          ...inputProps,
          onClick: handleUploadClick,
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <Button
                disabled={disabled || isSubmitting}
                color="secondary"
                disableElevation
                {...buttonProps}
                onClick={handleUploadClick}
              >
                {uploadButtonText}
              </Button>
            </InputAdornment>
          ),
        }}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        render={(error) => <FormHelperText error>{error}</FormHelperText>}
      />
    </FormControl>
  );
};
