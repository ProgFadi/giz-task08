import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts({msg}) {
  return (
    <Stack sx={{ width: '294%', marginLeft:'9px'}}>
      <Alert variant="filled" severity="error">
        {msg}
      </Alert>
    </Stack>
  );
}
