import { contactsReducer } from './contacts/contactsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filterSlice';
import {authReducer } from './auth/authSlice'
// import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
