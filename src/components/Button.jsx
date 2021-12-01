import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({onC, btnNm}) {
  return (
    <Stack spacing={2} direction="row">
      <Button   sx={{
    width: 100,
    height: 50,
    marginTop:'10px'
  }} onClick={onC} variant="contained">{btnNm}</Button>
    </Stack>
  );
}
