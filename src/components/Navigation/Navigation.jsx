// import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/auth-selectors.js';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import { Link } from './Navigation.styled.js';

// sx={{color:'rgb(76, 181, 245)'}}
export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <nav>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ListItem >
          <Link to="/">Home</Link>
        </ListItem>
        {token && (
          <ListItem>
            <Link to="users">Users</Link>
          </ListItem>
        )}
      </Box>
    </nav>
  );
};
