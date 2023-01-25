import { React } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import { setFilter } from '../../redux/filter/filterSlice';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
// import Input from '@mui/material/Input';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: 'rgb(76, 181, 245)',
      darker: '#053e85',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },

    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
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
          '& > :not(style)': { m: 1, width: '25ch'  },
          color:'rgb(76, 181, 245)'
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
        </TextField>
      </Box>
    </ThemeProvider>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  // value: PropTypes.string,
};

