import { fetchCurrentUser } from '../redux/auth/auth-operations';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'Pages/Layout/Layout';
import PrivateRoute from 'HOCs/PrivateRoute';
import PublicRoute from 'HOCs/PublicRoute';
import { selectIsFetchingCurrentUser } from '../redux/auth/auth-selectors';

import { ChakraProvider} from '@chakra-ui/react';
import { GlobalStyle } from '../components/Utils/GlobalStyle';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('Pages/LoginPage/LoginPage'));
const UsersPage = lazy(() => import('Pages/UsersPage/UsersPage'));
const RegisterPage = lazy(() => import('Pages/RegisterPage/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      {isFetchingCurrentUser ? (
        <p>Wait a little bit</p>
      ) : (
        <Suspense>
          <ChakraProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route
                  index
                  element={
                    <PublicRoute>
                      <HomePage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="users"
                  element={
                    <PrivateRoute>
                      <UsersPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="register"
                  element={
                    <PublicRoute restricted>
                      <RegisterPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="login"
                  element={
                    <PublicRoute restricted>
                      <LoginPage />
                    </PublicRoute>
                  }
                />
              </Route>
            </Routes>
          </ChakraProvider>
        </Suspense>
      )}

      <GlobalStyle />
    </>
  );
};
