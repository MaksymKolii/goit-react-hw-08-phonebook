import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL =
  'https://connections-api.herokuapp.com';

  const token = {
    set(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset(){
        axios.defaults.headers.common.Authorization = ''
    }
}

export const register = createAsyncThunk(
    'auth/register',
    async (userdata, { rejectWithValue }) => {
      try {
        const { data } = await axios.post('/users/signup', userdata);
        token.set(data.token)
        console.log(data);
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  export const login = createAsyncThunk(
    'auth/login',
    async (userdata, { rejectWithValue }) => {
      try {
        const { data } = await axios.post('/users/login', userdata);
        token.set(data.token)
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
      try {
        await axios.post('/users/logout');
        token.unset()
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_,{ rejectWithValue, getState }) => {
        const tokenLS = getState().auth.token;
        if(!tokenLS){
            return rejectWithValue('Token not exist, or expired ')
        }
        token.set(tokenLS)
      try {
        const { data } = await axios('/users/current');
        
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );