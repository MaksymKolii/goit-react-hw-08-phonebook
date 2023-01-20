import { fetchCurrentUser } from '../redux/auth/auth-operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'Pages/HomePage/HomePage';
import { RegisterPage } from 'Pages/RegisterPage/RegisterPage';
import { LoginPage } from 'Pages/LoginPage/LoginPage';
import { UsersPage } from 'Pages/UsersPage/UsersPage';
import { Layout } from 'Pages/Layout/Layout';
import { PrivateRoute } from 'HOCs/PrivateRoute';
import { PublicRoute } from 'HOCs/PublicRoute';

import { GlobalStyle } from '../components/Utils/GlobalStyle';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
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
              <PublicRoute restricted >
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted >
                <LoginPage />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
