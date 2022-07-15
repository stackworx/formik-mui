import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import { grey } from '@mui/material/colors';
import ReactJson from 'react-json-view'

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

const FormValues = ({ values }: Props) => {

  const  getJSONWithFileReplaced = () => {
    return JSON.parse(JSON.stringify(values, replacer, 2))
  }

  return (
  <Box p={1} mt={4}>
    <Typography variant="h4" component="h5">
      State
    </Typography>
    <Box bgcolor={grey.A100} px={1} py={2}>
      <ReactJson src={getJSONWithFileReplaced()} />
    </Box>
  </Box>
)};

export default FormValues;
