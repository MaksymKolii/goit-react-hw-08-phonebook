
import { Link } from 'components/Navigation/Navigation.styled';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
// import Link from '@mui/material/Link';


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
