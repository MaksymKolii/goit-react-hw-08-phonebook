import { contactsReducer } from './contacts/contactsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filterSlice';
import {authReducer } from './auth/authSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist:['token']
}


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    // auth: authReducer,
    auth: persistReducer(authPersistConfig, authReducer)
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store)