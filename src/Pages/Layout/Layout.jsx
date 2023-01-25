import {
  AppBar,
  Toolbar,
  Typography,
  // IconButton,
  Container,
} from '@mui/material';
// import CallIcon from '@mui/icons-material/Call';

import { useSelector } from 'react-redux';
import { Navigation } from '../../components/Navigation/Navigation';
import { AuthNavigation } from '../../components/AuthNavigation/AuthNavigation';
import { UserAuthMenu } from '../../components/UserAuthMenu/UserAuthMenu';
import { selectToken } from '../../redux/auth/auth-selectors';
import { Outlet } from 'react-router-dom';

// import { createTheme } from '@mui/material/styles';


export const Layout = () => {
  const token = useSelector(selectToken);

  return (
    <>
      {/* sx={{ display: 'flex', justifyContent: 'center' }} */}
      {/* sx={{bgcolor:theme.palette.neutral.main}} */}
   
        {' '}
        <header>
          <AppBar position="static" sx={{bgcolor:' rgb(48, 64, 64)',  color:'rgb(76, 181, 245)'}}>
            <Toolbar>
              <Typography variant="h4" component="span" sx={{ flexGrow: 1 }}>
                Phonebook
              </Typography>
              <Navigation />
              {token ? <UserAuthMenu /> : <AuthNavigation />}
              {/* <IconButton color="inherit">
                <CallIcon />
              </IconButton> */}
            </Toolbar>
          </AppBar>
        </header>
        <Container sx={{pb:'8rem', minHeight:'100%'}}>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
};


