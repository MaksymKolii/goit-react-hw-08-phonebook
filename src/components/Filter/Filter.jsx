import { React } from 'react';
// import { Label, Input } from './Filter.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import { setFilter } from '../../redux/filter/filterSlice';
import { useDispatch } from 'react-redux';
// import { Input,Stack } from '@chakra-ui/react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: 'rgb(76, 181, 245)',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = ev => {
    const check = ev.target.value;

    if (check.trim() === '') {
      Notify.warning(`You didn't put anything !`);
    }
    dispatch(setFilter(check.trim().toLowerCase()));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Find contact by name"
          variant="standard"
          onChange={onChange}
        >
          <Input color={theme.primary}></Input>
        </TextField>
        {/* <TextField
        id="outlined"
        label={'Find contact by name'}
        margin="normal"
        // fullWidth
        // value={filter}
        onChange={onChange}
        sx={{mb:'1rem', bgcolor:' rgb(130, 152, 166)', color:'rgb(76, 181, 245)'}}>
    
      </TextField> */}
      </Box>
    </ThemeProvider>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  // value: PropTypes.string,
};

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function BasicTextFields() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="standard-basic" label="Standard" variant="standard" />
//     </Box>
//   );
// }
