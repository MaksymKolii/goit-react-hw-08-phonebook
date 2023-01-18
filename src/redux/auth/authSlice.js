import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {register, login, logout} from './auth-operations'

const initialState = {

    user:{name:'', email:''},

        token: null,
        isLoading:false,
        error:null,
}

const authSlice = createSlice({

    name:'auth',
    initialState,
    extraReducers: builder =>
    builder
    .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.token = null;
        state.user = {name:'', email:''};
        })

    .addMatcher(isAnyOf(register.pending,login.pending, logout.pending),state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(register.fulfilled, login.fulfilled), (state, {payload:{user, token}}) => {
        state.isLoading = false;
        state.error = null;
        state.token = token;
        state.user = user;
      })
      .addMatcher(isAnyOf(register.rejected, login.rejected, logout.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })      
})