import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

function replacer(_: string, value: unknown) {
  // Filtering out properties
  if (value instanceof File) {
    return {
      size: value.size,
      name: value.name,
      type: value.type,
    };
  }
  return value;
}

interface Props {
  values: unknown;
}

const FormValues = ({ values }: Props) => (
  <Box sx={{ p: '5px', mt: 2.5 }}>
    <Typography variant="h4" component="h5">
      State
    </Typography>
    <Typography component="pre">
      {JSON.stringify(values, replacer, 2)}
    </Typography>
  </Box>
);

export default FormValues;
