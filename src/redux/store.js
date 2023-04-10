import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './Contacts/contactsSlice';
import { filterReduser } from './Contacts/filterSlice';

//--------------------------------------------------
export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
  },
});
