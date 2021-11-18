import * as React from 'react';
import { FieldProps, getIn } from 'formik';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { InputProps } from '@mui/material/Input';

export interface FileUploadProps extends FieldProps {
  label: string;
  accept: string;
  disabled?: boolean;
  uploadButtonText?: string;
  noFileChosenText?: string;
  InputProps?: Omit<InputProps, 'name' | 'type' | 'label'>;
}

export const FileUpload = ({
  field,
  form: { isSubmitting, touched, errors, setFieldValue },
  label,
  accept,
  disabled = false,
  uploadButtonText = 'Choose file',
  noFileChosenText = 'No file chosen',
  InputProps: inputProps,
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
    <>
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
          readOnly: true,
          disabled: disabled || isSubmitting,
          endAdornment: (
            <InputAdornment position="end">
              <Button
                color="secondary"
                disableElevation
                onClick={handleUploadClick}
              >
                {uploadButtonText}
              </Button>
            </InputAdornment>
          ),
          ...inputProps,
        }}
        {...props}
      />
    </>
  );
};
