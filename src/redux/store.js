import { contactsReducer } from './contacts/contactsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filterSlice';
import {authReducer } from './auth/authSlice'
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';



export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
