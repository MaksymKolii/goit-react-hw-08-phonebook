import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
// import Link from '@mui/material/Link';
//color:'rgb(76, 181, 245)'
// sx={{color:'rgb(76, 181, 245)'}}

export const AuthNavigation = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }} >
      <ListItem >
        <Link to="register">Register</Link>
      </ListItem>
      <ListItem>
        <Link to="login">Login</Link>
      </ListItem>
    </Box>
  );
};
