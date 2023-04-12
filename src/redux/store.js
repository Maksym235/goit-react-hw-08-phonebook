import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './Contacts/contactsSlice';
import { filterReduser } from './Contacts/filterSlice';
// import { authReduser } from './Auth/authSlice';
import { authPersistReduser } from './Auth/authSlice';
//-----------------PESIST--------------------------
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

//-------------------------------------------------

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
    auth: authPersistReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
