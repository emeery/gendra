import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const ItemSearcher = () => {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        m: 2
      }}
    >
      <TextField fullWidth label="Busca un episodio" id="fullWidth" />
    </Box>
  );
};
export default ItemSearcher;